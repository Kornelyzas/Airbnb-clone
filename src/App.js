import './App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Home from './home/Home'
import SearchPage from './searchpage/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>

        <Switch>
          <Route path='/search'>
            <SearchPage/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
