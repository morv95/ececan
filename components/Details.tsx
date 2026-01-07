import { Calendar, MapPin, Clock } from "lucide-react";

export default function Details() {
  const details = [
    {
      icon: Calendar,
      title: "Tarih",
      content: "20 Temmuz 2026",
      sub: "Pazartesi",
    },
    {
      icon: Clock,
      title: "Saat",
      content: "19:00",
      sub: "Karşılama",
    },
    {
      icon: MapPin,
      title: "Mekan",
      content: "Sahil Bahçe Davet",
      sub: "Caddebostan, İstanbul",
    },
  ];

  return (
    <section id="detaylar" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
             <span className="text-rose-gold tracking-widest text-xs font-bold uppercase">Detaylar</span>
             <h2 className="text-4xl md:text-5xl font-serif text-dark-text">Ne Zaman & Nerede?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((item, index) => (
            <div 
                key={index} 
                className="group flex flex-col items-center text-center p-10 rounded-3xl bg-cream border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center text-rose-gold shadow-sm group-hover:scale-110 transition-transform duration-300 border border-rose-gold/10">
                <item.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-3 text-dark-text">{item.title}</h3>
              <p className="text-lg text-gray-600 font-medium">{item.content}</p>
              <p className="text-rose-gold/80 text-sm mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
