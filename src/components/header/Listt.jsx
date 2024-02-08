import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// eslint-disable-next-line react/prop-types
const Listt = ({title}) => {
  return (
    <Box
      sx={{
        '&:hover' : {cursor:'pointer'} , 
        "&:hover .show-when-hover": { display: "block" },
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Typography sx={{}} variant="body1">
        {title}
      </Typography>
      <ExpandMore />

      <Box
        className="show-when-hover"
        sx={{
           zIndex:4 ,
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "170px",
          display: "none",
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "13px",
                        fontWeight: 300,
                      },
                    }}
                    primary="dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem sx={{ '&:hover .sunLink' : {display: 'block'}, position:'relative'}} disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "13px",
                        fontWeight: 300,
                      },
                    }}
                    primary="products"
                  />
                  <KeyboardArrowRight />
                </ListItemButton>

                <Box className='sunLink' sx={{position:'absolute' , top:0,left: '100%' ,display:'none'}}>
                  <Paper sx={{ml: 1, minWidth: '140px'}}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{p:0 , px:1.5}} component="a" href="#simple-list">
                            <ListItemText primary="Add Product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton sx={{p:0 , px:1.5}} component="a" href="#simple-list">
                            <ListItemText primary="Edit Product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "13px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "13px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Listt;
