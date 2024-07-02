import { useEffect, useState } from "react";
import "./Text.css"

const Txt2 = ({children, fs}) => {
    const [textSize, setTextSize] = useState(0.07*(window.innerHeight));
    useEffect(()=>{
        fs ? setTextSize(fs*(0.01*(window.innerHeight))) : setTextSize(0.07*(window.innerHeight));
    }, [fs])
    

    return (  
        <h2 style={{fontSize: `${textSize + 'px'}`}}>
            {children}
        </h2>
    );
}
 
export default Txt2;