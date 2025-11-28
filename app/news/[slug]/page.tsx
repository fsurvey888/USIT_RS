"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { newsItems, getNewsBySlug } from "@/lib/news-data"

interface NewsArticlePageProps {
  params: { slug: string }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = params
  const article = getNewsBySlug(slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Članak nije pronađen</h1>
          <Link href="/news" className="text-green-800 hover:underline">
            ← Nazad na vijesti
          </Link>
        </div>
      </main>
    )
  }

  // Prev / Next logika
  const currentIndex = newsItems.findIndex((item) => item.slug === slug)
  const prevArticle =
    currentIndex !== -1 && currentIndex < newsItems.length - 1
      ? newsItems[currentIndex + 1]
      : null
  const nextArticle =
    currentIndex > 0 ? newsItems[currentIndex - 1] : null

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Breadcrumbs */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-600 hover:text-green-800">
              Početna
            </Link>
            <span className="text-gray-400">→</span>
            <Link href="/news" className="text-gray-600 hover:text-green-800">
              Vijesti
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-green-800 font-semibold">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
          <div className="text-white">
            <p className="text-sm mb-2">{article.date}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h1 className="text-4xl font-bold text-green-800 mb-6">{article.title}</h1>

            <div className="flex gap-4 mb-8 pb-8 border-b border-gray-200 text-sm text-gray-600">
              <span>{article.date}</span>
              <span>{article.comments} komentara</span>
              <span>{article.views} pregleda</span>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {article.content}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-12 pt-8 border-t border-gray-200 flex-col md:flex-row">
              {prevArticle ? (
                <Link
                  href={`/news/${prevArticle.slug}`}
                  className="flex items-center gap-2 px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Prethodna vijest
                </Link>
              ) : (
                <div />
              )}

              {nextArticle ? (
                <Link
                  href={`/news/${nextArticle.slug}`}
                  className="flex items-center gap-2 px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors md:ml-auto"
                >
                  Sledeća vijest
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
