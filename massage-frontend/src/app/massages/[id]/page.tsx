import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ShopDetails from "@/components/ShopDetail";
import { withAuth } from "@/lib/withAuth";
import { getServerSession } from "next-auth";

async function MassagePage({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session) return <>You need to login to make reservation</>;
    const userId = session.user._id;
    const token = session.user.token;
    const role = session.user.role;
    return (
        <>
            <ShopDetails shopId={params.id} token={token} role={role} />
        </>
    );
}

export default withAuth(MassagePage, ["admin", "user"]);
