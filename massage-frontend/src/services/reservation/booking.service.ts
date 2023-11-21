import { IReservationForm } from "@/interfaces/reservation/reservation.interface";

const API_BASE_URL = `http://localhost:${process.env.BACKEND_PORT || 5000}/api/v1`;

export const createBooking = async (
  bookingForm: IReservationForm,
  shopId: string,
  token: string,
  userId: string
) => {
  try {
    const res = await fetch(`${API_BASE_URL}/shops/${shopId}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookingForm),
    });

    const data = await res.json();

    if (!res.ok) {
      const message = data?.message;
      console.log(userId);
      console.log(message);
      if (message === `The user with ID ${userId} has already made 3 bookings`) {
        console.log("return false");
        return false;
      }
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBookings = async (token: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBookingById = async (bookingId: string, token: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteBooking = async (bookingId: string, token: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const editBooking = async (bookingId: string, token: string, body: IReservationForm) => {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};