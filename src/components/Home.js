import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserForm } from './UserForm';
import List from './List';
const Home = () =>{
    return(
       <div className="container mx-auto">
       <div className="w-full border p-4 shadow-md">
       <div className="rounded p-10 text-center text-2xl text-gray-600">
       Select links :
       </div>
       <ul className="flex justify-center items-center h-full mb-10">
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
       </Switch>
       </div>
       </div>
       );
}
export default Home;