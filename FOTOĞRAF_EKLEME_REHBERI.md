# 📸 Fotoğraf Ekleme Rehberi

## 1. Fotoğraf Dosyasını Ekleme

### Adımlar:
1. Fotoğrafınızı bilgisayarınızdan seçin
2. Proje klasöründeki `images` klasörüne kopyalayın
3. Fotoğraf adını İngilizce ve küçük harfle yazın (örn: `mekke-sehir.jpg`)

### Örnek:
```
serkan_site/
  └── images/
      ├── mekke-sehir.jpg
      ├── kabe-mekke.jpg
      └── yeni-fotograf.jpg
```

---

## 2. Galeri Sayfasına Fotoğraf Ekleme

### `js/gallery.js` dosyasını açın ve `galleryImages` dizisine ekleyin:

```javascript
const galleryImages = [
    { 
        src: 'images/fotograf-adi.jpg',  // images klasöründeki yol
        alt: 'Fotoğraf açıklaması',      // Erişilebilirlik için
        caption: 'Fotoğraf başlığı'      // Galeride görünecek yazı
    },
    // ... diğer fotoğraflar
];
```

### Örnek:
```javascript
const galleryImages = [
    { src: 'images/mekke-sehir.jpg', alt: 'Mekke Şehri', caption: 'Tarihi Mekke Şehri' },
    { src: 'images/kabe-mekke.jpg', alt: 'Kabe', caption: 'Kabe ve Mescid-i Haram' },
    { src: 'images/yeni-fotograf.jpg', alt: 'Yeni Fotoğraf', caption: 'Güzel bir anı' }
];
```

---

## 3. Makale Sayfasına Fotoğraf Ekleme

### `articles.html` dosyasında, makale içeriğine ekleyin:

```html
<div style="text-align: center; margin: var(--spacing-lg) 0;">
    <img src="images/fotograf-adi.jpg" 
         alt="Fotoğraf açıklaması" 
         class="article-detail-cover" 
         style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow);" 
         loading="lazy"
         onerror="this.src='https://via.placeholder.com/800x600?text=Fotoğraf+Yüklenemedi';">
    <p style="font-size: 0.9rem; color: var(--text-light); margin-top: var(--spacing-xs); font-style: italic;">
        Fotoğraf açıklaması veya başlığı
    </p>
</div>
```

### Örnek:
```html
<img src="images/mekke-sehir.jpg" 
     alt="Mekke Şehri - Tarihi Hava Fotoğrafı" 
     class="article-detail-cover" 
     style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: var(--shadow);" 
     loading="lazy">
```

---

## 4. Ana Sayfaya Fotoğraf Ekleme

### `index.html` dosyasında:

```html
<img src="images/fotograf-adi.jpg" alt="Açıklama" class="hero-image">
```

---

## 5. Fotoğraf Formatları

### Desteklenen formatlar:
- ✅ `.jpg` / `.jpeg` (önerilen)
- ✅ `.png`
- ✅ `.webp` (modern tarayıcılar)
- ✅ `.gif` (animasyonlu)

### Önerilen boyutlar:
- **Galeri:** 800x600px veya daha büyük
- **Makale kapak:** 800x400px
- **Makale içi:** 800x600px veya daha büyük

---

## 6. Fotoğraf Optimizasyonu

### Boyut küçültme (isteğe bağlı):
1. Online araçlar kullanın: TinyPNG, Squoosh
2. Fotoğraf boyutunu küçültün (max 2MB önerilir)
3. Kaliteyi koruyarak sıkıştırın

---

## 7. Hızlı Örnek: Yeni Fotoğraf Ekleme

### Adım 1: Fotoğrafı ekleyin
```
images/yeni-fotograf.jpg
```

### Adım 2: Galeriye ekleyin (`js/gallery.js`)
```javascript
{ src: 'images/yeni-fotograf.jpg', alt: 'Yeni Fotoğraf', caption: 'Güzel bir anı' }
```

### Adım 3: Makaleye ekleyin (`articles.html`)
```html
<img src="images/yeni-fotograf.jpg" alt="Yeni Fotoğraf" class="article-detail-cover">
```

---

## 8. Sorun Giderme

### Fotoğraf görünmüyor?
1. ✅ Dosya adının doğru yazıldığından emin olun
2. ✅ `images/` klasöründe olduğundan emin olun
3. ✅ Dosya uzantısının doğru olduğundan emin olun (.jpg, .png)
4. ✅ Tarayıcı konsolunu kontrol edin (F12 → Console)

### Fotoğraf çok büyük?
- Online araçlarla boyutunu küçültün
- Max 2MB olması önerilir

---

## 📝 Notlar

- Fotoğraf adlarında Türkçe karakter kullanmayın (ı, ş, ğ, ü, ö, ç)
- Boşluk yerine tire (-) kullanın: `yeni-fotograf.jpg` ✅
- Büyük harf kullanmayın: `Yeni-Fotograf.jpg` ❌ → `yeni-fotograf.jpg` ✅

