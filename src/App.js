import './App.css';
import Post from './components/Post'

const btext = 'this is some text';

function App() {
  return (
    <>
    <Post author={"Ayush"} body={btext} />
    </>
  );
}

export default App;
