import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <F
        </div>
    );
}

export default DefaultLayout;
