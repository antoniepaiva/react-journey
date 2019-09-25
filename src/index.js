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
    const { data } = this.state;
    const messageReceived = this.state.messageReceived;
    return (
       
        <div>

        <Clock/>
        <DropDown arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} /> <br /><br />

        <p><textarea value={this.state.selectedValue} /></p>
        <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
        <p><textarea value={messageReceived} /></p>
          <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Message ID",
                  accessor: "id"
                },
                {
                  Header: "Original Message",
                  id: "message",
                  accessor: d => d.message
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Time Received",
                  accessor: "time"
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>      
      </form>

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