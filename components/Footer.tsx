export default function Footer() {
  return (
    <footer className="py-20 bg-cream border-t border-rose-gold/10 text-center px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl text-dark-text">
          Ece <span className="text-rose-gold italic">&</span> Can
        </h2>
        
        <p className="font-serif text-xl md:text-2xl italic text-gray-600 max-w-lg mx-auto leading-relaxed">
          "Bu özel günümüzde bizimle olduğunuz için teşekkür ederiz."
        </p>
        
        <div className="w-12 h-px bg-rose-gold/30 mx-auto" />
        
        <p className="text-gray-400 text-xs tracking-widest uppercase">
          Sevgiyle
        </p>
      </div>
    </footer>
  );
}
