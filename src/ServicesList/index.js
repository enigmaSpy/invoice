import { ServiceListWrapper, TableWrapper, Th, Td, Button, TableBody } from './styled';
// import { useState, useEffect } from 'react';

const ServicesList = ({ services, removeService }) => {

    return (
        <ServiceListWrapper>
            {services.length > 0 ? (
                <TableWrapper>
                    <thead>
                        <tr>
                            <Th keyName>Nazwa usługi</Th>
                            <Th>Cena</Th>
                            <Th>Ilość</Th>
                            <Th>Jednostka</Th>
                            <Th>VAT</Th>
                            <Th>Rabat</Th>
                            <Th>Wartość netto</Th>
                            <Th>Wartość brutto</Th>
                            <Th>Wartość zniżki
                            </Th>
                            <Th actions>Akcje</Th>
                        </tr>
                    </thead>
                    <TableBody>
                        {services.map((service) => (
                            <tr key={service.id}>
                                <Td>{service.serviceName}</Td>
                                <Td>{service.price}zł</Td>
                                <Td>{service.quantity}</Td>
                                <Td>{service.unit}</Td>
                                <Td>{service.vat}%</Td>
                                <Td>{service.discount} {`${service.discount?"%":""}`} </Td>
                                <Td>{service.netto}zł</Td>
                                <Td>{service.brutto}zł</Td>
                                <Td>{service.discountPrice}zł</Td>
                                <Td>
                                    <Button onClick={() => removeService(service.id)}>Usuń</Button>
                                    <Button>Edytuj</Button>
                                </Td>
                            </tr>
                        ))}
                    </TableBody>
                </TableWrapper>
            ) : (
                <p>Brak usług do wyświetlenia</p>
            )}
        </ServiceListWrapper>
    );
};

export default ServicesList;