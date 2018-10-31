import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] inside componentWillMount()');
    }
    componentDidMount(){
        console.log('[Person.js] inside componentDidMount()');
        if (this.props.position===0){
            this.inputElement.current.focus();
        }
    }
    focus(){
        this.inputElement.current.focus();
    }
    render(){
        console.log('[Person.js] inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>"I am Authenticated"</p>:null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}> {this.props.name} is {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    style={{marginBottom: '10px',backgroundColor: 'lightgreen'}}
                    ref = {this.inputElement}
                    type="text"
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person,classes.Person);
