import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import style from "./search.module.scss";

export default function PrimarySearchAppBar({ ...props }) {
  return (
    <div>
      <FormControl variant="outlined" className={style.form_input}>
        <OutlinedInput
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search"
          {...props}
        />
      </FormControl>
    </div>
  );
}
