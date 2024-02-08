import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const mySlide = [
  {
    textTiele: "MEN",
    imgLink: "./images/banner-15.jpg",
  },
  {
    textTiele: "WOMEN",
    imgLink: "./images/banner-25.jpg",
  },
];
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./slider.css";
import IconsSection from "./IconsSection";
const Hero = () => {
  const theme = useTheme();
  return (
    <Container sx={{py:2}}>
      <Box  sx={{ my: 1.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlide.map((item) => {
            return (
              <SwiperSlide key={item.textTiele} className="parent-slider">
                <img src={item.imgLink} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "start",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#222" }}>
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: "#222", fontWeight: 400, mt: 1 }}
                  >
                    {item.textTiele}
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant="h5" color="#333" mr={3}>
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" color={"#d23f57"} mr={3}>
                      38% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                  >
                    Get Free Shipping on ordera over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      bgcolor: "#222",
                      color: "#fff",
                      borderRadius: "2px",
                      "&:hover": { bgcolor: "#151515" },
                    }}
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.6%" }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 30,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", fontSize: "18px", mt: 1 }}
              >
                SUMMER
              </Typography>

              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                SALE 28% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "red" },
                }}
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="./images/banner-16.jpg" alt="" />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 30,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", fontSize: "18px", mt: 1 }}
              >
                DESKTOPS & <br />
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "red" },
                }}
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconsSection />
    </Container>
  );
};

export default Hero;
