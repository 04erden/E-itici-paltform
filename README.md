# Eğitici Platform - Modern Eğitim Web Sitesi

Modern, temiz ve interaktif eğitici platform. HTML5, CSS3 ve Vanilla JavaScript kullanılarak geliştirilmiştir. Quiz sistemi, eğitici oyunlar ve kapsamlı içeriklerle öğrenmeyi eğlenceli hale getirir.

## 🎯 Özellikler

- ✅ Tamamen responsive tasarım (mobil, tablet, masaüstü)
- ✅ Modern ve temiz UI/UX
- ✅ **İnteraktif Quiz Sistemi** - Çoktan seçmeli sorular, skor takibi
- ✅ **Eğitici Oyunlar** - Doğru/Yanlış oyunu, Eşleştirme oyunu
- ✅ **Kapsamlı Yazılar** - Kategori filtreleme, detaylı içerikler
- ✅ **Görsel Galeri** - Modal lightbox ile görsel görüntüleme
- ✅ Smooth scroll navigasyon
- ✅ Mobil uyumlu menü
- ✅ İletişim formu (frontend)
- ✅ SEO dostu yapı
- ✅ Erişilebilir tasarım
- ✅ Performans odaklı kod

## 📁 Proje Yapısı

```
serkan_site/
│
├── index.html          # Ana sayfa
├── articles.html       # Yazılar sayfası
├── gallery.html        # Galeri sayfası
├── quiz.html           # Quiz & Oyunlar sayfası
├── about.html          # Hakkında sayfası
├── contact.html        # İletişim sayfası
├── css/
│    └── style.css      # Ana stil dosyası
├── js/
│    ├── main.js        # Ana JavaScript (navigasyon, form vb.)
│    ├── quiz.js        # Quiz sistemi
│    └── gallery.js     # Galeri sistemi
├── images/             # Görseller klasörü
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum ve Kullanım

### Yerel Geliştirme

1. Projeyi klonlayın veya indirin
2. `index.html` dosyasını bir web tarayıcısında açın
3. Veya bir local server kullanın:

```bash
# Python ile
python -m http.server 8000

# Node.js ile (http-server kurulu ise)
npx http-server

# PHP ile
php -S localhost:8000
```

Tarayıcıda `http://localhost:8000` adresine gidin.

### Production Deployment

Bu site herhangi bir statik web hosting servisine yüklenebilir:

- **GitHub Pages**: Repository'yi GitHub'a yükleyin ve Pages özelliğini aktifleştirin
- **Netlify**: Dosyaları drag & drop ile yükleyin
- **Vercel**: Git repository'yi bağlayın
- **Geleneksel Hosting**: FTP ile dosyaları yükleyin

## 📄 Sayfalar

### Ana Sayfa (index.html)
- Hero bölümü
- Öne çıkan yazılar
- Eğitici içerikler tanıtımı
- Hızlı erişim linkleri

### Yazılar (articles.html)
- Kategori filtreleme (Aile, Ahlak, Eğitim, Değerler)
- Yazı kartları ve detaylı içerikler
- Uzun metin desteği
- Okunabilirlik odaklı tasarım

### Galeri (gallery.html)
- Responsive görsel grid
- Modal lightbox ile büyütme
- Klavye navigasyonu (← → tuşları)
- Lazy loading

### Quiz & Oyunlar (quiz.html)
- **Quiz Sistemi:**
  - 8 soruluk çoktan seçmeli quiz
  - Anlık geri bildirim
  - Skor takibi
  - Sonuç ekranı
- **Doğru/Yanlış Oyunu:**
  - 8 soru
  - Anlık skor takibi
- **Eşleştirme Oyunu:**
  - Kavram-tanım eşleştirme
  - İnteraktif arayüz

### Hakkında (about.html)
- Platform misyonu
- İçerikler hakkında bilgi
- Değerler ve amaçlar

### İletişim (contact.html)
- İletişim formu
- Form validasyonu
- Kullanıcı dostu arayüz

## 📝 Özelleştirme

### Quiz Soruları

`js/quiz.js` dosyasındaki `quizQuestions` array'ini düzenleyerek quiz sorularını değiştirebilirsiniz:

```javascript
const quizQuestions = [
    {
        question: "Soru metni",
        options: ["Seçenek 1", "Seçenek 2", "Seçenek 3", "Seçenek 4"],
        correct: 0  // Doğru cevabın index'i
    },
    // ...
];
```

### Galeri Görselleri

`js/gallery.js` dosyasındaki `galleryImages` array'ini düzenleyerek galeri görsellerini değiştirebilirsiniz:

```javascript
const galleryImages = [
    { src: 'images/foto1.jpg', alt: 'Açıklama', caption: 'Başlık' },
    // ...
];
```

### Renkler

`css/style.css` dosyasındaki CSS değişkenlerini düzenleyerek renkleri özelleştirebilirsiniz:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --success-color: #27ae60;
    --error-color: #e74c3c;
    /* ... */
}
```

### İçerik

HTML dosyalarındaki içerikleri düzenleyerek site içeriğini değiştirebilirsiniz. Tüm sayfalar semantic HTML kullanır ve kolayca düzenlenebilir.

## 🎨 Tasarım Özellikleri

- **Tipografi**: Serif font (Crimson Text) okuma için, Sans-serif font (Inter) UI için
- **Renk Paleti**: Sakin ve profesyonel tonlar
- **Spacing**: Geniş boşluklar ile okunabilirlik
- **Animasyonlar**: Yumuşak geçişler ve hover efektleri
- **Layout**: Grid ve Flexbox ile modern düzen
- **Responsive**: Mobile-first yaklaşım

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Teknik Detaylar

- **HTML5**: Semantic markup, erişilebilirlik odaklı
- **CSS3**: Modern CSS özellikleri (Grid, Flexbox, Custom Properties, Animations)
- **JavaScript**: Vanilla JS, ES6+ özellikleri, modüler yapı
- **No Dependencies**: Harici kütüphane yok, tamamen vanilla
- **Performance**: Lazy loading, throttled scroll events, optimized animations

## 🎮 Quiz ve Oyun Sistemi

### Quiz Özellikleri
- Soru başına tek seçim
- Anlık doğru/yanlış geri bildirimi
- İlerleme çubuğu
- Skor hesaplama
- Sonuç ekranı ve mesajları

### Oyun Özellikleri
- **Doğru/Yanlış**: 8 soru, anlık skor
- **Eşleştirme**: 5 çift, interaktif seçim

## 📸 Görsel Yönetimi

- Placeholder görseller kullanılmıştır
- Gerçek görselleri `images/` klasörüne ekleyin
- `gallery.js` ve HTML dosyalarındaki görsel yollarını güncelleyin
- Lazy loading otomatik olarak aktif

## 🔍 SEO ve Erişilebilirlik

- Semantic HTML5 yapısı
- Meta etiketleri (description, keywords)
- Alt text'ler tüm görsellerde
- ARIA etiketleri
- Klavye navigasyonu desteği
- Yüksek kontrast oranları

## 📄 Lisans

Bu proje özgürce kullanılabilir ve özelleştirilebilir.

## 👤 İletişim

Sorularınız için iletişim sayfasındaki formu kullanabilirsiniz.

---

## ⚠️ Önemli Notlar

1. **İletişim Formu**: Şu anda sadece frontend validasyonu yapmaktadır. Gerçek form gönderimi için bir backend entegrasyonu gereklidir.

2. **Görseller**: Placeholder görseller kullanılmıştır. Production'da gerçek görsellerle değiştirin.

3. **Quiz Verileri**: Quiz soruları JavaScript array'lerinde saklanmaktadır. Daha fazla soru eklemek için `js/quiz.js` dosyasını düzenleyin.

4. **Tarayıcı Desteği**: Modern tarayıcılar için optimize edilmiştir (Chrome, Firefox, Safari, Edge).

---

**Geliştirici Notları:**
- Tüm kod yorumlanmış ve okunabilir
- Modüler JavaScript yapısı
- CSS değişkenleri ile kolay özelleştirme
- Production-ready kod kalitesi
