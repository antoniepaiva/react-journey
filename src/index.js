import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/ClockComponent'
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut',messageReceived: ''};

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
        
        
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);