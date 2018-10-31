import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons' ;
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
    constructor(props){
        super(props);
        console.log('[App.js] inside Constructor', props);
        this.state = {
            persons: [
                {id:"abc12",name:"Mubashir", age: 26},
                {id:"abc13",name:"Muhammad", age: 25},
                {id:"abc14",name:"Abdullah", age: 20}

            ],
            showPersons:true,
            authenticated:false
        };

    }

    componentWillMount(){
        console.log('[App.js] inside componentWillMount()');
    }
    componentDidMount(){
        console.log('[App.js] inside componentDidMount()');
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Update App.js] inside shouldComponentUdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[Update App.js] inside componentWillUdate', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[Update App.js] inside componentDidUpdate');
    }
    getDerivedStateFromProps(nextProps, prevState){
        console.log('[Update App.js] inside componentDidUpdate');
    }
    getSnapshotBeforeUpdate(){
        console.log('[Update App.js] inside componentDidUpdate');
    }
  // state = {
  //   persons: [
  //       {id:"abc12",name:"Mubashir", age: 26},
  //       {id:"abc13",name:"Muhammad", age: 25},
  //       {id:"abc14",name:"Abdullah", age: 20}
  //
  //       ],
  //     showPersons:true
  // };

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
    this.setState((prevState, props)=>{
        return{
            showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked+1
        }
    });

  }
  loginHandler=()=>{
    this.setState({authenticated:true});
  }
  render() {
    console.log('[App.js] inside render()');
    let persons = null;

    if(this.state.showPersons){
      persons =<Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}/>;
    }

    return (
      <Aux>
          <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit
              appTitle={this.props.title}
              clicked={this.togglePersonsHandler}
              login = {this.loginHandler}
              showPersons={this.state.showPersons}
              persons={this.state.persons}/>
          <AuthContext.Provider value={this.state.authenticated}>
              {persons}</AuthContext.Provider>

      </Aux>

    );
      // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello how are you?'));
  }
}

export default withClass(App,classes.App);
