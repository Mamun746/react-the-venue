import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Drawer } from '@material-ui/core';

const SideDrawer=(props)=> {

    return (
        <div>
            <Drawer 
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
            >
            <List component="nav">
            <ListItem button onClick={()=>{console.log('Featured')}}>
            Event start in
            </ListItem>
            <ListItem button onClick={()=>{console.log('Venue NFO')}}>
            Venue NFO 
            </ListItem>
            <ListItem button onClick={()=>{console.log('Highlight')}}>
            Highlight 
            </ListItem>
            <ListItem button onClick={()=>{console.log('Pricing')}}>
            Pricing 
            </ListItem>
            </List>


            </Drawer>
        </div>
    )
}

export default SideDrawer
