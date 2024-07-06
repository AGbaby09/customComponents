import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompLink = ({path}) => {

    const goTo = useNavigate();

    useEffect(() => {
        goTo(path);
    }, []);

    return (  
        <></>
    );
}
 
export default CompLink;