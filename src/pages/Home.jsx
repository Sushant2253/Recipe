import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import {motion} from "framer-motion";
import MainCourse from "../components/MainCourse";
import Dessert from "../components/Dessert";
import Drinks from "../components/Drinks";
import Breakfast from "../components/Breakfast";

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <Veggie />
        <Popular />
        <Breakfast />
        <MainCourse />
        <Dessert />
        <Drinks />
    </motion.div>
  )
}

export default Home