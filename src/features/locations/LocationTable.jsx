import { LOCATIONDATA_BODY, LOCATIONDATA_HEAD } from "@/data/copy";
import { motion } from "motion/react";

const table = {
  hidden: { opacity: 0, y: -40 },
  reveal: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

const tbody = {
  hidden: { opacity: 0 },
  reveal: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
};

const row = {
  hidden: { opacity: 0, x: -20 },
  reveal: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function LocationTable() {
  return (
    <motion.table
      className="border-accent col-span-6 table-fixed overflow-hidden rounded-2xl border-4 bg-neutral-950 lg:col-span-4 [&_*]:px-4 [&_*]:py-2"
      variants={table}
      initial="hidden"
      whileInView="reveal"
      viewport={{ once: true, amount: 0.3 }}
    >
      <thead>
        <tr className="text-bg bg-white text-left">
          {LOCATIONDATA_HEAD.map((th) => (
            <th key={th}>{th}</th>
          ))}
        </tr>
      </thead>
      <motion.tbody
        variants={tbody}
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: true, amount: 0.3 }}
      >
        {LOCATIONDATA_BODY.map((item) => (
          <motion.tr
            key={item.store}
            className="even:bg-neutral-800 hover:bg-neutral-700"
            variants={row}
          >
            <td className="max-w-25 font-bold md:max-w-none">{item.store}</td>
            <td className="min-w-35 md:min-w-auto">{item.contact}</td>
            <td>{item.direction}</td>
          </motion.tr>
        ))}
      </motion.tbody>
    </motion.table>
  );
}

export default LocationTable;
