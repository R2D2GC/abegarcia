import { AppBar, Toolbar, IconButton, Typography, Slide} from "@mui/material"
import { CatchingPokemon } from "@mui/icons-material"
import React, { useState, useEffect} from "react"

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState (true);

  useEffect(() =>{
    let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []
)
  return (
    <Slide in={showNavbar} direction="down">
    <AppBar position="static">
      <Toolbar> 
        <IconButton edge='start' color="inherit" aria-label="logo">
          <CatchingPokemon/>
        </IconButton>
        <Typography variant="h6" component='div' color={"gold"}>
          Abe Garcia  
      </Typography> 
      </Toolbar> 
    </AppBar>
    </Slide>
  )
}
