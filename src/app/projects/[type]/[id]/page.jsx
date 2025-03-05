import Slider from "@/app/components/Slider";
import { BsArrowLeft } from "@react-icons/all-files/bs/BsArrowLeft";
import Link from "next/link";
import { allData } from "../../../data";
import Image from "next/image";

const Project = async ({ params }) => {
  const { id } = await params;
  const ourData = allData.find((item) => item.id === id);

  const { type, header, info, description, images } = ourData;

  return (
    <div className="w-full min-h-screen">
      <div className=" hidden  flex-col max-w-7xl mx-auto h-[500px]  md:flex mb-40 ">
        <Slider itemId={id} />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto gap-8 px-5 ">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex gap-2 items-center">
            <Link href={"/"}>
              <p className="font-Poppins">Home</p>
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={"/projects"}>
              <p className="font-Poppins">Projeler</p>
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={`/projects/${type}`}>
              <p className="font-Poppins">
                {type.toString().slice(0, 1).toUpperCase() +
                  type.toString().slice(1)}
              </p>
            </Link>
            <span className="text-slate-500">/</span>
            <Link href={`/projects/${type}/${id}`}>
              <p className="font-Poppins">{header}</p>
            </Link>
          </div>
          <Link
            className="flex gap-2 justify-center items-center hover:opacity-50 duration-300 ease-in-out"
            href="/projects"
          >
            <BsArrowLeft className="text-2xl" />
            <p className="font-Poppins">Listelere Geri Dön</p>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center text-2xl font-Poppins ">{header}</p>
          <hr />
        </div>
        <div className=" flex flex-col gap-10 ">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-justify font-Poppins">{info}</p>
            <p className="text-lg text-justify font-Poppins">{description}</p>
          </div>
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:gap-3 ">
            {images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={500}
                height={400}
                alt={header}
                className="pointer-events-none aspect-square object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
