import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
     
      console.log("token-------", token);
      
      //  only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/", "/dashboard"] }
