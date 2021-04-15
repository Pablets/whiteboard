import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Autocomplete from './screens/Autocomplete'
import Header from './components/Header'
import { CounterProvider } from './context/counter'
import Counter from './screens/Counter'
import UseReducer from './screens/UseReducer'
import FlexibleCompoundComponents from './screens/FlexibleCompoundComponents'

const App = () => {
  return (
    <CounterProvider>
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Switch>
            <Route path='/autocomplete'>
              <Autocomplete />
            </Route>
            <Route path='/counter'>
              <Counter />
            </Route>
            <Route path='/usereducer'>
              <UseReducer />
            </Route>
            <Route path='/flexiblecompoundcomponents'>
              <FlexibleCompoundComponents />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CounterProvider>
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
