import './App.css';

const NavBar = () => (
  <header className='navbar'>
      <div className='navbar__title navbar__item'>Shahadat</div>
      <div className='navbar__item'>About Us</div>
      <div className='navbar__item'>Contact</div>
      <div className='navbar__item'>Help</div>        
  </header>
);

const App = () => (
  <div>
      <NavBar />
      <main>We sell cutting edge knives.</main>
  </div>
);

export default App
