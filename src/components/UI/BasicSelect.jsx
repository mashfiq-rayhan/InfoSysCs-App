import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ items, type, setType, sx = {} }) {
  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120, ...sx }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "#cbd5e1" }} id="file-type-select">
          File Type
        </InputLabel>
        <Select
          sx={{
            color: "#f1f5f9",
            height: "56px",
            borderRadius: "12px",
            backgroundColor: "rgba(15, 23, 42, 0.65)",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(92, 225, 230, 0.35)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(92, 225, 230, 0.7)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#5ce1e6",
            },
          }}
          labelId="file-type-select"
          id="file-type-select-id"
          value={type}
          label="File Type"
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                color: "#f1f5f9",
              },
            },
          }}
          onChange={handleChange}>
          {items.map((item) => {
            return (
              <MenuItem
                sx={{
                  "&:hover": { backgroundColor: "rgba(92, 225, 230, 0.12)" },
                  "&.Mui-selected": { backgroundColor: "rgba(92, 225, 230, 0.2)" },
                }}
                key={item.value}
                value={item.value}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
