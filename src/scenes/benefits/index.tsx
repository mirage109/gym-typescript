import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis natus quae molestias illum corporis facere fugiat officiis, sed, aliquam autem mollitia sunt, expedita at tempora maiores placeat alias adipisci.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Different Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis natus quae molestias illum corporis facere fugiat officiis, sed, aliquam autem mollitia sunt, expedita at tempora maiores placeat alias adipisci.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Professional Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis natus quae molestias illum corporis facere fugiat officiis, sed, aliquam autem mollitia sunt, expedita at tempora maiores placeat alias adipisci.",
  },
];
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20" id="benefits">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THEN JUST GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis natus quae molestias illum corporis facere fugiat
            officiis, sed, aliquam autem mollitia sunt, expedita at tempora
            maiores placeat alias adipisci. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis illo consectetur obcaecati
            iste accusamus harum laborum consequatur ex dolor eligendi tempora
            excepturi, sunt voluptas laudantium repudiandae eius error aperiam
            corrupti?
          </p>
        </div>
        <div className="mt-5 md:flex items-center justify-between gap-8">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
