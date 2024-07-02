import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name, "Child constructor");
  }

  componentDidMount() {
    console.log(this.props.name, "Child componentDidMount");
  }

  render() {
    const { name, location, handle } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name, "Child render");
    return (
      <div className="userCard">
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            // this.state.count = this.state.count+1; NEVER update state variable directly

            //Below code will set state variable and re-render the component
            this.setState({
              count: this.state.count + 1,
            });
            //Suppose we have have 4 state variable and we want to update 2 of them , we can do that inside same setState and React will update only those 2, without touching other 2.
            //Whenever this Count button is clicked, react will tigger the reconcillation process, it will find diff between 2 objects , it will update the state and re-render the this.component.
          }}
        >
          Count
        </button>
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{handle}</p>
      </div>
    );
  }
}

export default UserClass;
