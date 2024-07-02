import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        userInfo:{
            name:"Dummy Name",
            location:"Dummy Location",
            login:"Dummy Handle"
        }
    // console.log(this.props.name, "Child constructor");
  }}

  async componentDidMount() {
    // console.log(this.props.name, "Child componentDidMount");
    const data = await fetch("https://api.github.com/users/adeebafatima");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState({
        userInfo:jsonData
    })
  }

  render() {
    const { name, location, login,avatar_url} = this.state.userInfo;
    // console.log(this.props.name, "Child render");
    return (
      <div className="userCard">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{login}</p>
        <img src={avatar_url}/>
      </div>
    );
  }
}

export default UserClass;
