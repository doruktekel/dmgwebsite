"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { allData } from "../../data";
import SingleItem from "@/app/components/SingleItem";

const TypePage = () => {
  const [activeType, setActiveType] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const params = useParams();
  const router = useRouter();
  const { type } = params;

  const filterItems = (item) => {
    router.push(`/projects/${item}`);
  };

  useEffect(() => {
    if (type) {
      const filtered = allData.filter((data) => data.type === type);
      setFilteredData(filtered);
      setActiveType(type);
    } else {
      setFilteredData([]);
    }
  }, [type]);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 md:gap-4 mt-10 ">
        <div className="flex flex-col gap-5 p-4">
          <p className="uppercase">
            {activeType === "taahhut" ? "Taahhut Projeleri" : "Konut Projeleri"}
          </p>
          <p>
            Binalarımızın her biri kişisel ve benzersiz bir mimariye sahiptir.
            Mekanlarının keyfini çıkaracak insanların iş birliğiyle ortaya çıkan
            ekolojik ve sağlıklı el yapımı parçalar.
          </p>
        </div>
        <hr />
        <div className="p-4 flex gap-4">
          <button
            className={` ${
              activeType === "hepsi"
                ? "text-white bg-logoColor"
                : "bg-gray-100 text-black"
            }  px-2 py-1 text-sm hover:text-white hover:bg-logoColor `}
            onClick={() => {
              setActiveType("hepsi");
              router.push("/projects");
            }}
          >
            Bütün Projeler
          </button>
          <button
            className={` ${
              activeType === "taahhut"
                ? "text-white bg-logoColor"
                : "bg-gray-100 text-black"
            }  px-2 py-1 text-sm hover:text-white hover:bg-logoColor `}
            onClick={() => filterItems("taahhut")}
          >
            Taahhütler
          </button>
          <button
            className={` ${
              activeType === "konut"
                ? "text-white bg-logoColor"
                : "bg-gray-100 text-black"
            }  px-2 py-1 text-sm hover:text-white hover:bg-logoColor `}
            onClick={() => filterItems("konut")}
          >
            Konutlar
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredData.length > 0 ? (
            filteredData.map((data) => (
              <SingleItem key={data.header} data={data} />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypePage;
