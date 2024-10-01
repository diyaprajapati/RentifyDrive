"use client"
import { Separator } from "@/components/ui/separator";
import ProfileForm from "./profile-form";

const Profile = () => {
  return (
    <>
      <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and set e-mail preferences and more.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
    </>
  )
}
export default Profile;
