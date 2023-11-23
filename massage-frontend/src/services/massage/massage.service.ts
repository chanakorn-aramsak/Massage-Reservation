import { IMassageBody } from "@/interfaces/massage.interface";

// Function to fetch data from the API
const API_BASE_URL = `http://localhost:${
  process.env.BACKEND_PORT || 5001 || 5000
}/api/v1`;
export const getShops = async (token: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/shops`, {
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

export const postShop = async (shopData: IMassageBody, token: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/shops`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Assuming you need to be authorized to post
      },
      body: JSON.stringify(shopData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // The newly created shop data
  } catch (error) {
    // If the error is not an instance of Error, create a new Error
    if (!(error instanceof Error)) {
      throw new Error("An unknown error occurred");
    }
    // Log the error message and rethrow the error
    console.error(error.message);
    throw error;
  }
};
