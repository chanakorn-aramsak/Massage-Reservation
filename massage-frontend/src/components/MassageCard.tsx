import React, { ChangeEvent, useEffect } from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import Link from "next/link";
import { MassageCardProps } from "@/interfaces/MassageCardProps";



const MassageCard: React.FC<MassageCardProps> = ({
    mid,
  name,
  imageSrc,
}) => {
 
  return (
    <div className="max-w-md w-[1/3] h-[300px] rounded-lg shadow-lg bg-white">
      <Link href={`/massages/${mid}`} key={mid}>
      <div className="relative w-full h-[70%] rounded-t-lg ">
        <Image
          className="object-cover rounded-t-lg"
          src={imageSrc}
          fill={true}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="w-full h-[30%] font-bold text-xl mb-2 text-black text-center">
        {name}
      </div>
      </Link>
    </div>
  );
};

export default MassageCard;
