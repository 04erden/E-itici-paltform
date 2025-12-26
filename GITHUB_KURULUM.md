# GitHub'a Yükleme Rehberi

## Adım 1: Git Repository'sini Başlatma

Proje klasörünüzde terminal açın ve şu komutları çalıştırın:

```bash
# Git repository'sini başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit'i yap
git commit -m "İlk commit: Eğitici Platform projesi"
```

## Adım 2: GitHub'da Yeni Repository Oluşturma

1. GitHub.com'a giriş yapın
2. Sağ üstteki "+" butonuna tıklayın
3. "New repository" seçin
4. Repository adını girin (örn: `egitici-platform`)
5. Public veya Private seçin
6. **"Initialize this repository with a README" seçeneğini işaretlemeyin**
7. "Create repository" butonuna tıklayın

## Adım 3: Remote Repository'yi Bağlama

GitHub'da repository oluşturduktan sonra, size verilen komutları çalıştırın. Örnek:

```bash
# Remote repository'yi ekle (YOUR_USERNAME ve REPO_NAME'i değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Branch'i main olarak ayarla
git branch -M main

# Dosyaları GitHub'a yükle
git push -u origin main
```

## Alternatif: GitHub Desktop Kullanımı

Eğer komut satırı kullanmak istemiyorsanız:

1. GitHub Desktop uygulamasını indirin ve kurun
2. GitHub hesabınızla giriş yapın
3. "File" > "Add Local Repository" seçin
4. Proje klasörünüzü seçin
5. "Publish repository" butonuna tıklayın

## Notlar

- `.gitignore` dosyası zaten oluşturuldu, gereksiz dosyalar yüklenmeyecek
- İlk yüklemeden sonra değişiklikler için:
  ```bash
  git add .
  git commit -m "Değişiklik açıklaması"
  git push
  ```

