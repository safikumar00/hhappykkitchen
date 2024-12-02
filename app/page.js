// import { Button } from "@/components/ui/button";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import CategroyList from "./_components/CategroyList";


export default function Home() {


  return (
    <div className="px-10 md:px-20 lg:px-40">
      <CategroyList />
    </div>
  );
}
