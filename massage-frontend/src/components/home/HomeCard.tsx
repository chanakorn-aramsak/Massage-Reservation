import Image from "next/image";
import HomeCardImage1 from "@/public/img/homeCard_1.jpg";
import HomeCardImage2 from "@/public/img/homeCard_2.jpg";
import HomeCardImage3 from "@/public/img/homeCard_3.jpg";
import HomeCardImage4 from "@/public/img/homeCard_4.jpg";
import HomeContent from "./HomeContent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomeCard() {
  const session = await getServerSession(authOptions);
  if (!session)
    return (
      <div className="relative">
        <div className="px-10 sm:px-20 grid grid-cols-2 top-[-20px] absolute z-30 pb-5">
          <>
            <>
              <>
                <div className="col-span-1 p-2 sm:p-5 text-center bg-gray-200 rounded-tl-lg flex ">
                  <HomeContent
                    title="Register"
                    description="Experience the ultimate relaxation journey with us! Secure your spot by registering today and indulge in the tranquility of a soothing massage."
                    showButton={true}
                    textButton="Register"
                    colorButton="secondary"
                    href="/register"
                  />
                </div>
                <div className="col-span-1 rounded-tr-lg">
                  <Image
                    src={HomeCardImage3}
                    alt={`register image`}
                    className="h-full rounded-tr-lg w-full object-cover"
                  />
                </div>
              </>
              <>
                <div className="col-span-1">
                  <Image
                    src={HomeCardImage2}
                    alt={`about image`}
                    className="h-full w-full rounded-bl-lg object-cover"
                  />
                </div>

                <div className="col-span-1 p-2 sm:p-5 bg-gray-200">
                  <HomeContent
                    title="About Us"
                    description="Embark on a Groovy Massage Journey! Secure your spot for a blissful relaxation session with us. Ensure your good vibes by making reservations."
                    showButton={false}
                  />
                </div>
              </>
            </>
          </>
        </div>
      </div>
    );

  const role = session.user.role;

  return (
    <div className="relative">
      <div className="px-10 sm:px-20 grid grid-cols-2 top-[-20px] absolute z-30 pb-5">
        <>
          {role === "user" ? (
            <>
              <>
                <div className="col-span-1 p-2 sm:p-5 text-center bg-gray-200 rounded-tl-lg flex ">
                  <HomeContent
                    title="Massages"
                    description="Indulge in the ultimate relaxation experience. Secure your massage reservation now and treat yourself to a blissful escape from the everyday hustle."
                    showButton={true}
                    textButton="Look For Available Studios"
                    href="/massages"
                  />
                </div>
                <div className="col-span-1 rounded-tr-lg">
                  <Image
                    src={HomeCardImage1}
                    alt={`atmosphere image`}
                    className="h-full rounded-tr-lg w-full"
                  />
                </div>
              </>
              <>
                <div className="col-span-1">
                  <Image
                    src={HomeCardImage2}
                    alt={`about image`}
                    className="h-full w-full rounded-bl-lg object-cover"
                  />
                </div>

                <div className="col-span-1 p-2 sm:p-5 bg-gray-200">
                  <HomeContent
                    title="About Us"
                    description="Embark on a Groovy Massage Journey! Secure your spot for a blissful relaxation session with us. Ensure your good vibes by making reservations."
                    showButton={false}
                  />
                </div>
              </>
            </>
          ) : role === "admin" ? (
            <>
              <>
                <div className="col-span-1 p-2 sm:p-5 text-center bg-gray-200 rounded-tl-lg flex ">
                  <HomeContent
                    title="Massages"
                    description="Indulge in the ultimate relaxation experience. Secure your massage reservation now and treat yourself to a blissful escape from the everyday hustle."
                    showButton={true}
                    textButton="Look For Available Studios"
                    href="/massages"
                  />
                </div>
                <div className="col-span-1 rounded-tr-lg">
                  <Image
                    src={HomeCardImage1}
                    alt={`atmosphere image`}
                    className="h-full rounded-tr-lg w-full"
                  />
                </div>
              </>
              <>
                <div className="col-span-1">
                  <Image
                    src={HomeCardImage4}
                    alt={`about image`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="col-span-1 p-2 sm:p-5 bg-gray-200">
                  <HomeContent
                    title="Manage Reservations"
                    description="Admin privileges unlocked! Navigate through our Reservation Management interface effortlessly. Handle bookings, track schedules, and ensure a seamless experience for our valued guests."
                    showButton={true}
                    textButton="Manage All Reservations"
                    href="/manage-reservations"
                  />
                </div>
              </>
              <>
                <div className="col-span-1 p-2 sm:p-5 bg-gray-200">
                  <HomeContent
                    title="About Us"
                    description="Embark on a Groovy Massage Journey! Secure your spot for a blissful relaxation session with us. Ensure your good vibes by making reservations."
                    showButton={false}
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={HomeCardImage2}
                    alt={`about image`}
                    className="h-full w-full rounded-br-lg object-cover"
                  />
                </div>
              </>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
}
