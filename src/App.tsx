import "./App.css";
import Aside from "./components/Aside";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Aside />
      <div className="principal">
        <Menu />
      </div>
    </>
   
  );
}

export default App;
