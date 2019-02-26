import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './List.css';
class List extends Component {
state={
    filtertext:''
}
    onchangefilter=(e)=>{
    this.setState({
        filtertext:e.target.value
    })
    }
    render() {
    const filtre=this.props.contacts.filter(
        contact=>{
            return contact.name.toLowerCase().indexOf(
                this.state.filtertext.toLowerCase()
            )!== -1
        }
    );
        return (
            <div className={"ListArea"}>
                <input
                    value={this.state.filtertext}
                    onChange={this.onchangefilter}
                    name={"filter"}
                    id={"filter"}
                    placeholder={"Adları ve numaraları listele"}/>
                <ul className={"list"}>
                    {
                        filtre.map(contact=>
                            <li key={contact.phone}>
                                <span className={"name"}>{contact.name}</span>
                                <span className={"phone"}>{contact.phone}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

List.propTypes = {};

export default List;