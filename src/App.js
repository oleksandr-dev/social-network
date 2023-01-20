import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FindUsers from "./components/FindUsers/FindUsers";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    /*console.log("app")*/
    return (
        <div className="App-wrapper">
            <HeaderContainer />
            <Navbar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/:userId" element={
                        <Profile />}
                    />
                    <Route path="/dialogs/*" element={
                        <Dialogs />}
                    />
                    <Route path="/find_users/*" element={
                        <FindUsers />}
                    />
                    <Route path="/news/*" element={
                        <News/>}
                    />
                    <Route path="/music/*" element={
                        <Music/>}
                    />
                    <Route path="/settings/*" element={
                        <Settings/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
