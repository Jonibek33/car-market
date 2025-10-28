import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import "./style.scss";

export default function SelectIndicator({ title, variants }) {
  return (
    <Select
      className="select"
      placeholder={title}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: "100%",
        borderRadius: 0,
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
        fontSize: 15, 
        fontWeight: 600,
        paddingRight: 1,

        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
          borderColor: "transparent",
        },

        width: "160px",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {Object.entries(variants).map(([key, label]) => (
        <Option key={key} value={key}>
          {label}
        </Option>
      ))}
    </Select>
  );
}
