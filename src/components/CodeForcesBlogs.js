import * as React from 'react';

import { Box, List, ListItem, ListItemText, Divider, ListSubheader } from '@material-ui/core'
// import ListSubheader from '@material-ui/core/ListSubheader';
export default function CodeForcesBlogs(props) {
    const listChildern = props.blogList.map(link => {
        return (
            <ListItem disablePadding key={link.title}>
                <ListSubheader component="a" href={link.url}>
                    <ListItemText primary={link.title} />
                </ListSubheader>
                <Divider />
            </ListItem>
        )
    })
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            <nav aria-label="secondary mailbox folders">
                {listChildern.length === 0 ? <h3>No blog entries found</h3> : <h3>Blog Entries</h3>}
                <List>
                    {listChildern}
                </List>
            </nav>
        </Box>
    );
}
