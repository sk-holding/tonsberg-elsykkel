import { Metadata } from "next";
import OmOss from "@/components/om-oss/OmOss";

export const metadata: Metadata = {
  title: "Om oss - Tønsberg elsykkel",
  description:
    "Utforsk elsykler i Tønsberg! Besøk vårt testsenter og få ekspertveiledning fra våre ansatte. Fullserviceverksted tilgjengelig, book tid online. Velkommen til trygg handel!",
};

const Page = () => {
  return (
    <main className="max-width">
      <div className="title-block">
        <h1>Hvem er vi?</h1>
      </div>
      <OmOss />
    </main>
  );
};
export default Page;
