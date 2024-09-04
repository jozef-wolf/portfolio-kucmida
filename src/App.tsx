import { Outlet } from 'react-router-dom';
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';

function App() {
  return (
    <div>
      <DrawerAppBar />
      <main>
        <Outlet /> {/* This is where nested route components will be rendered */}
      </main>
    </div>
  );
}

export default App;