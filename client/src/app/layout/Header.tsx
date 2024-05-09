import { AppBar, Toolbar, Typography } from "@mui/material";
import MaterialUISwitch   from "../../app/layout/Switch"

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({darkMode,handleThemeChange}:Props) {
    return(
        // sx={{mb:4} is used for setup the pading btw header box and product images.
        <AppBar position='static' sx={{mb:3}}>
            <Toolbar>
                <Typography variant="h6">
                    E-Commerce Web Application
                </Typography>
                <MaterialUISwitch checked ={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}