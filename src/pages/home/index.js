import Background from './background';
import Slider from './slider';
import Featured from './featured';
import Banner from './banner';
import FromBlog from './from_blog';

function Home() {
    return (
        <>
            <Background />
            <Slider />
            <Featured />
            <Banner/>
            <FromBlog/>
        </>
    );
}

export default Home;
