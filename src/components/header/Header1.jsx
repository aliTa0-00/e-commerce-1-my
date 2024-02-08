import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  useTheme,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";

const options = ["AR", "EN"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const navigate = useNavigate();


  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ bgcolor: "#2B3445" }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
          
            variant="body1"
            color="initial"
            sx={{
              bgcolor: "#D23F57",
              p: "2px 8px",
              borderRadius: "12px",
              fontWeight: "bold",
              color: "#fff",
              fontSize: "12px",
            }}
            onClick={() => {
              navigate('/')
              }}
          >
            Hot
          </Typography>
          <Typography
            sx={{ fontSize: "13px", fontWeight: 300, color: "#fff", ml: 2 }}
            variant="body1"
            color="initial"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "18px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "18px", color: "#fff" }} />
              </IconButton>
            )}
          </div>

          <List sx={{ p: 0 }} component="nav" aria-label="Device settings">
            <ListItem
              sx={{ "&:hover": { cursor: "pointer" }, p: 1 }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{ ".MuiTypography-root": { color: "#fff" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ color: "#fff", fontSize: "20px" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          {/* Social Med.. */}
          <Facebook sx={{ fontSize: "18px", color: "#fff" }} />
          <Instagram sx={{ fontSize: "18px", color: "#fff", mx: 1 }} />
          <Twitter sx={{ fontSize: "18px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
