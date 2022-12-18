import './App.css';

//components
import { Header, Projects } from './components';

//components
import { Canva, Desktop, BottomTab, OpenedFolder } from './containers';

function App() {
  return (
    <Canva>
      
      <Desktop />
      
      <Projects />
      <Header />
      <BottomTab />
    </Canva>
  );
}

export default App;