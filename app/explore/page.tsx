'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SparklesIcon, MagnifyingGlassIcon, FireIcon, ClockIcon, HeartIcon , MusicalNoteIcon } from '@heroicons/react/24/outline'

export default function ExplorePage() {
  const [categories] = useState(['Technology', 'Design', 'Business', 'Health', 'Entertainment', 'Education'])
  const [trending] = useState([
    { id: 1, title: 'The Future of AI', author: 'Sarah Tech', views: 45000, image: '🤖' },
    { id: 2, title: 'Design Trends 2026', author: 'Mike Designer', views: 32000, image: '🎨' },
    { id: 3, title: 'Startup Success Stories', author: 'Emma Founder', views: 28000, image: '🚀' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <MusicalNoteIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hypnotic
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/feed" className="text-gray-700 hover:text-purple-600 transition-colors">Feed</Link>
              <Link href="/explore" className="text-purple-600 font-medium">Explore</Link>
              <Link href="/profile" className="text-gray-700 hover:text-purple-600 transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Explore Content</h1>
            <div className="relative max-w-2xl">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for topics, creators, or content..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(category => (
                <button key={category} className="card p-6 text-center hover-lift">
                  <div className="text-3xl mb-2">📚</div>
                  <div className="font-medium">{category}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Trending Now</h2>
              <Link href="/trending" className="text-purple-600 hover:text-indigo-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {trending.map(item => (
                <div key={item.id} className="card p-6 hover-lift cursor-pointer">
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center text-6xl mb-4">
                    {item.image}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">by {item.author}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FireIcon className="h-4 w-4" />
                      {item.views.toLocaleString()} views
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
