import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Changepassword = () => {
  return (
    <>
        <Navbar/>
        <form action="">
        <div id='password'>
        <h1 id='ang'>CHANGE PASSWORD</h1>
        <br /><br />
        <label htmlFor="old">Old Password</label>
        <br />
        <input id='old' type="text" />
        <br /><br />
        <label htmlFor="new">New Password</label>
        <br />
        <input id='new' type="text" />
        <br /><br />
        <label htmlFor="confirm">Confirm New Password</label>
        <br />
        <input id='confirm' type="text" />
        <br /><br />
        <button id='btn'>Save changes</button>
        </div>
        </form>
    </>
  )
}

export default Changepassword;