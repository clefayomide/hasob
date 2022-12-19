import { Navigate, useLocation } from "react-router-dom";

const Protected = ({
  layout: Layout,
  component: Component,
  protected: isProtected,
  auth,
}) => {
  const location = useLocation();
  return auth ? (
    <Layout>
      <Component />
    </Layout>
  ) : isProtected ? (
    <Navigate to="/sign-up" state={{ from: location }} replace />
  ) : (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Protected;
