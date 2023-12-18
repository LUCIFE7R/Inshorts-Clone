import React from 'react'
import {Box, styled,Typography} from "@mui/material"
const Boxxer=styled(Box)(({theme})=>({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const Image=styled('img')({
    height:34,
    '&:last-child':{
        margin:'0 50px 0 20px'
    }
})
const Tect=styled(Typography)`
  font-size: 14px;
        font-weight: 300;
        margin-left: 50px;
        font-family: 'Roboto',sans-serif;
`
export default function InfoHeader() {
    const apple="https://assets.inshorts.com/website_assets/images/appstore.png";
    const google="https://assets.inshorts.com/website_assets/images/playstore.png";
  return (
    <Boxxer>
        <Tect>
        For the best experience use<b>inshorts</b> app on your smartphone
        </Tect>
        <Box style={{marginLeft:"auto",display:"flex"}}>
            <Image src={apple}/>
            <Image src={google}/>
        </Box>
    </Boxxer>
  )
}
