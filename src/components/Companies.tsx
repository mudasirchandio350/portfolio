"use client";
import { Lora } from "next/font/google";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const lora = Lora({ subsets: ["latin"], weight: ["500"] });

// Company logos data
const companies = [
  { name: "Microsoft", logo: "/microsoft.png", alt: "Microsoft Logo" },
  { name: "Oracle", logo: "/oracle.png", alt: "Oracle Logo" },
  { name: "Intel", logo: "/intel.png", alt: "Intel Logo" },
  { name: "IBM", logo: "/ibm.png", alt: "IBM Logo" },
  { name: "Huawei", logo: "/huawei.png", alt: "Huawei Logo" },
  { name: "Azure", logo: "/azure.png", alt: "Azure Logo" },
  { name: "Zoom", logo: "/zoom.png", alt: "Zoom Logo" },
];

const CompanyCard = ({ company }: { company: (typeof companies)[0] }) => {
  return (
    <div className="flex items-center justify-center p-4 mx-4  rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-105 max-sm:min-w-[80px] max-sm:h-20 md:min-w-[200px] md:h-24">
      <div className="relative w-32 h-16">
        <Image
          src={company.logo}
          alt={company.alt}
          fill
          className="object-contain filter brightness-0 dark:brightness-100 dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
          sizes="(max-width: 768px) 128px, 128px"
        />
      </div>
    </div>
  );
};

const Companies = () => {
  return (
    <div className="min-h-[50vh] py-12 w-full  transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`w-full text-center capitalize text-3xl md:text-4xl lg:text-5xl ${lora.className} antialiased mb-4 text-gray-900 dark:text-white`}
        >
          Client&apos;s I worked with are from
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Trusted by leading companies worldwide to deliver exceptional
          solutions
        </p>

        {/* First row - left to right */}
        <div className="mb-8">
          <Marquee className="[--duration:30s]" pauseOnHover={true}>
            {companies.map((company, index) => (
              <CompanyCard key={`row1-${index}`} company={company} />
            ))}
          </Marquee>
        </div>

        {/* Second row - right to left */}
        <div className="mb-8">
          <Marquee
            className="[--duration:35s]"
            reverse={true}
            pauseOnHover={true}
          >
            {companies.map((company, index) => (
              <CompanyCard key={`row2-${index}`} company={company} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Companies;
