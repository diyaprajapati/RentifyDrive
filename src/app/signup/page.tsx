"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { redirect } from 'next/navigation'
import { Label } from "@/components/ui/label"
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"


export function SignupForm() {

  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const [loginData, setLoginData] = useState(null);
  const [user, setUser] = useState({});

  const handelLogin = async (googleData: any) => {
    try {
      const res = await fetch("http://localhost:3001/api/google-login", {
        method: "POST",
        body: JSON.stringify({ token: googleData, }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Failed to log in with Google");
      }
      const data = await res.json();
      setLoginData(data);
      localStorage.setItem("loginData", JSON.stringify(data));
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  useEffect(() => {
    const loginData = localStorage.getItem("loginData");
    if (loginData) {
      setLoginData(JSON.parse(loginData));
    }
  }, []);
  useEffect(() => {
    if (loginData) {
      //@ts-ignore
      const decodedUser = jwtDecode(loginData.sessionToken);
      if(decodedUser){
        redirect("/home")
      }
    }
  }, [loginData]);


  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <button className="w-full" type="button">
              <GoogleOAuthProvider clientId={CLIENT_ID!}>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    handelLogin(credentialResponse.credential);
                  }}
                  onError={() => { }}
                />
              </GoogleOAuthProvider>
            </button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignupForm;
