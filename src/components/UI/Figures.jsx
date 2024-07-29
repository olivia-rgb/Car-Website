import React, { Suspense, lazy } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Dynamically import the AnimatedNumbers component
const AnimatedNumbers = lazy(() => import("react-animated-numbers"));

const figuresList = [
  {
    metric: "CARS FOR SALE",
    value: "836",
  },
  {
    metric: "DEALER REVIEWS",
    value: "738",
  },
  {
    metric: "VISITORS PER DAY",
    value: "100",
  },
  {
    metric: "VERIFIED DEALERS",
    value: "238",
  },
];

const FiguresSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div
      className="relative my-5 xl:gap-16 sm:py-16 xl:px-16 bg-cover bg-center"
      style={{ backgroundImage: "url('../../../public/assets/bg-img/bgcar11.jpeg')" }} // Adjust the path as needed
    >
      <div className="px-8 grid grid-cols-2 gap-4 md:grid-cols-4 relative z-10">
        {figuresList.map((figure, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 w-full sm:w-auto"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <h2 className="text-white text-4xl font-bold flex flex-row pb-8">
              {/* The Suspense fallback provides a loading indicator */}
              <Suspense fallback={<div>Loading...</div>}>
                {inView && (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(figure.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => ({
                      mass: 1,
                      friction: 80,
                      tensions: 140 * (index + 1),
                    })}
                  />
                )}
              </Suspense>
              <span className="text-white">M</span>
            </h2>
            <p className="text-white text-xl pt-8 border-t font-bold">
              {figure.metric}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FiguresSection;
