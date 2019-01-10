import React from 'react';
import Button from '@material-ui/core/Button'
import ticket_icon from '../../resources/images/icons/ticket.png'

const Mybuttons = (props) => {
    return (
        <Button
        href={props.link}
        variant="contained"
         size="small"
         style={{
             background:props.bck,
             color:props.color
         }}
        >
        <img 
        src={ticket_icon}
        className="iconImage"
        alt="Icon"/>
        {props.text}
        
        </Button>
    );
};

export default Mybuttons;