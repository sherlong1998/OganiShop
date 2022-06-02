import Header from "./header"
import Sidebar from "./Sidebar"

function DefaultLayout( {children} ) {
    return ( 
        <div >
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content"></div>
            </div>
        </div>
     );
}

export default DefaultLayout;