import { useEffect, useState } from "react";
import RelBox from "../RelBox/RelBox";
import "./Grid.css"

const GridList = ({data, col, itemHeight, className}) => {
    const [row, setRow] = useState(1);

    useEffect(()=>{
        col ? setRow(Math.ceil(data.length/col)) : setRow(1);
    }, [col, data])

    return (  
        <div className={`GridList full scrollable ${className ? className : ''}`} style={{
            gridTemplateColumns: `repeat(${col}, 1fr)`,
        }}>
            {data && 
                data.map((item)=>(
                    <Item iH={itemHeight}/>
                ))
            }
        </div>
    );
}
 
export default GridList;

const Item = ({iH}) => {
    return (  
        <div className={"item"} style={{width: "100%", height: `${(iH/100)*(window.innerHeight)}px`}}>

        </div>
    );
}
 