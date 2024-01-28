import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20" id="benefits">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
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
        </motion.div>
        <motion.div
          className="mt-5 md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        <div>
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            <div>
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem, suscipit. Odit iusto doloribus suscipit quos
                deserunt obcaecati aut consectetur molestias quis, earum maxime
                tempora sint cupiditate temporibus numquam placeat
                incidunt?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Minima molestiae, magnam tenetur vel officia velit unde
                blanditiis quae hic odio. Repellendus, nostrum eligendi? Quae
                dolores est corrupti ut nisi culpa?
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt voluptate quos id, obcaecati inventore quae consequatur
                dolor rem dicta animi distinctio accusantium dolorem, iusto
                harum consequuntur fuga blanditiis corrupti explicabo?
              </p>
            </div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
