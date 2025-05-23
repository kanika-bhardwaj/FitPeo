import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const PageLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-light vh-100">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Header />
          <main className="p-3">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;