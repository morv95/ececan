import { Camera, ExternalLink } from "lucide-react";

export default function PhotoUpload() {
  return (
    <section id="fotograf-yukle" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
         <div className="text-center mb-12 space-y-4">
            <span className="text-rose-gold tracking-widest text-xs font-bold uppercase">Fotoğraflar</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-text">Anılarınızı Paylaşın</h2>
             <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
              Bu özel günden kareleri bizimle paylaşarak mutluluğumuzu çoğaltabilirsiniz.
            </p>
        </div>

        <div className="bg-cream rounded-3xl p-2 md:p-8 shadow-2xl shadow-rose-gold/10 border border-stone-100">
          <div className="bg-white rounded-2xl overflow-hidden shadow-inner h-[600px] md:h-[700px] w-full relative">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYkAsRnoGfA6Szs6i7AIPRGcHOf8RzXDhEHmjuQ2n7BbgSSw/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              className="w-full h-full border-0"
              title="Fotoğraf Yükleme Formu"
            >
              Yükleniyor...
            </iframe>
          </div>
          
          <div className="mt-8 text-center">
             <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYkAsRnoGfA6Szs6i7AIPRGcHOf8RzXDhEHmjuQ2n7BbgSSw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white border border-rose-gold/30 text-rose-gold rounded-full hover:bg-rose-50 transition-all duration-300 shadow-sm font-bold text-sm tracking-wide group"
              >
                <span>Formu Yeni Sekmede Aç</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
