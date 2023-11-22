import ShopCard from "@/components/MassageCard";
import Banner from "@/components/home/Banner";
import { withAuth } from "@/lib/withAuth";

function Massages() {
  return (
    <>
      <Banner />
      <ShopCard
        mid="1"
        name="Massage Shop 1"
        imageSrc="https://drive.google.com/drive/folders/19_GVHQO1Ecm_7MowSrRflg2bufzcF-Pp?usp=sharing"
      />
    </>
  );
}

export default withAuth(Massages, ["admin", "user"]);
