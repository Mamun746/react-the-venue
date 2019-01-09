import React from 'react'
import './style/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured/index'

class App extends React.Component{
    render(){
        return(
            <div style={{height:'1500px',background:'cornflowerblue'}}>
            
            <Header/>
            <Featured/>
            
            </div>
        )
    }
}
export default App;