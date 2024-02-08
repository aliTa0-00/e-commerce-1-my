import {
  AccessAlarmOutlined,
  CreditCardOffOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const IconsSection = () => {
  const theme = useTheme();

  return (
    <Container sx={{bgcolor : theme.palette.mode === 'dark'? '#000' : '#fff'}}>
      <Stack
        sx={{ flexWrap: "wrap" }}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
      >
        <Section
          icon={<ElectricBolt fontSize="large" />}
          title={"Fast Delivert"}
          subTitle={"Start form $10"}
        />
        <Section
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <Section
          icon={<AccessAlarmOutlined fontSize="large" />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <Section
          icon={<CreditCardOffOutlined fontSize="large" />}
          title={"payment"}
          subTitle={"Seccure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconsSection;

// eslint-disable-next-line react/prop-types
const Section = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        gap: 3,
        flexGrow: 1,
        alignItems: "center",
        justifyContent:useMediaQuery('(min-width:600px)') ? 'center': 'left'
        ,
        py: 1.3,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
