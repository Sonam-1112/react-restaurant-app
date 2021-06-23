import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantCreate from './components/RestaurantCreate';
// import RestaurantDetails from './components/RestaurantDetails';
import RestaurantList from './components/RestaurantList';
import Login from './components/Login'
import NavbarMenu from './components/NavbarMenu';
import Logout from './components/Logout';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarMenu/>
      <Switch>
        {/* <Route path="/" exact><Home/></Route> */}
        <Route path="/list" exact><RestaurantList/></Route>
        <Route path="/create" exact><RestaurantCreate/></Route>
        <Route path="/search" exact><RestaurantSearch/></Route>
        {/* <Route path="/details" exact component={RestaurantDetails} /> */}
        <Route path="/update/:id" exact render={props=><RestaurantUpdate {...props}/>}></Route>
        <Route path="/login" exact render={props=><Login {...props}/>}></Route>
        <Route path="/logout" exact><Logout/></Route>
        <Protected exact path="/" component={Home}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;