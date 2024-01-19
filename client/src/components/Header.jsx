import { AppBar,Toolbar ,styled} from "@mui/material";
import React from 'react'
import {Menu} from "@mui/icons-material"

const StyledHeader=styled(AppBar)`
    background:#fff;
    height:70px;
`;
const MenuIcon=styled(Menu)`
    color:#000;
`;
const Image=styled('img')({
    height:55,
    margin:'auto',
    paddingRight:70
})

export default function Header() {
    const url='https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <StyledHeader position="static">
        <Toolbar>
        <MenuIcon/>
        <Image src={url} href={"https://inshorts.com"}/>
         </Toolbar>
    </StyledHeader>
          
    
      

  )
}
