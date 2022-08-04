import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const subjects = [
  {
    value: "portugues",
    label: "Português",
  },
  {
    value: "matematica",
    label: "Matemática",
  },
  {
    value: "historia",
    label: "História",
  },
  {
    value: "biologia",
    label: "Biologia",
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Disciplina"
          value={currency}
          onChange={handleChange}
          size="small"
        >
          {subjects.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
