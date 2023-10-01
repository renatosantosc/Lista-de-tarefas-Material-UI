import '@fontsource/roboto/500.css';
import { Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Alert, Button, Collapse, Box } from '@mui/material'
import { useState } from 'react';
import TaskGrid from './TaskGrid';

export default function Task(props){

    const [task,  setTask] = useState(null)
    const [title, setTitle] = useState(null)
    const [list, setList] = useState([])
    const [errorTitle, setErrorTitle] = useState(false)
    const [errorTask, setErrorTask] = useState(false)
    const [success, setSuccess] = useState(false)
    const bgs = ['#9f97ca', '#5d5b79', '#e4b6ad', '#e8e1c1', '#98fef9', '#c24862', '#6394ac', '#74a49f', '#cf9889', '#926277', '#785276', '#7897d6',
                 '#43588d', '#0897ff', '#1a657b', '#da5ab6', '#fa57a3', '#716c8b', '#75285b', '#0e4b9b']
   
    const bg = () => {return bgs[Math.floor(Math.random() * bgs.length)]}
    const handleChange = e =>{ setTask(e.target.value) }
    const handleTitle = e => { setTitle(e.target.value) }
    const idTask = () => { return Math.floor(Math.random() * 3000) }

    const addTask = () => {
      if(title.trim().length > 0){
        setErrorTitle(false)
        if(task.trim().length > 0){
          setList( [...list, {name: task, key: idTask(), theme: bg(), title: title}] )
          setTask('')
          setTitle('')
          props.setOpen(false)
          setErrorTask(false)
          setSuccess(true)
        }
        else{ setErrorTask(true) }
      }
      else{ setErrorTitle(true) }
    }
    const handleClose = () =>{ props.setOpen(false) }

    return(
        <>
        <Grid item xs={12} >
          <Grid container justifyContent={'center'} >
            <Box sx={{width: props.toggle >= 535 ? '50%' : '100%', marginTop: '7px', marginBottom: '10px'}}>
              <Collapse in={success}>
                <Alert onClose={success} severity='success' sx={{width: '90%'}} action={
                  <Button onClick={()=>{ setSuccess(false) }}> X </Button> }>
                  Salvo com sucesso
                </Alert>
              </Collapse>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            <Grid container justifyContent={'center'}>
                <Dialog open={props.open} onClose={handleClose} sx={{padding: 2}}>
                  <DialogTitle textAlign={'center'}>Crie sua tarefa</DialogTitle>
                  <DialogContent>

                  <TextField sx={{marginBottom: 1}}
                    type='text' 
                    label='Título' 
                    variant='standard' 
                    required
                    size='normal' 
                    fullWidth 
                    placeholder='Digite o título da tarefa'
                    name='title'
                    value={title}
                    onChange={handleTitle}
                    helperText={errorTitle ? 'Campo obrigatório' : ''}
                    error={errorTitle}
                    autoComplete='off'
                      />

                    <TextField
                    type='text' 
                    label='Tarefa' 
                    variant='standard' 
                    required
                    size='normal' 
                    fullWidth 
                    placeholder='Digite a sua tarefa'
                    name='task'
                    value={task}
                    onChange={handleChange}
                    helperText={errorTask ? 'Campo obrigatório' : ''}
                    error={errorTask}
                    autoComplete='off'
                      />
                  </DialogContent>

                  <DialogActions sx={{marginBottom: 1}}>
                    <Button 
                    variant='contained' 
                    size='normal' 
                    onClick={addTask}
                    >Salvar</Button>

                    <Button onClick={handleClose}>Fechar</Button>
                  </DialogActions>
                </Dialog>
            </Grid>
          </Grid>
          <TaskGrid list={list} setList={setList} toggle={props.toggle} />
        </>
    )
}