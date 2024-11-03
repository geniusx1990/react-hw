import './App.css'
import FooterComponent from './components/FooterComponent/FooterComponent.tsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.tsx';
import RouterSwitcher from './utils/Router/RouterSwitcher.tsx';

function App() {

  return (
    <>
      <HeaderComponent />
      <RouterSwitcher />
      <FooterComponent />
    </>
  )
}

export default App
