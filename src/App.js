import FormContent from "./FormContent";
import ServicesList from "./ServicesList";
import MainContent from "./MainContent";
import SummSection from "./SummSection";

import { useState } from "react";

function App() {

  const [services, setServices] = useState([]);
  const addService = ({ serviceName, price, quantity, unit, vat, discount, brutto, netto, discountPrice}) => {
    setServices((prevServices) => [...prevServices, {
      id: crypto.randomUUID(),
      serviceName,
      price,
      quantity,
      unit,
      vat,
      discount,
      brutto,
      netto,
      discountPrice
    }])
  };

  const removeService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  }

  return (
    <div className="App">
      <FormContent addService={addService}/>
      <MainContent serviceList={<ServicesList services={services} removeService={removeService}/>} sumsec={<SummSection />} />

    </div>
  );
}

export default App;
