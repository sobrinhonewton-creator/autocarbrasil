import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = (once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" as any });
  return { ref, isInView };
};
