import Form from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";

const App = () => {
  return (
    <div>
      <Scoops/>
      <Toppings/>
      <Form/>
    </div>
  )
}

export default App;

