"use client"

import type React from "react"

import { useState } from "react"
import { Copy, Check, Newspaper, Lightbulb } from "lucide-react"

const newsCategories = [
  { value: "edukacija", label: "Edukacija" },
  { value: "projekti", label: "Projekti" },
  { value: "istrazivanje", label: "Istraživanje" },
  { value: "dogadjaji", label: "Događaji" },
  { value: "tehnologija", label: "Tehnologija" },
  { value: "zastita", label: "Zaštita" },
]

const funFactCategories = [
  { value: "drvo", label: "Drveće" },
  { value: "zivotinje", label: "Životinje" },
  { value: "ekologija", label: "Ekologija" },
  { value: "istorija", label: "Istorija" },
  { value: "nauka", label: "Nauka" },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"vijesti" | "zanimljivosti">("vijesti")

  // Vijesti form state
  const [newsForm, setNewsForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" }) + ".",
    category: "edukacija",
    image: "/forestry-news.jpg",
    comments: 0,
    views: 0,
  })

  // Zanimljivosti form state
  const [funFactForm, setFunFactForm] = useState({
    title: "",
    fact: "",
    source: "",
    category: "drvo",
    icon: "trees",
  })

  const [generatedCode, setGeneratedCode] = useState("")
  const [copied, setCopied] = useState(false)

  // News form handlers
  const handleNewsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewsForm({
      ...newsForm,
      [name]: name === "comments" || name === "views" ? Number.parseInt(value) || 0 : value,
    })
  }

  // Fun fact form handlers
  const handleFunFactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFunFactForm({
      ...funFactForm,
      [name]: value,
    })
  }

  const generateNewsCode = () => {
    if (!newsForm.title.trim()) {
      alert("Naslov je obavezan!")
      return
    }

    if (!newsForm.excerpt.trim()) {
      alert("Kratak opis je obavezan!")
      return
    }

    const slug = newsForm.title
      .toLowerCase()
      .replace(/č/g, "c")
      .replace(/ć/g, "c")
      .replace(/š/g, "s")
      .replace(/ž/g, "z")
      .replace(/đ/g, "dj")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .substring(0, 50)

    const categoryLabel = newsCategories.find((c) => c.value === newsForm.category)?.label || newsForm.category

    // Escape strings for JavaScript
    const escapeStr = (text: string) => text.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")

    // Split content into paragraphs for React JSX
    const contentParagraphs = newsForm.content
      .split("\n\n")
      .filter((p) => p.trim())
      .map((p) => `        <p>${escapeStr(p.trim())}</p>`)
      .join("\n")

    const code = `// =====================================================
// NOVA VIJEST - Kopiraj CIJELI ovaj blok
// =====================================================
// FAJL: lib/news-data.tsx
// LOKACIJA: Pronađi "// === DODAJ NOVE VIJESTI ISPOD OVOG KOMENTARA ===" 
//           i zalijepi ISPOD tog komentara
// =====================================================

  {
    id: ${Date.now()},
    title: "${escapeStr(newsForm.title)}",
    excerpt: "${escapeStr(newsForm.excerpt)}",
    date: "${newsForm.date}",
    category: "${newsForm.category}",
    categoryLabel: "${categoryLabel}",
    image: "${newsForm.image}",
    slug: "${slug}",
    comments: ${newsForm.comments},
    views: ${newsForm.views},
    content: (
      <div className="space-y-6">
${contentParagraphs || "        <p>Sadržaj vijesti...</p>"}
      </div>
    ),
  },

// =====================================================
// KRAJ NOVE VIJESTI
// =====================================================`

    setGeneratedCode(code)
  }

  const generateFunFactCode = () => {
    if (!funFactForm.title.trim() || !funFactForm.fact.trim()) {
      alert("Naslov i zanimljivost su obavezni!")
      return
    }

    const categoryLabel = funFactCategories.find((c) => c.value === funFactForm.category)?.label || funFactForm.category
    const escapeStr = (text: string) => text.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")

    const code = `// =====================================================
// NOVA ZANIMLJIVOST - Kopiraj CIJELI ovaj blok
// =====================================================
// FAJL: app/zanimljivosti/page.tsx
// LOKACIJA: Pronađi "const funFacts = [" i zalijepi ODMAH NAKON [
// =====================================================

  {
    id: ${Date.now()},
    title: "${escapeStr(funFactForm.title)}",
    fact: "${escapeStr(funFactForm.fact)}",
    source: "${escapeStr(funFactForm.source)}",
    category: "${funFactForm.category}",
    categoryLabel: "${categoryLabel}",
    icon: "${funFactForm.icon}",
  },

// =====================================================
// KRAJ NOVE ZANIMLJIVOSTI
// =====================================================`

    setGeneratedCode(code)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetForms = () => {
    setNewsForm({
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" }) + ".",
      category: "edukacija",
      image: "/forestry-news.jpg",
      comments: 0,
      views: 0,
    })
    setFunFactForm({
      title: "",
      fact: "",
      source: "",
      category: "drvo",
      icon: "trees",
    })
    setGeneratedCode("")
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Admin Panel</h1>
        <p className="text-gray-600 mb-8">Dodaj nove vijesti i zanimljivosti na website</p>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => {
              setActiveTab("vijesti")
              resetForms()
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "vijesti"
                ? "bg-green-800 text-white"
                : "bg-white text-green-800 border border-green-800 hover:bg-green-50"
            }`}
          >
            <Newspaper className="w-5 h-5" />
            Dodaj Vijest
          </button>
          <button
            onClick={() => {
              setActiveTab("zanimljivosti")
              resetForms()
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "zanimljivosti"
                ? "bg-green-800 text-white"
                : "bg-white text-green-800 border border-green-800 hover:bg-green-50"
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            Dodaj Zanimljivost
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Forms */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {activeTab === "vijesti" ? (
              <form className="space-y-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Nova Vijest</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Naslov vijesti *</label>
                  <input
                    type="text"
                    name="title"
                    value={newsForm.title}
                    onChange={handleNewsChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    placeholder="Unesite naslov vijesti"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kratak opis * (prikazuje se u listi vijesti)
                  </label>
                  <textarea
                    name="excerpt"
                    value={newsForm.excerpt}
                    onChange={handleNewsChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 resize-none"
                    placeholder="Unesite kratak opis (2-3 rečenice)"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kompletan tekst (prikazuje se kada se otvori vijest)
                  </label>
                  <textarea
                    name="content"
                    value={newsForm.content}
                    onChange={handleNewsChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 resize-none"
                    placeholder="Unesite kompletan tekst vijesti. Koristite prazne linije za razdvajanje paragrafa."
                    rows={8}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Savjet: Ostavite praznu liniju između paragrafa za bolje formatiranje
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Datum</label>
                    <input
                      type="text"
                      name="date"
                      value={newsForm.date}
                      onChange={handleNewsChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                      placeholder="npr. 15. Novembar 2025."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kategorija</label>
                    <select
                      name="category"
                      value={newsForm.category}
                      onChange={handleNewsChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    >
                      {newsCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">URL slike</label>
                  <input
                    type="text"
                    name="image"
                    value={newsForm.image}
                    onChange={handleNewsChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    placeholder="/images/moja-slika.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Stavite sliku u public folder i unesite putanju ovdje</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Komentari</label>
                    <input
                      type="number"
                      name="comments"
                      value={newsForm.comments}
                      onChange={handleNewsChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pregledi</label>
                    <input
                      type="number"
                      name="views"
                      value={newsForm.views}
                      onChange={handleNewsChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                      min="0"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={generateNewsCode}
                  className="w-full bg-green-800 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition-colors"
                >
                  Generiši kod
                </button>
              </form>
            ) : (
              <form className="space-y-6">
                <h2 className="text-2xl font-bold text-green-800 mb-4">Nova Zanimljivost</h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Naslov *</label>
                  <input
                    type="text"
                    name="title"
                    value={funFactForm.title}
                    onChange={handleFunFactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    placeholder="npr. Najstarije drvo na svijetu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Zanimljivost *</label>
                  <textarea
                    name="fact"
                    value={funFactForm.fact}
                    onChange={handleFunFactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 resize-none"
                    placeholder="Unesite zanimljivu činjenicu o šumarstvu..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Izvor (opciono)</label>
                  <input
                    type="text"
                    name="source"
                    value={funFactForm.source}
                    onChange={handleFunFactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    placeholder="npr. National Geographic"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kategorija</label>
                    <select
                      name="category"
                      value={funFactForm.category}
                      onChange={handleFunFactChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    >
                      {funFactCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ikonica</label>
                    <select
                      name="icon"
                      value={funFactForm.icon}
                      onChange={handleFunFactChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800"
                    >
                      <option value="trees">Drveće</option>
                      <option value="leaf">List</option>
                      <option value="bird">Ptica</option>
                      <option value="globe">Globus</option>
                      <option value="flask">Nauka</option>
                      <option value="book">Knjiga</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={generateFunFactCode}
                  className="w-full bg-green-800 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition-colors"
                >
                  Generiši kod
                </button>
              </form>
            )}
          </div>

          {/* Generated Code */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-800 mb-4">Generirani kod</h2>

            {generatedCode ? (
              <>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm max-h-96 overflow-y-auto font-mono whitespace-pre-wrap">
                    {generatedCode}
                  </pre>

                  <button
                    onClick={handleCopyCode}
                    className="absolute top-2 right-2 flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded transition-colors text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Kopirano!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Kopiraj
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm">
                  <h3 className="font-semibold text-green-800 mb-2">Uputstvo za kopiranje:</h3>
                  <ol className="text-green-700 space-y-2 list-decimal list-inside">
                    <li>
                      Klikni <strong>"Kopiraj"</strong> dugme gore
                    </li>
                    <li>
                      Otvori fajl{" "}
                      <code className="bg-white px-1 rounded font-bold">
                        {activeTab === "vijesti" ? "lib/news-data.tsx" : "app/zanimljivosti/page.tsx"}
                      </code>{" "}
                      u VS Code
                    </li>
                    <li>
                      Pronađi komentar{" "}
                      <code className="bg-white px-1 rounded">
                        {activeTab === "vijesti"
                          ? "// === DODAJ NOVE VIJESTI ISPOD OVOG KOMENTARA ==="
                          : "const funFacts = ["}
                      </code>
                    </li>
                    <li>
                      Zalijepi kod <strong>ISPOD</strong> tog komentara
                    </li>
                    <li>
                      Sačuvaj fajl (<strong>Ctrl+S</strong>)
                    </li>
                  </ol>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-center">
                  Popuni formu i klikni <strong>"Generiši kod"</strong>
                  <br />
                  da vidiš JavaScript kod za kopiranje
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Kako pokrenuti sajt offline (lokalno)?</h2>
          <div className="space-y-4 text-gray-700">
            <p>Da bi pokrenuo sajt na svom računaru, slijedi ove korake:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Preuzmi projekat sa v0 (klikni tri tačke i "Download ZIP")</li>
              <li>Raspakuj ZIP fajl na željenu lokaciju</li>
              <li>Otvori folder u VS Code</li>
              <li>
                Otvori Terminal u VS Code (<code className="bg-gray-100 px-2 py-1 rounded">Ctrl + `</code>)
              </li>
              <li>
                Pokreni: <code className="bg-gray-900 text-green-400 px-2 py-1 rounded">npm install</code>
              </li>
              <li>
                Pokreni: <code className="bg-gray-900 text-green-400 px-2 py-1 rounded">npm run dev</code>
              </li>
              <li>
                Otvori <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code> u browser-u
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  )
}
