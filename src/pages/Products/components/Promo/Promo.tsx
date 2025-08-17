import { Link } from "react-router-dom";

import laptop from "../../../../assets/images/promo/promo.jpg";

function Promo() {
  return (
    <div>
      <div className="container">
        <Link to="/product">
          <img src={laptop} alt="laptop" />
        </Link>
      </div>
    </div>
  );
}

export default Promo;
