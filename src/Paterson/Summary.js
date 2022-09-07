import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TableHead } from '@mui/material';
import { Grid, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, asd) {
    return { name, asd };
}

const rows = [
    createData('Site', 'MID-Midland IO',),
    createData('Asset', '00160R',),
    createData('Description', 'Rig00160R',),
    createData('Type', 'Rig',),
    createData('Location', 'Midland texas',),
    createData('Area', 'Yard',),
    createData('Parent Asset', '',),
    createData('External ID', 16021,),
    createData('Manufacturer',),
    createData('Model', '',),
    createData('Manufacturers Serial Number', '',),
    createData('Category', 'DrillingParent.Rig',),
    createData('Maintainable', 'Yes',),


];
function location(name, asd) {
    return { name, asd };
}

const rows1 = [
    location('Status', 'Resides in stores',),
    location('Owner', [50173],),
    location('Accounting Class', 'MID AC',),
    location('Crirticality', 'High',),
    location('Install Date', 9 / 10 / 2010,),
    location('Condition',),
    location('ahName', 'PDC Master',),
    location('Modified Date', '9/19/2021 12:10 AM',),

];
function Item(name, asd) {
    return { name, asd };
}

const rows2 = [
    Item('Item', 'Rig',),
    Item('Description', 'Rig',),
    Item('Item Type', 'AG',),
    Item('Asset Type', 'Asset Group',),


];
function Tracking(name, asd) {
    return { name, asd };
}

const rows3 = [
    Tracking('Area', 'Yard',),
    Tracking('RFID', 'e00401508dae3711',),
    Tracking('Sub-inventory', '00160R',),
    Tracking('Locator', '00160R',),
    Tracking('Includ in Inventory', 'True',),
    Tracking('Inventory Type', '',),
    Tracking('Inventory Date', '',),


];

export default function Summary() {
    return (
        <Box style={{ width: '100%', height: '100%' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 0.5 }}>

                <Grid component={Paper} sm={12} md={12} xs={12} lg={12} sx={{ alignContent: "center", height: '4vh', background: '#111343', borderBottomLeftRadius: '0px !important', borderBottomRightRadius: '0px !important' }}>
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block', color: 'white' } }}>
                        Asset:00160R - Rig 00160
                    </Typography>
                </Grid>
                <Grid component={Paper} sm={12} md={12} xs={12} lg={12} elevation={8} sx={{ alignContent: "center", background: 'white', borderRadius: '0px !important', marginBottom: '2px' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="small" color="primary"                        >
                            Summary
                        </IconButton>
                        <Toolbar />
                        <IconButton size="small" color="inherit">
                            Sub-Assemblies
                        </IconButton>
                        <Toolbar />
                        <IconButton size="small" color="inherit">
                            Meters
                        </IconButton>
                        <Toolbar />
                        <IconButton size="small" color="inherit">
                            History
                        </IconButton>
                    </Box>

                </Grid>

                <Grid component={Paper} sm={6} md={6} xs={6} lg={6} style={{ display: 'flex' }}>
                    <Grid sx={{ width: '50vh' }}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Asset</TableCell>
                                </TableRow> 
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <TableCell align="left">{row.asd}</TableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Toolbar />
                    <Grid sx={{ width: '40vh' }}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Location</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows1.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <TableCell align="left">{row.asd}</TableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Toolbar />
                    <Grid >
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows2.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <TableCell align="left">{row.asd}</TableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid >
                    <Toolbar />
                    <Grid sx={{ width: '35vh' }}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tracking</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows3.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <TableCell align="left">{row.asd}</TableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>

                </Grid>

            </Box>
        </Box>
    );
}
