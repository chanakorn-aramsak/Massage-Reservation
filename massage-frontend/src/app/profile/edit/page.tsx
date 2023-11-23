import { withAuth } from "@/lib/withAuth";
import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserProfile } from "@/services/user/user.service";
import EditProfileForm from "@/components/EditProfileForm";

async function EditProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) return <>You need to login to make reservation</>;
  const user = await getUserProfile(session.user.token);
  return (
    <main className="h-full md:py-4 w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl pb-10 font-extrabold text-center">
        Edit Profile
      </h1>

      <EditProfileForm user={user.data} token={session.user.token} />
    </main>
  );
}

export default withAuth(EditProfilePage, ["admin", "user"]);
