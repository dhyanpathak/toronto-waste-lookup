import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailedListItem from './DetailedListItem';
import { Grid, Row } from 'react-bootstrap';

class DetailedList extends Component {
    //Output results state from search_reducer 
    render() {
        return (
            <Grid className="list">
                {
                    this.props.search ?
                        this.props.search.map((item, index) => {
                            //If result item is in favouriteItem array in props, pass true to favourited prop in DetailedListItem
                            if(this.props.favouriteItem.includes(item)) {
                                return (
                                    <DetailedListItem 
                                        key={index}
                                        item={item}
                                        favouriteBtn={true}
                                        favourited={true}
                                    />
                                )
                            } else {
                                return (
                                    <DetailedListItem 
                                        key={index}
                                        item={item}
                                        favouriteBtn={true}
                                        favourited={false}
                                    />
                                )
                            }
                            
                        })
                    :
                    <Row></Row>
                }
                
            </Grid>
        )
    }
};

function mapStateToProps(state) {
    return state;
};

export default connect(mapStateToProps, null)(DetailedList);