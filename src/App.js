import ListRooms from "./components/list-rooms/ListRooms";
import PlaceForMessages from "./components/place-for-messages/PlaceForMessages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <ListRooms />
        <PlaceForMessages />
      </div>
    </div>
  );
}

export default App;
