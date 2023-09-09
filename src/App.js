import './App.css';
import '@fontsource/roboto/500.css';
import { Container, Grid } from '@mui/material'
import Task from './Components/Task';
// import TaskList from './Components/TaskList';

function App() {
  return (
    <>
      <Container maxWidth='lg' sx={{backgroundColor: 'transparent', justifyContent: 'center', height: '100vh'}}>
        <Grid container spacing={8}>        
          <Task />
          {/* <TaskList /> */}
        </Grid>
      </Container>
    </>
  );
}

export default App;
