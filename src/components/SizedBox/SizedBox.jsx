import { useEffect, useState } from "react";
import "./SizedBox.css"
const SizedBox = ({children, w, h, className, id}) => {

    const [sizedWidth, setSizedWidth] = useState(0)
    const [sizedHeight, setSizedHeight] = useState(0)

    const setDimensions = () => {
        w ? setSizedWidth((w/100)*window.innerWidth) : setSizedWidth(0)
        h ? setSizedHeight((h/100)*window.innerHeight) : setSizedHeight(0)
    }

    useEffect(()=>{
        setDimensions()
    }, [h, w])

    return ( 
        <div id={id} className={`SizedBox ${className ? className : ''}`} style={{
            width: sizedWidth, 
            height: sizedHeight,
            }}>
            {children}
        </div>
    );
}
 
export default SizedBox;