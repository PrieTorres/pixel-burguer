import axios from 'axios';

export const addRank = async (rank) => {
  if (!rank?.name || !rank?.points)
    throw new Error("missing required fields (points and name)");

  try {
    const response = await axios.post(`https://us-central1-${process.env.REACT_APP_PROJECT_ID}.cloudfunctions.net/app/api/addRank`, {
      name: rank.name,
      points: rank.points,
      spaceshipid: rank.spaceshipid,
      level: rank.level,
      time: rank.time,
      startedTime: rank.startedTime,
      isMobile: rank.isMobile
    });

    console.log("Document written with ID: ", response.data.id);
    return response.data;
  } catch (error) {
    console.error("Error adding document: ", error);
    return { error: error?.message, code: error?.code };
  }
}

export const getRanks = async () => {
  try {
    const response = await axios.get(`https://us-central1-${process.env.REACT_APP_PROJECT_ID}.cloudfunctions.net/app/api/rank`);
    return response.data;
  } catch (error) {
    console.error("Unable to get ranking data ", error);
    return [];
  }
};