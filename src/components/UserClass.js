import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        const {name,location,handle}=this.props
        return (
            <div className="userCard">
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{handle}</p>
        </div>

        )
    }
}

export default UserClass;