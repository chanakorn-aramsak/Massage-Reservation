import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
} from "@mui/material";

interface DeleteDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onDelete: (_id:string) => void;
    id: string;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
    open,
    setOpen,
    onDelete,
    id,
}) => {
    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        onDelete(id);
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
            <DialogTitle>Confirm Remove Reservation</DialogTitle>
            <DialogContent>
                Are you sure you want to delete this massage reservation?
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    className="border-primary text-primary hover:bg-[#dbc8c3] hover:text-primaryHover hover:border-primaryHover"
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleDelete}
                    className="bg-primary text-white hover:bg-primaryHover hover:text-white"
                >
                    delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;
