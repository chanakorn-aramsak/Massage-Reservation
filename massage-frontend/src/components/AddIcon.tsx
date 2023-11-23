"use client"
import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { brown } from '@mui/material/colors';
import { useRouter } from 'next/navigation';
const AddIcon = () => {
    const router = useRouter();
    const handleCreateMassage = () => {
        // Add your logic for creating a massage here
        router.push('/massages/create')
    };

    return (
        <IconButton aria-label="delete" onClick={handleCreateMassage}>
            <AddCircleOutlineIcon sx={{ fontSize: 80, color: brown[900] }} />
        </IconButton>
    );
};

export default AddIcon;
