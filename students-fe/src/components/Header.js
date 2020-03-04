import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://www.etasku.fi/img/brand/etasku-logo-128x35.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i><a href="http://avoindata.prh.fi/ytj.html" target="_blank">Avoindata</a></i>
        </h5>
        <h1>Patentti- ja rekisterihallituksen yritysrekisteri</h1>
      </div>
    );
  }
}

export default Header;
