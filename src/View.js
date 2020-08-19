import React, { Component } from "react";
// import styled from "styled-components";

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <main className="View page">
        View event {this.props.match.params.eventId}
      </main>
    );
  }
}

export default View;
