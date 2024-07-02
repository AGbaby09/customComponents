import { useEffect, useState } from "react";
import "./Text.css"

const Txt1 = ({children, fs}) => {
    const [textSize, setTextSize] = useState(0.1*(window.innerHeight));
    useEffect(()=>{
        fs ? setTextSize(fs*(0.01*(window.innerHeight))) : setTextSize(0.1*(window.innerHeight));
    }, [fs])
    

    return (  
        <h1 style={{fontSize: `${textSize + 'px'}`}}>
            {children}
        </h1>
    );
}
 
export default Txt1;