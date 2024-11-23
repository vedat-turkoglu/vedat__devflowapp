import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="text-center text-3xl font-black text-violet-700">
        This is Home Pagey :)
      </h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      ></form>
    </>
  );
};

export default Home;
