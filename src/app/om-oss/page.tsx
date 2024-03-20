import { Metadata } from "next";
import OmOss from "@/components/om-oss/OmOss";

export const metadata: Metadata = {
  title: "Om oss - ",
  description: "",
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
