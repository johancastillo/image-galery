import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'



import Liqueurs from './pages/liqueurs/Liqueurs';




const App = () => {
    return (
        <Router>

            <Switch>
                <Route exact path="/" component={Liqueurs} />
            </Switch>
        </Router>
    )
}

export default App;
