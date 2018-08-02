import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


import {Players, calculatePlayersPosition} from '../imports/api/players';
import App from '../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort:{score: -1}} ).fetch() ;
        let title = 'Score Keeper';
        let positionedPlayers = calculatePlayersPosition(players);
        ReactDOM.render(<App players={positionedPlayers} title={title}/> , document.querySelector('#app'));
    }); 
});
    
