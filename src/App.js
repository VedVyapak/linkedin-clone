import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './auth/login/login';
import { auth } from './config/fbconfig';
import { login, logout, selectUser } from './features/user/userSlice';
import Header from './Header/Header'
import Feed from './MainFeed/Feed';
import Sidebar from './MainFeed/Sidebar/Sidebar'
import Widgets from './MainFeed/Widgets/Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header/>

      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div> 
      )}
      
    </div>
  );
}

export default App;
