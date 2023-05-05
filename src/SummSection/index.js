import { useState, useEffect } from "react";
import { MainSection } from "./styled";

const SummSection = ({ services }) => {

    const [totalBrutto, setTotalBrutto] = useState(0);
    const [totalNetto, setTotalNetto] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    const countTotal = () => {
        const newTotalBrutto = services.reduce((prevValue, {brutto}) => prevValue + brutto, 0);
        const newTotalNetto = services.reduce((prevValue, {netto}) => prevValue + netto, 0);
        const newTotalDiscount = services.reduce((prevValue, {discountPrice})=> prevValue + discountPrice, 0);
        setTotalBrutto(newTotalBrutto.toFixed(2));
        setTotalNetto(newTotalNetto.toFixed(2));
        setTotalDiscount(newTotalDiscount.toFixed(2));
    };

    useEffect(() => {
        countTotal();
    }, [services]);

    return services.length > 0 && (
      (  <MainSection>
            <p>Łacznie netto: {totalNetto} zł</p>
            <p>Łacznie brutto: {totalBrutto} zł</p>
            <p>Łączna wartość rabatu:{totalDiscount}zł</p>
        </MainSection>)
    );
}

export default SummSection;