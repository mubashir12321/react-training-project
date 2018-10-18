import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';



class App extends Component {
  state = {
    persons: [
        {id:"abc12",name:"Mubashir", age: 26},
        {id:"abc13",name:"Ahmad", age: 25},
        {id:"abc14",name:"Ali", age: 20}

        ],
      showPersons:true
  };

  deletePersonHandler = (personIndex)=>{
    // const persons=this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})

  };
  nameChangedHandler = (event,id) =>{
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id ===id;
      });
      const person = {
          ...this.state.persons[personIndex]
      };
      person.name = event.target.value;
      const persons =[...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons})
  };
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  };
  render() {

    let persons = null;
    let btnClass ='';
    if(this.state.showPersons){
      persons = (
          <div>
              { this.state.persons.map((person,index) => {
                return<Person
                    click={()=> this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                    key={person.id}
                    changed={(event)=>this.nameChangedHandler(event,person.id)}/>

              })}

          </div>
      );
           btnClass = classes.Red;
    }
    let assignedClasses = [];

    if(this.state.persons.length<=2){
        assignedClasses.push(classes.red);//clases=['red']
    }
      if(this.state.persons.length<=1){
          assignedClasses.push(classes.bold);//clases=['red','bold']
      }
      if(this.state.persons.length<1){
          btnClass = classes.App.button;//clases=['red','bold']
      }
    return (

      <div className={classes.App}>
          <h1>Hi my name is Mubashir Ahmad</h1>
          <p className={assignedClasses.join(' ')}>I am in Bristol</p>
          <button
              className={btnClass}
              onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}

      </div>

    );
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello how are you?'));
  }
}

export default App;
