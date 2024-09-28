"use client"
import { redirect, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { googleLogout } from "@react-oauth/google"
import React from "react"

export default function SignupForm() {
    const { push } = useRouter();
  function onLogout() {
    localStorage.removeItem("loginData")
    googleLogout()
    push("/signup")
  }
  return (
    <div>
      <Button onClick={() => {
        onLogout()
      }}>
        Logout
      </Button>
    </div>
  )
}
