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
    <section id="program" className="py-20 px-4 bg-stone-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-800">Düğün Programı</h2>
        
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-center bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:border-rose-200 transition-colors">
              <div className="w-24 font-bold text-rose-500 text-xl font-serif">{event.time}</div>
              <div className="h-8 w-px bg-stone-200 mx-4"></div>
              <div className="text-gray-700 font-medium text-lg">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
