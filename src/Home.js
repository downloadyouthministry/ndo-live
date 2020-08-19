import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      timezone: "est",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    console.log(event);
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  onSubmit(event) {
    this.props.history.push(`/view/${this.state.id}`);
  }
  componentDidMount() {}

  render() {
    return (
      <main className="Home page">
        Home
        <ul>
          <li>View as 1234 ✅</li>
          <li>View as 5678 ✅</li>
          <li>View as aaaa ✅</li>
          <li>View as xxxx ⚠️</li>
        </ul>
        <form>
          <label htmlFor="id">Event ID</label>
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.onChange}
          />
          <label htmlFor="timezone">Timezone</label>
          <select
            name="timezone"
            value={this.state.timezone}
            onChange={this.onChange}
          >
            <option value="est">Eastern</option>
            <option value="cst">Central</option>
            <option value="mst">Mountain</option>
            <option value="pst">Pacific</option>
          </select>
          <button
            type="submit"
            disabled={this.state.id.length < 3}
            onClick={this.onSubmit}
          >
            Login
          </button>
        </form>
        <div>{this.state.id}</div>
        <div>{this.state.timezone}</div>
      </main>
    );
  }
}

export default withRouter(Home);
