import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useLocation } from 'react-router-dom';

function BreadcrumbExample() {
    const location = useLocation()
    console.log(location);

    let currentLink = ''

    const crumbs = location.pathname.split('/')

        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink = + `/${crumb}`

            return (
                <div className='crumb' key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })
    return (
        // <Breadcrumb>
        //     <Breadcrumb.Item href="/" className=''>Home</Breadcrumb.Item>
        //     <Breadcrumb.Item active>Data</Breadcrumb.Item>
        // </Breadcrumb>
        <div className='bread-crumbs'>
            {crumbs}
        </div>
    );
}

export default BreadcrumbExample;