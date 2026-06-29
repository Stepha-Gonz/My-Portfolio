import { AppProvider } from './context/AppContext';
import Nav from './components/Nav';
import Cursor from './components/Cursor';
import Home from './views/Home';

export default function App() {
  return (
    <AppProvider>
      <Cursor />
      <Nav />
      <Home />
    </AppProvider>
  );
}
