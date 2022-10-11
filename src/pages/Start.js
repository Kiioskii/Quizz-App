import React from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Start = (props) => {
  const goTo = useNavigate();
  const handleClick = () => {
    goTo("/setings");
  };
  return (
    <Box>
      <Typography variant="h1">Quizz App!</Typography>
      <Box mb={3}>
        <img
          src="/img/img.jpg"
          alt="pic"
          style={{ width: "300px", height: "300px", borderRadius: "50%" }}
        />
      </Box>

      <Button onClick={handleClick} variant="contained" mt={2}>
        START
      </Button>
    </Box>
  );
};
export default Start;
