import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="bg-white">
      <div className="mx-28 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
