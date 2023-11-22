import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export function withAuth(Components: any, requiredRoles: string[]) {
  return async function WithAuth(props: any) {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/login");
      return null;
    }

    const role = session.user?.role;
    console.log(session);

    if (!requiredRoles.includes(role)) {
      redirect("/unauthorized");
      return null;
    }

    return <Components {...props} />;
  };
}
