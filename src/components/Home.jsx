import GridList from "./Grid/GridList";
import RelBox from "./RelBox/RelBox";
import SizedBox from "./SizedBox/SizedBox";
import Par from "./Text/Par";
import Txt1 from "./Text/Txt1";
import Txt2 from "./Text/Txt2";
import Txt3 from "./Text/Txt3";


const Home = () => {

    const items = [
        {},{},{},
        {},{},{},
        {},{},{},
    ]

    return (
        <RelBox w={45} h={75} className={"center"}>
            <GridList data={items} col={2+2} itemHeight={50}/>
        </RelBox>
    );
}
 
export default Home;