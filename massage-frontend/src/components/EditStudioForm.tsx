"use client";
import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Box,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
    SelectChangeEvent,
} from "@mui/material";
import { editMassage, getShopByID } from "@/services/massage/massage.service";
import { IMassageBody } from "@/interfaces/massage.interface";
import { useRouter } from "next/navigation";

const EditStudioForm = ({
    shopId,
    authToken,
}: {
    shopId: string;
    authToken: string;
}) => {
  const router = useRouter();
    // State for each form field
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [telephone, setTelephone] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURL] = useState("");
    
    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const response = await getShopByID(shopId, authToken);
                const data = response.data;
                setName(data.name);
                setAddress(data.address);
                setProvince(data.province);
                setPostalCode(data.postalcode);
                setTelephone(data.tel);
                setPrice(data.priceLevel);
                setImageURL(data.picture);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An error occurred");
                }
            }
        };

        fetchShopData();
    }, [shopId, authToken]);
    const handlePriceChange = (event: SelectChangeEvent) => {
        setPrice(event.target.value);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Perform the update operation here
        // For example, you might send a request to your server with the form data
        const shopData = {
            name: name,
            address: address,
            priceLevel: parseInt(price, 10), // Assuming priceLevel is an integer
            province: province,
            postalcode: postalCode,
            tel: telephone,
            picture: imageURL,
        };
        console.log("Form Data:", shopData);
        await editMassage(shopId, shopData, authToken);
        router.push(`/massages/${shopId}`);
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Edit studio
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 2 }}
                >
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Address"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Province"
                        variant="outlined"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Postal Code"
                        variant="outlined"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Telephone"
                        variant="outlined"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
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
                            value={price}
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
                        fullWidth
                        margin="normal"
                        label="Image URL"
                        variant="outlined"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            className="border-primary text-primary hover:bg-[#dbc8c3] hover:text-primaryHover hover:border-primaryHover"
                            color="inherit"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-primary text-white hover:bg-primaryHover hover:text-white"
                        >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default EditStudioForm;
