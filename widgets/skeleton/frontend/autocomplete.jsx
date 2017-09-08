import React from "react";

class AutoComplete extends React.Component {
  constructor (props) {
    super(props);

    this.state = {inputVal: "" };

  }

  search(e) {
    e.preventDefault();
    alert(`${this.props.props}`);
  }

  render() {
    console.log(this.props.props);
    return (
      <div>
        <label>Search
          <input type="text" onChange={this.search.bind(this)}></input>
        </label>
        <ul>
            {
              this.props.props.map(name => (
                <li key={name}>{name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
