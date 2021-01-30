import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'



import Liqueurs from './pages/liqueurs/Liqueurs';
import Banners from './pages/banners/Banners';
import Categories from './pages/categories/Categories';




const App = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Liqueurs} />
                <Route exact path="/banners" component={Banners} />
                <Route exact path="/education360/categories" component={Categories} />

            </Switch>
        </Router>
    )
}

export default App;
