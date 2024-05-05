import React from "react";
import { Stack, Button } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <Button
          onClick={() => setselectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
            marginBottom: 3,
            overflow: "hidden",
            borderRadius: 20,
            padding: 2,
          }}
          key={category.name}
        >
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8, padding : 2 }}
          >
            {category.name}
          </span>
        </Button>
      ))}
    </Stack>
  );
};
export default Sidebar;
