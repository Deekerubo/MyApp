import React from "react";
import Social from "../Social";

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="bg-image"></div>
        <div className="bg-text">
          <h1>I am Diana Kerubo</h1>
          <p>Software Developer</p>
          <div><Social /></div>
        </div>
      </div>
    );
  }
}

export default Blog;