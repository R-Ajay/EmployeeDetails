import './Style/UserProfileCard.css';

const UserProfileCard = ({ image, name, mail, phone, address }) => {

    return (
        <div className="card has-shadow is-fullheight-desktop">
            <div className="card-image">
                <figure className="image is-square">
                    <img src={`http://localhost:8080/${image}`}  style={{objectFit : 'cover'}} alt={name} />
                </figure>
            </div>

            <header className='card-header custom-header'>
            <p className="card-header-title custom-header has-text-weight-bold">{name}</p>
            </header>
           
            <div className="card-content">
                <div className="content">
                    <p className="has-text-weight-bold">{address}</p>
                    <p className="has-text-weight-bold">{phone}</p>
                    <p className="has-text-weight-bold">{mail}</p>
                </div>
            </div>
            


        </div>

    );

}

export default UserProfileCard;