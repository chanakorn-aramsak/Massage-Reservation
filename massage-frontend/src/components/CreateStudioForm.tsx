"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container, SelectChangeEvent, Typography } from "@mui/material";
import { postShop } from "@/services/massage/massage.service";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/navigation";

const CreateStudioForm = ({ authToken }: { authToken: string }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        province: "",
        postalCode: "",
        telephone: "",
        price: "",
        imageURL: "",
    });

    // Update form state
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };
    const handlePriceChange = (event: SelectChangeEvent) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value,
        }));
    }
   

    // Handle form submission
    const handleSubmit = async () => {
        const shopData = {
            name: formData.name,
            address: formData.address,
            priceLevel: parseInt(formData.price, 10), // Assuming priceLevel is an integer
            province: formData.province,
            postalcode: formData.postalCode,
            tel: formData.telephone,
            picture: formData.imageURL,
        };

        // Replace 'yourAuthToken' with the actual token
        try {
            const response = await postShop(shopData, authToken);
            console.log("Shop created:", response);
            // Handle success, maybe clear form or show a success message
        } catch (error) {
            console.error("Error creating shop:", error);
            // Handle error, maybe show an error message to the user
        }
        router.push("/massages");
    };
    return (
        <form onSubmit={handleSubmit}>
            <Container className="mt-10">
                <Box
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    component="form"
                    noValidate
                    autoComplete="off"
                    display={"flex"}
                    sx={{ flexDirection: "column", alignItems: "center" }}
                >
                    <Typography variant="h4" className="text-center mb-5">
                        Create Studio
                    </Typography>

                    <TextField
                        required
                        id="name"
                        label="Name"
                        className="mb-6 w-full"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        id="address"
                        label="Address"
                        className="mb-6 w-full"
                        variant="outlined"
                        value={formData.address}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        id="province"
                        label="Province"
                        className="mb-6 w-full"
                        variant="outlined"
                        value={formData.province}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        id="postalCode"
                        label="Postal Code"
                        className="mb-6 w-full"
                        variant="outlined"
                        value={formData.postalCode}
                        onChange={handleChange}
                    />

                    <TextField
                        required
                        id="telephone"
                        label="Telephone"
                        className="mb-6 w-full"
                        variant="outlined"
                        value={formData.telephone}
                        onChange={handleChange}
                    />

                    <FormControl
                        required
                        className="mb-6 w-full"
                        variant="outlined"
                    >
                        <InputLabel id="price-label">Price / Hrs</InputLabel>
                        <Select
                            labelId="price-label"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handlePriceChange}
                            label="Price / Hrs"
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        required
                        id="imageURL"
                        label="Image URL"
                        className="mb-6 w-full"
                        variant="outlined"
                        value={formData.imageURL}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-96 text-lg px-6 py-2 bg-yellow-900 text-white hover:bg-yellow-950 rounded transition duration-300"
                    >
                        Create Studio
                    </button>
                </Box>
            </Container>
        </form>
    );
};

export default CreateStudioForm;
