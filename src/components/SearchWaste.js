import React, { Component } from 'react';
import { Form, FormControl, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setKeyword } from '../actions/index';

class SearchWaste extends Component {
    constructor() {
        super();
        
        this.state = {
            keyword: ''
        }
    }
    //Search function prevents form submission, launches setKeyword action
    search(e) {
        e.preventDefault();
        let { keyword } = this.state;
        this.props.setKeyword(keyword);        
    }

    render() {
        return(
            <Form id="search">
                <FormControl type="text" placeholder="item to dispose" onChange={event => this.setState({ keyword: event.target.value })}/>
                {' '}
                <Button type="submit" bsStyle="success" onClick={(e) => this.search(e)}>
                    <Glyphicon glyph="glyphicon glyphicon-search" />
                </Button>
            </Form>
        );
    }
};

export default connect(null, { setKeyword })(SearchWaste);