import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Blog from "./components/Pages/Blog";
import Portfolio from "./components/Pages/Portfolio";
import ImageSlider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <ImageSlider />

          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/portfolio" component={Portfolio}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
