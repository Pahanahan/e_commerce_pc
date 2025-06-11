import laptop from "/images/promo/promo.jpg";

function Promo() {
  return (
    <div>
      <div className="container">
        <a href="#">
          <img src={laptop} alt="laptop" />
        </a>
      </div>
    </div>
  );
}

export default Promo;
