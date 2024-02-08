import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  let date = new Date()

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        color="HighlightText"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ fontSize: 18 }}
      >
        Designed and developed by{" "}
        <Button
          variant="text"
          color="primary"
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
        >
          Ali Talib
        </Button>
        &copy; {date.getFullYear()}
        
      </Typography>
    </Box>
  );
};

export default Footer;
