import { useState } from "react";
import { Accordions } from "../constant";
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";




const AboutSection = () => {
  const [openSection, setOpenSection] = useState<string | null>("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <div className="bg-Smoke_White my-16">
      <div className=" containers flex-col flex lg:flex-row justify-between items-center py-20    ">

        <div className="lg:w-[450px] w-full text-center mx-16 order-2 ">
          <div>
            <h2 className="text-3xl font-bold text-Black font-libre">
              Hello! I'm Oliver Bennett
            </h2>
            <p className="pt-1 pb-5 font-extralight text-lg">
              A connoisseur of cityscapes and a storyteller through the lens,
              based in the vibrant heart of London.{" "}
            </p>
            <p className=" font-extralight text-lg">
              With over a decade of experience, I have been capturing the
              essence of urban life, one frame at a time.
            </p>
          </div>

            {/*================= start Accordions =============== */}
          <div className="mt-3 ">
            {Accordions.map((items) => {
                return(
                    <div >
                    <button
                      className="flex justify-between w-full py-2 text-left text-sm  font-Montserrat font-medium focus:outline-none border-t "
                      onClick={() => toggleSection(items.nameAccordin)}
                    >
                        <span> My {items.nameAccordin}</span>
                      {openSection === items.nameAccordin ? <IoMdClose size={20}/> : <GoPlus size={20}/>}
                    </button>
                    {openSection === items.nameAccordin && (
                      <div className="p-2 text-sm text-gray-700">
                            {items.section}
                      </div>
                    )}
                  </div>
                )
            })}
          </div>
           {/*================= end Accordions =============== */}
        </div>

        <div className="relative lg:ml-16 order-1 py-5">
            <img src="./image6.png" alt="" className="w-[500px] h-[600px] object-contain" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;