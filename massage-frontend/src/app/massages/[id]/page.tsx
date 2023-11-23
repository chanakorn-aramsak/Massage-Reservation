import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ShopDetails from "@/components/ShopDetail";
import { withAuth } from "@/lib/withAuth";
import { getServerSession } from "next-auth";

async function MassagePage({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const userId = session.user._id;
    const token = session.user.token;
    return (
        <>
            <ShopDetails shopId={params.id} token={token} />
        </>
    );
}

export default withAuth(MassagePage, ["admin", "user"]);
