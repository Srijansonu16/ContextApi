import { createContext } from "react";
import Main from "./Components/Main";
import "./styles.css";

const UserContext = createContext();
export default function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{ user: "Srijan" }}>
        <Main />
      </UserContext.Provider>
    </div>
  );
}
