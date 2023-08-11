import './App.css';
import PostLists from './components/PostLists';
import MainHeader from './components/MainHeader';
import { useState } from 'react';


function App() {
  const [modalIsVisible, setModalIsVisible] = useState (false)
  function modalHideHandler (){
    setModalIsVisible(false)
  }
  function modalShowHandler (){
    setModalIsVisible(true)
  }
  return (
    <>
    <MainHeader onCreatePost ={modalShowHandler} />
    <PostLists isPosting = {modalIsVisible} onStopPosting ={modalHideHandler}/>
    </>
  );
}

export default App;
