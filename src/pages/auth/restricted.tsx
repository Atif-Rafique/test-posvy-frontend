import { useSession } from "next-auth/react";
import AccessDenied from "../../components/access-denied/access-denied";
import Layout from "../../components/layout/layout";
import { useState, useEffect } from 'react';

export default function Component() {
  const { data: session, status } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }


  return (
    <Layout>
      <h1>Some protected content</h1>
    </Layout>
  );
}
