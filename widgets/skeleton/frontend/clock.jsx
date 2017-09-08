import React from "react";

class Clock extends React.Component {
  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.currentTime);
  }

  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };

    this.currentTime = setInterval(this.tick.bind(this), 1000);
  }

  render () {
    return (
      <div>
        <h1>Time</h1>
        <p>{`${this.state.time.getHours()}:
            ${this.state.time.getMinutes()}:
            ${this.state.time.getSeconds()}`}</p>
          <h1>Date</h1>
            <p>{`${this.state.time.getUTCMonth() + 1} |
                ${this.state.time.getUTCDate()} |
                ${this.state.time.getUTCFullYear()}`}
              </p>
      </div>
    );
  }

  tick() {
    this.setState({time: new Date()});
  }


}

export default Clock;
