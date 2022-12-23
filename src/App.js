import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/" element={
                        <Profile
                            store={props.store}
                        />}
                    />
                    <Route path="/dialogs/*" element={
                        <Dialogs
                            store={props.store}
                            dialogsPageState={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}
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
