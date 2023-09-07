import BacktoTop from "@/components/BacktoTop/BacktoTop";
import MpHeader from "@/components/MpHeader/MpHeader";

export default function PatientLayout({ children }) {
  return (
    <body>
      <MpHeader />
      {children}
      <BacktoTop />
    </body>
  );
}
