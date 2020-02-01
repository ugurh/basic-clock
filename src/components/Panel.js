import PropTypes from 'prop-types';
import React from 'react';

const Panel = (props) => {
    return (
        <div className="container">
            <h2></h2>
            <div className="d-flex flex-row">
                <div className="col-md-1 mx-auto">
                

                    <div className="panel"> 
                        <label className="switch">
                            <input type="checkbox" checked={props.dateOn} onChange={props.toggleDate}/>
                            <span class="slider"></span>
                        </label>                     
                    </div>
                </div>
            </div>
        </div>
    );
};

Panel.defaultProps = {
    dateOn: true,
    toggleDate: () => {},
};

Panel.propTypes = {
    dateOn: PropTypes.bool,
    toggleDate: PropTypes.func
};

export default Panel;
