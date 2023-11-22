import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getBookings } from "@/services/reservation/booking.service";
import ReservationCard from "@/components/reservation/ReservationCard";
import { IReservation } from "@/interfaces/reservation/reservation.interface";
import { withAuth } from "@/lib/withAuth";

async function Reservations() {
  const session = await getServerSession(authOptions);
  if (!session) return <>You need to login to make reservation</>;
  const token = session.user.token;
  const bookingsJson = await getBookings(token);
  const bookings = Array.from(bookingsJson.data) as IReservation[];

  return (
    <main className="flex flex-col h-screen py-4">
      <h1 className="text-5xl font-black text-primary text-center">
        All Reservations
      </h1>
      {bookings.length > 0 ? (
        <div className="space-y-4 py-8">
          {bookings.map((booking: IReservation) => (
            <ReservationCard booking={booking} authToken={token} />
          ))}
        </div>
      ) : (
        <p className="text-center font-medium text-4xl py-8">
          No reservations found for the current user.
        </p>
      )}
    </main>
  );
}

export default withAuth(Reservations, ["admin"]);
