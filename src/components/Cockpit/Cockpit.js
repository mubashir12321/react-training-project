import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';
const cockpit =(props) => {

    let assignedClasses = [];
    let btnClass =classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button,classes.Red].join(' ');
    }
    if(props.persons.length<=2){
        assignedClasses.push(classes.red);//clases=['red']
    }
    if(props.persons.length<=1){
        assignedClasses.push(classes.bold);//clases=['red','bold']
    }
    if(props.persons.length<1){
        btnClass = classes.Button;//clases=['red','bold']
    }

    return (
        <Aux>
            <h1>Hi, My name is Mubashir Ahmad</h1>
            <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
            <button onClick={props.login}>Log in </button>
        </Aux>
    );
};

export default cockpit;