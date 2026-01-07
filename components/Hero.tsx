export default function Hero() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-stone-50 overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-30 -top-20 -left-20 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-30 bottom-0 right-0" />

      <div className="relative z-10 space-y-6">
        <p className="text-rose-400 tracking-[0.2em] uppercase text-sm md:text-base">Düğün Davetiyesi</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-800 leading-tight">
          Ece <span className="text-rose-400">&</span> Can
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-gray-600 italic mt-2">Evleniyor</p>
        
        <div className="w-24 h-px bg-rose-300 mx-auto my-8" />
        
        <p className="max-w-md mx-auto text-gray-600 text-lg leading-relaxed">
          Hayatımızın en özel gününde, bu mutluluğu sizinle paylaşmaktan onur duyarız.
        </p>
      </div>
    </section>
  );
}
