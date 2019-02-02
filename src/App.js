import React from 'react'
import './style/styles.css'
import { Element } from 'react-scroll'
import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueNfo from './components/venue-info/index'
import Highlight from './components/highlight/index'
import Pricing from './components/pricing/index'
import Location from './components/location/index'
import Footer from './components/header_footer/footer'

class App extends React.Component {
    render() {
        return (
            <div style={{ height: '1500px' }}>

                <Header />
                <Element name="feature">
                    <Featured />
                </Element>

                <Element name="venueinfo">
                    <VenueNfo />
                </Element>
                <Element name="highlight">
                    <Highlight />
                </Element>
                <Element name="pricing">
                    <Pricing />
                </Element>
                <Element name="location">
                    <Location />
                </Element>
                <Element name="footer">
                    <Footer />
                </Element>


            </div>
        )
    }
}
export default App;