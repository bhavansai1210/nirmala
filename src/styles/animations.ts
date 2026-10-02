export const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve }
  }
};
