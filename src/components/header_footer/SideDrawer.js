import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Drawer } from '@material-ui/core';
import {scroller} from 'react-scroll'

const SideDrawer=(props)=> {

    const scrollerToElements=(element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-150
        })
        props.onClose(false)
    }

    return (
        <div>
            <Drawer 
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
            >
            <List component="nav">
            <ListItem button onClick={()=>scrollerToElements('feature')}>
                Event start in
            </ListItem>
            <ListItem button onClick={()=>scrollerToElements('venueinfo')}>
                Venue NFO 
            </ListItem>
            <ListItem button onClick={()=>scrollerToElements('highlight')}>
                 Highlight 
            </ListItem>
            <ListItem button onClick={()=>scrollerToElements('pricing')}>
                Pricing 
            </ListItem>
            <ListItem button onClick={()=>scrollerToElements('location')}>
                Location 
            </ListItem>
            <ListItem button onClick={()=>scrollerToElements('footer')}>
            Footer
            </ListItem>
            </List>


            </Drawer>
        </div>
    )
}

export default SideDrawer
