const User = ({name,location,handle}) => {

    return (
        <div className="userCard">
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{handle}</p>
        </div>
    )
}
export default User;