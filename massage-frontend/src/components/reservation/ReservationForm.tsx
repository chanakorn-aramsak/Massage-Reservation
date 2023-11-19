"use client";

import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { IReservationForm } from "@/interfaces/reservation/reservation.interface";
import { createBooking } from "@/services/reservation/booking.service";
import { redirect } from "next/navigation";

export default function ReservationForm({
  id,
  token,
  userId,
}: {
  id: string;
  token: string;
  userId: string;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [reserveDateError, setReserveDateError] = useState(false);

  const handleSubmit = async (reservationForm: FormData) => {
    if (!reserveDate) {
      setReserveDateError(true);
      return;
    }
    const reservationData: IReservationForm = {
      bookingDate: dayjs(reserveDate).format("YYYY-MM-DD"),
      serviceMinute: Number(reservationForm.get("duration")),
    };

    const isBookedThree = await createBooking(
      reservationData,
      id,
      token,
      userId
    );

    if (isBookedThree == false) {
      alert("You have already booked 3 times");
      return;
    }
    redirect("/");
  };
  return (
    <form className="w-full" action={handleSubmit}>
      <div className="p-4 space-y-2 flex flex-col">
        <div className="flex flex-row space-x-4">
          <label htmlFor="email" className="text-xl">
            Reserve Date
          </label>
          {reserveDateError ? (
            <p className="text-red-700">*** Reserve Date is required ***</p>
          ) : null}
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={reserveDate}
            onChange={(value) => {
              setReserveDate(value);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="p-4 space-y-2">
        <label htmlFor="duration" className="text-xl">
          Duration
        </label>

        <select
          name="duration"
          defaultValue={""}
          required
          className="bg-white border-2 border-gray-200 rounded-lg w-full p-4 text-gray-700 focus:outline-none focus:border-primary"
        >
          <option value="" disabled>
            Select Duration
          </option>
          <option value="60">60 minutes</option>
          <option value="90">90 minutes</option>
          <option value="120">120 minutes</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-[40%] font-serif text-white bg-primary hover:bg-primaryHover my-2"
        >
          Make Reservation
        </Button>
      </div>
    </form>
  );
}
