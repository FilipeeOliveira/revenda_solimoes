import principiosImg from "@/assets/principios.jpg";

const PrincipiosBannerSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={principiosImg}
        alt="Nossos Princípios"
        className="w-full h-auto block"
        loading="lazy"
      />
    </section>
  );
};

export default PrincipiosBannerSection;
