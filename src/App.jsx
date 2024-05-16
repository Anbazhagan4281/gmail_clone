import SideBar from "./components/SideNav/SideBar";
import SideNav from "./components/SideNav/SideNav";
import NavBar from "./components/Nav/NavBar";
import MessageContainer from "./components/Messages/MessageContainer";
import SubBar from "./components/SideNav/Subbar/SubBar";
const App = () => {
  return <div>
    <div className="flex w-screen h-screen">
      <SideBar/>
      <SideNav/>
      <div className="w-full bg-whitelilac flex flex-col">
        <NavBar/>
        <div className="flex ">
          <MessageContainer/>
          <SubBar/>
        </div>
      </div>
    </div>
  </div>
}

export default App;
