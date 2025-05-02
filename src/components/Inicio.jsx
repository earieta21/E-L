import React from "react";
import HeroSection from "./HeroSection";
import Destacados from "./Destacados";
import SobreNosotros from "./SobreNosotros";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Inicio = ({ addToCart, abrirCarrito }) => {
  return (
    <main>
      <HeroSection />

      <section style={{ margin: "60px 0" }}>
        <Destacados addToCart={addToCart} abrirCarrito={abrirCarrito} />
      </section>

      <section style={{ backgroundColor: "#fef2f4", padding: "60px 0" }}>
        <SobreNosotros />
      </section>

      <section style={{ margin: "60px 0" }}>
        <Newsletter />
      </section>

      <Footer />
    </main>
  );
};

export default Inicio;
