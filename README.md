<p align="center">
  <img src="https://www.enucuzpin.com/_ipx/_/logo/png/enucuzpin-blue.png" alt="Enucuzpin Logo" width="300" height="300">
</p>

# Enucuzpin Mağaza Teknik Dökümanı

Enucuzpin, mağazanıza ait olan ürünleri belirli aralıklarla bir endpoint üzerinden XML formatı olarak verileri toplar, kayıt eder ve günceller. XML olarak listelenen verilerin zorunlu ve zorunlu olmayan alanları mevcuttur. Enucuzpin’e açacağınız endpointteki verilerin doğruluğu ve alanların doluluk oranı, ürünlerinizi mümkün olduğunca hızlı eşleştirmemizi sağlar.
Enucuzpin, XML formatı olarak Google Merchant Feed RSS 2.0'ı desteklemektedir. Listelenmesi gereken veriler aşağıdaki tabloda yer almaktadır.
<br>
<br>

| Key              | Açıklama                                                 | (Enucuzpin için) Zorunluluk Durumu |
|------------------|----------------------------------------------------------|-------------------|
| g:id             | Ürünün benzersiz kimliği                                 | Zorunlu           |
| g:title          | Ürünün başlığı                                           | Zorunlu           |
| g:description    | Ürünün açıklaması                                        | İsteğe Bağlı      |
| g:link           | Ürünün mağaza web bağlantısı                             | Zorunlu           |
| g:image_link     | Ürünün resim bağlantısı                                  | İsteğe Bağlı      |
| g:condition      | Ürünün durumu (yeni, kullanılmış, yenilenmiş vb.)        | Zorunlu           |
| g:availability   | Ürünün stok durumu                                       | Zorunlu           |
| g:price          | Ürünün fiyatı                                            | Zorunlu           |
| g:shipping       | Kargo bilgileri (ülke, hizmet türü, fiyat)               | İsteğe Bağlı      |
| g:gtin           | Ürünün küresel ticari ürün numarası                      | İsteğe Bağlı      |
| g:brand          | Ürünün markası                                           | Zorunlu           |


[Google Merchat Feed RSS 2.0 Dökümanı için tıklayın.](https://support.google.com/merchants/answer/160589?hl=tr)
<br>

Javascript kod örneğini [./index.js](https://github.com/En-Ucuz-Pin/store-guide/blob/main/index.js) üzerinden görebilirsiniz.
Kodu çalıştırmak için: 

```cmd
npm install

node index.js
```

-------------------------------
Daha Fazla Bilgi İçin:
- [ENUCUZPİN](https://www.enucuzpin.com)
- [ENUCUZPİN Mağaza Kayıt](https://www.enucuzpin.com)
