import iconProfile from "../../assets/icon-profile.png";
import Message from "../message/Message";
import "./PlaceForMessages.css";

const PlaceForMessages = () => {
  return (
    <div className="PlaceForMessages">
      <div className="companion">
        <div className="companion__info">
          <img className="iconProfile" src={iconProfile} alt="avatar" />
          <a href="#">NameCompanion</a>
        </div>
        <button className="actions"></button>
      </div>

      <div className="messages">
      <ul>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>

      </ul>
      </div>

      <div className="wrapperForm">
        <form action="">
          <input placeholder="Your Mesage" type="text" />
          <button></button>
        </form>
      </div>
    </div>
  );
};

export default PlaceForMessages;
