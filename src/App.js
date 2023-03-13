import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offers from './components/Offers.jsx';
import Plan from './components/Plan.jsx';
import Rooms from './components/Rooms.jsx';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers />
      <Plan />
      <Rooms />
      <Footer />
    </div>
  );
}

export default App;
