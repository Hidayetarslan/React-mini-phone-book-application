import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Kontak from './Kontak';
import List from "./List";

class App extends Component {
    constructor() {
        super();
        this.addContact=this.addContact.bind(this);
    }
    state = {
        contacts:[{
            name:'Hidayet',
            phone:'11111111'
        },{
            name:'Mehmet',
            phone:'222222222'
        },
            {
                name:'Umut',
                phone:'333333333'
            }]

    };
    addContact(contact){
        const {contacts}=this.state;
        contacts.push(contact);
        this.setState({
            contacts
        });

    };
  render() {

    return (
      <div className="App">
          <Kontak
              addContact={this.addContact}
              contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
