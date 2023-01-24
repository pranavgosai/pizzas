import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBae from "./components/NavBae";
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
    <BrowserRouter>
   <TopBar/>
   <NavBae/>
   <switch>
    <Route path="/about" component={About} exact />
    <Route path="/contact" component={Contact} exact />
    <Route path="/policy" component={Policy} exact />
    <Route path="/" component={HomeScreen} exact />
   </switch>
    </BrowserRouter>
  );
}

export default App;
