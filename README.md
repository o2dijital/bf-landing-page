# BIGFASHION Landing Page

Modern ve responsive bir landing page tasarımı. BIGFASHION markası için özel olarak tasarlanmış minimalist bir arayüz.

## Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI**: Minimalist ve şık tasarım
- **Interaktif Öğeler**: Hover efektleri ve animasyonlar
- **6 Ana Kategori**:
  - Website
  - WhatsApp Sipariş
  - Mobil Uygulama
  - Instagram
  - Showroom
  - Telegram Toptan Satış

## Teknolojiler

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Google Fonts (Inter)
- SVG Icons

## Kurulum

1. Projeyi klonlayın veya dosyaları indirin
2. `index.html` dosyasını bir web tarayıcısında açın

```bash
# Basit HTTP sunucusu çalıştırmak için (isteğe bağlı)
python -m http.server 8000
# veya
npx serve .
```

## Dosya Yapısı

```
bf-landing-page/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript işlevleri
└── README.md           # Bu dosya
```

## Özelleştirme

### Renk Paleti
- Ana renk: `#2c2c2c` (Koyu gri)
- Arkaplan: `#f5f1eb` - `#ede5d8` (Bej gradyan)
- Beyaz: `rgba(255, 255, 255, 0.9)` (Yarı şeffaf)

### Kategori Linkleri
`script.js` dosyasındaki `categoryActions` objesini düzenleyerek kategori linklerini özelleştirebilirsiniz:

```javascript
const categoryActions = {
    website: () => {
        window.open('https://bigfashion.com.tr', '_blank');
    },
    whatsapp: () => {
        const message = encodeURIComponent('Merhaba! BIGFASHION ürünleri hakkında bilgi almak istiyorum.');
        window.open(`https://wa.me/905001234567?text=${message}`, '_blank');
    },
    // ... diğer kategoriler
};
```

## Responsive Breakpoints

- **Desktop**: > 480px
- **Mobile**: ≤ 480px
- **Small Mobile**: ≤ 360px

## Browser Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
