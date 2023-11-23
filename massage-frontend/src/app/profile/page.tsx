import { withAuth } from "@/lib/withAuth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserProfile } from "@/services/user/user.service";

async function MyProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) return <></>;
  const user = await getUserProfile(session.user.token);
  return (
    <main className="flex flex-col h-full py-4 justify-center items-center">
      <h1 className="text-5xl font-black text-primary text-center py-5">
        My Profile
      </h1>
      <div>
        <p className="text-xl font-semibold text-primary text-center py-5">
          Name: {user.data.name}
        </p>
        <p className="text-xl font-semibold text-primary text-center py-5">
          Email: {user.data.email}
        </p>
        <p className="text-xl font-semibold text-primary text-center py-5">
          Role: {user.data.role}
        </p>
        <p className="text-xl font-semibold text-primary text-center py-5">
          Telephone: {user.data.tel}
        </p>
      </div>
    </main>
  );
}

export default withAuth(MyProfilePage, ["admin", "user"]);
