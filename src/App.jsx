import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'



import Liqueurs from './pages/liqueurs/Liqueurs';
import Banners from './pages/banners/Banners';




const App = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Liqueurs} />
                <Route exact path="/banners" component={Banners} />

            </Switch>
        </Router>
    )
}

export default App;
