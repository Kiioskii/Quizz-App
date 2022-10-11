import React from "react";
import { Box } from "@mui/material";
import { TextField, FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleAmounChange } from "../redux/actions";
const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmounChange(e.target.value));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};
export default TextFieldComp;
