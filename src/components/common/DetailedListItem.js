import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';
import { Glyphicon, Row, Col } from 'react-bootstrap';
import { favouriteItem } from '../../actions';

class DetailedListItem extends Component {
    //Initally set state to favourited props before render
    componentWillMount() {
        this.setState({ favourited : this.props.favourited })
    }
    //Toggle correct favourited state from new props after update
    componentDidUpdate(prevProps) {
        if(prevProps.favourited !== this.props.favourited) {
            this.setState({ favourited : this.props.favourited })
        }
    }
    //Favourite toggle function that sets state and launches favouriteItem action
    favourite(item) {
        this.props.favouriteItem(item);
        this.setState(prevState => ({ favourited: !prevState.favourited }));
    }
    //item.body contains escaped html characters, this function unescapes them
    //DOMPurify is used to prevent XSS attacks by sanitizing item.body before it gets passed into InnerHTML of element
    htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = DOMPurify.sanitize(input);
        return e.childNodes[0].nodeValue;
    }
    render() {
        let { item } = this.props;
        return (
            <Row className="item">
                <Col className="item-title" md={6}> {
                    //Show favourite button if true
                    this.props.favouriteBtn ?
                        this.state.favourited ?
                        //Set color to green if favourited, grey otherwise
                            <Glyphicon glyph="glyphicon glyphicon-star" style={{ color: '#239960', fontSize: 17 }} onClick={() => this.favourite(item)} />
                        :
                            <Glyphicon glyph="glyphicon glyphicon-star" style={{ color: '#A9A9A9', fontSize: 17 }} onClick={() => this.favourite(item)}/>
                    :
                        <div></div> 
                }{' '+item.title}</Col>
                <Col className="item-detail" md={6} dangerouslySetInnerHTML={{ __html: this.htmlDecode(item.body) }}></Col>
            </Row>
        )
    }
};

export default connect(null, { favouriteItem }) (DetailedListItem);