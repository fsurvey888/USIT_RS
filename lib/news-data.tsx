import type React from "react"
// Centralizovani podaci vijesti - DODAJ NOVE VIJESTI OVDJE
export interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  categoryLabel: string
  image: string
  slug: string
  content: React.ReactNode
  comments: number
  views: number
}

export const newsItems: NewsItem[] = [
  // =====================================================
// NOVA VIJEST - Kopiraj CIJELI ovaj blok
// =====================================================


  {
    id: 1765918586051,
    title: "Савремена механизација у шумарству",
    excerpt: "На Шумарском факултету у Бањалуци одржан је стручни скуп посвећен примјени савремене механизације у шумарству Републике Српске, на којем су представници струке, институција и привреде указали на алармантан пад производње шумских дрвних сортимената и озбиљне финансијске губитке у сектору. Истакнута је неопходност хитног увођења савремених технологија, унапређења радних услова и системских рјешења како би се зауставили негативни трендови који угрожавају шумарство и дрвопрерађивачку индустрију као једну од кључних привредних грана Републике Српске.",
    date: "11. decembar 2025..",
    category: "dogadjaji",
    categoryLabel: "Događaji",
    image: "https://github.com/fsurvey888/USIT_RS/blob/main/public/zicara.jpg",
    slug: "---",
    comments: 0,
    views: 357,
    content: (
      <div className="space-y-6">
        <p>У амфитеатру Шумарског факултета у Бањалуци, 11. децембра 2025. године, одржан је стручни скуп на тему примјене савремене механизације у шумарству Републике Српске, у организацији Удружења шумарских инжењера и техничара Републике Српске. Скуп је окупио представнике шумских газдинстава ЈПШ „Шуме Републике Српске“ а.д. Соколац, Министарства пољопривреде, шумарства и водопривреде, Центра за животну средину, Привредне коморе Републике Српске, представнике Удружења извођача радова у шумарству, као и академску заједницу.\nНакон уводне ријечи и поздравног обраћања декана Шумарског факултета, проф. др Војислава Дукића и Предсједника Удружења инжењера и техничара Републике Српске др Срђана Дражића, учесницима су представљене стручне презентације које су обухватиле Техничко-технолошку типизацију терена, употребу дронова у савременом шумарству, значај и примјену жичанo - ужетних система, те анализу стања производње у шумарству Републике Српске са посебним освртом на кључне изазове и могућа рјешења.\nПосебан акценат у дискусији стављен је на неопходност увођења савремене механизације – харвестера, форвардера, шумских жичара и дронова – као једног од кључних предуслова за повећање ефикасности, безбједности рада и одрживости шумарске производње. Истовремено, указано је на озбиљне структурне проблеме са којима се шумарство Републике Српске суочава већ дужи низ година.\nАнализе представљене на скупу показују да је у посљедњих шест година евидентан континуиран пад производње шумских дрвних сортимената, како у државним, тако и у приватним шумама. Просјечна реализација планиране производње у оквиру ЈПШ „Шуме Републике Српске“ износила је око 90%, што на годишњем нивоу значи нереализован приход од приближно 25 милиона КМ, односно око 150 милиона КМ у шестогодишњем периоду. Као кључни узроци наведени су недостатак адекватне радне снаге (сјекача, тракториста те стручно техничког кадра), сложени поступци јавних набавки, недостаци законске регулативе, временске неприлике, непоштовање радних обавеза и радне дисциплине од стране запослених, тржишни поремећаји, застарјела механизација и ниска цијена сировине.\nПосљедице оваквог стања далеко превазилазе оквир шумарске производње. Оне се огледају у нарушеној финансијској стабилности јавног предузећа, смањеној активности дрвопрерађивачког сектора, одливу радне снаге, паду интересовања за шумарска занимања и негативним демографским процесима у локалним заједницама које егзистенцијално зависе од шумарства. Процијењено је да је сектор прераде дрвета и производње намјештаја, због мањка сировине, у посматраном периоду остварио око 500 милиона КМ мање прихода, што представља значајан удар на укупну привреду Републике Српске.\nУчесници скупа сагласни су да рјешења морају бити системска и хитна. Као приоритети истакнути су адекватно награђивање радника у шумарству, увођење савремене механизације, субвенције за производњу и набавку опреме, стимулисање извођача и дрвопрерађивача, унапређење заштите на раду, стипендирање и промоција шумарских занимања, те измјене законских и подзаконских аката ради бржег прилагођавања тржишним условима.\nЗакључак скупа јасан је и недвосмислен: без заједничког дјеловања надлежних институција, стручне јавности, привреде и образовног система, није могуће зауставити негативне трендове у шумарству. Савремена механизација, улагање у људске ресурсе и уређен институционални оквир представљају кључ за очување шумарске струке и одрживи развој шумарства, као једне од стратешких грана привреде Републике Српске.</p>
        <p>УШИТ РЕПУБЛИКЕ СРПСКЕ</p>
      </div>
    ),
  },

// =====================================================
// KRAJ NOVE VIJESTI
// =====================================================

  {
    id: 1,
    title: "Stručni seminar o održivom upravljanju šumama",
    excerpt:
      "Uspješno organizovan trodnevni seminar na temu savremenih metoda održivog šumskog gazdovanja u organizaciji našeg udruženja. Učestvovalo preko 50 stručnjaka iz regiona.",
    date: "15. Novembar 2025.",
    category: "edukacija",
    categoryLabel: "Edukacija",
    image: "/forestry-seminar-education-workshop.jpg",
    slug: "strucni-seminar-o-odrzivom-upravljanju-sumama",
    comments: 12,
    views: 45,
    content: (
      <div className="space-y-6">
        <p>
          Uspješno organizovan trodnevni seminar na temu savremenih metoda održivog šumskog gazdovanja u organizaciji
          našeg udruženja predstavlja značajan korak ka podizanju profesionalnih standarda u oblasti šumarstva. Seminar
          je okupio preko 50 stručnjaka iz regiona, pokazujući snažno interesovanje za kontinuiranu edukaciju i
          usavršavanje.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Program i sadržaj seminara</h2>
        <p>
          Prvi dan seminara bio je posvećen teorijskim osnovama održivog upravljanja šumama. Učesnici su imali priliku
          da se upoznaju sa najnovijim metodama procene zdravstvenog stanja šume, tehnikama inventarizacije i
          planiranjem šumskih radova.
        </p>
        <p>
          Centralna tema drugog dana bila je implementacija novih tehnologija u šumarstvu. Predstavnici vodećih
          kompanija predstavili su najnovije dronske tehnologije, sisteme za daljinsko detektovanje i GIS alate koji
          značajno unapređuju efikasnost šumskog gazdovanja.
        </p>
        <blockquote className="border-l-4 border-green-800 pl-6 py-4 italic text-gray-600">
          "Održivo šumarstvo nije samo trend, već nužnost za očuvanje našeg ekosistema za buduće generacije. Ovaj
          seminar nas je podstakao da razmišljamo o našim postupcima kroz dugoročnu perspektivu."
          <footer className="not-italic font-semibold text-gray-800 mt-2">
            - Ing. Ana Stojanović, učesnik seminara
          </footer>
        </blockquote>
        <h2 className="text-2xl font-bold text-green-800">Praktične radionice</h2>
        <p>
          Treći dan seminara bio je posvećen praktičnim radionicama u šumi. Učesnici su primenili teorijska znanja na
          realnim primerima, radeći na proceni volumena stabala, planiranju seča i postavljanju obeležja za buduće
          radove.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Novi projekat pošumljavanja u južnom regionu",
    excerpt:
      "Pokrenut ambiciozan projekat pošumljavanja koji obuhvata površinu od 500 hektara. Projekat uključuje saradnju sa lokalnim zajednicama i implementaciju najnovijih ekoloških standarda.",
    date: "10. Novembar 2025.",
    category: "projekti",
    categoryLabel: "Projekti",
    image: "/forest-reforestation-planting-trees-project.jpg",
    slug: "novi-projekat-posumljavanja-u-juznom-regionu",
    comments: 8,
    views: 67,
    content: (
      <div className="space-y-6">
        <p>
          Pokrenut ambiciozan projekat pošumljavanja koji obuhvata površinu od 500 hektara u južnom regionu predstavlja
          značajan doprinos obnovi degradiranih šumskih područja i jačanju lokalnih ekosistema.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Opseg i lokacija projekta</h2>
        <p>
          Projekat se odvija na području Opštine Ivanica, pretežno na brdovitim terenima sa nagibom od 15-35 stepeni.
          Izbor lokacije nije slučajan - analiza pokazuje da ova područja imaju strateški značaj za sprečavanje erozije
          tla.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Ekonomski i ekološki benefiti</h2>
        <p>
          Projekat će generisati oko 35 novih radnih mesta u lokalnoj zajednici. Sa ekološke strane, očekuje se
          poboljšanje kvaliteta vode u lokalnim potocima za 25% u narednih pet godina.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Studija o biodiverzitetu u starim šumama",
    excerpt:
      "Objavljeni rezultati trogodišnje studije o diverzitetu vrsta u autohtonim šumskim ekosistemima. Istraživanje donosi nove uvide o važnosti očuvanja starih šuma za globalnu biodiverzitet.",
    date: "5. Novembar 2025.",
    category: "istrazivanje",
    categoryLabel: "Istraživanje",
    image: "/old-growth-forest-biodiversity-nature.jpg",
    slug: "studija-o-biodiverzitetu-u-starim-sumama",
    comments: 15,
    views: 89,
    content: (
      <div className="space-y-6">
        <p>
          Objavljeni rezultati trogodišnje studije o diverzitetu vrsta u autohtonim šumskim ekosistemima donose nove
          uvide o važnosti očuvanja starih šuma za globalnu biodiverzitet.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Značajni nalazi</h2>
        <p>
          Istraživanje je pokazalo da stare šume sadrže 40% više vrsta nego mlađe šume, uključujući brojne retke i
          ugrožene vrste. Rezultati su javno dostupni i dostavljeni međunarodnim organizmima za zaštitu prirode.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Godišnja skupština udruženja",
    excerpt:
      "Održana redovna godišnja skupština sa izvještajem o radu, finansijskim planovima i izborom novih članova upravnog odbora. Donete važne odluke o budućem razvoju udruženja.",
    date: "1. Novembar 2025.",
    category: "dogadjaji",
    categoryLabel: "Događaji",
    image: "/meeting-conference-organization-assembly.jpg",
    slug: "godisnja-skupstina-udruzenja",
    comments: 6,
    views: 32,
    content: (
      <div className="space-y-6">
        <p>
          Održana redovna godišnja skupština sa izvještajem o radu, finansijskim planovima i izborom novih članova
          upravnog odbora. Donete važne odluke o budućem razvoju udruženja.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Dnevni red</h2>
        <p>
          Na skupštini su razmatrani izvještaji o radu za prethodnu godinu, usvojen je finansijski plan za narednu
          godinu i izabrani su novi članovi upravnog odbora.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Uvođenje digitalnih alata u šumarsku praksu",
    excerpt:
      "Prezentacija novih digitalnih rješenja za evidenciju, planiranje i praćenje šumarskih aktivnosti. Moderna tehnologija u službi šumarstva za veću efikasnost i preciznost rada.",
    date: "28. Oktobar 2025.",
    category: "tehnologija",
    categoryLabel: "Tehnologija",
    image: "/forest-technology-digital-tools-drone.jpg",
    slug: "uvodjenje-digitalnih-alata-u-sumarsku-praksu",
    comments: 10,
    views: 56,
    content: (
      <div className="space-y-6">
        <p>
          Prezentacija novih digitalnih rješenja za evidenciju, planiranje i praćenje šumarskih aktivnosti. Moderna
          tehnologija u službi šumarstva za veću efikasnost i preciznost rada.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Digitalna transformacija</h2>
        <p>
          Uvođenjem modernih digitalnih alata šumarska struka dobija mogućnost preciznije evidencije, bržeg planiranja i
          efikasnijeg praćenja svih aktivnosti na terenu.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Kampanja prevencije šumskih požara",
    excerpt:
      "Lansirana edukativna kampanja za prevenciju šumskih požara. Udruženje aktivno učestvuje u podizanju svijesti o zaštiti šuma kroz edukativne materijale i javne akcije.",
    date: "22. Oktobar 2025.",
    category: "zastita",
    categoryLabel: "Zaštita",
    image: "/forest-fire-prevention-safety-firefighter.jpg",
    slug: "kampanja-prevencije-sumskih-pozara",
    comments: 18,
    views: 73,
    content: (
      <div className="space-y-6">
        <p>
          Lansirana edukativna kampanja za prevenciju šumskih požara. Udruženje aktivno učestvuje u podizanju svijesti o
          zaštiti šuma kroz edukativne materijale i javne akcije.
        </p>
        <h2 className="text-2xl font-bold text-green-800">Ciljevi kampanje</h2>
        <p>
          Kampanja ima za cilj da educira građane o pravilnom ponašanju u šumi i mjerama prevencije koje mogu spriječiti
          nastanak požara.
        </p>
      </div>
    ),
  },
]

// Helper funkcija za pronalaženje vijesti po slug-u
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug)
}

// Helper funkcija za dobijanje najnovijih vijesti
export function getLatestNews(count = 6): NewsItem[] {
  return newsItems.slice(0, count)
}
