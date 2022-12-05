// import React from 'react'
// import './Home.css'
// import { Button, Grid, Paper } from '@material-ui/core'
// import { Box } from '@mui/material';

// let nome = 'Gabriel'

// function Home() {
//     return (
//         <div>
//             <h1 className='cor-fonte'> Esse é meu texto. </h1>
//             <h2 className='cor-fonte'>{nome}</h2>
//             <p> Turma 02. </p>
//         </div>
//     ); Exemplo feito na primeira aula.


//     <>
//         <Grid container spacing={2}>
//             <Grid item xs={12} sm={8}>
//                 <Paper style={{ height: "100vh", background: "lightgrey" }} />
//             </Grid>

//     //         <Grid item container direction='column' xs={12} sm={4} spacing={2}>
//     //             <Grid item>
//     //                 <Paper style={{ height: "49vh", background: "orange" }} />
//     //             </Grid>
//     //             <Grid item>
//     //                 <Paper style={{ height: "49vh", background: "green" }} />
//     //             </Grid>
//     //         </Grid>

//     //     </Grid> Exemplo de grid
//     // </>


//     <>
//         <Paper>
//         <Box p={2}>
//             <Box display='flex' justifyContent='center'>
//                 <h1> Meu título </h1>
//             </Box>
//             <img src="https://ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_96x96.png" alt="" style={{width: "100", height: "100%"}}/>
//             <Box display='flex' justifyContent='center' p={2}>
//                 <Button variant='contained' color='primary'> Texto </Button>
//                 <Button variant='contained' color='secondary'> Texto </Button>
//             </Box>
//         </Box>
//         </Paper>

//         exemplo de display-flex (flex-box)
//     </>
//     );
// }

// export default Home;

import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;