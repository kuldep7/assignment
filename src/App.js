import React from 'react';
import { UserForm } from './components/UserForm';
import Home from './components/Home';
import List from './components/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <div className="app min-h-screen">
    <div className="w-full h-20 p-4 shadow-md">
    <ul className="flex justify-center items-center h-full">
    <li>
    <Link to="/" className="border mr-2 p-4 rounded hover:bg-teal-500 hover:text-white cursor-pointer">Home</Link></li>
    <li>
    <Link to="/create" className="border mr-2 p-4 rounded hover:bg-teal-500 hover:text-white cursor-pointer">Create</Link></li>
    <li>
    <a href="/list" className="border mr-2 p-4 rounded hover:bg-teal-500 hover:text-white cursor-pointer">List</a></li>
    </ul>
    </div>
    <div className="mt-48">
    <Switch>
    <Route path="/create">
    <UserForm />
    </Route>
    <Route path="/edit/:id">
    <UserForm id="6" />
    </Route>
    <Route path="/list">
    <List/>
    </Route>
    <Route path="/">
    <Home />
    </Route>
    </Switch>
    </div>
    </div>
    )
}

export default App;
