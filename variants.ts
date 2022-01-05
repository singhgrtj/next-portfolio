import { Variants } from "framer-motion";

export const fadeInRight: Variants = {
    initial: {
        x: -200,
        opacity: 0
    },

    animate: {
        x: 0,
        opacity: 1,
        transition : {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}

export const opacityIn: Variants = {
    initial: { 
        y: -80,
        opacity: 0,
    },

    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}

export const cardVariants: Variants = {
    initial: {
      scale: 0.8
    },

    animate: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.7
      }
    }
};

export const showIn: Variants = {
    initial: {
      scale: 0.7
    },

    animate: {
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
};

