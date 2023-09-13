import '@fontsource/roboto/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { Paper, Typography, Grid, IconButton, Card, CardContent, CardHeader, CardActions } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskGrid(props){
    return(
        <Grid item xs={12} direction={'row'} marginBottom={5} >
            <Grid container spacing={4} marginTop={1}
            sx={{height: 470, overflowX: 'hidden', overflowY: 'scroll', '&:hover':{'&::-webkit-scrollbar-thumb':{backgroundColor: 'gray'}},
            '&::-webkit-scrollbar':{width: '5px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: 'transparent', borderRadius: '20px'}, '&::-webkit-scrollbar-track':{backgroundColor: 'trasnparent'}}}>
                {props.list.map( itemObj =>{
                    return(
                        <Grid item lg={4} md={6} sm={6} xs={12}>
                            <Paper elevation={10} wid sx={{width: '100%'}}>
                                <Card sx={{backgroundColor: itemObj.theme}}>
                                    <CardHeader title={<Typography fontSize={24} noWrap>{itemObj.title}</Typography>}  sx={{display: 'block', textAlign: 'center', backgroundColor: 'black', opacity: '0.4', color: 'white'}} />
                                    <CardContent>
                                        <Typography textAlign={'center'} noWrap>{itemObj.name}</Typography>
                                    </CardContent>
                                    <CardActions disableSpacing >
                                        <Grid container>
                                            <Grid item xs={4}>
                                                <IconButton title='Visualizar'> <VisibilityIcon /> </IconButton>
                                            </Grid>

                                            <Grid item xs={8} textAlign={'end'}>
                                                <IconButton title='Editar'> <EditIcon   /> </IconButton>
                                                <IconButton title='Deletar'> <DeleteIcon  /> </IconButton>
                                            </Grid>
                                        </Grid>
                        
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
        
    )
}