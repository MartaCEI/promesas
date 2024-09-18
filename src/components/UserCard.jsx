const UserCard = ({gender, name, city, state, country, postcode, email, cell, picture}) => {
    const color="";
    if (gender == "female") {
        color="pink";
    } else {
        color="blue";
    }

    return (
        <div>
            <img src={picture.medium} alt={name.first} />
            <p>Name: {name.first} {name.last}</p>
            <p>Address: {city}, {state}, {country}, {postcode}</p>
            <p>Email: {email}</p>
            <p>Cell: {cell}</p>
        </div>
    );
}

export default UserCard;