import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer footer font-small text-light bg-dark fixed-bottom">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://github.com/Raylynd6299/IngeSoft_CrazyBits/tree/master/Proyecto1">
            {" "}
            Proyecto{" "}
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
