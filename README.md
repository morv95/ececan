# Ece & Can - Düğün Davetiyesi

Bu proje, **Next.js 14 (App Router)** ve **Tailwind CSS** kullanılarak geliştirilmiş, tek sayfalık, statik bir düğün davetiyesi web sitesidir.

## 🛠️ Teknolojiler

- **Next.js 14**: React framework (App Router yapısı)
- **Tailwind CSS**: Stil ve tasarım
- **Lucide React**: İkon seti
- **Google Forms & Maps**: Gömülü içerikler

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. Tarayıcınızda `http://localhost:3000` adresine gidin.

## 📦 Yayına Alma (Deploy)

Bu proje Vercel üzerinde çalışmak üzere optimize edilmiştir.

### Vercel ile Deploy

1. Projeyi GitHub, GitLab veya Bitbucket hesabınıza yükleyin.
2. [Vercel](https://vercel.com) hesabınıza giriş yapın.
3. **"Add New Project"** butonuna tıklayın ve git reponuzu seçin.
4. Framework Preset olarak **Next.js** otomatik seçilecektir.
5. **"Deploy"** butonuna tıklayın.

Vercel, projenizi otomatik olarak derleyecek ve yayına alacaktır.

## 📂 Proje Yapısı

- `app/`: Sayfa yapısı ve layout (App Router)
- `components/`: Tekrar kullanılabilir UI bileşenleri
  - `Hero.tsx`: Giriş bölümü
  - `Details.tsx`: Tarih ve mekan bilgileri
  - `Timeline.tsx`: Düğün programı
  - `Map.tsx`: Harita
  - `PhotoUpload.tsx`: Fotoğraf yükleme formu
- `public/`: Statik dosyalar

## 🎨 Özelleştirme

- **Renkler ve Fontlar**: `app/globals.css` ve `tailwind.config.ts` (varsa) üzerinden düzenlenebilir.
- **İçerik**: İlgili bileşen dosyalarındaki (`components/*.tsx`) metinleri değiştirerek davetiyeyi kişiselleştirebilirsiniz.
