import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbComponent() {
  return (
    <Breadcrumb className="ms-5">
      <Breadcrumb.Item href="/Cart">Cart</Breadcrumb.Item>
      <Breadcrumb.Item href="/Information">
        Information
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/Shipping">
        Shipping
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/Payment">Payment</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;