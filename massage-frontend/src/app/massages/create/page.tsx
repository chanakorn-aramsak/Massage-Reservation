import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CreateStudioForm from "@/components/CreateStudioForm";
import { withAuth } from "@/lib/withAuth";
import { getServerSession } from "next-auth";

const createPage = async () => {
    const session = await getServerSession(authOptions);
    const userId = session.user._id;
    const token = session.user.token;
    return <CreateStudioForm authToken={token} />;
};
export default withAuth(createPage, ["admin"]);
