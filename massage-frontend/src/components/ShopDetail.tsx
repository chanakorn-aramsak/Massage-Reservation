"use client";
import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Grid, Button } from "@mui/material";
import { deleteMassage, getShopByID } from "@/services/massage/massage.service";
import DeleteDialog from "./DeleteDialog";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { IMassage } from "@/interfaces/massage.interface";

const ShopDetails = ({ shopId, token }: { shopId: string; token: string }) => {
    const router = useRouter();
    const [shop, setShop] = useState<IMassage>();
    const [error, setError] = useState<string>("");

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDeleteConfirmation = async (_id: string) => {
        // Define what happens when the reservation is deleted
        await deleteMassage(_id, token);
        
        router.push("/massages").then(() => {
            // Once navigation is complete, reload the page
            location.reload();
            return true;
          });
        console.log("Reservation deleted");
    };
    useEffect(() => {
        const fetchShopData = async () => {
            try {
                const data = await getShopByID(shopId, token);
                setShop(data.data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An error occurred");
                }
            }
        };

        fetchShopData();
    }, [shopId, token]);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!shop) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 4,
            }}
        >
            <Paper
                elevation={3}
                sx={{ p: 2, width: "100%", maxWidth: "1000px" }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    {shop.name}
                </Typography>
                <Box
                    component="img"
                    src={shop.picture}
                    alt={shop.name}
                    sx={{ width: "20%", height: "auto" }}
                />
                <Typography variant="body1">
                    <strong>Address:</strong> {shop.address}
                </Typography>
                <Typography variant="body1">
                    <strong>Province:</strong> {shop.province}
                </Typography>
                <Typography variant="body1">
                    <strong>Postal Code:</strong> {shop.postalcode}
                </Typography>
                <Typography variant="body1">
                    <strong>Telephone:</strong> {shop.tel}
                </Typography>
                <Typography variant="body1">
                    <strong>Price Level:</strong> {shop.priceLevel}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                    }}
                >
                    <Button
                        variant="outlined"
                        className="border-yellow-900 hover:border-yellow-950 md:text-yellow-900"
                        onClick={() =>{
                            router.push(`/massages/${shop._id}/edit`)
                            console.log("Edit studio")
                        }
                            
                        }
                    >
                        Edit studio
                    </Button>
                    <Button
                        variant="contained"
                        className="bg-yellow-900 hover:bg-yellow-950"
                        onClick={() =>
                            router.push(`/massages/${shop._id}/reservation`)
                        }
                    >
                        Make Reservation
                    </Button>
                    <Button
                        variant="outlined"
                        className="border-yellow-900 hover:border-yellow-950 md:text-yellow-900"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        Delete studio
                    </Button>
                </Box>
                <DeleteDialog
                    open={isDialogOpen}
                    setOpen={setIsDialogOpen}
                    onDelete={handleDeleteConfirmation}
                    id={shopId}
                />
            </Paper>
        </Box>
    );
};

export default ShopDetails;
