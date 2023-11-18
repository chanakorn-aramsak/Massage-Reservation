import Image from "next/image";
import bannerImg from "@/public/img/bannerImg.jpg";

export default function Banner() {
  return (
    <div className="black p-5 m-0 w-[100vw] h-[80vh] relative">
      <Image
        src={bannerImg}
        alt="cover"
        fill={true}
        className="object-cover brightness-75"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="font-black text-4xl sm:text-6xl text-white">
          FUNKY SPA
        </div>
        <div className="font-thin text-sm sm:text-xl text-white">
          MASSAGE & SPA STUDIOS
        </div>
      </div>
    </div>
  );
}
