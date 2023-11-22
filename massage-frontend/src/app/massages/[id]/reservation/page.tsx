import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ReservationForm from "@/components/reservation/ReservationForm";
import { withAuth } from "@/lib/withAuth";

async function MassageReservationPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return <>You need to login to make reservation</>;

  return (
    <main className="container flex flex-col justify-center items-center mx-auto py-6 h-screen">
      <div className="h-[60%] w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-black text-primary text-center">
          Make reservation
        </h1>
        <ReservationForm
          id={params.id}
          token={session.user.token}
          userId={session.user._id}
        />
      </div>
    </main>
  );
}

export default withAuth(MassageReservationPage, ["admin", "user"]);
