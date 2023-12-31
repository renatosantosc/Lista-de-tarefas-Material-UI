import './App.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Grid, Box, Paper, Typography, IconButton, Button, Link } from '@mui/material'
import { useState } from 'react'
import Task from './Components/Task';
import Toggle from './Components/Toggle';
import CreateIcon from '@mui/icons-material/Create';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AssignmentIcon from '@mui/icons-material/Assignment';

function App() {
  const [open, setOpen] = useState(false) // state para abrir o Component Task
  const [mode, setMode] = useState(false) // state para a troca de modo (Dark/light)
  const [toggle, setToggle] = useState(window.innerWidth) // state para verificar a largura da tela
  const handleOpen = () =>{ setOpen(true) } // Função para abrir o Component Task
  const handleMode = () =>{ setMode(!mode) } // Função para alterar o modo
  const width = () =>{ setToggle(window.innerWidth) } 
  setInterval(width, 1000) // A cada 1 segundo o sistema olha a largura da página e atualiza o state (toggle)

  return (
    <Box sx={{
      width: '100vw', 
      heidht: '100vh', 
      backgroundColor: mode ? '#e2e2e2' : '#262d35'}}>

      <Container maxWidth='lg' 
      sx={{
        backgroundColor: 'transparent', 
        justifyContent: 'center', 
        height: '100vh', 
        overflowY: 'hidden'}}>
        
        <Box width={'100%'}  > {/* Box responsável pelo header da página */}
          <Paper elevation={10} sx={{backgroundColor: 'transparent', padding: 1}} >
            <Grid container spacing={2} alignItems={'center'}>

              <Grid item lg={4} md={4} sm={4} xs={4} >
                <AssignmentIcon 
                fontSize='large' 
                sx={{color: mode ? '#262d35' : '#e3eae9'}} 
                textAlign={'start'} />
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={4} textAlign={'center'}>
                <Typography 
                  fontSize={16} 
                  fontWeight={'bold'} 
                  fontFamily={'verdana'} 
                  sx={{color: mode ? '#262d35' : '#e3eae9'}} 
                  >Lembre de suas tarefas</Typography>
              </Grid>
              
              {toggle < 560 ? <Toggle mode={mode} setMode={setMode} /> :
              <Grid item lg={4} md={4} sm={4} xs={4} textAlign={'end'}>

                <Link href='https://github.com/renatosantosc' underline='none' target='_blank' rel='noopener'>
                  <IconButton> 
                    <GitHubIcon sx={{color: mode ? '#262d35' : '#e3eae9'}} /> 
                  </IconButton>
                </Link> 

                <IconButton>
                  {mode ? <DarkModeIcon sx={{color: mode ? '#262d35' : '#e3eae9'}} onClick={handleMode}/> 
                  : <LightModeIcon sx={{color: mode ? '#262d35' : '#e3eae9'}} onClick={handleMode} /> } 
                </IconButton>

                <Link href='https://icons8.com' underline='none' target='_blank' rel='noopener'>
                  <Button 
                  sx={{
                    borderRadius: '10px',
                    backgroundColor: mode ? '#262d35' : '#e3eae9',
                    color: mode ? '#e3eae9' : '#262d35',
                    '&:hover':{color: mode ? '#262d35' : '#e3eae9'}
                  }}
                  >Icons8</Button>
                </Link>

              </Grid>
              }
            </Grid>
          </Paper>
        </Box>

        <Grid container>
          <Grid item xs={12}>
            <Grid container justifyContent={'center'} marginTop={3} marginBottom={2} >
              <Button variant='contained' startIcon={ <CreateIcon fontSize='inherit' /> } onClick={handleOpen}>Escrever</Button>
            </Grid>
          </Grid>
        </Grid>
        <Task open={open} setOpen={setOpen} toggle={toggle} />
      </Container>
    </ Box>
  );
}
export default App;
