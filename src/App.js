import "./App.css"
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import Profile from "./ProfileContainer/Home/Profile/Profile"
import Footer from "./ProfileContainer/Home/Footer/Footer"



function App() {
  return (
    <div className="App">
    <Profile/>
    <Footer/>
    <ProfileContainer></ProfileContainer>

    </div>
  );
}

export default App;
