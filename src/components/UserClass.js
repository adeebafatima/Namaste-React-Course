import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        login: "Dummy Handle",
      },
    };
    console.log(this.props.name, "Child constructor");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React");
    }, 1000);
    // Even if we switch page from About to Contact etc, Since its a Single Page Application.
    // Everytime I am coming to this page it will start a new setInterval and old one is also going on - Performance issue
    // This is why componentWillUnmount is used.
  }

  componentDidUpdate(prevsProps, prevState) {
    console.log("componentDidUpdate called!");
    // If we write [count], whenever count is changed -> useEffect will be called.Same thing in class based component can be done as shown below
    // if(this.state.count !== prevState.count){}

    // If we write [count1,count2], whenever count1 or count2 is changed -> useEffect will be called.Same thing in class based component can be done as shown below
    // if(this.state.count1 !== prevState.count1 || this.state.count2 !== prevState.count2 ){}

    // If we want componet to do something on count1 change and something else on count2 changes, we will write 2 useEffect in functional component.Same thing in class based component can be done as shown below
    // if(this.state.count1 !== prevState.count1){}
    // if(this.state.count2 !== prevState.count2){}
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called!");
    // this keyword is shared with all the function of this class
    clearInterval(this.timer);
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    console.log(this.props.name, "Child render");
    return (
      <div className="userCard">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{login}</p>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// Mounting
//     -Constructor
//     -Render[Dummy data]
//     -DOM will update Dummy data
//     -componentDidMount[API Call]
//     -setState done! -State variable is updated which trigged rendering again

// Updating
//     -Render[API data]
//     -DOM will update with API Data
//     -componentDidUpdate
