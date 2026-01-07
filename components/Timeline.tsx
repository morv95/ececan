export default function Timeline() {
  const events = [
    { time: "18:30", title: "Karşılama" },
    { time: "19:00", title: "Nikâh" },
    { time: "19:30", title: "Kokteyl" },
    { time: "20:30", title: "İlk Dans" },
    { time: "21:00", title: "Pasta Kesimi" },
    { time: "21:30", title: "Eğlence" },
  ];

  return (
    <section id="program" className="py-24 px-6 bg-[#fcfbf9]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            <span className="text-rose-gold tracking-widest text-xs font-bold uppercase">Akış</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-text">Düğün Programı</h2>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-gold/40 to-transparent md:left-1/2 md:-ml-px"></div>

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-[15px] h-[15px] bg-white border-[3px] border-rose-gold rounded-full z-10 shadow-sm"></div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-[45%]">
                    <div className={`p-6 bg-white rounded-2xl shadow-sm border border-stone-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <span className="block text-rose-gold font-bold text-2xl mb-1 font-serif">{event.time}</span>
                        <h3 className="text-gray-700 font-medium text-lg tracking-wide">{event.title}</h3>
                    </div>
                </div>
                
                {/* Empty Space for the other side to balance flex */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
