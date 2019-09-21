import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/ClockComponent'
import { makeData, Logo, Tips } from "./components/utils";
import DropDown from './components/DropDown'
import arrayOfData from './data/KafkaTopics'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageReceived: '',
      data: makeData(),
      selectedValue: 'Nothing'
    };


  }



  handleSelectChange = (selectedValue) =>{
    console.log('Inside handle select change')

    this.setState({
      selectedValue: selectedValue,
      messageReceived: selectedValue
    });
  }

  handleSubmit(event) {
    console.log('Inside handlesubmit')
    //alert('Your favorite flavor is: ' + this.state.value);
    this.setState({messageReceived: this.state.value});
    event.preventDefault();
  }

  render() {
    console.log('Inside render method')
    return (
       
        <div>

        <Clock/>
        <DropDown arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} /> <br /><br />

        <p><textarea value={this.state.selectedValue} /></p>


          
       
        <br />
        <Tips />
        <Logo />
      </div>      
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);