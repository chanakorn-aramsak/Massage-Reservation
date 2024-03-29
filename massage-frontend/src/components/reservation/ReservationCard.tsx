"use client";

import { IReservation } from "@/interfaces/reservation/reservation.interface";
import dayjs from "dayjs";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DeleteDialog from "../DeleteDialog";
import { deleteBooking } from "@/services/reservation/booking.service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default function ReservationCard({
    booking,
    authToken
}: {
    booking: IReservation;
    authToken: string;
}) {
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDeleteConfirmation = async (_id: string) => {
        // Define what happens when the reservation is deleted
        await deleteBooking(_id, authToken);
        window.location.reload();
        console.log("Reservation deleted");
    };
    return (
        <div
            key={booking._id}
            className="bg-gray-50 rounded shadow-md px-5 mx-5 py-2 my-2 text-gray-800 flex flex-row justify-between"
        >
            <div className="flex flex-col">
                <p className="text-4xl font-bold py-4">{booking.shop.name}</p>
                <p>
                    Reserved Date:{" "}
                    {dayjs(booking.bookingDate).format("MM/DD/YYYY")}
                </p>
                <p>Reserved Minutes: {booking.serviceMinute}</p>
                <p>Studio address: {booking.shop.address}</p>
                <p>Studio Tel: {booking.shop.tel}</p>
            </div>
            <div className="flex flex-col self-end space-y-4">
                <Button
                    variant="outlined"
                    className="border-primary text-primary hover:bg-[#dbc8c3] hover:text-primaryHover hover:border-primaryHover"
                    onClick={() =>
                        router.push(`/reservations/${booking._id}/edit`)
                    }
                >
                    Edit Reservation
                </Button>
                <Button
                    variant="contained"
                    className="bg-primary text-white hover:bg-primaryHover hover:text-white"
                    onClick={() => setIsDialogOpen(true)}
                >
                    Delete Reservation
                </Button>
                <DeleteDialog
                    open={isDialogOpen}
                    setOpen={setIsDialogOpen}
                    onDelete={handleDeleteConfirmation}
                    id={booking._id}
                />
            </div>
        </div>
    );
}
