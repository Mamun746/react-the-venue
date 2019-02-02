import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.4427803454746!2d90.3520642!3d23.7672421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09ed6266187%3A0x9e84a0fa9bdec67e!2sShekhertek+Bazar!5e0!3m2!1sen!2sbd!4v1547099764983"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;