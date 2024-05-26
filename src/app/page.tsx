import Dropdown from "@/components/DropDown";
import CountryGrid from "@/components/Grid";
import Search from "@/components/Search";

import Image from "next/image";

export default async function Home() {
  
  return (
    <main className="px-14">
      <div className="flex justify-between items-center py-10">
        <Search />
        <Dropdown />
      </div>
      <CountryGrid />
    </main>
  );
}
