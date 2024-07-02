import { useEffect, useState } from "react";
import "./Text.css"

const Par = ({children, fs}) => {
    const [textSize, setTextSize] = useState(0.017*(window.innerHeight));
    useEffect(()=>{
        fs ? setTextSize(fs*(0.01*(window.innerHeight))) : setTextSize(0.017*(window.innerHeight));
    }, [fs])
    

    return (  
        <p style={{fontSize: `${textSize + 'px'}`}}>
            {children}
        </p>
    );
}
 
export default Par;