import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.4461809809764!2d88.59495891545707!3d24.365777284289692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa84f47a15f%3A0x859614eb297b77ea!2sRajshahi+Collegiate+School!5e0!3m2!1sen!2sbd!4v1548510446618" width="100%" height="500px" frameBorder="0"  allowFullscreen></iframe>
            
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;