import React, { Component } from 'react';
import MyButtons from '../utils/mybuttons'
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {
    state={
        prices:[100,150,200],
        position:['Balcony','Medium','Start'],
        description:[
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        ],
        linkto:['https:/sales/b','https:/sales/m','https:/sales/s'],
        delay:[500,0,500]
    }

    showBoxes=()=>(
        
            this.state.prices.map((box,i)=>(
                <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                        {this.state.description[i]}
                        </div>
                        <div className="pricing_buttons">
                        <MyButtons 
                        text="Purchases"
                        bck="#ffa800"
                        color="White"
                        link={this.state.linkto}
                        />
                        </div>
                    </div>
                
                </div>
                
                </Zoom>
            ))
        
    )

    render() {
        return (
            <div className="bck_black">
               <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                        <div className="pricing_wrapper">
                        {this.showBoxes()}
                        </div>
               </div>
            </div>
        );
    }
}

export default Pricing;