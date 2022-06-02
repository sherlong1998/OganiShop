import Header from "./header"
import Sidebar from "./Sidebar"

function DefaultLayout() {
    return ( 
        <div >
            <Header/>
            <div className="container">
                <Sidebar/>
                <div</>
            </div>
        </div>
     );
}

export default DefaultLayout;