import staryellow from "../../assets/icons/star-yellow.svg";
import stargrey from "../../assets/icons/star-grey.svg";

function RatingStar({ rating }) {
  const stars = Array(5)
    .fill(5)
    .map((_, i) => {
      return (
        <img key={i} src={i < rating ? staryellow : stargrey} alt="star" />
      );
    });

  return <>{stars}</>;
}

export default RatingStar;
