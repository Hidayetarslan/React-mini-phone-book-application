import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        addContact:PropTypes.func
    };
    constructor() {
        super();
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    state={
        name:'',
        phone:''
    }
    onChange(e){
this.setState({
[e.target.name]:e.target.value
        })
    }
 onSubmit(e){
  e.preventDefault();
  this.props.addContact({
      ...this.state
  });
     this.setState({
         name:'',
         phone:''
     });
 };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input
                    name={"name"}
                    id={"name"}
                    value={this.state.name}
                    placeholder={"İsim Gir"}
                    onChange={this.onChange}
                /><br/>
                    <input
                        name={"phone"}
                        id={"phone"}
                        value={this.state.phone}
                        placeholder={"Telefon Gir"}
                        onChange={this.onChange}
                    />
                    <button>Ekle</button>

                </form>
            </div>
        );
    }
}

Form.propTypes = {};

export default Form;