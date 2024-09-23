const UserCard = ({username, name, location, email, cell, picture, login}) => {
    const {city,state,country,postcode} = location;
    return (
        <section className="Section">
            <img className="Section-img" src={picture.large} alt={name.first} />
            <p className="Section-name">{name.title} {name.first} {name.last}</p>
            <p className="Section-username">{login.username}</p>
            <div className="Section-description">
                <p><b>Address: </b>{city}, {state}, {country}, {postcode}</p>
                <p><b>Email: </b>{email}</p>
                <p><b>Cell: </b>{cell}</p>
            </div>
        </section>
    );
}

export default UserCard;


