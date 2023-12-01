import BacktoTop from "@/components/BacktoTop/BacktoTop";
import MpHeader from "@/components/MpHeader/MpHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Home from "../page";

export default async function PatientLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) return Home();
  return (
    <body>
      <MpHeader />
      {children}
      <BacktoTop />
    </body>
  );
}
