import React from 'react';


export default class SpecialBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    console.log('special box mounted');
    
  }
  addNumber = () => {
    let x = 5 + 5;
    return x;
  }
  

  render() {

    return (
    <div className='navbar'>
      Special Box {this.addNumber()}
    </div>
  );
}
}
