import '@fontsource/roboto/500.css';
import { Paper, Grid, Stack, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useState } from 'react';
import TaskList from './TaskList';

export default function Task(){

    const [task,  setTask] = useState(null)
    const [list, setlist] = useState([])

    const handleChange = e =>{ setTask(e.target.value) }

    const idTask = () => { return Math.floor(Math.random() * 3000) }

    const addTask = () => {

      if(task.trim().length > 0){
        setlist( [...list, {name: task, key: idTask()}] )
        setTask('')
      }
      else if(task.trim().length <= 0){
        console.log('sem task')
      }
    }

    return(
        <>
        <Grid item xs={12}>
            <Grid container justifyContent={'center'}>
              <Paper elevation={10} sx={{width: '50%', padding: 2, marginTop: 2, borderRadius: 2}}>
                <Stack width={'100%'} spacing={2} direction='row' alignItems={'center'}>
                  <TextField 
                  type='text' 
                  label='Tarefa' 
                  variant='standard' 
                  size='normal' 
                  fullWidth 
                  placeholder='Digite a sua tarefa'
                  name='task'
                  value={task}
                  onChange={handleChange}
                  onKeyDown={(e)=>{
                    if(e.key === 'Enter'){
                      addTask()
                    }
                  }}  />

                  <Button 
                  variant='contained' 
                  size='large' 
                  endIcon={ <SaveAltIcon fontSize='inherit' /> }
                  onClick={addTask}
                  >Salvar</Button>

                </Stack>
              </Paper>
            </Grid>
          </Grid>
          {list.length > 0 ? 
          <TaskList list={list} setList={setlist} /> : ''
          }
        </>
    )
}