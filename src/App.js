import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
            <CountriesList /> 
            <CountryDetails />
        </div>
      </div>

        <body>
     
        </body>
    </div>
  );
}

export default App;
