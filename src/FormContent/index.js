import { Form, Label, Span, Input, Select, Button,Alert } from './styled.js';
import { useState, useEffect } from 'react';
const FormContent = ({ addService }) => {
    const [serviceName, setServiceName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('szt');
    const [vat, setVat] = useState(23);
    const [discount, setDiscount] = useState('');

    const [alert, setAlert] = useState(false)

    const validationForm =()=>{
        if (!(serviceName==0||price==0||quantity==0)) {
           return false;
        }
        return true;
      
    }

    const handleSubmit = (e) => {
        e.preventDefault();

      let condition = validationForm();
       if (condition) {
        setAlert(true);
        return false;
       }
       setAlert(false);
        const netto = +(price * quantity *(1-discount/100)).toFixed(2);
        
        const brutto = +(netto * (1+vat/100)).toFixed(2);

        const discountPrice = +(price*quantity*discount/100).toFixed(2);
        
        addService({ serviceName, price, quantity, unit, vat, discount, brutto, netto, discountPrice});
        setServiceName('');
        setPrice('');
        setQuantity('');
        setUnit('szt');
        setVat(23);
        setDiscount('');
    };

    

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Label>
                <Span>Usługa:</Span>
                <Input type="text" name="serviceName" value={serviceName} onChange={({ target }) => setServiceName(target.value)} />
            </Label>
            <Label>
                <Span>Cena:</Span>
                <Input type="number" name="price" value={price} onChange={({ target }) => setPrice(target.value)} />
            </Label>
            <Label>
                <Span>Ilość:</Span>
                <Input type="number" name="quantity" value={quantity} onChange={({ target }) => setQuantity(target.value)} />
            </Label>
            <Label>
                <Span>Jednostka:</Span>
                <Select value={unit} onChange={({ target }) => setUnit(target.value)}>
                    <option>szt</option>
                    <option>pkt</option>
                    <option>mb</option>
                    <option>m</option>
                    <option>m2</option>
                    <option>m3</option>
                    <option>godz</option>
                </Select>
            </Label>
            <Label>
                <Span>VAT:</Span>
                <Select value={vat} onChange={({ target }) => setVat(+target.value)}>
                    <option>23</option>
                    <option>8</option>
                    <option>5</option>
                    <option>0</option>
                </Select>
            </Label>
            <Label>
                <Span>Upust:</Span>
                <Input type="number" name="discount" value={discount} onChange={({ target }) => setDiscount(target.value)} />%
            </Label>
            <Button>Dodaj pozycję</Button>
        </Form>
        <Alert alert={alert}>
            <p>Pola nie mogą być puste</p>
        </Alert >
        </>
    );
};

export default FormContent;