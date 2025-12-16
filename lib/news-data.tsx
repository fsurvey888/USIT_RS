import type React from "react"

// Centralizovani podaci vijesti - DODAJ NOVE VIJESTI OVDJE
export interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  dateISO: string // Dodato za pouzdano sortiranje (ISO 8601 format)
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
  // NOVA VIJEST
  // =====================================================
  {
    id: 1765918586051,
    title: "Савремена механизација у шумарству",
    excerpt: "На Шумарском факултету у Бањалуци одржан је стручни скуп посвећен примјени савремене механизације у шумарству Републике Српске, на којем су представници струке, институција и привреде указали на алармантан пад производње шумских дрвних сортимената и озбиљне финансијске губитке у сектору.",
    date: "11. decembar 2025.",
    dateISO: "2025-12-11",
    category: "dogadjaji",
    categoryLabel: "Događaji",
    image: "/zicara.jpg",
    slug: "savremena-mehanizacija-u-sumarstvu",
    comments: 0,
    views: 357,
    content: (
      <div className="space-y-6">
        <p>
          У амфитеатру Шумарског факултета у Бањалуци, 11. децембра 2025. године, одржан је стручни скуп на тему примјене савремене механизације у шумарству Републике Српске, у организацији Удружења шумарских инжењера и техничара Републике Српске. Скуп је окупио представнике шумских газдинстава ЈПШ „Шуме Републике Српске“ а.д. Соколац, Министарства пољопривреде, шумарства и водопривреде, Центра за животну средину, Привредне коморе Републике Српске, представнике Удружења извођача радова у шумарству, као и академску заједницу.
        </p>
        <p>
          Након уводне ријечи и поздравног обраћања декана Шумарског факултета, проф. др Војислава Дукића и Предсједника Удружења инжењера и техничара Републике Српске др Срђана Дражића, учесницима су представљене стручне презентације које су обухватиле Техничко-технолошку типизацију терена, употребу дронова у савременом шумарству, значај и примјену жичанo - ужетних система, те анализу стања производње у шумарству Републике Српске са посебним освртом на кључне изазове и могућа рјешења.
        </p>
        <p>
          Посебан акценат у дискусији стављен је на неопходност увођења савремене механизације – харвестера, форвардера, шумских жичара и дронова – као једног од кључних предуслова за повећање ефикасности, безбједности рада и одрживости шумарске производње. Истовремено, указано је на озбиљне структурне проблеме са којима се шумарство Републике Српске суочава већ дужи низ година.
        </p>
        <p>
          Анализе представљене на скупу показују да је у посљедњих шест година евидентан континуиран пад производње шумских дрвних сортимената, како у државним, тако и у приватним шумама. Просјечна реализација планиране производње у оквиру ЈПШ „Шуме Републике Српске“ износила је око 90%, што на годишњем нивоу значи нереализован приход од приближно 25 милиона КМ, односно око 150 милиона КМ у шестогодишњем периоду.
        </p>
        <p>
          Посљедице оваквог стања далеко превазилазе оквир шумарске производње. Оне се огледају у нарушеној финансијској стабилности јавног предузећа, смањеној активности дрвопрерађивачког сектора, одливу радне снаге, паду интересовања за шумарска занимања и негативним демографским процесима у локалним заједницама које егзистенцијално зависе од шумарства.
        </p>
        <p>
          Учесници скупа сагласни су да рјешења морају бити системска и хитна. Као приоритети истакнути су адекватно награђивање радника у шумарству, увођење савремене механизације, субвенције за производњу и набавку опреме, стимулисање извођача и дрвопрерађивача, унапређење заштите на раду, стипендирање и промоција шумарских занимања, те измјене законских и подзаконских аката.
        </p>
        <p className="font-semibold mt-8">
          УШИТ РЕПУБЛИКЕ СРПСКЕ
        </p>
      </div>
    ),
  },
  // =====================================================
  // OSTALE VIJESTI (sa dodanim dateISO za sortiranje)
  // =====================================================
  {
    id: 1,
    title: "Stručni seminar o održivom upravljanju šumama",
    excerpt: "Uspješno organizovan trodnevni seminar na temu savremenih metoda održivog šumskog gazdovanja u organizaciji našeg udruženja. Učestvovalo preko 50 stručnjaka iz regiona.",
    date: "15. novembar 2025.",
    dateISO: "2025-11-15",
    category: "edukacija",
    categoryLabel: "Edukacija",
    image: "/forestry-seminar-education-workshop.jpg",
    slug: "strucni-seminar-o-odrzivom-upravljanju-sumama",
    comments: 12,
    views: 45,
    content: ( /* ... isti content kao prije ... */ ),
  },
  {
    id: 2,
    title: "Novi projekat pošumljavanja u južnom regionu",
    excerpt: "Pokrenut ambiciozan projekat pošumljavanja koji obuhvata površinu od 500 hektara. Projekat uključuje saradnju sa lokalnim zajednicama i implementaciju najnovijih ekoloških standarda.",
    date: "10. novembar 2025.",
    dateISO: "2025-11-10",
    category: "projekti",
    categoryLabel: "Projekti",
    image: "/forest-reforestation-planting-trees-project.jpg",
    slug: "novi-projekat-posumljavanja-u-juznom-regionu",
    comments: 8,
    views: 67,
    content: ( /* ... */ ),
  },
  {
    id: 3,
    title: "Studija o biodiverzitetu u starim šumama",
    date: "5. novembar 2025.",
    dateISO: "2025-11-05",
    // ... ostalo isto
  },
  {
    id: 4,
    title: "Godišnja skupština udruženja",
    date: "1. novembar 2025.",
    dateISO: "2025-11-01",
    // ...
  },
  {
    id: 5,
    title: "Uvođenje digitalnih alata u šumarsku praksu",
    date: "28. oktobar 2025.",
    dateISO: "2025-10-28",
    // ...
  },
  {
    id: 6,
    title: "Kampanja prevencije šumskih požara",
    date: "22. oktobar 2025.",
    dateISO: "2025-10-22",
    // ...
  },
]

// AUTOMATSKO SORTIRANJE PO DATUMU (od najnovije ka najstarijoj)
newsItems.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());

// Helper funkcija za pronalaženje vijesti po slug-u
export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug)
}

// Helper funkcija za dobijanje najnovijih vijesti
export function getLatestNews(count = 6): NewsItem[] {
  return newsItems.slice(0, count)
}
