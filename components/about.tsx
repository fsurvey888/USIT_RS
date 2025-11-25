'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function About() {
  return (
    <>
      {/* About Section */}
      <section id="o-nama" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">O udruženju</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Udruženje šumarske struke je profesionalna organizacija koja okuplja stručnjake iz
            oblasti šumarstva, zaštite prirode i održivog razvoja. Naša misija je promoviranje
            savremenih praksi u šumarstvu, profesionalni razvoj članova i doprinosa očuvanju
            šumskih ekosistema.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '500+', label: 'Članova' },
              { number: '25+', label: 'Godina rada' },
              { number: '100+', label: 'Projekata' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-emerald-50 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="clanstvo" className="py-24 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-emerald-700 mb-12 text-center">Članstvo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Redovno članstvo</h3>
              <p className="text-gray-600 mb-6">
                Redovno članstvo je dostupno diplomiranim inženjerima šumarstva, inženjerskinh 
                tehničarima i drugim stručnjacima sa relevantnim kvalifikacijama iz oblasti šumarstva.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Pristup stručnjackim savetnicama i seminarima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Učešće u poljskim ogledi i konferencijama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Publikovanje radova u stručnim glasilima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Umrežavanje sa profesionalcima iz struke</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-700 text-white font-semibold py-2 rounded-lg hover:bg-emerald-800 transition-colors">
                Saznaj više
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Studentsko članstvo</h3>
              <p className="text-gray-600 mb-6">
                Studentsko članstvo je dostupno studentima relevantnih studijskih programa na 
                fakultetima i visokim školama sa akcreditovanim programima iz oblasti šumarstva.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Pogodnosti u cenama za sve manifestacije</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Mogućnost stažiranja kod članova udruženja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Pristup bibliotekarskim resursima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Mentorstvo od iskusnih profesionalaca</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-700 text-white font-semibold py-2 rounded-lg hover:bg-emerald-800 transition-colors">
                Saznaj više
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-emerald-700 mb-12 text-center">Kontakt</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-8">Informacije</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg mt-1">
                    <MapPin className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Adresa</h4>
                    <p className="text-gray-600">
                      Romanijska 1<br />
                      Sokolac<br />
                      Republika Srpska, BiH
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg mt-1">
                    <Phone className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">
                      +387 57/400-630<br />
                      Fax: +387 57/400-631
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg mt-1">
                    <Mail className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">
                      <a href="mailto:usitrs@teol.net" className="hover:text-emerald-700 transition-colors">
                        usitrs@teol.net
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg mt-1">
                    <MapPin className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Detalji registracije</h4>
                    <p className="text-gray-600 text-sm">
                      <strong>Matični broj (MB):</strong> 1895354<br />
                      <strong>Jedinstveni identifikacioni broj (JIB):</strong> 4401597110005<br />
                      <strong>Ziro račun (Z.R.):</strong> 562-001-00000-337-17
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-700 mb-8">Pošalji nam poruku</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ime i prezime
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                    placeholder="Vaše ime"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail adresa
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                    placeholder="vasa.email@primer.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Naslov
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
                    placeholder="Naslov poruke"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Poruka
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 resize-none"
                    placeholder="Vaša poruka..."
                    rows={5}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 text-white font-semibold py-2 rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  Pošalji poruku
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
