import intel from "../assets/images/features/intel.svg";
import rtx from "../assets/images/features/rtx.svg";
import ssd from "../assets/images/features/ssd.svg";
import ddr4 from "../assets/images/features/ddr4.svg";

interface TextArr {
  id: number;
  text: string;
  strongText: string;
  image: string;
  alt: string;
}

const textArr: TextArr[] = [
  {
    id: 1,
    text: "Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.",
    strongText: "Intel® Core™ i7",
    image: intel,
    alt: "intel",
  },
  {
    id: 2,
    text: "The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.",
    strongText: "GeForce® RTX SUPER™",
    image: rtx,
    alt: "rtx",
  },
  {
    id: 3,
    text: "Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.",
    strongText: "SSD technology,",
    image: ssd,
    alt: "ssd",
  },
  {
    id: 4,
    text: "Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.",
    strongText: "10th Gen Intel® Core™",
    image: ddr4,
    alt: "ddr4",
  },
];

export default textArr;
