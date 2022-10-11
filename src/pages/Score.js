import React from "react";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmounChange, handleScoreChange } from "../redux/actions";

const FinallScreen = () => {
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();
  const goTo = useNavigate();

  const handleBackToSetting = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmounChange(50));
    goTo("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSetting} variant="outlined">
        Try Again!
      </Button>
    </Box>
  );
};

export default FinallScreen;
