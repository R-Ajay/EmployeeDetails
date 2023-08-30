

const UserProfileCard = ({image, name, mail, phone}) => {

        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-1by1">           
                        <img src={`http://localhost:8080/${image}`} alt={name} />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{phone}</p>
                        <p className="">{mail}</p>
                    </div>

                </div>
            </div>
        );

}

export default UserProfileCard;