import React, { Component } from 'react';
import { connect } from 'react-redux';

import DetailedListItem from './DetailedListItem';

//Render favouriteItem array from this.props into DetailedListItem components

class FavouriteDetailedList extends Component {
    render() {
        return (
            <div className="favourites">
                <h4 style={{ fontWeight: 700, marginLeft: '5%', color: '#239960' }}>Favourites</h4>
                {
                    this.props.favouriteItem ?

                        this.props.favouriteItem.map((item, index) => {
                            return (
                                <DetailedListItem
                                    key={index}
                                    item={item}
                                    favouriteBtn={true}
                                    favourited={true}
                                />
                            )
                        })
                    :
                    <div></div>
                }
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        favouriteItem : state.favouriteItem
    }
}

export default connect(mapStateToProps, null)(FavouriteDetailedList);