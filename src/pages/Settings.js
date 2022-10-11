import React from "react";
import { Box } from "@mui/material";
import { Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SelectOptions from "../components/SelectOptions";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../Hooks/useAxios";

const Settings = () => {
  const { response, errors, loading } = useAxios({ url: "/api_category.php" });
  const goTo = useNavigate();
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOtions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  if (errors) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Is Wrog :/
      </Typography>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    goTo("/questions");
  };

  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Quiz App
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectOptions options={response.trivia_categories} label="Category" />
        <SelectOptions options={difficultyOptions} label="Difficulty" />
        <SelectOptions options={typeOtions} label="Type" />
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            START
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;
