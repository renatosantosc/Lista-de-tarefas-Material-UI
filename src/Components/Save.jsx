import '@fontsource/roboto/500.css';
import { Grid, Alert, IconButton, Collapse, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Save(props){
    return(
        <>
           <Grid item xs={12} >
                <Grid container justifyContent={'center'} >
                    <Box sx={{
                        width: props.width >= 560 ? '50%' : '100%', 
                        marginTop: '7px', 
                        marginBottom:'20px'}}
                    >
                    <Collapse in={props.success} >
                        <Alert onClose={props.success} severity='success' sx={{
                            width: '92%', 
                            alignItems: 'center', 
                            fontSize: '1.1rem'
                        }} action={
                        <IconButton onClick={()=>{ props.setSuccess(false) }}> 
                            <CloseIcon sx={{marginBottom: '6px'}}/> 
                        </IconButton> }>
                            {props.descrição}
                        </Alert>
                    </Collapse>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}