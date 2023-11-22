import { withAuth } from "@/lib/withAuth";

function MassagePage({ params }: { params: { id: string } }) {
  return <>Massage studio {params.id}</>;
}

export default withAuth(MassagePage, ["admin", "user"]);
