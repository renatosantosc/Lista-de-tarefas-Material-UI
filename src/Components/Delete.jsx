import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, Paper } from '@mui/material'


export default function Delete(props){

    const Delete = key =>{ // Função que deleta (filtra) a tarefa selecionada
       const del = props.list.filter ( itemObj =>{
            return itemObj.key !== key
        })
        props.setList(del)
        props.setDel(false)
        props.setSuccess(true)
        props.setDescription('Excluído com sucesso!')
    }

    return(
        <>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12}>
                    <Dialog open={ props.del } onClose={()=>{ props.setDel(false) }} fullWidth>
                        <Paper sx={{ backgroundColor: props.userData.theme, width: '100%' }}>
                            <DialogTitle textAlign={ 'center' }>Deseja excluir ?</DialogTitle>
                            <Divider />
                            <DialogContent>
                                <Typography textAlign={'center'} fontWeight={'bold'} fontSize={'1.2rem'}>{props.userData.title}</Typography>
                                <Typography textAlign={'center'}>{ props.userData.name }</Typography>
                            </DialogContent>

                            <DialogActions sx={{marginTop: 2}}>
                                <Button variant='contained' onClick={()=>{Delete( props.userData.id) }} color='error'>Excluir</Button>
                                <Button onClick={()=>{ props.setDel(false) }} sx={{ color: 'black' }}>Cancelar</Button>
                            </DialogActions>
                        </Paper>
                    </Dialog>
                </Grid>
            </Grid>
        </>
    )
}