import { Variants } from 'framer-motion';

export const ProductVariants: Variants = {
  visible: (index) => ({
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
  hidden: (index) => ({
    opacity: 0,
    transition: {
      delay: index * 0.15,
    },
  }),
};
