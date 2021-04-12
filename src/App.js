import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Autocomplete from './screens/Autocomplete'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div className='bg-yellow-400 py-4'>
        <Header />
      </div>
      <div>
        <Switch>
          <Route path='/autocomplete'>
            <Autocomplete />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

/*
        <nav className='flex items-center justify-between bg-yellow-400 p-4'>
          <h1 className='text-5xl font-bold text-gray-600'>
            Age of empires civilizations
          </h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/autocomplete'>Autocomplete</Link>
            </li>
          </ul>
        </nav>
        */
