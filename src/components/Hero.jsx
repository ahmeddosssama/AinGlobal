import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthMain } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-start items-center`}
      >
        <div className="text-center mt-40">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Connect your Business to a World Of Possibilities
          </h1>
          <p
            className={`${styles.heroSubText} mt-2`}
            style={{ color: "#B6B2B2" }}
          >
            Our extensive network ensures seamless transactions, competitive
            pricing, and reliable delivery.
          </p>
        </div>
      </div>

      <EarthMain />
    </section>
  );
};

export default Hero;
