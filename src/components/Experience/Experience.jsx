import React from "react";
import List from "./List/List";
import "./Experience.css";

class Experience extends React.Component {
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  render() {
    return (
      <div id="experience">
          <div className="section-header ">
            <h3 className="section-title">Experience</h3>
          </div>
          <List></List>
      </div>
    );
  }
}

export default Experience;