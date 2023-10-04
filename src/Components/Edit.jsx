import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Paper, TextField } from '@mui/material'
import { useState } from 'react'

export default function Edit(props){
    const [errorTask, setErrorTask] = useState(false)

    const handleClose = () =>{
        props.setEditTask(false)
        setErrorTask(false)
    }
    const handleChange = e =>{
        props.setNameUpdate(e.target.value)
    }
    const Save = () =>{
        if(props.nameUpdate.trim().length > 0){ // Função que vai modificar o name da tarefa
            props.list.map( item =>{
                return item.key === props.userData.id ? item.name = props.nameUpdate : item.name
            })
            props.setEditTask(false)
            props.setSuccess(true)
            props.setDescription('Atualizado com sucesso!')
            setErrorTask(false)
        }
        else{
            setErrorTask(true)
        }
    }
    return(
        <>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12}>
                    <Dialog open={props.editTask} onCLose={()=>{props.setEdit(false)}} fullWidth>
                        <Paper sx={{backgroundColor: props.userData.theme, width: '100%'}}>
                            <DialogTitle textAlign={ 'center' }>{props.userData.title}</DialogTitle>
                            <DialogContent>
                                <TextField
                                type='text'
                                variant='standard'
                                label='Sua Tarefa'
                                size='normal'
                                placeholder='Edite sua tarefa'
                                fullWidth
                                value={props.nameUpdate}
                                onChange={handleChange}
                                helperText={errorTask ? 'Campo obrigatório' : ''}
                                error={errorTask}
                                sx={{
                                    '& label.Mui-focused' : {
                                        color: 'white'
                                    },
                                    '& label' : {
                                        fontWeight: 'bold'
                                    },
                                    '& .MuiInput-underline:after' : {
                                        borderBottomColor: 'white'
                                    },
                                    '&.Mui-focused fieldset' : {
                                        borderColor: 'white'
                                    }
                                }}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button variant='contained' color='success' onClick={Save}>Salvar</Button>
                                <Button onClick={handleClose} sx={{color: 'black'}}>Cancelar</Button>
                            </DialogActions>
                        </Paper>
                    </Dialog>
                </Grid>
            </Grid>
         </>

    )
}