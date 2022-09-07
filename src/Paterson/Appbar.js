import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge, Grid, ListItem, ListItemAvatar, ListItemText,Toolbar } from '@mui/material';
import NotificationIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export default function Appbar() {
    return (
        <>
            <Grid sm={12} md={12} xs={12} lg={12} xl={12} sx={{}}>
                <AppBar position="static" style={{ background: '#111343' }}>

                    <Grid sm={12} md={12} xs={12} lg={12} xl={12} display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
                        <Grid sm={12} md={12} xs={12} lg={12} xl={12} justifyContent='space-between' display='flex' alignItems='center' flexDirection='row' >
                           
                            <Typography variant="h6" color="inherit" component="div" fontSize='bold' >
                                PATTERSON-UTI
                            </Typography>
                            
                            <IconButton edge="start" color="inherit" aria-label="menu" >
                                <MenuIcon />
                            </IconButton>
                        </Grid>


                        <Grid sm={6} md={6} xs={6} lg={6} xl={6} display='flex' justifyContent='end' alignItems='center' flexDirection='row'  >
                            <Typography sx={{ m: 'auto' }} edge='start' variant="h6" component="div">
                                Dashboard
                            </Typography>
                            <Toolbar />
                            <Typography sx={{ m: 'auto' }} edge='start' variant="h6" component="div">
                                Maintaince
                            </Typography>
                            <Toolbar />
                            <Typography sx={{  borderBottom: "3px solid red" }} edge='start' variant="h6" component="div">
                                Assets
                            </Typography>
                            <Toolbar />
                            <Typography sx={{ m: 'auto' }} edge='start' variant="h6" component="div">
                                Sites
                            </Typography>
                            <Toolbar />
                            <Typography sx={{ m: 'auto' }} edge='start' variant="h6" component="div">
                                Admin
                            </Typography>
                            <Toolbar />
                            <IconButton sx={{ m: 'auto' }} size="large" color='inherit'>
                                <Badge color='error'>
                                    <NotificationIcon />
                                </Badge>
                            </IconButton>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>
                                <ListItemText sx={{ textColor: 'white' }} secondaryTypographyProps={{ sx: { color: 'white' } }} primary='Bill Horton' secondary='Manager'/>
                                <ArrowDropDownIcon sx={{ ml: '5px' }} />
                                
                            </ListItem>
                            <SettingsOutlinedIcon />

                        </Grid>
                    </Grid>


                </AppBar>
            </Grid>
        </>
    );
}
