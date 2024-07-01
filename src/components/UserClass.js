import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location, handle } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="userCard">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{handle}</p>
        <p>Count:{count}</p>
        <p>Count2:{count2}</p>
      </div>
    );
  }
}

export default UserClass;
