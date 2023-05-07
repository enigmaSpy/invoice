import FormContent from "./FormContent";
import ServicesList from "./ServicesList";
import MainContent from "./MainContent";
import SummSection from "./SummSection";

import { useService } from "./useService";

function App() {

 const [services, addService, removeService] = useService();

  return (
    <div className="App">
      <FormContent addService={addService}/>
      <MainContent serviceList={<ServicesList services={services} removeService={removeService}/>} sumsec={<SummSection services={services}/>} />

    </div>
  );
}

export default App;
