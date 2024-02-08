// @ts-nocheck
import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {
  Add,
  FavoriteBorderOutlined,
  Remove,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { useGetproductsByNameQuery } from "../../Redux/products";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart , increaseQuantity , minusQuantity} from "../../Redux/productSlice";

// eslint-disable-next-line no-unused-vars
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    borderRadius: "5px",
  },
}));

const MainContect = () => {

  // eslint-disable-next-line no-unused-vars
  const { selectProducts , selectProductsID} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const productQuantity = (itemApi) => {
    let myProduct = selectProducts.find((item) => {
        return itemApi.id === item.id
    })
    return myProduct.quantity
    
}
  const allData = "newproducts?populate=*"
  const menData = "newproducts?populate=*&filters[productCate][$eq]=men"
  const womenData = "newproducts?populate=*&filters[productCate][$eq]=wemon"
  const [myData, setmyData] = useState(allData);
  const { data, error, isLoading } = useGetproductsByNameQuery(
    myData
  );

  const theme = useTheme();
  // const [alignment, setAlignment] = useState("left");



  // @ts-ignore
  // @ts-ignore
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setmyData(newAlignment);
    }
  };

  if (error) {
    return (
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
        }}
        variant="h5"
        color="error"
      >
        {error}
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
        }}
      >
        <CircularProgress color="error" />
      </Box>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 4 }}>
        <Stack
          direction={"row"}
          alignItems={"centen"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All oun new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69 , 96 ,0.5) !important",
                color: " #e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              className="my-btn"
              value={allData}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important" }}
              className="my-btn"
              value={menData}
              aria-label="centered"
            >
              MEN category
            </ToggleButton>
            <ToggleButton
              className="my-btn"
              value={womenData}
              aria-label="right aligned"
            >
              WOMEN category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={2}
          sx={{ py: 5 }}
        >
          {data.data.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  position: "relative",
                  maxWidth: 220,
                  minWidth: 218,
                  "&:hover": {
                    cursor: "pointer",
                    border: "1px solid black",
                    transition: ".3s",
                  },
                  "&:hover .MuiStack-root ": {
                    transform: "translateX(0)",
                    transition: ".4s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 180 }}
                  // @ts-ignore
                  image={`${import.meta.env.VITE_SOME_KEY}${
                    item.attributes.productImg.data[0].attributes.url
                  }`}
                  title="green iguana"
                />
                <CardContent sx={{ textAlign: "center", pb: 1 }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    color={theme.palette.text.primary}
                  >
                    {item.attributes.productTitle}
                  </Typography>
                  <Typography sx={{ pb: 1 }} variant="h6" color="error">
                    ${item.attributes.productPrice}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={item.attributes.productRating}
                    size="small"
                    readOnly
                  />
                </CardContent>
                <CardActions>
                  {selectProductsID.includes(item.id) ? (
                    <div style={{ margin: "auto" }}>
                      <IconButton onClick={() => {
                        dispatch(minusQuantity(item))
                      }}>
                        <Remove color="error"
                          sx={{ border: "1px solid red", borderRadius: "5px" }}
                        />
                      </IconButton>

                      <StyledBadge badgeContent={productQuantity(item)} sx={{ mx: 1.5 }} />

                      <IconButton onClick={() => {
                        dispatch(increaseQuantity(item))
                      }}>
                        <Add color="error"
                          sx={{border: "1px solid red", borderRadius: "5px" }}
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <Button
                      onClick={() => {
                        dispatch(addProductToCart(item));
                      }}
                      sx={{ mx: 2 }}
                      fullWidth
                      variant="outlined"
                      size="small"
                    >
                      Add To Cart
                    </Button>
                  )}
                </CardActions>

                <Stack
                  direction={"column"}
                  sx={{
                    position: "absolute",
                    right: 1,
                    top: 1,
                    zIndex: 3,
                    transform: "translateX(46px)",
                  }}
                >
                  <Box>
                    <IconButton>
                      <RemoveRedEyeOutlined color="error" fontSize="small" />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton>
                      <FavoriteBorderOutlined color="error" fontSize="small" />
                    </IconButton>
                  </Box>
                </Stack>
              </Card>
            );
          })}
        </Stack>
      </Container>
    );
  }
};

export default MainContect;
