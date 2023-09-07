import PatientHeader from "../../components/PatientHeader/PatientHeader";
import BacktoTop from "../../components/BacktoTop/BacktoTop";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Home from "../page";

export default async function PatientLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) return Home();

  return (
    <body>
      <PatientHeader />
      {children}
      <BacktoTop />
    </body>
  );
}
