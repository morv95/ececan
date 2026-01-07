import { MapPin, ExternalLink } from "lucide-react";

export default function Map() {
  return (
    <section id="konum" className="py-24 px-6 bg-cream">
       <div className="max-w-5xl mx-auto">
         <div className="text-center mb-12 space-y-4">
            <span className="text-rose-gold tracking-widest text-xs font-bold uppercase">Konum</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-text">Nasıl Gidilir?</h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-rose-gold/10 border border-stone-100 group">
            <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=Sahil+Bahçe+Davet+Caddebostan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                title="Düğün Konumu"
            ></iframe>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-max">
                <a 
                href="https://maps.google.com/maps?q=Sahil+Bahçe+Davet+Caddebostan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white px-8 py-4 rounded-full shadow-xl hover:bg-rose-gold hover:text-white transition-all transform hover:scale-105 font-bold text-sm tracking-wide text-gray-800"
                >
                <MapPin className="w-4 h-4" />
                <span>HARİTADA AÇ</span>
                <ExternalLink className="w-4 h-4 ml-1" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
