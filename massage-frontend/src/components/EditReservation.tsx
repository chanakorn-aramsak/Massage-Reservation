"use client";
import React, { ChangeEventHandler, useState } from "react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useRouter } from "next/navigation";
export default function EditReservation() {
    const router = useRouter();
    const [duration, setDuration] = useState<number | "">("");
    const [date, setDate] = useState<Dayjs | null>(null);

    const handleDateChange = (selectedDate: Date) => {
        const newDate = dayjs(selectedDate);
        setDate(newDate);
    };
    const handleDurationChange = (event: SelectChangeEvent) => {
        setDuration(Number(event.target.value));
    };
    const handleSubmit = () => {
        // Implement submission logic
        if (!date || duration === "") {
            alert("Please select both a date and a duration for the reservation.");
            return; // Stop the submission process
        }
        console.log(
            "Submitted reservation with date:",
            date?.format("YYYY-MM-DD"),
            "and duration:",
            duration
        );
    };

    const handleCancel = () => {
        // Implement cancel logic
        router.push(`/manage-reservations`);
        console.log("Canceled edit reservation");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-semibold text-center mb-6">
                    Edit Reservation
                </h1>

                <div
                    style={{
                        margin: "16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <FormControl variant="outlined">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Reserve date"
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="duration-label">Duration:</InputLabel>
                        <Select
                            labelId="duration-label"
                            id="duration-select"
                            value={duration}
                            label="Duration"
                            onChange={handleDurationChange}
                        >
                            <MenuItem value={60}>1 hr</MenuItem>
                            <MenuItem value={120}>2 hr</MenuItem>
                            <MenuItem value={180}>3 hr</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="w-96 text-lg px-6 py-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-100 rounded transition duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-96 text-lg px-6 py-2 bg-yellow-900 text-white hover:bg-yellow-950 rounded transition duration-300"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    );
}
