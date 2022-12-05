import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './CadastroUsuario.css'

function CadastroUsuario () {
    return (

        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto'>Cadastre-se</Typography>
                        <TextField id='nome' label='Nome' variant="outlined" name='nome' margin='normal' fullWidth/>
                        <TextField id='usuario' label='Usuário' variant="outlined" name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='Senha' variant="outlined" name='senha' type='password' margin='normal' fullWidth/>
                        <TextField id='confirmarsenha' label='Confirme sua senha' variant="outlined" name='confirmarsenha' margin='normal' type='password' fullWidth/>
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login' className='text-decorator-none'>
                        <Button variant="contained" color="primary" className='btnCancelar'>
                            Cadastrar
                        </Button>
                        </Link>
                        <Button type='submit' variant="contained" color="secondary">
                            Cancelar
                        </Button>
                        
                    </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
        
    )
}

export default CadastroUsuario;