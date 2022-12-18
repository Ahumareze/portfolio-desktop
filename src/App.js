import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

//components
import { Header, Projects } from './components';

//components
import { Canva, Desktop, BottomTab, OpenedFolder } from './containers';

function App() {
  //redux state
  const desktopStack = useSelector(state => state.desktopReducer.desktopStack);

  return (
    <Canva>
      
      <Desktop />
      {desktopStack.map((i, idx) => (
        <OpenedFolder key={idx} title={i.title} position={i.position} top={i.top} left={i.left} item={i}>
          {i.child}
        </OpenedFolder>
      ))}
      <Header />
      <BottomTab />
    </Canva>
  );
}

export default App;