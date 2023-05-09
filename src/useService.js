import { useState } from "react";

export const useService = () => {
    const [services, setServices] = useState([]);

    const addService = ({ serviceName, price, quantity, unit, vat, discount, brutto, netto, discountPrice }) => {
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
      };

    return [services, addService , removeService];
};