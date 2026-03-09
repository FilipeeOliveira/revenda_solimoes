import principiosImg from "@/assets/principios.jpg";

const PrincipiosBannerSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[380px] md:min-h-[780px]">
      <img
        src={principiosImg}
        alt="Nossos Princípios"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="lazy"
      />
    </section>
  );
};

export default PrincipiosBannerSection;
