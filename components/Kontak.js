import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form'

class Kontak extends Component {
    static propTypes = {
        contacts:PropTypes.array.isRequired,
        addContact:PropTypes.func
    };
    render() {
        return (
            <div>
                <List contacts={this.props.contacts}/>
                <Form addContact={this.props.addContact}/>
            </div>
        );
    }
}


Kontak.propTypes = {};

export default Kontak;