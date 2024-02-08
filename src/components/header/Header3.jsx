import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  ArrowForwardIosOutlined,
  BikeScooterOutlined,
  Close,
  DeckOutlined,
  MenuOutlined,
  PetsOutlined,
  Widgets,
} from "@mui/icons-material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Listt from "./Listt";

const Header3 = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: 3,
      }}
    >
      <Box p={0}>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            color: theme.palette.text.secondary,
            // @ts-ignore
            bgcolor: theme.palette.myColor.mainn,
          }}
        >
          <Widgets />

          <Typography
            sx={{ p: 0, textTransform: "capitalize", mx: 1 }}
            variant="body1"
          >
            Categories
          </Typography>

          <Box flexGrow={1} />

          <ArrowForwardIosOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.mainn,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeckOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home & Garden</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeckOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Home & Garden</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <BikeScooterOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PetsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Pets</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery("(min-width:1000px)") && (
        <Stack gap={3} direction={'row'} alignItems={'center'}>
          <Listt title={"Home"} />
          <Listt title={"Mega Menu"} />
          <Listt title={"Full Screen Menu"} />
          <Listt title={"Pages"} />
          <Listt title={"User Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1000px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuOutlined />
        </IconButton>
      )}

      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        <Box sx={{ width: 444, mx: "auto", mt: 6, position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", right: 0, top: "-30px" }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
          {[
            { liTitle: "Home", subLink: ["Link 1", "Link 2", "Link 3"] },
            { liTitle: "Mega Menu", subLink: ["Link 1", "Link 2", "Link 3"] },
            { liTitle: "Pages", subLink: ["Link 1", "Link 2", "Link 3"] },
            {
              liTitle: "user Account",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
            {
              liTitle: "Full Screen Menu",
              subLink: ["Link 1", "Link 2", "Link 3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.liTitle}
                elevation={0}
                sx={{ bgcolor: "inherit", mt: 1 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.liTitle}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List sx={{ py: 0, my: 0 }}>
                    {item.subLink.map((link) => {
                      return (
                        <ListItem key={link} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
