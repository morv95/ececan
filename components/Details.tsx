import { Calendar, MapPin, Clock } from "lucide-react";

export default function Details() {
  return (
    <section id="detaylar" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-800">Tarih & Mekan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Date */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-stone-50 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-1">Tarih</h3>
              <p className="text-gray-600">20 Temmuz 2026</p>
              <p className="text-gray-500 text-sm">Pazartesi</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-stone-50 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-1">Saat</h3>
              <p className="text-gray-600">19:00</p>
              <p className="text-gray-500 text-sm">Karşılama</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-stone-50 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-1">Mekan</h3>
              <p className="text-gray-600">Sahil Bahçe Davet</p>
              <p className="text-gray-500 text-sm">Caddebostan, Kadıköy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
