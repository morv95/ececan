import { Camera, ExternalLink } from "lucide-react";

export default function PhotoUpload() {
  return (
    <section id="fotograf-yukle" className="py-20 px-4 bg-rose-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 text-rose-500 rounded-full mb-6">
          <Camera className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-gray-800">Anılarınızı Bizimle Paylaşın</h2>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto">
          Düğünümüzden kareleri buraya yükleyerek albümümüze katkıda bulunabilirsiniz.
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-100">
          <div className="relative h-[600px] w-full">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYkAsRnoGfA6Szs6i7AIPRGcHOf8RzXDhEHmjuQ2n7BbgSSw/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              className="absolute inset-0 w-full h-full"
            >
              Yükleniyor...
            </iframe>
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYkAsRnoGfA6Szs6i7AIPRGcHOf8RzXDhEHmjuQ2n7BbgSSw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-rose-500 font-medium hover:text-rose-600 underline decoration-2 underline-offset-4"
          >
            <span>Form açılmıyor mu? Yeni sekmede açın</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
