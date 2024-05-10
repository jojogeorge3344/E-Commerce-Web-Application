import { AppBar, Badge, Box, IconButton, List, ListItem, Snackbar, Toolbar, Typography } from "@mui/material";
import MaterialUISwitch from "../../app/layout/Switch"
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import headerMenuClickSound from '@sounds/header-menu-sound.mp3'; // Header menu clicking sound
import { speakMessage } from '../../app/layout/SpeakMessage'; // Import speakMessage function
import toggleClickSound from '@sounds/toggle-enable-disable.mp3'; // Header menu clicking sound

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

const navStyle = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({ darkMode, handleThemeChange }: Props) {

    //Toggle switch popup based on toggle state
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Method to handle click event and speak a message based on toggle switch
    const darkModeEnableSound = () => {
        playSound(toggleClickSound); // Play the sound
        setTimeout(() => {
            speakMessage(`You are enabled dark mode.`);
        }, 1000); // Delay execution by one second 
    };

    const darkModeDisableSound = () => {
        playSound(toggleClickSound); // Play the sound
        setTimeout(() => {
            speakMessage(`You are Disabled dark mode`);
        }, 1000); // Delay execution by one second 
    };

    // PlaySound Method for make sound effect while click button and link.
    const playSound = (soundFile: string) => {
        try {
            const sound = new Audio(soundFile);
            sound.play();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };
    // Toggle state checking and throwing message and sound
    const handleDarkModeChange = () => {
        handleThemeChange();
        if (darkMode) {
            setSnackbarMessage('Dark Mode Disabled');
            darkModeDisableSound();
        } else {
            setSnackbarMessage('Dark Mode Enabled');
            darkModeEnableSound();
        }
    };

    const closeSnackbar = () => {
        setSnackbarMessage('');
    };

    return (
        // sx={{mb:4} is used for setup the pading btw header box and product images.
        <AppBar position='static' sx={{ mb: 3 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    {/* configuring Heading */}
                    <Typography variant="h6" component={NavLink}
                        to='/'
                        sx={navStyle}
                        onClick={() => playSound(headerMenuClickSound)}
                    >
                        E-Commerce Web Application
                    </Typography>

                    {/* configuring DarkMode button */}
                    <MaterialUISwitch checked={darkMode} onChange={handleDarkModeChange} />
                </Box>

                {/* configuring home,abou and contact links */}
                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyle}
                            onClick={() => playSound(headerMenuClickSound)}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    {/* configuring cart button */}
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        sx={{ mr: 2 }}
                        onClick={() => playSound(headerMenuClickSound)}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    {/* configuring login and register links */}
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyle}
                                onClick={() => playSound(headerMenuClickSound)}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

            </Toolbar>
            <Snackbar
                open={!!snackbarMessage}
                autoHideDuration={3000}
                onClose={closeSnackbar}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />

        </AppBar>
    )
}