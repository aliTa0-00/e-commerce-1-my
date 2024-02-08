
// import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header1 from "../components/header/Header1";
import Header2 from "../components/header/Header2";
// import { ColorModeContext, useMode } from "../theme";
import Header3 from "../components/header/Header3";
import Hero from "../components/Hero/Hero";
import MainContect from "../components/mainn/MainContect";
import Footer from "../components/Footer/Footerr";
import { Box, useTheme } from "@mui/material";



function Root() {
  const theme = useTheme()
  return (
    
  

        <Box>
          <Header1 />
          <Header2 />
          <Header3 />
          <Hero />

          <Box sx={{bgcolor: theme.
          // @ts-ignore
          palette.bg.main}}>
            <MainContect />
          </Box>
          <Footer/>

        </Box>
  
        
  
        
      
  );
}

export default Root;

