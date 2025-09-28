'use client'
import { useRouter } from "next/navigation";
import SignInForm from "../components/SignInForm";
import { useState } from "react";

export default function SignInPage() {
  const [signPage, setSignPage] = useState(true)
  const router = useRouter()
  const handleSignIn = (data: { email: string; password: string; rememberMe: boolean }) => {
    console.log("Sign in data:", data);
    // Send `data` to your backend API here
    alert("Sign in submitted!");
    router.push('/sign-up/connect-wallet')
  };

  const handleCreateAccount = () => setSignPage((prev)=> !prev)

  return (
    <SignInForm
      onSubmit={handleSignIn}
      signPage ={signPage}
      onCreateAccount={handleCreateAccount}
    />
  );
}
