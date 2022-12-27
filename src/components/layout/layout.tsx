import type { ReactNode } from "react";
import AuthHeader from "../auth/auth-header/auth-header";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthHeader />
      <main>{children}</main>
    </>
  )
}
