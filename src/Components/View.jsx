import { Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Divider, Paper } from '@mui/material'

export default function View(props){

    const handleClose = () =>{
        props.setOpen(false)
    }
    return (
        <>
        <Grid container justifyContent={'center'}>
            <Grid item xs={12}>
                <Dialog open={props.open} onClose={handleClose} fullWidth >
                    <Paper sx={{backgroundColor: props.userData.theme, width: '100%'}}>
                        <DialogTitle textAlign={ 'center' }>{props.userData.title}</DialogTitle>
                        <Divider />
                        <DialogContent>
                            <Typography textAlign={'center'}>{props.userData.name}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} sx={{color: 'black'}}>Fechar</Button>
                        </DialogActions>
                    </Paper>
                </Dialog>
            </Grid>
        </Grid>
            
        </>
    )
}