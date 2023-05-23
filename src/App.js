import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto md:px-12'>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
