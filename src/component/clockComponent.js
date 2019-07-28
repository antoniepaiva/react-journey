export class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({date : new Date()});;
  }
  render(){
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
class MultipleClock extends React.Component{
  render(){
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
        <Clock />
      </div>
    )
  }
}
ReactDOM.render(
  <MultipleClock />,
  document.getElementById('root')
);
