/*import NextAuth, { Account, Profile, User as NextAuthUser, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AdapterUser } from "next-auth/adapters";
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
//import { Profile } from "@/types/profile";

const clientId = process.env.GCLOUD_CLIENT_ID as string;
const clientSecret = process.env.GCLOUD_CLIENT_SECRET as string;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret
    })
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      try {
        // Aqui você pode modificar o objeto session antes de retorná-lo, se necessário
        const sessionUser = await User.findOne({
          email: session.user?.email
        });

        if(typeof session.user == "object"){
          session.user.id = sessionUser._id.toString();
        }
        
        return session;
      } catch (error) {
        console.error(error);
        return session;
      }
    },
    async signIn({ user, account, profile }: { user: NextAuthUser | AdapterUser; account: Account | null; profile?: Profile; }) {
      // serverless - lambda function - opens up only when it´s called
      // every time that opens up spinned up server and connect with database
      try {
        await connectToDB();
  
        const userExists = await User.findOne({
          email: profile?.email
        });
  
        if (!userExists) {
          await User.create({
            email: profile?.email,
            name: profile?.name?.toLowerCase()
          });
        }
  
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
  }
});*/