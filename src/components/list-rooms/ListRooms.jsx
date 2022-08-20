import "./ListRooms.css";
import iconProfile from "../../assets/icon-profile.png"
import Message from "../message/Message";

const ListRooms = () => {

    return(
        <div className="listRooms">

            <div className="profile">
                <img className="iconProfile" src={iconProfile} alt="" />
                <div className="profile__setting">
                    <button className="newChat"></button>
                    <button className="logOut"></button>
                </div>
            </div>
            <ul>
                <Message/>
            </ul>
        </div>
    )
}

export default ListRooms;