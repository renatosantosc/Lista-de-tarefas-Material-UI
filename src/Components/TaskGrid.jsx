import '@fontsource/roboto/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { Paper, Typography, Grid, IconButton, Card, CardContent, CardHeader, CardActions } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import View from './View';
import Delete from './Delete';
import Edit from './Edit';

export default function TaskGrid(props){

    const [open, setOpen] = useState(false)
    const [editTask, setEditTask] = useState(false)
    const [del, setDel] = useState(false)
    const [nameUpdate, setNameUpdate] = useState()
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        theme: '',
        title: ''
    })

    return(
        <Grid container>
            <Grid item xs={12} direction={'row'} >
                <Grid container spacing={2} height={props.toggle <= 535 ? 470 : 490}
                sx={{overflowX: 'hidden', overflowY: 'scroll', '&:hover':{'&::-webkit-scrollbar-thumb':{backgroundColor: 'gray'}},
                '&::-webkit-scrollbar':{width: '5px'}, '&::-webkit-scrollbar-thumb':{backgroundColor: 'transparent', borderRadius: '20px'}, '&::-webkit-scrollbar-track':{backgroundColor: 'trasnparent'}}}>
                    {props.list.map( itemObj =>{
                        return(
                            <Grid item lg={4} md={4} sm={6} xs={props.toggle <= 535 ? 12 : 6} key={itemObj.key} >
                                <Paper elevation={10} sx={{width: '100%', marginBottom: '15px'}}>
                                    <Card sx={{backgroundColor: itemObj.theme}}>
                                        <CardHeader title={<Typography fontSize={24} noWrap>{itemObj.title}</Typography>}  sx={{display: 'block', textAlign: 'center', backgroundColor: 'black', opacity: '0.4', color: 'white'}} />
                                        <CardContent>
                                            <Typography textAlign={'center'} noWrap>{itemObj.name}</Typography>
                                        </CardContent>
                                        <CardActions disableSpacing >
                                            <Grid container>
                                                <Grid item xs={4}>
                                                    <IconButton title='Visualizar' onClick={()=>{
                                                        setOpen(true)
                                                        setUserData({id: itemObj.key, name: itemObj.name, title: itemObj.title, theme: itemObj.theme})
                                                    }}> 
                                                    <VisibilityIcon /> </IconButton>
                                                </Grid>

                                                <Grid item xs={8} textAlign={'end'}>
                                                    <IconButton title='Editar' onClick={()=>{
                                                        setEditTask(true)
                                                        setNameUpdate(itemObj.name)
                                                        setUserData({id: itemObj.key, name: itemObj.name, title: itemObj.title, theme: itemObj.theme})
                                                    }}> <EditIcon   /> </IconButton>

                                                    <IconButton title='Deletar' onClick={()=>{
                                                        setDel(true)
                                                        setUserData({id: itemObj.key, name: itemObj.name, title: itemObj.title, theme: itemObj.theme})
                                                    }}> <DeleteIcon  /> </IconButton>
                                                </Grid>
                                            </Grid>
                            
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        
                        )
                    })}
                </Grid>
                <View open={open} setOpen={setOpen} userData={userData} />
                <Edit editTask={editTask} setEditTask={setEditTask} nameUpdate={nameUpdate} setNameUpdate={setNameUpdate} userData={userData} setUserData={setUserData} setList={props.setList} list={props.list} setDescription={props.setDescription} setSuccess={props.setSuccess}  />
                <Delete del={del} setDel={setDel} setList={props.setList} list={props.list} userData={userData} setDescription={props.setDescription} setSuccess={props.setSuccess}  />
            </Grid>
        </Grid>
        
    )
}