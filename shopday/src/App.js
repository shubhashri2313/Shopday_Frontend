import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";



function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
