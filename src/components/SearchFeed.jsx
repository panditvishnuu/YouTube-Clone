import React from "react";
import { useState, useEffect } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box,Typography } from "@mui/material";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos,setvideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {setvideos(data.items)});
  }, [searchTerm]);

  return (

      <Box p={2} minHeight='95vh'>
        <Typography
          varient="h4"
          fontWeight="bold"
          mb={2}
          ml={{sm:"100px"}}
          sx={{ color: "white" }}
        >
          Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
        </Typography>
        <Box display="flex"> 
        <Box sx={{mr : {sm : '100px'}}}/>
        <Videos videos={videos} />
        </Box>
      </Box>
  );
};

export default SearchFeed;
