import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Grid, Paper } from '@mui/material';


export default function Sidebar() {
    return (

        <Grid component={Paper} marginTop={'2px'} height={'92.4vh'} width={'33vh'}>
            <List>
               
                {['IconPendingFailedExports.svg', 'Planned Asset Inventory', 'Asset Transfers', 'Planned Inventtory Report', 'Third Party Physical Location', 'Assets Hierarchy'].map((text, index) => (
                    <ListItem key={text}>
                        <ListItemButton>

                            {text}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Grid>

    );
}

