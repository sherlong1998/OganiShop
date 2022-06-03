import Background from './background';
import Slider from './slider';
import Featured from './featured';
import Banner from './banner';
import FromBlog from './from_blog';
import {Fragment} from "react"
function Home() {
    return (
        <Fragment>
            <Background />
            <Slider />
            <Featured />
            <Banner/>
            <FromBlog/>
        </Fragment>
    );
}

export default Home;
