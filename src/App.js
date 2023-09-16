import './App.css';
import '@fontsource/roboto/500.css';
import { Container, Grid, Box, Paper, Typography, IconButton, Button, Link } from '@mui/material'
import { useState } from 'react'
import Task from './Components/Task';
import CreateIcon from '@mui/icons-material/Create';
import GitHubIcon from '@mui/icons-material/GitHub';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AssignmentIcon from '@mui/icons-material/Assignment';

function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(true)
  }
  return (
    <>
      <Container maxWidth='lg' sx={{backgroundColor: 'transparent', justifyContent: 'center', height: '100vh', overflowY: 'hidden'}}>
        
        <Box width={'100%'} sx={{height: 50}} >
          <Paper elevation={10} sx={{backgroundColor: 'transparent', padding: 1}} >
            <Grid container spacing={2} alignItems={'center'}>
              <Grid item lg={1} md={1} sm={1} xs={2} >
                <AssignmentIcon fontSize='large' sx={{color: 'white'}} />
              </Grid>

              <Grid item lg={2} md={2} sm={2} xs={3}textAlign={'start'}>
                <Typography fontSize={14} sx={{color: 'white'}} >Lembre de suas tarefas</Typography>
              </Grid>

              <Grid item lg={9} md={9} sm={9} xs={7} textAlign={'end'}>
                <Link href='https://github.com/renatosantosc' underline='none' target='_blank' rel='noopener'>
                  <IconButton> <GitHubIcon sx={{color: 'white'}} /> </IconButton>
                </Link>
                <IconButton> <LightModeIcon sx={{color: 'white'}} /> </IconButton>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Grid container justifyContent={'center'} marginTop={5} marginBottom={3}>
              <Button variant='contained' startIcon={ <CreateIcon fontSize='inherit' /> } onClick={handleOpen}>Escrever</Button>
            </Grid>
          </Grid>
        </Grid>
        <Task open={open} setOpen={setOpen} />
      </Container>
    </>
  );
}

export default App;
