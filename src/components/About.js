import { Component } from "react";
import User from "./User";
import UserContext from "../contexts/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>[Class]We are food ordering app</h1>
        <h2>[Class]Try our food! Order quickly</h2>
        <UserContext.Consumer>{(data)=><h3 className="font-bold">{data.loggedInUser}</h3>}</UserContext.Consumer>
        {/* <UserClass
          name="Adeeba"
          location="Lucknow Class"
          handle="@adeeba Class"
        /> */}
        <User name="Adeeba" location="Lucknow Class" handle="@adeeba Class" />
      </div>
    );
  }
}

export default About;
