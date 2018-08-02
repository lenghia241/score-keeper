import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export default class TitleBar extends Component {
    render() {
        return(
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
                </div>    
            </div>
        );
    }
}
 
TitleBar.propTypes = {
    title: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
    title: 'Default title'
};