import './App.css';
// import kamal from './profile_pic.jpg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import User from './components/User'
import { author } from './components/Data/Data';

function App() {
  return (
    <div className="App">
      <Header/>
      <User/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
