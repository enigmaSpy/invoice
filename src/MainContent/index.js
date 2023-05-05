import {MainContent as Main} from "./styled";

const MainContent = ({serviceList,sumsec}) => {
    return (
        <Main>
            {serviceList}
            {sumsec}
        </Main>
    );
}

export default MainContent;