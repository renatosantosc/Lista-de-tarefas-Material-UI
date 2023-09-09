import '@fontsource/roboto/700.css';
import { Paper, Typography, Grid, Stack, List, ListItem } from '@mui/material'

export default function TaskList(props){

    return(
        <>
            <Grid item xs={12} direction={'column'}>
                <Grid container justifyContent={'center'} direction={'column'} alignItems={'center'} >
                <Typography variant='h5' color='white' width={'50%'} textAlign={'center'} fontWeight={'bold'} letterSpacing={1} >Lista de tarefas</Typography>
                    <List sx={{ width: '50%', maxHeight: 380, overflowX: 'hidden', overflowY: 'hidden', ':hover':{overflowY: 'scroll'},
                            '&::-webkit-scrollbar':{width: '8px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: 'gray', borderRadius: '20px'}, '&::-webkit-scrollbar-track':{backgroundColor: 'trasnparent'}}} > 
                        {props.list.map( itemObj => {
                            return (
                                <ListItem key={itemObj.key}>
                                    <Paper elevation={10} sx={{width: '100%', padding: 2, marginTop: 2, borderRadius: 2, backgroundColor: '#e2e2e2'}}>
                                        <Stack width={'100%'} spacing={2} direction='row' alignItems={'center'}>
                                            <Typography variant='body1'>
                                                {itemObj.name}
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
        </>
    )
}