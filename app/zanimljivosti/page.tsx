"use client"

import { useState } from "react"
import Link from "next/link"
import { Trees, Leaf, Bird, Globe, FlaskConical, BookOpen, Search } from "lucide-react"

const funFacts = [
  {
    id: 1,
    title: "Najstarije drvo na svijetu",
    fact: "Najstarije poznato drvo na svijetu je bor Metuzalem (Pinus longaeva) u Kaliforniji, star preko 4.850 godina. Tačna lokacija se čuva u tajnosti kako bi se drvo zaštitilo od vandalizma.",
    source: "National Park Service",
    category: "drvo",
    categoryLabel: "Drveće",
    icon: "trees",
  },
  {
    id: 2,
    title: "Šume proizvode kiseonik",
    fact: 'Jedno veliko drvo može proizvesti dovoljno kiseonika za 4 osobe dnevno. Amazonska prašuma proizvodi oko 20% svjetskog kiseonika, zbog čega se naziva "pluća Zemlje".',
    source: "World Wildlife Fund",
    category: "ekologija",
    categoryLabel: "Ekologija",
    icon: "leaf",
  },
  {
    id: 3,
    title: "Drveće komunicira",
    fact: 'Drveće komunicira međusobno preko podzemne mreže gljiva poznate kao "Wood Wide Web". Preko ove mreže dijele hranjive tvari i upozoravaju susjedna stabla na napade štetočina.',
    source: "Nature Journal",
    category: "nauka",
    categoryLabel: "Nauka",
    icon: "flask",
  },
  {
    id: 4,
    title: "Šumske životinje",
    fact: "Oko 80% kopnenog biodiverziteta živi u šumama. Tropske prašume, iako pokrivaju samo 6% Zemljine površine, dom su više od polovine svih biljnih i životinjskih vrsta na planeti.",
    source: "UN Environment Programme",
    category: "zivotinje",
    categoryLabel: "Životinje",
    icon: "bird",
  },
  {
    id: 5,
    title: "Istorija šumarstva",
    fact: "Prva šumarska škola osnovana je 1811. godine u Tharandtu, Njemačka. Šumarstvo kao nauka razvilo se iz potrebe za održivim korištenjem šumskih resursa tokom industrijske revolucije.",
    source: "FAO",
    category: "istorija",
    categoryLabel: "Istorija",
    icon: "book",
  },
  {
    id: 6,
    title: "Šume i klimatske promjene",
    fact: "Šume apsorbuju oko 2,6 milijardi tona ugljičnog dioksida godišnje, što je približno 30% ljudskih emisija CO2. Očuvanje šuma je ključno u borbi protiv klimatskih promjena.",
    source: "IPCC",
    category: "ekologija",
    categoryLabel: "Ekologija",
    icon: "globe",
  },
]

const iconMap: Record<string, any> = {
  trees: Trees,
  leaf: Leaf,
  bird: Bird,
  globe: Globe,
  flask: FlaskConical,
  book: BookOpen,
}

const categories = [
  { value: "all", label: "Sve kategorije" },
  { value: "drvo", label: "Drveće" },
  { value: "zivotinje", label: "Životinje" },
  { value: "ekologija", label: "Ekologija" },
  { value: "istorija", label: "Istorija" },
  { value: "nauka", label: "Nauka" },
]

export default function ZanimljivostiPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFacts = funFacts.filter((fact) => {
    const matchesCategory = selectedCategory === "all" || fact.category === selectedCategory
    const matchesSearch =
      fact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fact.fact.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-green-700">
              Početna
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-green-700 font-semibold">Zanimljivosti</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-green-900 mb-3">Zanimljivosti o šumama</h1>
          <p className="text-lg text-gray-600">Otkrijte fascinantne činjenice o šumama, drveću i šumarstvu</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-green-50 border-b border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Pretraži zanimljivosti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700"
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-green-700">Kategorija:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          {filteredFacts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFacts.map((fact) => {
                const IconComponent = iconMap[fact.icon] || Trees
                return (
                  <article
                    key={fact.id}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold mb-2">
                          {fact.categoryLabel}
                        </span>
                        <h2 className="text-lg font-bold text-gray-900">{fact.title}</h2>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{fact.fact}</p>

                    {fact.source && <p className="text-xs text-gray-400">Izvor: {fact.source}</p>}
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Nema pronađenih zanimljivosti za odabrane kriterijume.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
