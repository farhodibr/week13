import React from 'react';
import TestLoginForm from './LoginForm';
import NavbarMenu from './Navbar';







export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {clicks: 0};
  }

  componentDidMount = () => {
    console.log('app component mounted');
    this.setState({clicks: 5});
  }

  addClick = () => {
    var newNumber = this.state.clicks + 1;
    this.setState({clicks: newNumber});
  }

  render() {
    //console.log(this.state);
    return (
    <div >
      <div className='container'>
      <NavbarMenu/>
      </div>
      <br/>
      <br/>
      <br/>
      
     <div className='container'>
      <TestLoginForm/>
      </div>
      
   
     
      <br/>
      
      
    </div>
  );
}
}
