import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PromoContainer, PromoSlider } from "./slider";

import img from "../../img/promo/1920x450_motiligas(1)-1920x450category_image.webp"
import img2 from "../../img/promo/mkrlx_1920h450px_akcia(1)-1920x450category_image.webp"
import img3 from "../../img/promo/teymurova_pasta_1145h335_1_1.png"
import img4 from "../../img/promo/1920x450_v2-1920x450category_image.webp"
import img5 from "../../img/promo/listovkazest+pozitivwebdma.ua.zes24.02.01_montazhnajaoblast1kopija-1920x450category_image.webp"
import img6 from "../../img/promo/ul-lisobakt-stomatidin-detrimax_am-lekfarm_baner-1920x450_2024-01-19-1920x450category_image.webp"

const Sliders = () => {
      var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const promo = [
    { image: img },
    { image: img2 },
    { image: img4 },
    { image: img6 },
    { image: img3 },
    { image: img5 },
  ]
  return (
    <PromoContainer>
      <Slider {...settings}>
      {promo.map(e => (<PromoSlider style={{height: '300px'}} key={e.image}>
        <img src={e.image} alt="promo"></img>
      </PromoSlider>))}
    
      </Slider>
      </PromoContainer>
  );
}

export default Sliders