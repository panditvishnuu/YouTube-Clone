import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetails = () => {
  const [channelDetails, setchannelDetails] = useState();
  const [Videoss, setVideoss] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetails(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideoss(data?.items)
    );
  }, [id]);
  console.log(channelDetails, Videoss);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(32,30,66,1) 22%, rgba(0,49,57,1) 57%, rgba(28,1,53,1) 95%)",
            zIndex: 10,
            height: "270px",
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-120px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={Videoss} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
