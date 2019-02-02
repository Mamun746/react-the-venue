import React from 'react'
import Carrousel from './carrousel'
import TimeUnTill from './timeUnTil'
const Featured=()=>{
    return (
        <div style={{position:'relative'}}>

        <Carrousel/>

        <div className="artist_name">
        <div className="wrapper">
        MAKKUS BIRTHDAY
        </div>
        
        </div>
        <TimeUnTill/>
            
        </div>
    )
}

export default Featured
