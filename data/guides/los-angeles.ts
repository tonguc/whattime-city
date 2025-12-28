// data/guides/los-angeles.ts

export const losAngelesGuide = {
  city: 'Los Angeles',
  slug: 'los-angeles',
  timezone: 'America/Los_Angeles',
  
  // Quick Time Finder için diğer şehirler (LA için contextual)
  quickTimeCities: [
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Sydney', timezone: 'Australia/Sydney' }
  ],
  
  // 11 ALT SAYFA (New York ile AYNI yapı)
  subPages: [
    {
      icon: '🗺️',
      title: 'Overview',
      slug: 'overview',
      description: 'Los Angeles genel bakış ve temel bilgiler',
      content: {
        title: 'Los Angeles Genel Bakış',
        sections: [
          {
            heading: 'Şehir Hakkında',
            content: `Los Angeles, Kaliforniya eyaletinin en büyük ve ABD'nin ikinci büyük şehridir. Pasifik Okyanusu kıyısında 1.302 km² alana yayılan metropol, 3.9 milyon nüfusuyla dünyanın en kozmopolit şehirlerinden biridir.

"Meleklerin Şehri" olarak bilinen LA, Hollywood film endüstrisi, teknoloji start-up'ları, moda ve yaratıcı sektörleriyle küresel bir merkezdir. Şehir, çeşitliliği, açık hava yaşam tarzı ve yılda ortalama 284 güneşli günüyle ünlüdür.

Los Angeles, 80'den fazla mahalle içerir ve her biri kendi karakterini, mutfağını ve kültürünü yansıtır. Santa Monica'nın plajlarından Downtown'ın gökdelenlerine, Beverly Hills'in lüksünden Arts District'in hipster kafelerine kadar geniş bir spektrum sunar.`
          },
          {
            heading: 'Zaman Dilimi',
            content: `Los Angeles, Pacific Standard Time (PST) veya Pacific Daylight Time (PDT) zaman diliminde yer alır:

• Kış ayları (Kasım-Mart): PST (UTC-8)
• Yaz ayları (Mart-Kasım): PDT (UTC-7)

New York'tan 3 saat, Londra'dan 8 saat, Tokyo'dan 17 saat geridedir. Bu zaman farkı, uluslararası iş görüşmeleri ve remote çalışma planlamasında önemli bir faktördür.`
          },
          {
            heading: 'İklim ve Hava Durumu',
            content: `LA, Akdeniz iklimi ile tanınır:

• Yaz (Haziran-Eylül): 25-30°C, neredeyse hiç yağmur yok
• Kış (Aralık-Mart): 15-20°C, ara sıra yağmur
• İlkbahar/Sonbahar: 18-25°C, ideal hava koşulları

Şehir, yıl boyu açık hava aktiviteleri için mükemmeldir. Plaj sezonu Mayıs-Ekim arası olsa da, kış aylarında bile güneşli günler yaygındır. "June Gloom" (Haziran karamsar havası) sabahları sisli olabilir ancak öğleden sonra açar.`
          },
          {
            heading: 'Ekonomi ve İş Dünyası',
            content: `Los Angeles ekonomisi çeşitli sektörlere dayanır:

• **Entertainment**: Film, müzik, televizyon endüstrisi (Hollywood, Universal, Warner Bros)
• **Technology**: Silicon Beach (Venice, Santa Monica, Playa Vista) - Snap, Hulu, Google
• **Aerospace**: SpaceX, Boeing, Northrop Grumman
• **Fashion**: Büyük markalar ve tasarımcılar
• **Tourism**: Yılda 50+ milyon ziyaretçi

Start-up ekosistemi güçlü, özellikle consumer tech, entertainment tech ve e-ticaret alanlarında. Venture capital yatırımları San Francisco'dan sonra ikinci sırada.`
          },
          {
            heading: 'Kültür ve Yaşam Tarzı',
            content: `LA yaşam tarzı "laid-back" ama iddialıdır:

• Açık hava kültürü: Plajlar, hiking, yoga, açık hava yemekleri
• Sağlık ve fitness odaklı: Organik gıda, wellness trendi burada başladı
• Araç bağımlı: Toplu taşıma gelişiyor ama çoğu kişi araba kullanır
• Casual dress code: Rahat giyim norm, sadece finans/hukuk resmi giyinir
• Çeşitli mutfak: Dünyanın her yerinden otantik yemekler (Meksika, Kore, Japon, İtalyan)

Şehir, sanat (Getty Museum, LACMA), müzik (Hollywood Bowl), spor (Lakers, Dodgers) ve festivaller (Coachella yakınlarda) ile zengin kültürel yaşam sunar.`
          }
        ],
        quickTips: [
          'LA trafiği dünyaca ünlüdür - rush hour\'larda (7-10, 16-19) seyahatten kaçının',
          'Uber/Lyft her yerde mevcut ama uzun mesafelerde pahalı olabilir',
          'Plajlar ücretsiz ama park yeri zor - erken gidin veya toplu taşıma kullanın',
          'Tipping kültürü güçlü: restoranlar %18-20, Uber %10-15',
          'Şehir geniş - bir ucundan diğerine 2+ saat sürebilir, mahalleleri iyi planlayın'
        ]
      }
    },
    {
      icon: '💼',
      title: 'Business Hours',
      slug: 'business-hours',
      description: 'LA iş saatleri ve mesai kültürü',
      content: {
        title: 'Los Angeles İş Saatleri',
        sections: [
          {
            heading: 'Standart Mesai Saatleri',
            content: `Los Angeles iş dünyası rahat ama profesyoneldir. Batı Kıyısı work-life balance kültürü, New York'un yüksek tempolu ortamından belirgin şekilde farklıdır.

**Geleneksel ofis saatleri:**
• Pazartesi-Cuma: 9:00-17:00 veya 9:00-18:00
• Cumartesi-Pazar: Kapalı (perakende/servis sektörü hariç)

Tech ve start-up şirketlerinde remote/hybrid modeller yaygındır. LA'nın ünlü trafiği nedeniyle birçok şirket "core hours" sistemi uygular - çalışanlar 10:00-16:00 arası ofiste olur, giriş-çıkış esnek yapılır.

Şehrin geniş coğrafyası ve trafik, iş saatlerini etkileyen en büyük faktörlerdir. 10 mil mesafe rush hour'da 45-60 dakika sürebilir, bu yüzden esnek başlangıç saatleri norm haline gelmiştir.`
          },
          {
            heading: 'Sektörel Farklılıklar',
            content: `**Entertainment & Media (Hollywood):**
• Çalışma saatleri: 9:00-18:00+ (projeye göre uzayabilir)
• Set çalışanları: 12-14 saat mesai normaldir
• Post-production/Agency: Daha düzenli 9-6 saatleri
• "Pilot season" (Ocak-Nisan): Yılın en yoğun dönemi
• Networking events genelde akşam 18:00-21:00

**Technology (Silicon Beach):**
• Venice, Santa Monica, Playa Vista tech firmaları startup kültürü taşır
• Esnek saatler yaygın: 10:00-18:00 ortalama
• Remote-friendly: COVID sonrası %60+ hybrid
• Casual dress code standard
• Friday team events/happy hours sık

**Finance & Law (Downtown LA):**
• Daha geleneksel: 8:30-17:30 veya 9:00-18:00
• Formal dress code (casual Fridays yaygınlaşıyor)
• Face-time culture azalıyor ama hala mevcut
• Lunch 30-60 dakika

**Aerospace & Defense:**
• Strict 8:00-17:00 (güvenlik clearance nedeniyle)
• Remote work sınırlı (classified work)
• Casual dress code (aksi belirtilmedikçe)

**Retail & Hospitality:**
• 7 gün açık: 10:00-21:00 (mall hours)
• Shift work: sabah/akşam vardiyaları
• Weekend/holiday çalışma normal`
          },
          {
            heading: 'Toplantı Kültürü',
            content: `LA iş dünyası **relationship-first** yaklaşım benimser. New York'un transactional tarzından farklı olarak, burada small talk ve kişisel bağ kurmaya zaman ayrılır.

**Toplantı normları:**
• 5-10 dakika gecikmeler tolere edilir (trafik gerçek bir mazeret)
• "Let's grab coffee" = informal iş görüşmesi
• Video calls için rahat arka plan OK (ev ofisi, kafe)
• Toplantı sonu "we should do this again" genelde sosyal nezakettir, kesin plan değil

**İletişim kanalları:**
• Email: Formal talepler, documentation, follow-up
• Slack/Teams: Günlük ekip iletişimi
• Text: Acil konular veya casual check-in
• Phone: Nadir (genç nesil tercih etmez)

**Networking:**
• Industry events akşam 18:00-21:00 arası
• "Coffee meetings" LA'da iş yapmanın temelidir
• Eventbrite, LinkedIn Events aktif kullanılır
• Casual introduction'lar değerlidir - "I know someone who..."

**Pro tip:** LA trafiği toplantı planlamasını ciddi etkiler. 15-20 dakika buffer ekleyin veya video call önerin. "Can we do a Zoom instead?" sıkça duyarsınız.`
          },
          {
            heading: 'Öğle Yemeği ve Breaks',
            content: `**Lunch kültürü:**
• Çoğunlukla 30-60 dakika
• Desk'te yemek yaygın (özellikle tech sektörü)
• "Lunch meetings" popüler - business + sosyal
• Food trucks, grab-and-go options bol

**Coffee breaks:**
• Sabah coffee run ritual - Blue Bottle, Alfred, Verve popüler
• Coffee meetings gerçek iş görüşmeleridir, sadece sosyal değil
• 15-30 dakika casual chat + business

**Work from home/cafe:**
• Remote work LA'da yaygın - cafeler laptop'la dolu
• WiFi şifresi sormak normal
• Beklenen davranış: yerini 2+ saat kullanacaksan sipariş ver

LA'da iş ile özel hayat arasındaki çizgi San Francisco kadar keskin değildir ama New York'tan daha balanced'tır.`
          },
          {
            heading: 'Dress Code',
            content: `Los Angeles iş dünyası casual'dır, ancak "put-together" görünüm beklenir:

**Tech/Start-up:**
• Jeans + t-shirt/casual button-up standart
• Sneakers OK
• Hoodies yaygın
• Client meetings için biraz daha formal (dark jeans + polo)

**Entertainment/Media:**
• "LA chic": Casual ama stylish
• Designer jeans + nice top
• Sneakers veya boots
• Personal style önemli - fashion sense beklenir

**Finance/Law:**
• Business casual: slacks/chinos + button-up/blouse
• Suit nadir (mahkeme/önemli meetings hariç)
• Casual Fridays: jeans OK

**General rule:**
Şüphe ettiğinizde business casual seçin - LA'da overdressed olmak underdressed olmaktan daha iyidir.

**Weather factor:**
Hava hep güzel olduğu için layers önerilir - sabahları serin, öğleden sonra sıcak. AC'li ofislere cardigan/jacket getirin.`
          }
        ],
        quickTips: [
          'Trafik faktörü gerçek - toplantılara 15-20 dakika buffer ekleyin',
          'Coffee meetings LA\'nın currency\'sidir - kabul edin ve networking yapın',
          'Dress code casual ama "put-together" görünüm beklenir',
          'Work-life balance ciddi alınır - akşam 18:00\'dan sonra email beklenmiyor',
          'Remote work yaygın - video call arka planınız için endişelenmeyin'
        ]
      }
    },
    {
      icon: '🎋',
      title: 'Best Time to Visit',
      slug: 'best-time-to-visit',
      description: 'LA\'yı ziyaret için en iyi zamanlar',
      content: {
        title: 'Los Angeles\'ı Ziyaret İçin En İyi Zaman',
        sections: [
          {
            heading: 'Mevsimsel Genel Bakış',
            content: `Los Angeles yıl boyu sıcak ve güneşli olsa da, her mevsimin kendine özgü avantajları ve dezavantajları vardır.

**İlkbahar (Mart-Mayıs):**
• Hava: 18-24°C, ılıman ve hoş
•장점: Çiçekler açar, yeşil manzaralar, festival sezonu
• Dezavantaj: Spring break kalabalığı (Mart sonu)
• İdeal aktiviteler: Hiking, plajlar, açık hava festivalleri

**Yaz (Haziran-Ağustos):**
• Hava: 25-30°C, güneşli ve sıcak
•장점: Plaj sezonu zirvede, uzun günler, outdoor events
• Dezavantaj: Turist kalabalığı, yüksek fiyatlar, "June Gloom"
• İdeal aktiviteler: Plajlar, theme parks, concerts

**Sonbahar (Eylül-Kasım):**
• Hava: 20-27°C, yılın en güzel hava koşulları
•장점: Kalabalık azalır, fiyatlar düşer, hala sıcak
• Dezavantaj: Orman yangını riski (Eylül-Ekim)
• İdeal aktiviteler: Her şey - hiking, plajlar, şehir turu

**Kış (Aralık-Şubat):**
• Hava: 15-20°C, ılıman, ara sıra yağmur
•장점: En ucuz dönem, az kalabalık, tatil atmosferi
• Dezavantaj: Yağmurlu günler olabilir, plaj için serin
• İdeal aktiviteler: Müzeler, alışveriş, şehir keşfi`
          },
          {
            heading: 'En İyi Aylar',
            content: `**#1 EYLÜL-KASIM (Sonbahar):**
Mutlak en iyi dönem. Hava hala sıcak (20-27°C), yaz kalabalığı gitmiş, fiyatlar makul. Okyanus suyu Ağustos'tan kalan sıcaklıkta. October "perfect weather month" olarak bilinir.

**#2 MART-MAYIS (İlkbahar):**
İkinci en iyi seçenek. Çiçekler açar, yeşildir, festivaller başlar. Spring break haftasını (genelde Mart sonu) kaçırırsanız ideal.

**#3 HAZİRAN:**
Plaj sezonu başlar ama "June Gloom" (sabah sisi) olabilir. Öğleden sonra genelde açar. Yaz kalabalığı henüz zirveye ulaşmamış.

**KAÇINILACAK DÖNEMLER:**
• **Temmuz-Ağustos:** En kalabalık ve pahalı. Hotels, flights, attractions premium fiyat.
• **Mart sonu (Spring Break):** Üniversite tatili, her yer dolu.
• **Ocak (Golden Globes/award season):** Hotels downtown'da çok pahalı.`
          },
          {
            heading: 'Etkinlikler ve Festivaller',
            content: `LA yıl boyu events ile doludur:

**OCAK:**
• Golden Globe Awards
• Rose Parade (Pasadena)

**ŞUBAT:**
• Oscars (Academy Awards)
• Chinese New Year (Chinatown)

**MART-NİSAN:**
• LA Marathon
• Cherry Blossom Festival

**MAYIS:**
• Cinco de Mayo celebrations

**HAZİRAN:**
• LA Pride Festival
• LA Film Festival

**TEMMUZ:**
• 4th of July fireworks (Santa Monica Pier)

**AĞUSTOS:**
• Nisei Week (Little Tokyo)

**EYLÜL:**
• LA County Fair

**EKİM:**
• Halloween festivaller (West Hollywood en büyük)

**KASIM:**
• Day of the Dead (Olvera Street)

**ARALIK:**
• Holiday lights ve parades
• New Year's Eve (Grand Park)

**BONUS:** Coachella Music Festival (Nisan) Indio'da (2 saat doğu), ancak LA'dan gidilir.`
          },
          {
            heading: 'Hava Durumu Detayları',
            content: `**"June Gloom" Nedir?**
Mayıs sonu-Haziran ayında sabahları denizden gelen sis tabakası. Genelde öğleden sonra açar. İç bölgeler (Downtown, Pasadena) etkilenmez, sadece sahil (Santa Monica, Venice).

**Yağmur:**
• Yılın %90'ı güneşli
• Yağmur sezonu: Aralık-Mart
• Ortalama 35-40 gün/yıl yağış
• Genelde hafif, sürekli değil

**Sıcak Dalgaları:**
• Eylül-Ekim'de "Santa Ana Winds" 35-40°C'ye çıkabilir
• İç bölgeler (Valley) sahilden 5-10°C daha sıcak
• AC her yerde var, endişelenmeyin

**Plaj Suyu Sıcaklığı:**
• Yaz: 18-20°C (serindir ama giriliyor)
• En sıcak: Ağustos-Eylül
• Wetsuit surfers için yaygın`
          },
          {
            heading: 'Bütçe ve Fiyat Karşılaştırmaları',
            content: `**Yüksek Sezon (Haziran-Ağustos, holidays):**
• Hotels: $200-400+/gece
• Flights: Premium fiyat
• Car rentals: Pahalı, rezervasyon zor

**Orta Sezon (İlkbahar, Sonbahar):**
• Hotels: $120-250/gece
• Flights: Makul
• Rental cars: Normal fiyat

**Düşük Sezon (Kış, Ocak-Şubat):**
• Hotels: $80-180/gece
• Flights: En ucuz
• Rental cars: Best deals

**Para Tasarrufu İpuçları:**
• Kış aylarında rezervasyon yapın (Ocak-Şubat en ucuz)
• Mid-week ziyaretler weekend'den %30-40 daha ucuz
• Airbnb/VRBO şehir dışı mahallelerde (Pasadena, Long Beach) uygun
• Metro kullanarak araç kiralama masrafından kaçının (mümkünse)`
          }
        ],
        quickTips: [
          'Eylül-Kasım en ideal dönem: güzel hava, az kalabalık, makul fiyatlar',
          'June Gloom gerçektir - sabahları sisli olabilir ama öğleden sonra açar',
          'Yaz (Haziran-Ağustos) en pahalı ve kalabalık dönem',
          'Kış (Ocak-Şubat) en ucuz ama ara sıra yağmurlu',
          'Award season (Ocak-Şubat) downtown hotels çok pahalı'
        ]
      }
    },
    {
      icon: '💻',
      title: 'Remote Work',
      slug: 'remote-work',
      description: 'LA\'da uzaktan çalışma imkanları',
      content: {
        title: 'Los Angeles Remote Work Rehberi',
        sections: [
          {
            heading: 'Remote Work Manzarası',
            content: `Los Angeles, özellikle Silicon Beach (Venice, Santa Monica, Playa Vista) ile uzaktan çalışma kültürünü erken benimseyen şehirlerden biridir. COVID-19 pandemisi sonrası, LA'nın tech, media ve yaratıcı sektörleri hybrid ve remote modellere kalıcı olarak geçiş yaptı.

**Neden LA Remote Workers İçin Cazip:**
• Güçlü tech/creative ecosystem - networking fırsatları bol
• Yıl boyu güneşli hava - açık hava çalışma spaces
• Çeşitli coworking spaces ve cafe kültürü
• PST timezone - Asya ile overlap daha fazla (NYC'ye kıyasla)
• Work-life balance kültürü güçlü

**Zorluklar:**
• Yüksek yaşam maliyeti (kira, yemek, ulaşım)
• Trafik - hybrid gidecekseniz zor
• Rekabetçi iş piyasası
• Araç zorunluluğu (toplu taşıma gelişiyor ama yetersiz)`
          },
          {
            heading: 'Coworking Spaces',
            content: `LA'da 100+ coworking space mevcut. İşte en popülerleri:

**Premium Tier ($300-600/ay):**
• **WeWork** - Downtown, Playa Vista, DTLA, Pasadena (network events bol)
• **NeueHouse** - Hollywood (creative professionals, high-end)
• **Cross Campus** - Santa Monica, Pasadena, DTLA (community-focused)

**Mid-Tier ($200-400/ay):**
• **The Hatchery** - Culver City (women-focused, wellness-oriented)
• **Kleverdog** - Downtown (affordable, basic amenities)
• **Betti** - Arts District (creative vibe, small studios)

**Budget-Friendly ($100-250/ay):**
• **The Hive** - Torrance (farklı neighborhoods)
• **PodShare** - Co-living + coworking hybrid (en ucuz)
• **Library Memberships** - LA Public Library hotspot + workspace (ÜCRETSİZ!)

**Day Pass Options:**
• Çoğu space $25-50/gün day pass sunar
• Deneyin, sonra commit edin

**Özellik Karşılaştırması:**
• High-speed WiFi: Hepsi 100+ Mbps
• Meeting rooms: Premium tier'da ücretsiz, mid-tier'da saatlik
• Printing: Çoğunda mevcut
• Kitchen/Coffee: Standard
• Events/Networking: WeWork, Cross Campus en aktif
• 24/7 access: Premium tier'da standart`
          },
          {
            heading: 'Cafe Culture & WiFi',
            content: `LA cafe'leri laptop-friendly olmasıyla ünlüdür. İşte en iyi remote work spots:

**SANTA MONICA / VENICE:**
• **Blue Bottle** (Montana Ave) - Spacious, fast WiFi, outlets bol
• **Urth Caffé** (Main St) - Açık hava patio, WiFi şifresi yok
• **Menotti's** (Venice) - Espresso bar, minimal vibe, WiFi solid

**DOWNTOWN LA:**
• **Verve Coffee** - Arts District, modern, hızlı WiFi
• **Alfred Coffee** - Multiple locations, Instagram-worthy
• **The Springs** - Health-focused, kombucha on tap

**SILVER LAKE / ECHO PARK:**
• **Dinosaur Coffee** - Hipster vibe, WiFi güçlü
• **Intelligentsia** - Specialty coffee, sessiz ortam
• **Stories Books & Cafe** - Kitap + kafe, uzun oturma OK

**PASADENA:**
• **Copa Vida** - Spacious, outlets everywhere
• **Jones Coffee** - Quiet, professional crowd

**WiFi Etiketi:**
• Bir içecek minimum (her 2-3 saatte bir sipariş beklenir)
• Rush hours'da (7-9 AM) yer bulmak zor - erkenden gidin
• Sessiz konuşun - herkes çalışıyor
• Outlets sınırlı - power bank getirin

**WiFi Hızları:**
• Ortalama 20-50 Mbps (video calls için yeterli)
• VPN kullanın - güvenlik için`
          },
          {
            heading: 'Internet & Connectivity',
            content: `**Home Internet Providers:**
• **Spectrum** - En yaygın, 300-500 Mbps, $50-80/ay
• **AT&T Fiber** - Fiber areas'ta 500-1000 Mbps, $60-90/ay
• **Frontier** - Bazı neighborhoods, 500 Mbps, $50-70/ay

**Mobile Hotspot:**
• Verizon/T-Mobile unlimited plans $60-80/ay
• 5G coverage LA'da yaygın
• Backup connection olarak ideal

**Public WiFi:**
• LA Public Library - Ücretsiz, hızlı, güvenilir
• Beach areas - Santa Monica, Venice'te free WiFi
• Parks - Bazı büyük parklarda mevcut (Echo Park, Griffith)

**Video Call Quality:**
Zoom/Google Meet için min 5 Mbps gerekir - LA'daki tüm major providers bunu sağlar.`
          },
          {
            heading: 'Visa & Yasal Bilgiler',
            content: `**ABD'de Remote Çalışma:**

**B-1/B-2 Tourist Visa:**
• Remote work yasal GRİ ALAN
• ABD dışı şirket için çalışmak technically OK
• ABD'den gelir almak yasak
• Max 6 ay kalış
• **Risk:** Border'da soru sorabilirler

**Work Visas:**
• **H-1B:** Specialty occupation, ABD şirketi sponsor gerekli
• **L-1:** Intra-company transfer
• **O-1:** Extraordinary ability (yaratıcı sektörler için yaygın)

**Digital Nomad:**
ABD'de "digital nomad visa" yok. Çoğu kişi B-1/B-2 ile gelir, dikkat çekmemeye çalışır. Uzun süre kalmak isterseniz proper work visa gerekir.

**Kaliforniya Tax:**
• 30+ gün CA'da kalırsanız state tax yükümlülüğü başlayabilir
• Remote çalışanlar için karmaşık - CPA danışın
• State tax %9.3-13.3 (gelire göre)

**Professional Advice:**
Immigration attorney + tax CPA ile konuşun - durumunuz benzersiz olabilir.`
          }
        ],
        quickTips: [
          'WeWork/Cross Campus network events için değer - monthly membership alın',
          'Cafeler laptop-friendly ama 2-3 saatte bir sipariş verin',
          'Home internet: Spectrum veya AT&T Fiber en güvenilir',
          'Digital nomad visa yok - B-1/B-2 gri alan, dikkatli olun',
          'PST timezone Asya ile overlap için avantajlı (Avrupa için zor)'
        ]
      }
    },
    {
      icon: '🏙️',
      title: '24 Hours',
      slug: '24-hours',
      description: 'LA\'da 24 saat boyunca ne yapılır',
      content: {
        title: 'Los Angeles\'ta 24 Saat',
        sections: [
          {
            heading: 'Sabah (6:00-12:00)',
            content: `**6:00-8:00 - Sunrise & Beach Workout**
LA'nın en güzel saatleri. Santa Monica veya Venice Beach'te sunrise izleyin. Muscle Beach'te açık hava gym ücretsiz. Koşu veya bisiklet için The Strand bike path mükemmel (42 km sahil boyunca).

• **Kahvaltı Spots:**
  - **Gjusta** (Venice) - Artisan bread, pastries, kahve
  - **Eggslut** (Grand Central Market) - Iconic egg sandwiches
  - **The Griddle Cafe** (Hollywood) - Massive pancakes

**8:00-10:00 - Griffith Observatory veya Hiking**
Trafik başlamadan önce Griffith Park'a gidin. Trails: Easy (Fern Dell), Moderate (Observatory hike), Hard (Mt. Hollywood). Sabah sisi clearance öncesi şehir manzarası muhteşem.

**10:00-12:00 - Museums & Culture**
• **Getty Center** - Ücretsiz (parking $20), sanat + mimari + bahçeler
• **LACMA** - LA County Museum of Art, Urban Light installation
• **The Broad** - Contemporary art, ücretsiz (reservation tavsiye)

**Coffee Break:**
Blue Bottle, Verve, veya Intelligentsia - specialty coffee capital.`
          },
          {
            heading: 'Öğle (12:00-17:00)',
            content: `**12:00-14:00 - Lunch & Explore Neighborhoods**

**Beverly Hills / Rodeo Drive:**
Window shopping, luxury boutiques, paparazzi spotting

**Venice Beach:**
Boardwalk, street performers, Abbot Kinney Blvd (hipster shops)

**Arts District:**
Graffiti murals, galleries, industrial-chic vibes

**Lunch Options:**
• **Grand Central Market** (Downtown) - Food hall, çeşitli mutfaklar
• **Gjelina** (Venice) - California cuisine, farm-to-table
• **Republique** (Mid-City) - French bistro, pastries

**14:00-17:00 - Theme Parks veya Beach Time**

**Universal Studios Hollywood:**
• 4-6 saat gerekir
• Harry Potter World must-see
• Studio Tour behind-the-scenes

**Santa Monica Pier:**
• Pacific Park (rides)
• Arcade games
• Aquarium
• Sunset prime location

**Beach Activities:**
• Surfing lessons (Malibu, Manhattan Beach)
• Beach volleyball
• Bike ride along The Strand`
          },
          {
            heading: 'Akşam (17:00-21:00)',
            content: `**17:00-19:00 - Sunset & Cocktails**

**Best Sunset Spots:**
• **Griffith Observatory** - 360° şehir manzarası
• **Santa Monica Pier** - Pasifik üzerinde sunset
• **Runyon Canyon** - Hiking + sunset combo
• **Getty Center** - Bahçelerde sunset

**Rooftop Bars:**
• **Perch** (Downtown) - French bistro vibes, skyline view
• **E.P. & L.P.** (West Hollywood) - Rooftop Southeast Asian
• **Mama Shelter** (Hollywood) - Chill vibe, great views

**19:00-21:00 - Dinner**

**Fine Dining:**
• **Bestia** (Arts District) - Italian, rezervasyon gerekli
• **Providence** (Hollywood) - Michelin-star seafood
• **n/naka** (Palms) - Japanese kaiseki, $300+

**Mid-Range:**
• **Night + Market** (West Hollywood) - Thai street food
• **Pizzana** (Brentwood) - Neo-Neapolitan pizza
• **Quarters Korean BBQ** (Koreatown) - All-you-can-eat

**Casual:**
• **In-N-Out Burger** - LA institution, must-try
• **Pink's Hot Dogs** (Hollywood) - Since 1939
• **Tacos Leo** (multiple locations) - Late-night tacos`
          },
          {
            heading: 'Gece (21:00-2:00)',
            content: `**21:00-midnight - Nightlife & Entertainment**

**Hollywood Boulevard:**
• TCL Chinese Theatre tours
• Walk of Fame (daha boş, gece)
• Dolby Theatre (Oscars home)

**Live Music:**
• **The Troubadour** (West Hollywood) - Legendary venue
• **Whisky a Go Go** - Rock history
• **Hollywood Bowl** (yaz ayları) - Outdoor concerts

**Comedy Clubs:**
• **The Comedy Store** (Sunset Strip) - Top comedians
• **Laugh Factory** - National acts

**Nightclubs:**
• **Exchange LA** (Downtown) - EDM/house
• **Sound Nightclub** (Hollywood) - Multiple rooms
• **No Vacancy** (Hollywood) - Speakeasy vibe

**Bars & Lounges:**
• **The Edison** (Downtown) - Steampunk-themed bar
• **The Varnish** (Downtown) - Cocktail bar, hidden entrance
• **The Abbey** (West Hollywood) - LGBTQ+ flagship

**Late Night Bites (midnight-2:00 AM):**
• **Canter's Deli** (24hr) - Jewish deli since 1931
• **Original Tommy's** (24hr) - Chili burgers
• **Tacos Tu Madre** (Venice) - Open till 2:00 AM
• **Frank n Hank** (Koreatown) - Late-night Korean comfort`
          },
          {
            heading: 'Gece Yarısı (2:00-6:00)',
            content: `LA "never sleeps" kadar değil ama options var:

**24-Hour Spots:**
• **Norm's Restaurant** - Classic diner (multiple locations)
• **Fred 62** (Los Feliz) - Hipster diner
• **The Pantry** (Downtown) - Open since 1924, never closed

**Night Owls:**
• **Griffith Observatory** closed ama parking lot views 24/7
• **El Matador Beach** (Malibu) - Stargazing, waves
• **Downtown LA** - Boş sokaklarda yürüyüş (güvenli alanlar)

**Sunrise Prep (5:00-6:00 AM):**
Venice Beach'e gidin - surfers çoktan suda, joggers başladı. Coffee cart'lar açılıyor. Bir sonraki 24 saate hazırlanın!`
          }
        ],
        quickTips: [
          'Sabah erken start edin - trafik 10:00\'dan önce tolere edilebilir',
          'Sunset için Griffith Observatory + Santa Monica Pier kombosu ideal',
          'Reservations: Fine dining için 2-4 hafta önceden (özellikle weekend)',
          'Late night tacos gerçektir - Koreatown ve Venice en iyi spots',
          '24 saat planı yapıyorsanız araç kiralayin - toplu taşıma gece sınırlı'
        ]
      }
    },
    {
      icon: '📞',
      title: 'Call Times',
      slug: 'call-times',
      description: 'LA ile aramalar için ideal saatler',
      content: {
        title: 'Los Angeles Telefon Görüşme Saatleri',
        sections: [
          {
            heading: 'Zaman Dilimi Temelleri',
            content: `Los Angeles Pacific Standard Time (PST) veya Pacific Daylight Time (PDT) kullanır:

• **Kış (Kasım-Mart):** PST = UTC-8
• **Yaz (Mart-Kasım):** PDT = UTC-7

**Major şehirlerle fark:**
• New York: +3 saat
• London: +8 saat
• Paris/Berlin: +9 saat
• Dubai: +12 saat
• Tokyo: +17 saat
• Sydney: +19 saat (kış) / +17 saat (yaz)

LA en batıdaki major US şehirlerden biri olduğu için, Asya ile overlap avantajlıdır ancak Avrupa ile zordur.`
          },
          {
            heading: 'ABD İçi Aramalar',
            content: `**LA → New York (EST/EDT +3 saat):**
• LA 9:00 AM = NYC 12:00 PM (lunch break başlangıcı)
• **İdeal window:** LA 9:00-14:00 = NYC 12:00-17:00
• LA'da erken başlama (8:00 AM) NYC'nin normal mesai (11:00 AM) yakalar

**LA → Chicago (CST/CDT +2 saat):**
• LA 9:00 AM = Chicago 11:00 AM
• **İdeal window:** LA 9:00-15:00 = Chicago 11:00-17:00

**LA → Texas (CST/CDT +2 saat):**
• Austin, Dallas, Houston same as Chicago
• **İdeal window:** LA 9:00-15:00

**Pro Tip:**
US içi calls için LA sabahları (8:00-11:00 AM) en verimlı - East Coast öğleden sonrası yakalarsınız.`
          },
          {
            heading: 'Avrupa ile Calls',
            content: `Avrupa ile calls LA için en zordur - 8-9 saat fark.

**LA → London (GMT/BST +8 saat):**
• LA 8:00 AM = London 4:00 PM
• LA 9:00 AM = London 5:00 PM (mesai bitişi)
• **Narrow window:** LA 1:00-9:00 AM = London 9:00 AM-5:00 PM

**LA → Paris/Berlin (CET/CEST +9 saat):**
• LA 12:00 AM (midnight) = Paris 9:00 AM
• LA 8:00 AM = Paris 5:00 PM (mesai bitişi)
• **Narrow window:** LA 12:00-8:00 AM = Paris 9:00 AM-5:00 PM

**Çözümler:**
1. **Async communication:** Email, Slack, Loom videos
2. **Early morning calls:** LA 7:00-9:00 AM = Europe afternoon
3. **Friday afternoon (LA):** Europe gidiyor, takip Pazartesi

**Reality Check:**
Avrupa ile remote work zorludur. Ya LA çok erken kalkar (6-7 AM calls) ya da Avrupa akşam kalır (6-8 PM calls).`
          },
          {
            heading: 'Asya ile Calls',
            content: `Asya ile LA en iyi overlap - sadece tersine çalışırsınız.

**LA → Tokyo (JST +17 saat):**
• LA 5:00 PM (Pazartesi) = Tokyo 10:00 AM (Salı)
• LA 8:00 PM = Tokyo 1:00 PM
• **İdeal window:** LA 17:00-20:00 = Tokyo 10:00 AM-1:00 PM (next day)

**LA → Singapore (SGT +16 saat):**
• LA 5:00 PM = Singapore 9:00 AM (next day)
• LA 9:00 PM = Singapore 1:00 PM
• **İdeal window:** LA 17:00-21:00 = Singapore 9:00 AM-1:00 PM

**LA → Sydney (AEDT +19 saat kış / +17 yaz):**
• LA 3:00 PM = Sydney 10:00 AM (next day, kış)
• **İdeal window:** LA 15:00-19:00 = Sydney 10:00 AM-2:00 PM

**LA → India (IST +13.5 saat):**
• LA 7:30 PM = India 9:00 AM (next day)
• **İdeal window:** LA 19:30-23:30 = India 9:00 AM-1:00 PM

**Avantaj:**
LA'da normal iş günü bitişi (17:00-21:00) Asya'nın sabahına denk gelir. Work-life balance için iyidir - gündüz çalış, akşam calls.`
          },
          {
            heading: 'Best Practices',
            content: `**Scheduling Tools:**
• **World Time Buddy** - Visual timezone comparison
• **Calendly** - Automatic timezone conversion
• **Google Calendar** - Shows attendee timezones

**Meeting Etiquette:**
• **Rotating times:** Her zaman aynı kişi erken kalkmasın - rotate edin
• **Record meetings:** Timezone mağdurları için
• **Async-first mindset:** Her şeyin call olması gerekmiyor
• **24-hour notice:** Son dakika call requests kaçının

**Communication Preferences:**
• **Slack/Teams:** Real-time için en iyi
• **Email:** Async, timezone-agnostic
• **Loom/Video:** Async updates için mükemmel
• **Calendly:** "Book a time" - timezone headaches ortadan kalkar

**Time Zone Conversion Tricks:**
• Phone calendar'ınıza world clocks ekleyin
• Desktop widget (Dato, Clocker for Mac)
• "What time is it in [city]?" Google search hızlıdır

**Pro Tips:**
1. **Always specify timezone:** "3 PM PST" not just "3 PM"
2. **Use UTC for clarity:** Especially multi-timezone teams
3. **Calendar invites auto-convert:** Trust them, don't manually calculate
4. **Check daylight saving:** US, Europe, Australia farklı tarihlerde değişir`
          }
        ],
        quickTips: [
          'Avrupa calls için LA 7:00-9:00 AM ideal (Europe afternoon)',
          'Asya calls için LA 17:00-21:00 ideal (Asia morning next day)',
          'US East Coast için LA 9:00-14:00 golden window',
          'Always specify timezone - "3 PM PST" not "3 PM"',
          'Calendly kullanın - timezone math yapmaktan kurtulun'
        ]
      }
    },
    {
      icon: '📈',
      title: 'Stock Market',
      slug: 'stock-market',
      description: 'LA saat dilimiyle borsa saatleri',
      content: {
        title: 'Los Angeles ve Borsa Saatleri',
        sections: [
          {
            heading: 'US Stock Market Hours (PST)',
            content: `**New York Stock Exchange (NYSE) ve NASDAQ:**
• **Pre-market:** 1:00-6:30 AM PST
• **Regular trading:** 6:30 AM - 1:00 PM PST
• **After-hours:** 1:00-5:00 PM PST

LA'da yaşayanlar için sabah 6:30'da piyasa açılır - bu West Coast traders için avantaj (NYC'de 9:30 AM).

**LA Trader'lar İçin Typical Gün:**
• 5:30-6:30 AM: Pre-market news, earnings reports oku
• 6:30 AM: Market açılışı (opening bell)
• 6:30-7:30 AM: En volatile saat - major moves
• 10:00 AM-1:00 PM: Mid-day trading, lunch slowdown
• 12:30-1:00 PM: Closing rush, high volume
• 1:00 PM: Market kapanışı (closing bell)

**Avantaj:**
LA'da 1:00 PM'de market kapanır - günün geri kalanı free. NYC'de 4:00 PM = iş günü bitmeden market kapanır.

**Dezavantaj:**
Sabah erken kalkmak gerekir - 5:00-6:00 AM uyanma normal.`
          },
          {
            heading: 'Global Markets (PST)',
            content: `**London Stock Exchange (LSE):**
• Açılış: 12:00 AM PST (midnight)
• Kapanış: 8:30 AM PST
• **Overlap US market:** 6:30-8:30 AM PST (2 saat)

**Tokyo Stock Exchange (TSE):**
• Açılış: 5:00 PM PST (previous day)
• Kapanış: 11:00 PM PST (previous day)
• **NO overlap** US market ile

**Hong Kong Stock Exchange (HKEX):**
• Açılış: 5:30 PM PST (previous day)
• Kapanış: 12:00 AM PST (midnight)
• **Minimal overlap** US pre-market

**Frankfurt (Xetra):**
• Açılış: 12:00 AM PST
• Kapanış: 8:30 AM PST
• **Overlap US market:** 6:30-8:30 AM PST

**Shanghai & Shenzhen:**
• Açılış: 5:30 PM PST (previous day)
• Kapanış: 1:00 AM PST
• **NO overlap**

**Global Trader Schedule:**
LA'da yaşayan global trader için 24-hour cycle:
• 5:00 PM: Asia opens (Tokyo, HK)
• 12:00 AM: Europe opens (London, Frankfurt)
• 6:30 AM: US opens
• 1:00 PM: US closes
• 5:00 PM: Cycle repeats

LA timezone Asya piyasaları için avantajlıdır - akşam 5-11 PM = Asya morning-midday.`
          },
          {
            heading: 'Crypto Markets (24/7)',
            content: `Cryptocurrency markets 24/7 açık - timezone irrelevant.

**High Liquidity Hours (PST):**
• **US Trading:** 6:30 AM - 1:00 PM (stock market overlap)
• **Asia Trading:** 5:00 PM - 1:00 AM (next day)
• **Europe Trading:** 12:00 AM - 8:00 AM

**Volatility Patterns:**
• **Weekends:** Lower volume, more volatile
• **Monday mornings:** Asia open, often big moves
• **Friday afternoons:** US close, profit-taking

**LA Crypto Trader Lifestyle:**
Çünkü 24/7, LA traders flexible schedule enjoy eder:
• Check markets sabah kahveyle
• Major moves akşam (Asia open)
• Weekend trading option (unlike stocks)

**Popular Exchanges:**
• Coinbase (SF-based, US-friendly)
• Kraken (SF-based)
• Binance.US
• Gemini (NYC-based)

LA'da crypto community güçlü - especially Venice/Santa Monica tech crowd.`
          },
          {
            heading: 'Forex Market (PST)',
            content: `Foreign Exchange market 24/5 (Pazar akşam - Cuma akşam).

**Major Sessions (PST):**
• **Sydney:** 2:00 PM - 11:00 PM (Sunday-Thursday)
• **Tokyo:** 4:00 PM - 1:00 AM
• **London:** 12:00 AM - 9:00 AM
• **New York:** 5:00 AM - 2:00 PM

**Highest Liquidity (PST):**
• **London-NY overlap:** 5:00-9:00 AM (sabah)
• **Tokyo-London overlap:** 12:00-1:00 AM (gece yarısı)

**LA Forex Traders:**
LA timezone forex için decent:
• Europe session: midnight-9:00 AM (gece shift)
• US session: 5:00 AM-2:00 PM (sabah shift)
• Asia session: 4:00 PM-1:00 AM (akşam shift)

Flexible schedule gerekir - her session farklı currency pairs favor eder.

**Currency Pairs by Session:**
• **Asia:** JPY, AUD, NZD pairs
• **Europe:** EUR, GBP, CHF pairs
• **US:** USD pairs, commodity currencies (CAD)

**Pro Tip:**
LA'da forex trader olmak time commitment gerektirir - 24/5 nature nedeniyle burnout riski.`
          },
          {
            heading: 'Trading Tools & Platforms',
            content: `**Brokerage Platforms (LA'da popüler):**

**Stock Trading:**
• **Robinhood** - Commission-free, beginner-friendly
• **TD Ameritrade** - Thinkorswim platform, advanced
• **Interactive Brokers** - Professional, international markets
• **Charles Schwab** - Full-service, research tools
• **Fidelity** - Retirement-friendly, low fees

**Crypto:**
• **Coinbase** - En beginner-friendly
• **Kraken** - Advanced features, staking
• **Binance.US** - Lowest fees, altcoins
• **Gemini** - Secure, regulated

**Forex:**
• **Oanda** - Good for beginners
• **Interactive Brokers** - Multi-asset
• **IG Group** - UK-based, regulated

**Research & News (LA timezone-friendly):**
• **Bloomberg Terminal** - Professional (expensive)
• **Yahoo Finance** - Free, real-time quotes
• **TradingView** - Charts, community
• **Benzinga** - News, squawk box
• **CNBC** - Live market commentary

**Meetups & Communities:**
LA'da active trader communities:
• **LA Traders Meetup** (Monthly)
• **Crypto Beach** (Venice) - Weekly crypto meetups
• **QuantCon** (Annual conference)
• **TradersExpo** (LA convention center)

**Coworking for Traders:**
Downtown LA'da birkaç trader-focused spaces var - monitors, fast internet, squawk box.`
          }
        ],
        quickTips: [
          'US stock market 6:30 AM-1:00 PM PST - sabah erken kalkın',
          'LA timezone Asya piyasaları için avantajlı (akşam = Asya sabah)',
          'Avrupa overlap 6:30-8:30 AM - en yüksek likidite',
          'Crypto 24/7 - LA esnek lifestyle için ideal',
          'Forex traders için LA zor - her session farklı saatlerde'
        ]
      }
    },
    {
      icon: '📅',
      title: 'Holidays',
      slug: 'holidays',
      description: 'Kaliforniya resmi tatilleri',
      content: {
        title: 'Los Angeles Resmi Tatil ve Özel Günler',
        sections: [
          {
            heading: 'Federal Tatiller (ABD)',
            content: `Los Angeles tüm US federal holidays'i celebrate eder:

**OCAK:**
• **New Year's Day** (1 Ocak) - Resmi tatil, bankalar/ofisler kapalı
• **Martin Luther King Jr. Day** (3. Pazartesi) - Federal tatil

**ŞUBAT:**
• **Presidents' Day** (3. Pazartesi) - Federal tatil, sales/deals bol

**MAYIS:**
• **Memorial Day** (Son Pazartesi) - Yaz başlangıcı, plajlar dolu, BBQ season

**TEMMUZ:**
• **Independence Day** (4 Temmuz) - En büyük tatil, fireworks everywhere

**EYLÜL:**
• **Labor Day** (1. Pazartesi) - Yaz bitişi, son plaj weekend

**EKİM:**
• **Columbus Day** (2. Pazartesi) - Bazı yerler "Indigenous Peoples' Day" der

**KASIM:**
• **Veterans Day** (11 Kasım) - Resmi tatil
• **Thanksgiving** (4. Perşembe) - En önemli family holiday, her yer kapalı

**ARALIK:**
• **Christmas Day** (25 Aralık) - Resmi tatil, her yer kapalı

**Tatil Etkileri:**
• Bankalar, post office, government buildings kapalı
• Çoğu ofis kapalı ama retail/restaurants açık
• Public transportation azaltılmış schedule
• Traffic genelde hafif (Thanksgiving/Christmas hariç)`
          },
          {
            heading: 'Kaliforniya Özel Günleri',
            content: `Kaliforniya state'inde additional observances:

**MARCH 31:**
• **Cesar Chavez Day** - CA state holiday (bazı ofisler kapalı)
• Farm workers' rights leader honor edilir

**Unofficially Celebrated:**
• **Juneteenth** (19 Haziran) - African American emancipation
• **Pride Month** (Haziran) - LA Pride Festival

**LA-Specific:**
LA çeşitli kültürler celebrates:
• **Chinese New Year** (Ocak/Şubat) - Chinatown festivalleri
• **Día de los Muertos** (1-2 Kasım) - Mexican Day of the Dead
• **Diwali** (Ekim/Kasım) - Little India celebrations
• **Lunar New Year** - Koreatown, Thai Town events`
          },
          {
            heading: 'Retail & Shopping Hours',
            content: `**Black Friday (Thanksgiving sonrası Cuma):**
• Yılın en büyük shopping day
• Stores 5:00-6:00 AM açar
• Crazy crowds, deals %50-70 off
• Online deals Thanksgiving evening başlar

**Cyber Monday (Black Friday sonrası Pazartesi):**
• Online shopping deals
• Tech products especially discounted

**Holiday Shopping Season:**
• **Thanksgiving-Christmas:** Retail peak season
• Malls extended hours: 9:00 AM-10:00 PM
• Parking nightmare - erken gidin veya weekday
• Returns policy: 30-90 gün (holiday extended)

**Normal Holiday Hours:**
• **New Year's Day:** Çoğu yer kapalı
• **Thanksgiving:** Neredeyse her yer kapalı (bazı drugstores açık)
• **Christmas:** Her yer kapalı (Chinese restaurants açık - LA tradition!)
• **4th of July:** Çoğu retail açık

**24-Hour Spots:**
• CVS/Walgreens (bazıları) - Holidays'de bile
• Gas stations - Always
• Hospital ERs - 24/7/365`
          },
          {
            heading: 'Cultural Celebrations',
            content: `LA'nın çeşitliliği = year-round celebrations:

**OCAK-ŞUBAT:**
• **Lunar New Year** - Chinatown dragon dances, Koreatown events
• **Tournament of Roses** (1 Ocak) - Pasadena Rose Parade

**MART:**
• **St. Patrick's Day** - Downtown LA pub crawls (İrlandalı değilseniz bile!)
• **Holi** - Color festival (India/Hindu celebration)

**MAYIS:**
• **Cinco de Mayo** (5 Mayıs) - Meksika victory, LA HUGE celebration
• **Ramadan/Eid** - Muslim communities (Koreatown, Pico-Robertson)

**HAZİRAN:**
• **LA Pride** - West Hollywood, one of world's largest
• **Juneteenth** - African American freedom celebration

**EYLÜL:**
• **LA Korean Festival** - Korean culture showcase
• **Mexican Independence Day** (16 Eylül)

**EKİM:**
• **Halloween** (31 Ekim) - West Hollywood Carnaval (500k+ people!)
• **Diwali** - Festival of Lights (Little India)

**KASIM:**
• **Día de los Muertos** (1-2 Kasım) - Olvera Street altars, processions

**ARALIK:**
• **Las Posadas** - Mexican Christmas tradition (Dec 16-24)
• **Hanukkah** - Jewish Festival of Lights (Pico-Robertson area)

**Year-Round:**
LA her weekend başka bir cultural festival var - Ethiopian, Armenian, Filipino, Thai, Persian, Brazilian...`
          },
          {
            heading: 'Planlama İpuçları',
            content: `**Tatil Trafiği:**
• **Thanksgiving weekend:** En kötü trafik yılın (Wednesday before + Sunday after)
• **Christmas-New Year's:** Relatively light (people travel out)
• **4th of July:** Beach cities gridlock - public transit kullanın
• **Memorial/Labor Day weekends:** Highways to desert/mountains packed

**Hotel & Flight Prices:**
• **Peak:** Thanksgiving, Christmas, New Year's, Spring Break
• **Book early:** 2-3 ay önceden holidays için
• **Last-minute deals:** Nadiren - LA her zaman turistler var

**Restaurant Reservations:**
• **Valentine's Day, Mother's Day, New Year's Eve:** 1 ay önceden
• **Thanksgiving, Christmas:** Çoğu yer kapalı - açık olanlar fully booked
• **Chinese restaurants Christmas:** Open olur (LA tradition) - rezervasyon yap

**Business Planning:**
• **Week of Thanksgiving:** Dead week, kimse ofiste
• **Christmas-New Year's:** Skeleton crews, slow responses
• **Summer (June-Aug):** Vacation season, approvals yavaş
• **January:** Full speed, budgets reset, busy

**Events to Avoid:**
• **LA Marathon** (Mart) - Downtown/Hollywood traffic chaos
• **Halloween West Hollywood** - 500k people, gridlock
• **New Year's Eve Grand Park** - Downtown shut down

**Events to Attend:**
• **Griffith Observatory holiday laser shows**
• **LA County Holiday Celebration** - Free concert
• **Christmas boat parade** - Marina del Rey
• **Grand Park 4th of July block party** - Free, fireworks`
          }
        ],
        quickTips: [
          'Thanksgiving week herkes off - business yavaş, seyahat yoğun',
          'Christmas Day Chinese restaurants açık - LA tradition!',
          '4th of July plajlara gitmeyin (gridlock) - rooftop party bulun',
          'Halloween West Hollywood = 500k people, avoid unless attending',
          'Cultural festivals year-round - LA en çeşitli şehirlerden biri'
        ]
      }
    },
    {
      icon: '🎒',
      title: 'Digital Nomad',
      slug: 'digital-nomad',
      description: 'LA dijital göçebe rehberi',
      content: {
        title: 'Los Angeles Dijital Göçebe Rehberi',
        sections: [
          {
            heading: 'Neden LA?',
            content: `Los Angeles dijital göçebeler için hem cazip hem zorlayıcıdır:

**ARTILAR:**
• Yıl boyu güneşli, outdoor lifestyle
• Güçlü tech/creative community - networking opportunities
• Coworking spaces ve cafe culture yaygın
• PST timezone - Asya ile overlap, SF/Seattle ile sync
• Work-life balance kültürü (NYC'den rahat)
• Plajlar, hiking, cultural events - weekend variety

**EKSİLER:**
• Yüksek yaşam maliyeti ($2000-3500/ay tek kişi)
• Araç zorunluluğu - car-centric city
• Toplu taşıma yetersiz (gelişiyor ama yavaş)
• Trafik legendarily kötü
• ABD'de "digital nomad visa" yok - B-1/B-2 gri alan
• California state tax karmaşık (30+ gün kalırsanız)

**Kim İçin İdeal:**
• Tech/creative professionals
• Asya-Pacific clients/teams olanlar
• Açık hava lifestyle seven
• Yüksek bütçe ($3k+/ay)
• Araç kullanmaktan çekinmeyenler

**Kim İçin Değil:**
• Tight budget (<$2k/ay)
• Toplu taşıma bağımlıları
• Avrupa timezone ile çalışanlar (overlap zor)
• Compact walkable city isteyenler (LA sprawl)`
          },
          {
            heading: 'Visa & Yasal Durum',
            content: `**ABD Digital Nomad Reality:**

ABD'de dedicated "digital nomad visa" YOK. Çoğu kişi şu yolları kullanır:

**1. B-1/B-2 Tourist Visa (6 ay max):**
• Remote work yasal GRİ ALAN
• ABD dışı şirket için çalışmak technically arguable
• ABD'den income almak YASAK
• Border'da laptop açtırabilirler - dikkatli
• **Risk:** Visa iptal, future entry denied

**2. ESTA (Visa Waiver - 90 gün):**
• 38 ülke için (AB, UK, Japonya, etc.)
• B-1/B-2 ile aynı rules
• Daha kısa, renew edemezsiniz
• Extension yok - 90 gün bitince çıkmalısınız

**3. Proper Work Visa:**
• **H-1B:** Specialty occupation, ABD şirketi sponsor (lottery)
• **L-1:** Intra-company transfer
• **O-1:** Extraordinary ability (creative fields)
• **E-2:** Treaty investor (business açmanız gerekir)

**Reality Check:**
Çoğu digital nomad B-1/B-2 veya ESTA ile gelir, "tourist" rolü oynar, dikkat çekmemeye çalışır. Legal değildir ama enforcement düşük. Uzun süre kalmak veya frequently return isterseniz risk artar.

**Kaliforniya State Tax:**
• 30+ gün CA'da spend ederseniz tax resident olabilirsiniz
• Income tax %9.3-13.3 (yüksek!)
• CPA danışın - durumunuz unique olabilir

**Professional Advice:**
Immigration attorney + tax CPA - worth it for clarity.`
          },
          {
            heading: 'Konaklama Seçenekleri',
            content: `**1. Airbnb/VRBO (1-6 ay):**

**Fiyat Aralıkları (aylık):**
• **Budget areas:** $1200-1800/ay (Koreatown, East Hollywood, North Hollywood)
• **Mid-range:** $1800-2500/ay (Silver Lake, Echo Park, Arts District)
• **Premium:** $2500-4000+/ay (Santa Monica, Venice, West Hollywood, Downtown high-rises)

**Pros:** Flexibility, furnished, utilities included
**Cons:** No long-term stability, cleaning fees add up

**Best Neighborhoods for Nomads:**
• **Venice/Santa Monica:** Beach life, tech crowd, expensive ($2500+)
• **Arts District/Downtown:** Urban, walkable(ish), cafes, $1800-2500
• **Silver Lake/Echo Park:** Hipster, cafes, cheaper parking, $1500-2200
• **Koreatown:** Budget-friendly, food scene, $1200-1800
• **Pasadena:** Suburban, quieter, cheaper, $1400-2000

**2. Coliving Spaces:**

• **PodShare** - $50-70/night, bunk beds, communal, social
  - Locations: Venice, Hollywood, DTLA
  - Pros: Community, networking, super cheap
  - Cons: Zero privacy, shared everything

• **Selina** - $1500-2500/ay, private rooms + coworking
  - Location: DTLA
  - Pros: All-in-one (sleep+work), global brand
  - Cons: Hotel vibe, transient crowd

• **Common** - $1800-2800/ay, private bedroom, shared common areas
  - Locations: Multiple (Hollywood, Downtown)
  - Pros: Community events, cleaning included
  - Cons: Roommates (hit or miss)

**3. Sublets (Craigslist, FB Groups):**
• Locals traveling long-term sublet apartments
• $1500-3000/ay depending on area
• Pros: Cheaper, lived-in feel
• Cons: Less reliable, scam risk

**Pro Tips:**
• Book first month Airbnb, then find sublet/coliving
• Facebook groups: "LA Housing", "Digital Nomads LA"
• Avoid sketchy neighborhoods: South Central, Compton (unless you know area)`
          },
          {
            heading: 'Coworking & Work Spots',
            content: `**Top Coworking Spaces:**

**PREMIUM ($300-600/ay):**
• **WeWork** - Downtown, Hollywood, Playa Vista
  - Pros: Network, events, meeting rooms
  - Cons: Corporate vibe, expensive
  
• **NeueHouse Hollywood** - $500+/ay
  - Pros: Beautiful design, creative crowd, rooftop
  - Cons: Very expensive, exclusive

**MID-TIER ($200-400/ay):**
• **Cross Campus** - Santa Monica, Pasadena, DTLA
  - Pros: Community-focused, events
  - Cons: Smaller spaces

• **The Hatchery** - Culver City
  - Pros: Women-focused, wellness perks
  - Cons: Limited locations

**BUDGET ($100-250/ay):**
• **Kleverdog** - Downtown
  - Pros: Affordable, basic amenities
  - Cons: No frills

**CAFES (Free-ish):**
• **Blue Bottle** (Montana Ave, Arts District) - Fast WiFi, outlets
• **Dinosaur Coffee** (Silver Lake) - Hipster haven, laptop-friendly
• **Intelligentsia** (Multiple) - Specialty coffee, quiet
• **Grand Central Market** (Downtown) - Food + workspace

**Cafe Etiquette:**
• 1 drink per 2-3 hours minimum
• Don't hog tables during rush (7-9 AM, 12-2 PM)
• Use headphones for calls
• Power outlets limited - bring power bank

**Libraries (FREE!):**
• LA Central Library (Downtown) - Gorgeous, fast WiFi, quiet
• Santa Monica Library - Ocean views
• Pasadena Central - Spacious, parking easier`
          },
          {
            heading: 'Networking & Community',
            content: `**Digital Nomad Meetups:**
• **Digital Nomads LA** (Meetup.com) - Monthly hangouts
• **Nomad List LA** - Online community
• **Remote Year Alumni** - Global network

**Tech/Startup Events:**
• **LA Tech Week** (Ekim) - Startup/VC scene
• **Product Hunt LA** - Monthly product demos
• **LA Hacks** (UCLA) - Hackathon, networking

**Coworking Events:**
• WeWork happy hours (weekly)
• Cross Campus workshops
• NeueHouse creative talks

**Industry-Specific:**
• **Hollywood Networking** - Entertainment/media
• **Silicon Beach Meetup** - Tech startups
• **LA Crypto** - Blockchain enthusiasts

**Social Sports/Hobbies:**
• **LA Sports & Social Club** - Softball, volleyball, kickball
• **Meetup Hiking Groups** - Runyon, Griffith Park
• **Yoga on the Beach** - Free classes (Venice, Santa Monica)

**Online Communities:**
• **r/LosAngeles** - Reddit, local tips
• **LA Digital Nomads** - Facebook group
• **Nomad List LA** - Forum discussions

**Making Friends:**
LA başta zor (everyone has their circles), ama persistent olun:
• Regular'ı olun bir cafe'de - barista ile arkadaş ol
• Attend meetups consistently - 3-4 kere git
• Say yes to invites - network compounds
• Fitness classes - yoga, CrossFit, cycling groups`
          }
        ],
        quickTips: [
          'Digital nomad visa yok - B-1/B-2 gri alan, dikkatli olun',
          'Bütçe min $2500-3000/ay (konaklama+yemek+ulaşım)',
          'Airbnb first month, sonra sublet/coliving daha ucuz',
          'Coworking membership networking için değer - invest edin',
          'LA car-centric - rent a car veya rideshare bütçesi ayırın'
        ]
      }
    },
    {
      icon: '🌐',
      title: 'Time Difference',
      slug: 'time-difference',
      description: 'LA ve dünya şehirleri arası zaman farkı',
      content: {
        title: 'Los Angeles Zaman Farkı Rehberi',
        sections: [
          {
            heading: 'LA Zaman Dilimi Temelleri',
            content: `Los Angeles **Pacific Time Zone (PT)** kullanır:

• **Kış (Kasım-Mart):** PST = UTC-8
• **Yaz (Mart-Kasım):** PDT = UTC-7

**Daylight Saving Time:**
• Başlangıç: Mart'ın 2. Pazar'ı (2:00 AM → 3:00 AM)
• Bitiş: Kasım'ın 1. Pazar'ı (2:00 AM → 1:00 AM)

**Not:** ABD, Avrupa, Avustralya farklı tarihlerde değişir - confusion olabilir.

LA, US kıtasal saat dilimlerinin en batısıdır:
• **Pacific (PT):** LA, San Francisco, Seattle
• **Mountain (MT):** Denver, Phoenix (AZ değiştirmez)
• **Central (CT):** Chicago, Dallas, Houston
• **Eastern (ET):** New York, Miami, Washington DC

LA'dan doğuya gittikçe her zone +1 saat.`
          },
          {
            heading: 'ABD İçi Zaman Farkları',
            content: `**LA → New York (EST/EDT):**
• Fark: +3 saat
• LA 9:00 AM = NYC 12:00 PM
• LA 5:00 PM = NYC 8:00 PM

**LA → Chicago (CST/CDT):**
• Fark: +2 saat
• LA 9:00 AM = Chicago 11:00 AM
• LA 5:00 PM = Chicago 7:00 PM

**LA → Denver (MST/MDT):**
• Fark: +1 saat
• LA 9:00 AM = Denver 10:00 AM
• LA 5:00 PM = Denver 6:00 PM

**LA → Phoenix (MST - değiştirmez!):**
• **Kış:** +1 saat (same as Denver)
• **Yaz:** SAME TIME as LA (Arizona DST yapmaz)
• Confusion factor high!

**LA → Hawaii (HST - değiştirmez):**
• **Kış:** -2 saat
• **Yaz:** -3 saat
• LA 9:00 AM = Hawaii 7:00 AM (kış) / 6:00 AM (yaz)

**LA → Alaska (AKST/AKDT):**
• Fark: -1 saat
• LA 9:00 AM = Anchorage 8:00 AM

**Pro Tip:**
US içi calls için sabah 9:00 AM-11:00 AM LA golden window - East Coast'u lunch break yakalarsınız.`
          },
          {
            heading: 'Avrupa Zaman Farkları',
            content: `**LA → London (GMT/BST):**
• **Kış:** +8 saat
• **Yaz:** +7 saat
• LA 9:00 AM = London 5:00 PM (kış) / 4:00 PM (yaz)

**LA → Paris/Berlin (CET/CEST):**
• **Kış:** +9 saat
• **Yaz:** +8 saat
• LA 8:00 AM = Paris 5:00 PM (kış)

**LA → Istanbul (EET/EEST):**
• **Kış:** +10 saat
• **Yaz:** +9 saat
• LA 7:00 AM = Istanbul 5:00 PM (kış)

**LA → Moscow (MSK):**
• Fark: +11 saat (yıl boyu - Rusya DST yapmaz)
• LA 6:00 AM = Moscow 5:00 PM

**Challenge:**
Avrupa ile overlap çok dar:
• LA 1:00-9:00 AM = Europe 9:00 AM-5:00 PM (roughly)
• Early morning LA calls gerekir veya Europe late evening

**Best Strategy:**
• Async communication (email, Slack, Loom)
• Rotating call times - always same person suffer etmesin
• Friday LA afternoon = Europe evening (flexible)`
          },
          {
            heading: 'Asya-Pasifik Zaman Farkları',
            content: `**LA → Tokyo (JST):**
• Fark: +17 saat (next day!)
• LA 5:00 PM (Monday) = Tokyo 10:00 AM (Tuesday)
• LA 9:00 PM = Tokyo 2:00 PM (next day)

**LA → Beijing/Shanghai (CST):**
• Fark: +16 saat
• LA 5:00 PM = China 9:00 AM (next day)

**LA → Singapore (SGT):**
• Fark: +16 saat
• LA 5:00 PM = Singapore 9:00 AM (next day)

**LA → Sydney (AEDT/AEST):**
• **Kış (Nov-Mar):** +19 saat
• **Yaz (Apr-Oct):** +17 saat
• LA 3:00 PM = Sydney 10:00 AM (next day, kış)

**LA → India (IST):**
• Fark: +13.5 saat (half-hour offset!)
• LA 7:30 PM = India 9:00 AM (next day)

**LA → Auckland (NZDT/NZST):**
• **Kış:** +20 saat
• **Yaz:** +21 saat
• LA 1:00 PM = Auckland 9:00 AM (next day +1)

**Advantage:**
LA'da normal iş bitişi (5:00-9:00 PM) = Asia morning (next day)
• Work-life balance için iyi
• Asia team fresh, LA team evening wind-down
• No early wake-ups gerekmiyor

**Best Practices:**
• LA 5:00-9:00 PM calls = Asia 9:00 AM-1:00 PM
• Record meetings for time zone mağdurları
• Async updates via Loom/video`
          },
          {
            heading: 'Orta Doğu & Afrika',
            content: `**LA → Dubai (GST):**
• Fark: +12 saat
• LA 5:00 PM (Monday) = Dubai 5:00 AM (Tuesday)
• LA 9:00 PM = Dubai 9:00 AM (next day)

**LA → Tel Aviv (IST):**
• **Kış:** +10 saat
• **Yaz:** +9 saat
• LA 7:00 AM = Tel Aviv 5:00 PM (kış)

**LA → Cairo (EET):**
• Fark: +10 saat
• LA 7:00 AM = Cairo 5:00 PM

**LA → Johannesburg (SAST):**
• Fark: +10 saat
• LA 7:00 AM = Johannesburg 5:00 PM

**LA → Nairobi (EAT):**
• Fark: +11 saat
• LA 6:00 AM = Nairobi 5:00 PM

**Challenge:**
Orta Doğu/Afrika overlap Avrupa gibi zor:
• Early morning LA veya late evening onlar

**Strategy:**
Dubai ile 9:00 PM LA = 9:00 AM Dubai (next day) reasonable
Afrika için Avrupa stratejisi benzer`
          },
          {
            heading: 'Zaman Farkı Yönetim Araçları',
            content: `**Conversion Tools:**

**World Time Buddy**
• Visual timezone slider
• Multi-city comparison
• Meeting planner built-in
• Free, web-based

**Every Time Zone**
• Simple, clean interface
• Shows "now" across all zones
• No account needed

**Timezone.io**
• Team timezone tracker
• Slack integration
• Shows everyone's local time

**Calendly**
• Automatic timezone conversion
• "Book a time" - no manual math
• Integrates calendar

**Google Calendar**
• Shows attendee timezones
• Auto-converts when inviting
• Mobile app syncs

**Desktop Widgets:**
• **Dato** (Mac) - Menu bar world clocks
• **Clocker** (Mac) - Free, customizable
• **World Clock** (Windows) - Built-in

**Phone Apps:**
• iOS Clock app - Add world clocks
• Android Clock - Same feature
• Time Buddy - Dedicated app

**Browser Extensions:**
• **Timezone Converter** (Chrome)
• **World Time Buddy** extension

**Pro Tips:**
1. **Add world clocks to phone:** Swipe down, instant view
2. **Calendar invites auto-convert:** Trust them!
3. **Always specify timezone:** "3 PM PST" not "3 PM"
4. **Use UTC for multi-timezone teams:** Universal reference
5. **Check DST dates:** US, EU, Australia değişik tarihlerde`
          }
        ],
        quickTips: [
          'LA en batı US timezone - East Coast +3 saat',
          'Avrupa ile overlap dar (LA sabah = Europe akşam)',
          'Asya ile LA avantajlı: LA akşam = Asia sabah (next day)',
          'Always specify timezone - "3 PM PST" not just "3 PM"',
          'World Time Buddy kullanın - mental math yapmayın'
        ]
      }
    },
    {
      icon: '✈️',
      title: 'Travel',
      slug: 'travel',
      description: 'LA seyahat ipuçları ve ulaşım',
      content: {
        title: 'Los Angeles Seyahat Rehberi',
        sections: [
          {
            heading: 'Havalimanı (LAX)',
            content: `**Los Angeles International Airport (LAX):**
• Dünyanın 5. en yoğun havalimanı
• 9 terminal (1-8 + Tom Bradley International)
• Yıllık 80+ milyon yolcu

**Terminals:**
• **Terminal 1:** Southwest
• **Terminal 2:** Delta domestic, Aeromexico
• **Terminal 3:** Delta international
• **Terminal 4:** American Airlines
• **Terminal 5:** Delta, JetBlue, Spirit
• **Terminal 6:** Alaska, Copa
• **Terminal 7:** United
• **Terminal 8:** United international
• **Tom Bradley (TBIT):** International flights (hepsi)

**LAX → Downtown LA (30 km):**
• **Uber/Lyft:** $35-60, 30-60 dakika (traffic'e göre)
• **LAX FlyAway Bus:** $10, 30-40 dakika, Downtown'a direkt
• **Metro:** Yeni! LAX/Metro Transit Center açıldı (2023)
  - Free shuttle LAX terminals → Metro station
  - Metro C Line → Downtown ($1.75, 45 dakika)
• **Taxi:** $50-70 (Uber daha ucuz)
• **Rental Car:** $40-80/gün, airport surcharge +$15

**LAX → Santa Monica (20 km):**
• Uber/Lyft: $40-70, 25-50 dakika
• Metro: C Line + Big Blue Bus, $2.50 total, 90 dakika

**LAX → Hollywood (25 km):**
• Uber/Lyft: $35-55, 30-50 dakika

**Pro Tips:**
• Peak traffic (7-10 AM, 3-7 PM) avoid edin - double time
• LAX-it pickup area (2019'dan beri) - yürüyüş gerekir
• Early AM/late PM flights traffic'ten kaçınır
• LAX FlyAway Downtown için best value ($10 vs $50 Uber)`
          },
          {
            heading: 'Alternatif Havalimanları',
            content: `**Bob Hope Airport (Burbank - BUR):**
• Hollywood/Valley'e daha yakın
• Küçük, efficient, az kalabalık
• Southwest, Alaska, United, JetBlue
• Downtown LA'ya 20 km, 25-40 dakika
• **Pros:** Stress-free, fast security, rental cars yakın
• **Cons:** Fewer flight options, biraz daha pahalı

**Long Beach Airport (LGB):**
• South Bay'e yakın (Long Beach şehri)
• JetBlue hub
• Downtown LA'ya 35 km
• **Pros:** Chill vibe, beachside
• **Cons:** Limited destinations

**John Wayne Airport (Orange County - SNA):**
• OC için ideal (Disneyland 20 dakika)
• Downtown LA'ya 60 km (1+ saat)
• **Pros:** Clean, modern, less crowded
• **Cons:** Uzak LA'ya

**Ontario International (ONT):**
• Inland Empire (Riverside/San Bernardino)
• Downtown LA'ya 80 km (1.5 saat)
• **Pros:** Ucuz flights sometimes
• **Cons:** Çok uzak, trafik kötü

**Recommendation:**
• **LA proper:** LAX (en çok flight)
• **Hollywood/Valley:** Burbank (convenience)
• **Beach cities:** LAX or Long Beach
• **OC/Disneyland:** John Wayne`
          },
          {
            heading: 'Şehir İçi Ulaşım',
            content: `LA car-centric bir şehirdir ama options var:

**1. ARABA KİRALAMA (En popüler):**

**Fiyatlar:**
• Economy: $40-60/gün
• Mid-size: $50-80/gün
• SUV: $70-120/gün
• Airport pickup: +$15-20 surcharge

**Companies:**
• Enterprise, Hertz, Budget, Avis (majors)
• Turo (peer-to-peer, Airbnb of cars)

**Parking:**
• Street parking: FREE çoğu mahalle (time limits var)
• Meters: $1-4/saat
• Parking lots: $5-30/gün (location'a göre)
• Valet: $10-30 (tip +$5)

**Gas:**
• $4.50-5.50/gallon (Kaliforniya pahalı!)
• Costco cheapest ($0.30-0.50 discount)

**Pros:** Flexibility, reach anywhere, grocery runs easy
**Cons:** Parking headache, gas expensive, traffic

**2. UBER / LYFT:**

**Fiyatlar (örnek):**
• Downtown → Santa Monica (20 km): $25-45
• Hollywood → Venice (15 km): $20-35
• Airport runs: $35-70

**Surge pricing:** Rush hours +30-50%
**Pros:** No parking hassle, driver navigates
**Cons:** Expensive for daily use ($40-80/gün), surge pricing

**3. METRO (Public Transit):**

LA Metro expanding - artık actually usable!

**Lines:**
• **A Line (Blue):** Downtown → Long Beach
• **B Line (Red):** Downtown → North Hollywood
• **C Line (Green):** Norwalk → Redondo Beach (LAX bağlantısı)
• **D Line (Purple):** Downtown → Koreatown → Wilshire
• **E Line (Expo):** Downtown → Santa Monica (PLAJ!)
• **L Line (Gold):** East LA → Pasadena

**Fiyat:**
• Single ride: $1.75
• Day pass: $3.50
• Weekly: $12.50
• TAP card: $2 (refillable)

**Pros:** Ucuz, traffic yok, eco-friendly
**Cons:** Coverage limited, frequency low (15-20 dakika), not 24-hour

**4. BISIKLET / E-SCOOTER:**

**Bike Share:**
• Metro Bike Share: $5/30 dakika, $20/gün
• Stations Santa Monica, Downtown, Pasadena

**E-Scooters:**
• Bird, Lime, Spin
• $1 unlock + $0.35-0.45/dakika
• Good for <5 km trips

**Bike-Friendly Areas:**
• Santa Monica/Venice (beach path)
• Downtown (bike lanes)
• Pasadena (streets calmer)

**Pros:** Fun, cheap, quick short distances
**Cons:** Not safe on major roads, hills zor, theft risk

**5. BUS:**

• Metro Bus: $1.75, extensive but SLOW
• Big Blue Bus (Santa Monica): $1.25, connects beach cities
• DASH (Downtown): $0.50, micro-routes

**Reality:**
Bus LA'da 2x-3x longer than car - traffic'te takılır.`
          },
          {
            heading: 'Traffic & Driving Tips',
            content: `**Rush Hours (KAÇININ!):**
• **Sabah:** 7:00-10:00 AM
• **Akşam:** 3:00-7:00 PM
• **Friday afternoon:** 2:00 PM'den başlar, 8:00 PM'e kadar

**Worst Freeways:**
• **I-405:** "The 405" - legendary gridlock, Sepulveda Pass nightmare
• **I-10:** Downtown ↔ West LA, always packed
• **US-101:** Hollywood Freeway, rush hours brutal
• **I-5:** Through Downtown, truck traffic

**Best Times:**
• Before 7:00 AM - boş, cruise
• 10:00 AM-2:00 PM - mid-day tolerable
• After 8:00 PM - açılır

**LA Driving Culture:**
• **Lane changes aggressive:** Assertive olun, timid kalırsanız takılırsınız
• **Turn signals optional:** Maalesef norm (ama siz kullanın)
• **Freeway merging:** Zipper method - alternate
• **Left lane:** Passing lane (slow traffic sağda)
• **Motorcycles lane split:** Legal CA'da - dikkat edin

**Parking Tips:**
• **Street cleaning:** Signs okuyun - tow riski
• **Meters:** Evening/Sunday often free
• **Red curb:** NO PARKING (fire lane)
• **Residential permits:** Guest parking genelde 2 saat max
• **Valet ubiquitous:** Restaurants, hotels - tip $3-5

**Google Maps vs Waze:**
• **Waze:** Real-time cops, accidents, better routing
• **Google Maps:** More reliable, cleaner interface
• **Recommendation:** Waze for LA traffic

**Carpool Lanes (HOV):**
• 2+ people (some 3+)
• Diamonds on road
• Fines $490+ if solo
• Electric cars get stickers (solo access)

**Pro Tips:**
• 10 miles = 45 dakika (not 15!) - always buffer
• PCH (Pacific Coast Highway) scenic ama yavaş
• Podcasts/audiobooks essential - trafikte mental sanity
• In-N-Out drive-thru 20 dakika olabilir - inside daha hızlı`
          },
          {
            heading: 'Day Trips & Weekend Getaways',
            content: `LA merkez noktası - amazing destinations 1-3 saat içinde:

**PLAJLAR (1-2 saat):**

**Malibu (45 dakika):**
• El Matador Beach - Iconic cliffs
• Zuma Beach - Spacious, surfers
• Malibu Pier - Dining, sunset

**Orange County Beaches (1-1.5 saat):**
• Laguna Beach - Art galleries, coves
• Newport Beach - Upscale, Balboa Island
• Huntington Beach - Surf City USA

**DAĞLAR & DOĞA (1-2.5 saat):**

**Big Bear Lake (2.5 saat):**
• Kış: Skiing, snowboarding
• Yaz: Hiking, lake activities
• Mountain town vibes

**Joshua Tree National Park (2.5 saat):**
• Desert landscape, unique trees
• Rock climbing, stargazing
• Best: Spring (wildflowers), Fall (cool)

**Sequoia/Kings Canyon (4 saat):**
• Giant trees, mountains
• Overnight recommended

**ŞEHIRLER:**

**San Diego (2-3 saat):**
• Zoo, beaches, Balboa Park
• More chill than LA
• Mexican food excellent (border yakın)

**Santa Barbara (2 saat):**
• "American Riviera"
• Wine country, beaches
• Spanish architecture

**Palm Springs (2 saat):**
• Desert oasis, mid-century modern
• Hot springs, golf
• Summer çok sıcak (45°C+), winter ideal

**EĞLENCE PARKLARI:**

**Disneyland (1 saat - Anaheim):**
• Original Disney park
• 2 parks: Disneyland + California Adventure
• $100-160/gün

**Universal Studios Hollywood (30 dakika):**
• Studio tour, Harry Potter
• $100-150/gün

**Six Flags Magic Mountain (45 dakika):**
• Thrill rides, roller coasters
• $60-90/gün

**Weekend Getaway Recommendations:**
• **Romantic:** Santa Barbara wine country
• **Adventure:** Joshua Tree camping
• **Family:** San Diego Zoo + beaches
• **Luxury:** Palm Springs resorts
• **Nature:** Big Bear Lake`
          }
        ],
        quickTips: [
          'LAX → Downtown: Metro artık option ($1.75 vs $50 Uber)',
          'Araba kiralayin - LA car-centric, toplu taşıma yetersiz',
          'Rush hours KAÇININ: 7-10 AM, 3-7 PM, Friday afternoon',
          'Waze kullanın - real-time traffic, cop alerts',
          'Day trips bol: Malibu, Joshua Tree, San Diego, Palm Springs'
        ]
      }
    }
  ]
};
