import iconProfile from "../../assets/icon-profile.png";
import "./Message.css";

const Message = () => {
  return (
   
        <li className="prevRoom">
          <img className="iconProfile" src={iconProfile} alt="" />
          <div className="prevRoom__info">
            <h3 className="prevRoom_name">name</h3>
            <p className="prevRoom_message">message</p>
          </div>
        </li>
    
  );
};

export default Message;
