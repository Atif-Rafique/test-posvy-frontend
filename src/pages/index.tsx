import {  useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession({ required: true });
  const router = useRouter();

  if (status === "authenticated") {
    return router.push("./dashboard");
  }

  if(status === "loading") return null

  return router.push("./auth/sign-in");
}
