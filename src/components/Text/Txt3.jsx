import { useEffect, useState } from "react";
import "./Text.css"

const Txt3 = ({children, fs}) => {
    const [textSize, setTextSize] = useState(0.05*(window.innerHeight));
    useEffect(()=>{
        fs ? setTextSize(fs*(0.01*(window.innerHeight))) : setTextSize(0.05*(window.innerHeight));
    }, [fs])
    

    return (  
        <h3 style={{fontSize: `${textSize + 'px'}`}}>
            {children}
        </h3>
    );
}
 
export default Txt3;