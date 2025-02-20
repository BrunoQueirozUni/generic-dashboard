import { Sidebar } from "@/app/(private)/(Navitagion)/Sidebar";
import { Header } from "../(Navitagion)/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-black via-gray-900 to-black">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex p-6">
          <div className="text-white border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl px-6">
            aa
          </div>
        </div>
      </div>
    </div>
  );
}
