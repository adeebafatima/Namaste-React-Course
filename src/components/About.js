import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>[Class]We are food ordering app</h1>
        <h2>[Class]Try our food! Order quickly</h2>

        {/* React will batch the  Render phase of both child ,
        1st constructor of first child will call then render of first child will call 
        then constructor of second child will call then render of second child will call,
        now Commit phase is batched 
        componentDidMount of first child will called 
        then componentDidMount of second child will be called 
        Render is very fast (Diff between object - Virtual DOM)
        Actually updating the DOM is expensive - so React batch Render and batch Mounting(React Optimization) - This is why React is fast 
        
        Output Expectation - 
            Parent constructor
            Parent render
            First Child constructor
            First Child render
            First Child componentDidMount
            Second Child constructor
            Second Child render
            Second Child componentDidMount
            Parent componentDidMount 

        Actual Output -
            Parent constructor
            Parent render
            First Child constructor
            First Child render
            Second Child constructor
            Second Child render
                ----DOM UPDATED IN SINGLE BATCH----
            First Child componentDidMount
            Second Child componentDidMount
            Parent componentDidMount 
            
            https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
        */}
        <UserClass
          name="First"
          location="Lucknow Class"
          handle="@adeeba Class"
        />
        <UserClass
          name="Second"
          location="Hyderabad Class"
          handle="@fatima Class"
        />
      </div>
    );
  }
}

export default About;
