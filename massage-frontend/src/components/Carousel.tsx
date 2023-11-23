"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MassageCard from "./MassageCard";
import { IMassage } from "@/interfaces/massage.interface";

interface StepperProps {
    massages: IMassage[];
}
export default function Stepper({ massages }: StepperProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const cardsPerPage = 5;
    const maxSteps = Math.ceil(massages.length / cardsPerPage);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const cardWidth = 300;

    // Calculate the starting and ending indices for the steps array
    const startIndex = activeStep * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    // overflow: "hidden",
                    maxWidth: 10 * cardWidth, // Adjust the multiplier based on the number of cards to show
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        transition: "transform 0.5s",
                        // transform: `translateX(-${activeStep * 100}%)`,
                    }}
                >
                    {massages.slice(startIndex, endIndex).map((massage) => (
                        <Box
                            margin={1}
                            alignContent={"center"}
                            minWidth={cardWidth}
                        >
                            <MassageCard
                                key={massage._id}
                                mid={massage.id}
                                name={massage.name}
                                imageSrc={massage.picture}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
