import './App.css';
import RouletteBoard from './components/RouletteBoard.js';
import RouletteWheel from './components/RouletteWheel.js';

function App() {
  return (
    <div className='cont'>
      <RouletteBoard />
      <RouletteWheel />
    </div>
  );
}

export default App;
