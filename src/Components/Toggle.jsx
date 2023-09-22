import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Drawer } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState, Fragment } from 'react'

export default function Toggle(props){

    const [toggle, setToggle] = useState(false)
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
            <List sx={{backgroundColor: props.mode ? '#e2e2e2' : '#262d35', height: '100vh'}}>
                {['Github', 'Dark/Light'].map((text, index) =>(
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon> {index % 2 === 0 ? <GitHubIcon /> : <LightModeIcon />} </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return(
        <Grid item lg={4} md={4} sm={4} xs={4} textAlign={'end'} >
            {['right'].map((anchor) => (
                <Fragment>
                    <Button onClick={toggleDrawer(anchor, true)}>X</Button>
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