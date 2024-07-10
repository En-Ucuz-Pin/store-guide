//* Google Merchant Product Feed RSS 2.0 Örnek XML Oluşturma
//* Daha fazla bilgi için: https://support.google.com/merchants/answer/160589?hl=tr

const fs = require('fs');
const { XMLBuilder } = require('fast-xml-parser');

// Ürün Listesi
const products = [
    {
        "id": "prod122",
        "title": "10 TL Razer GOLD Gift Card",
        "description": "Ürün açıklaması",
        "link": "https://site.com/example-product-url",
        "image_link": "https://site.com/example-image-url",
        "brand": "Razer Gold TL",
        "condition": "new",
        "availability": "in stock",
        "google_product_category": "5032",
        "product_type": "5032",
        "price": "10.00 TRY",
        "sale_price": "9.90 TRY",
        "shipping": {
            "country": "TR",
            "service": "Standard",
            "price": "0.00 TRY"
        }
    },
    {
        "id": "prod123",
        "title": "League Of Legends 850 RP",
        "description": "Ürün açıklaması",
        "link": "https://site.com/example-product-url",
        "image_link": "https://site.com/example-image-url",
        "brand": "Tactic Force",
        "condition": "new",
        "availability": "in stock",
        "google_product_category": "5032",
        "product_type": "5032",
        "shipping": {
            "country": "TR",
            "service": "Standard",
            "price": "0.00 TRY"
        },
        "price": "140.00 TRY",
        "sale_price": "137.00 TRY"
    }
]

// XML yapısını oluştur
const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
    suppressEmptyNode: true
});

const feed = {
    rss: {
        '@_xmlns:g': 'http://base.google.com/ns/1.0',
        '@_version': '2.0',
        channel: {
            title: 'Example Store',
            link: 'http://www.example.com',
            description: 'This is an example store',
            item: products.map(product => ({
                'g:id': product.id,
                'g:title': product.title,
                'g:description': product.description,
                'g:link': product.link,
                'g:image_link': product.image_link,
                'g:price': product.price,
                'g:condition': product.condition,
                'g:availability': product.availability,
                'g:brand': product.brand,
                'g:gtin': product.gtin,
                'g:mpn': product.mpn,
            }))
        }
    }
};

const xmlContent = builder.build(feed);
// fs.writeFileSync('products.xml', xmlContent);
console.log(xmlContent)