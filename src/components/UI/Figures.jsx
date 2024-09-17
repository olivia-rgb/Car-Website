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
      className="relative my-10  bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg-img/bgcar11.jpeg')" }} // Adjust the path as needed
    >
      <div className="grid w-11/12 grid-cols-2 gap-4 md:grid-cols-4 justify-items-center  py-6 sm:py-10">
        {figuresList.map((figure, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-full"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <h2 className="text-white text-2xl md:text-4xl font-bold flex flex-row pb-4 md:pb-8">
              <Suspense fallback={<div style={{ height: '2rem', width: '2rem' }} />}>
                {inView && (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(figure.value)}
                    locale="en-US"
                    className="text-white text-2xl md:text-4xl font-bold"
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
            <p className="text-white text-sm md:text-xl pt-4 border-t font-bold text-center">
              {figure.metric}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FiguresSection;
