import './App.css';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";
import NavBar from "./components/NavBar";
import {DataGrid} from "@mui/x-data-grid";
import Grid from '@mui/material/Unstable_Grid2';

const rows = [
    {id: 1, col1: 'Hello', col2: 'World'},
    {id: 2, col1: 'DataGridPro', col2: 'is Awesome'},
    {id: 3, col1: 'MUI', col2: 'is Amazing'},
];

const columns = [
    {field: 'col1', headerName: 'Column 1', width: 150},
    {field: 'col2', headerName: 'Column 2', width: 150},
];


function App() {
    return (
        <div>
            <NavBar/>
            <Container sx={{padding: 10}}>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Card>
                            <CardContent>
                                <DataGrid rows={rows} columns={columns}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card>
                            <CardContent>
                                <DataGrid rows={rows} columns={columns}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card>
                            <CardContent>
                                <DataGrid rows={rows} columns={columns}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card>
                            <CardContent>
                                <DataGrid rows={rows} columns={columns}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
        ;
}

export default App;
