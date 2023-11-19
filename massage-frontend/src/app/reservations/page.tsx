import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getBookings } from "@/services/reservation/booking.service";
import ReservationCard from "@/components/reservation/ReservationCard";
import { IReservation } from "@/interfaces/reservation/reservation.interface";

export default async function Reservations() {
  const session = await getServerSession(authOptions);
  if (!session) return <>You need to login to make reservation</>;
  const userId = session.user._id;
  const bookingsJson = await getBookings(session.user.token);
  const bookings = Array.from(bookingsJson.data) as IReservation[];

  return (
    <main className="flex flex-col h-screen py-4">
      <h1 className="text-5xl font-black text-primary text-center">
        My Reservations
      </h1>
      {bookings.filter((booking: IReservation) => booking.user._id === userId)
        .length > 0 ? (
        <div className="space-y-4 py-8">
          {bookings
            .filter((booking: IReservation) => booking.user._id === userId)
            .map((booking: IReservation) => (
              <ReservationCard booking={booking} />
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
