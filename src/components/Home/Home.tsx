import Advantages from "../Advantages/Advantages";
import Filters from "../Filters/Filters";
import Menu from "../Menu/Menu";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <section>
      {/* <div className="conteiner"> */}
      <Menu />
      <Filters />
      <Slider />
      <Advantages />
      <Products />
      {/* </div> */}
    </section>
  );
}
