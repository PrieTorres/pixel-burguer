const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const CONSTANT = require("./CONSTANT.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
const db = admin.firestore();

/**
 * HTTP Cloud Function para adicionar um rank ao Firestore.
 *
 * @param {Object} req - Objeto de requisição HTTP.
 * @param {string} req.method - Método HTTP da requisição.
 * @param {Object} req.body - Corpo da requisição contendo os dados do rank.
 * @param {string} req.body.name - Nome do rank a ser adicionado.
 * @param {number} req.body.points - Pontos do rank a ser adicionado.
 * @param {Object} res - Objeto de resposta HTTP.
 *
 * @return {void} A função retorna uma resposta HTTP.
 *
 * @description Esta função processa uma requisição POST para adicionar um novo
 * documento à coleção 'rank' no Firestore. Se o método HTTP não for POST,
 * retorna um erro 405. Se os campos obrigatórios 'name' e 'points' não estiverem
 * presentes, retorna um erro 400. Caso a inserção seja bem-sucedida, retorna
 * um status 201 com o ID do documento criado. Em caso de erro, retorna um status 500
 * com a mensagem de erro.
 */
async function saveRank(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const {
    name,
    points,
    spaceshipid,
    level,
    time,
    startedTime,
    isMobile
  } = req.body;
  if (!name || !points) {
    return res.status(400).send("Missing required fields (name and points)");
  }

  try {
    const docRef = await db.collection("rank").add({
      name: name,
      points: points,
      insertedDate: admin.firestore.FieldValue.serverTimestamp(),
      spaceshipid,
      level,
      time,
      startedTime,
      isMobile
    });

    res.status(201).send({ id: docRef.id });
  } catch (error) {
    console.error("Error adding document: ", error);
    res.status(500).send({ error: error.message });
  }
}

/**
 * HTTP Cloud Function para recuperar todos os ranks do Firestore.
 *
 * @param {Object} req - Objeto de requisição HTTP.
 * @param {Object} res - Objeto de resposta HTTP.
 *
 * @returns {void} A função retorna uma resposta HTTP com os ranks ou um erro.
 *
 * @description Esta função processa uma requisição para recuperar todos os documentos
 * da coleção 'rank' no Firestore. Se bem-sucedida, retorna um status 200 com os ranks
 * como um array de objetos JSON. Em caso de erro, retorna um status 500 com uma mensagem
 * de erro.
 */
async function getRank(req, res) {
  try {
    const snapshot = await db.collection("rank").limit(CONSTANT.LIMIT_RANK).orderBy("points").get();
    const ranks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(ranks);
  } catch (error) {
    console.error("Error fetching ranks:", error);
    res.status(500).send("Error fetching ranks");
  }
}

app.get("/api/rank", (req, res) => {
  getRank(req, res);
});

app.post("/api/addRank", (req, res) => {
  saveRank(req, res);
});

exports.app = functions.https.onRequest(app);
exports.limitCollectionByPoints = functions.firestore
  .document('rank/{rankId}')
  .onCreate(async (snap, context) => {
    const maxDocuments = CONSTANT.LIMIT_RANK;

    const collectionRef = db.collection('rank');
    const snapshot = await collectionRef.orderBy('points', 'asc').get();

    if (snapshot.size > maxDocuments) {
      const excessDocs = snapshot.size - maxDocuments;

      const batch = db.batch();
      snapshot.docs.slice(0, excessDocs).forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      console.log(`${excessDocs} lower ranks have been deleted`);
    }
  });