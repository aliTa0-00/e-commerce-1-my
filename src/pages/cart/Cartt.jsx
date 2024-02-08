import {
  Badge,
  Box,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import "./cart.css";
import Header1 from "../../components/header/Header1";
import Header2 from "../../components/header/Header2";
import Header3 from "../../components/header/Header3";
import { Add, Close, Remove } from "@mui/icons-material";
import { useSelector , useDispatch} from "react-redux";
// @ts-ignore
import { increaseQuantity, minusQuantity , removeProduct } from "../../Redux/productSlice";

// @ts-ignore
// eslint-disable-next-line no-unused-vars
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {},
}));

const Cartt = () => {


  // @ts-ignore
  const { selectProducts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();


  const theme = useTheme();
  // @ts-ignore
  return (
    <Box>
      <Header1 />
      <Header2 />
      <Header3 />

      <Container sx={{my:2}}>

        {selectProducts.map((item) => {
          console.log(item)
          return(
            <Paper
            key={item.id}
              sx={{
                display:'flex',
                direction:"row",
                alignItems:"center",
                justifyContent:"space-between",
                position:'relative',
                borderBottom: "1px solid #111",
                width: "60%",
                p:1,
                borderRadius: 3,
                m: "auto",
                mb:1,

                [theme.breakpoints.down("md")]: {
                  flexWrap: "wrap",
                  justifyContent: "center",
  
                  width: " 100%",
                },
              }}
            
            
            >
              <Stack direction={"row"} alignItems={"center"}>
                <Box>
                  <img
                    // @ts-ignore
                    src={`${import.meta.env.VITE_SOME_KEY}${item.attributes.productImg.data[0].attributes.url}`}
                    alt=""
                    style={{ width: "100px", height: "100%" }}
                  />
                </Box>
                <Box ml={1} maxWidth={'280px'}>
                  <Typography variant="body2" fontWeight={300}>
                    {item.attributes.productDescription}
                  </Typography>
                  <Typography mt={1} variant="body1" color={'error'}>
                    ${item.attributes.productPrice}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"row"} alignItems={"center"}>
                <Box>
                  <div style={{ display: "flex", alignItems: "center" }}>
                
                        <div style={{ margin: "auto" }}>
                      <IconButton onClick={() => {
                        dispatch(minusQuantity(item))
                      }}>
                        <Remove color="error"
                          sx={{ border: "1px solid red", borderRadius: "5px" }}
                        />
                      </IconButton>

                      <StyledBadge badgeContent={item.quantity} sx={{ mx: 1.5 }} />

                      <IconButton onClick={() => {
                        dispatch(increaseQuantity(item))
                      }}>
                        <Add color="error"
                          sx={{border: "1px solid red", borderRadius: "5px" }}
                        />
                      </IconButton>
                    </div>
                  </div>
                </Box>
  
                <Typography m={2} variant="h6" color={theme.palette.text.primary}>
                  ${item.attributes.productPrice}
                </Typography>
              </Stack>
  
                <IconButton onClick={() => {
                  dispatch(removeProduct(item))
                }} sx={{position:'absolute' , top:1, right:1} }>
                  <Close/>
                </IconButton>
  
            </Paper>
          )
        })}
        
      </Container>
    </Box>
  );
};

export default Cartt;
