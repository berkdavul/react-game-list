
import './App.css';
import CreateGame from './components/Game/Create';
import GameList from './components/Game/List';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='header-title'>Game Store</div>
      </header>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<GameList />} />
         <Route path="create_game" element={<CreateGame />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
