import Link from "next/link";
import { Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-rose-400">
          <Heart className="w-6 h-6 fill-current" />
          <span className="font-serif text-xl font-bold text-gray-800">E & C</span>
        </div>
        <div className="flex space-x-4 md:space-x-8 text-sm md:text-base font-medium text-gray-600">
          <Link href="#detaylar" className="hover:text-rose-500 transition-colors">Detaylar</Link>
          <Link href="#program" className="hover:text-rose-500 transition-colors">Program</Link>
          <Link href="#konum" className="hidden md:block hover:text-rose-500 transition-colors">Konum</Link>
          <Link href="#fotograf-yukle" className="hover:text-rose-500 transition-colors">Fotoğraf</Link>
        </div>
      </div>
    </nav>
  );
}
