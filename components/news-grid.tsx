"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { getLatestNews } from "@/lib/news-data"

export function NewsGrid() {
  const cards = getLatestNews(6)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    document.querySelectorAll(".news-card-item").forEach((card) => {
      card.classList.add("opacity-0", "translate-y-5", "transition-all", "duration-500")
      observer.observe(card)
    })
  }, [])

  return (
    <section id="vijesti" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Najnovije vijesti</h2>
          <p className="text-lg text-gray-600">
            Ostanite informisani o aktivnostima udruženja i novostima iz oblasti šumarstva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item) => (
            <article
              key={item.id}
              className="news-card-item bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-3 text-sm">
                  <span className="text-gray-600">{item.date}</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">
                    {item.categoryLabel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex text-green-800 font-semibold hover:translate-x-1 transition-transform"
                >
                  Opširnije →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
