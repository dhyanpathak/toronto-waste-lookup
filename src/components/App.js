import React, { Component } from 'react';

import Header from './common/Header';
import SearchWaste from './SearchWaste';
import DetailedList from './common/DetailedList';
import FavouriteDetailedList from './common/FavouriteDetailedList';

import '../styles.css';

//Main app layout consists of header, waste lookup search bar, results view, favourites view

class App extends Component {
    render () {
        return (
            <div>
                <Header title="Toronto Waste Lookup"/>
                <SearchWaste />
                <DetailedList />
                <FavouriteDetailedList /> 
            </div>
        )
    }
}

export default App;