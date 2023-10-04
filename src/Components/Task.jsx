import '@fontsource/roboto/500.css';
import { Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
import TaskGrid from './TaskGrid';
import Save from './Save';

export default function Task(props){

    const [task,  setTask] = useState(null) // State responsável pelo input da tarefa
    const [title, setTitle] = useState(null) // State responsável pelo input do título
    const [list, setList] = useState([]) // State do array das tarefas
    const [errorTitle, setErrorTitle] = useState(false) // State de erro do helperText do input do título
    const [errorTask, setErrorTask] = useState(false) // State de erro do helperText do input da tarefa
    const [success, setSuccess] = useState(false) // State para abrir o Component Save
    const [description, setDescription] = useState(null) // State com a descrição da mesagem do Component Save
    const bgs = ['#9f97ca', '#5d5b79', '#e4b6ad', '#e8e1c1', '#98fef9', '#c24862', '#6394ac', '#74a49f', '#cf9889', '#926277', '#785276', '#7897d6',
                 '#43588d', '#0897ff', '#1a657b', '#da5ab6', '#fa57a3', '#716c8b', '#75285b', '#0e4b9b'] // State da array das cores das tarefas
   
    const bg = () => {return bgs[Math.floor(Math.random() * bgs.length)]} // Função para voltar uma cor aleatória do backGround da tarefa
    const handleChange = e =>{ setTask(e.target.value) } // handleChange do input da tarefa
    const handleTitle = e => { setTitle(e.target.value) } // handleChange do input do título
    const idTask = () => { return Math.floor(Math.random() * 3000) } // Função para retornar um valor aleatório para tornar a id da tarefa

    const addTask = () => { // Função para verificar (se está correta) e guardar a tarefa
      if(title.trim().length > 0){
        setErrorTitle(false)
        if(task.trim().length > 0){
          setList( [...list, {name: task, key: idTask(), theme: bg(), title: title}] )
          setTask('')
          setTitle('')
          props.setOpen(false)
          setErrorTask(false)
          setSuccess(true)
          setDescription('Salvo com sucesso!')
        }
        else{ setErrorTask(true) }
      }
      else{ setErrorTitle(true) }
    }
    const handleClose = () =>{ props.setOpen(false) }

    return(
        <>
        <Save success={success} setSuccess={setSuccess} width={props.toggle} descrição={description} /> {/* Component de mesagem de erro ou sucesso */}
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
          <TaskGrid list={list} setList={setList} toggle={props.toggle} setDescription={setDescription} setSuccess={setSuccess}  />
        </>
    )
}