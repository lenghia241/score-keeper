import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

export default class App extends Component {
    render() {
        const {title, players} = this.props;
        return(
            <div>
                <TitleBar title={title} subtitle="Created by Le Nghia"/>
                <div className="wrapper">
                <PlayerList players={players}/>
                <AddPlayer />
                </div>
                
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};
