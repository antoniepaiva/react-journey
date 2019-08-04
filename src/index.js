import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/ClockComponent'
import { makeData, Logo, Tips } from "./components/utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut',messageReceived: '', data: makeData()};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('Your favorite flavor is: ' + this.state.value);
    this.setState({messageReceived: this.state.value});
    event.preventDefault();
  }

  render() {
    const messageReceived = this.state.messageReceived;
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Clock/>
        <label>
          <h1>Pick your favorite flavor:</h1>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
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
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>      
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);