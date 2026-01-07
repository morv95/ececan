import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-b from-cream via-[#fcf5f5] to-cream">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-champagne/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <div className="space-y-2 animate-fade-in-up">
           <span className="block text-rose-gold tracking-[0.3em] text-xs md:text-sm uppercase font-bold">Düğün Davetiyesi</span>
           <div className="w-px h-16 bg-rose-gold/30 mx-auto my-4"></div>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-dark-text leading-tight animate-scale-in opacity-0" style={{ animationDelay: "300ms" }}>
          Ece <span className="text-rose-gold italic font-light">&</span> Can
        </h1>

        <p className="font-serif text-2xl md:text-3xl text-gray-600 italic animate-fade-in-up opacity-0" style={{ animationDelay: "600ms" }}>
          Evleniyor
        </p>
        
        <p className="max-w-md mx-auto text-gray-500 text-lg leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: "900ms" }}>
          Hayatımızın en özel gününde, bu mutluluğu sizinle paylaşmaktan onur duyarız.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: "1200ms" }}>
            <Link 
              href="#konum" 
              className="px-8 py-4 bg-rose-gold text-white rounded-full hover:bg-[#b08d8d] transition-all duration-300 shadow-xl shadow-rose-gold/20 w-full sm:w-auto text-xs md:text-sm font-bold tracking-widest"
            >
              KONUMU GÖR
            </Link>
            <Link 
              href="#fotograf-yukle" 
              className="px-8 py-4 bg-white text-rose-gold border border-rose-gold/20 rounded-full hover:bg-rose-50 transition-all duration-300 shadow-md w-full sm:w-auto text-xs md:text-sm font-bold tracking-widest"
            >
              FOTOĞRAF YÜKLE
            </Link>
        </div>
      </div>
    </section>
  );
}
