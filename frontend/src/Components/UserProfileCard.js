import './Style/UserProfileCard.css';

const UserProfileCard = ({ image, name, mail, phone, address }) => {

    return (
        <div className="card has-shadow">
            <div className="card-image">
                <figure className="image is-4by1">
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