import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import biophoto from "../public/picofme.png";

export default function DraggableDiv() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  return (
    <div>
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 9999,
          background: `radial-gradient(rgba(255,255,255,0),
                        rgba(255,255,255,0.3))`,
          perspective: 800,
        }}
      >
        <motion.div
          style={{
            width: 98,
            height: 98,
            borderRadius: 9999,

            position: "relative",
            x,
            y,
            rotateX,
            rotateY,
            cursor: "grab",
          }}
          className=" bg-transparent"
          drag={true}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.6}
          whileTap={{ cursor: "grabbing" }}
        >
          <Image
            priority={true}
            className="rounded-full w-24   -z-20 absolute  select-none  h-24 shadow-xl object-cover  border-[6px] border-white"
            width={192}
            height={192}
            quality={95}
            alt="biophoto"
            src={biophoto}
          />
        </motion.div>
      </div>
    </div>
  );
}
