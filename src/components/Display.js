import React from 'react'
import DateTime from './DateTime'
import PropTypes from 'prop-types';

 const  Display = (props) => (

    <div className="clock">
        { props.isDateVisible && <p className="date">{DateTime.toDateString(props.date)}</p> }
        <p className="time">{DateTime.toTimeString(props.date)}</p>
        <h1 className="text">DIGITAL CLOCK with React.js</h1>
    </div>
 );

 Display.defaultProps = {
    date: new Date(),
    isDateVisible: true
};

Display.propTypes = {
    date: PropTypes.object,
    isDateVisible: PropTypes.bool
};
   
export default Display