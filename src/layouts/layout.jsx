import propTypes from "prop-types";

import Header from "../components/header/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: propTypes.element,
};
