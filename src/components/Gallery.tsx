import { motion } from "framer-motion";
// import { images } from "../constant";
import PhotoGallery from "./PhotoGallery";

const Gallery = () => {
  return (
    <div className="mx-9">
      <motion.div>
        <h2 className="text-3xl text-center font-libre text-Black ">
          Some of my latest shots
        </h2>
      </motion.div>
      <div className=" flex justify-center items-center mt-5">

        <PhotoGallery/>
      </div>
    </div>
  );
};

export default Gallery;
