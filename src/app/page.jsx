"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Stack, IconButton, Grid, Typography, Paper } from "@mui/material";
import { Wifi, SignalCellularAlt, BatteryFull } from "@mui/icons-material";
import TelegramIcon from "@mui/icons-material/Telegram";

const Page = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function handleSendNotification() {
    setNotification("Notification sent!");
    setTimeout(() => {
      setNotification("");
    }, 1000);
  }

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid item container justifyContent="space-between" alignItems="center">
          <Stack direction="row">
            <IconButton style={{ color: "white", fontSize: "large" }}>
              {currentTime}
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <TelegramIcon />
            </IconButton>
          </Stack>

          <Stack direction="row">
            <IconButton style={{ color: "white" }}>
              <SignalCellularAlt />
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <BatteryFull />
            </IconButton>
            <IconButton style={{ color: "white" }}>
              <Wifi />
            </IconButton>
          </Stack>
        </Grid>
        <Box sx={{ marginTop: "40px", color: "white" }}>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack sx={{ color: "white", textAlign: "center" }} spacing={2}>
              <Typography variant="h5" sx={{ marginX: "auto" }}>
                Lorem Ipsum
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  display: "block",
                  marginX: "auto",
                  marginTop: "20px",
                }}
              >
                Lorem ipsum dolor sit amet
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ marginTop: "40px", color: "white" }}>
          <Image
            src="/Notification.png"
            alt="Description of the image"
            width={310}
            height={300}
          />
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <Paper
            onClick={handleSendNotification}
            sx={{
              background:
                "linear-gradient(135deg, #FF1493 0%, #FFD700 25%, #FF0000 50%, #000000 100%)",
              borderRadius: "30px",
              height: "42px",
              width: "327px",
              boxShadow:
                "0px 8px 12px rgba(0, 0, 0, 0.2), 0px 3px 6px rgba(0, 0, 0, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#FF6347",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="button" sx={{ color: "white" }}>
              Send Notification
            </Typography>
          </Paper>
        </Box>
        {notification && (
          <Box
            sx={{
              position: "absolute",
              bottom: "20px",
              backgroundColor: "#FFFFFF",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body1">{notification}</Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default Page;
