import Head from 'next/head'
import { AdminFooter } from './admin-footer';
import AdminNavbar from './admin-navbar';
import AdminSidebar from './admin-sidebar';
const AdminLayout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className='sb-nav-fixed'>
        <AdminNavbar />
        <div id='layoutSidenav'>
          <AdminSidebar />
          <div id='layoutSidenav_content'>
            <main>
              <div className="container-fluid px-4">
                {props.children}
              </div>
            </main>
            <AdminFooter/>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout
