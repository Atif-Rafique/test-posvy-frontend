import { signOut } from "next-auth/react";
import Link from "next/link";
const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <button
        type="submit"
        className="cursor-pointer"
        onClick={async () =>
          await signOut({
            callbackUrl: "http://localhost:3000/auth/sign-in",
          })
        }
      >
        Sign Out
      </button>
    </>
  );
};

export default Dashboard;
