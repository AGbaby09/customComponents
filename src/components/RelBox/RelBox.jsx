import "./RelBox.css"
import { useEffect, useState } from "react";

const RelBox = ({children, h, w, className, id}) => {

    const [sizedWidth, setSizedWidth] = useState(0)
    const [sizedHeight, setSizedHeight] = useState(0)

    const setDimensions = () => {
        w ? setSizedWidth(w) : setSizedWidth(0)
        h ? setSizedHeight(h) : setSizedHeight(0)
    }

    useEffect(()=>{
        setDimensions()
    }, [h, w])

    return (  
        <div id={id}  className={`RelBox ${className ? className : ''}`} style={{
            width: `${sizedWidth + '%'}`, 
            height: `${sizedHeight + '%'}`,
            }}>
                {children}
        </div>
    );
}
 
export default RelBox;