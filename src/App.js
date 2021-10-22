import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbBar from "./components/NavBar/NavBar";

import Home from "./components/Home/Home";
import Counter from "./components/counter/counter";

import Shop from "./components/Shop/Shop";
import Product from "./components/Product/Product";
import Todo from "./view/todo";


import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    return (
      <Router>
      
                <NavbBar />
              <div className="App bg-secondary">
                
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={Counter} path="/counter" />
                    <Route component={Shop} path="/shop" exact />
                    <Route component={Product} path="/shop/:id" />
                    <Route component={Todo} path="/Todo" />
                </Switch>
            <Footer />
            </div>
            </Router>
     
    );
}

export default App;
