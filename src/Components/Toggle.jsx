import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Drawer, Link, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, Fragment } from 'react'

export default function Toggle(props){

    const [toggle, setToggle] = useState(false) // State que vai abrir o toggle (Menu lateral)
    const toggleDrawer = (anchor, open) => e =>{
        if(e.type === 'Tab'){
            return;
        }
        setToggle({ ...toggle, [anchor] : open });
    };
    const list = (anchor) =>(
        <Box
        sx={{ width: 250}}
        role='presentation'
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{
                backgroundColor: props.mode ? '#e2e2e2' : '#262d35', 
                height: '100vh'
                }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ color: props.mode ? '#262d35' : '#e3eae9' }} onClick={()=>{ props.setMode(!props.mode) }}>
                            <ListItemIcon> {props.mode 
                                ? <DarkModeIcon sx={{ color: props.mode ? '#262d35' : '#e3eae9' }}/> 
                                : <LightModeIcon sx={{ color: props.mode ? '#262d35' : '#e3eae9' }}/> } 
                            </ListItemIcon>
                            <ListItemText primary={'Dark/Light'} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <Link href='https://github.com/renatosantosc' underline='none' target='_blank' rel='noopener' sx={{width: '100%'}} >
                            <ListItemButton sx={{ color: props.mode ? '#262d35' : '#e3eae9' }}>
                                <ListItemIcon> <GitHubIcon sx={{ color: props.mode ? '#262d35' : '#e3eae9' }} /> </ListItemIcon>
                                <ListItemText primary={'GitHub'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
            </List>
        </Box>
    )
    return(
        <Grid item lg={4} md={4} sm={4} xs={4} textAlign={'end'} >
            {['right'].map((anchor) => (
                <Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}> 
                        <IconButton sx={{ color: props.mode ? '#262d35' : '#e3eae9' }}> 
                            <MenuIcon /> 
                        </IconButton> 
                    </Button>
                    <Drawer 
                    anchor={anchor}
                    open={toggle[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </Grid>
    )
}