'use client'

import Link from 'next/link'
import { SparklesIcon, BookmarkIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function BookmarksPage() {
  const bookmarks = [
    { id: 1, title: 'Advanced React Patterns', saved: '2 days ago', views: 12500, likes: 450 },
    { id: 2, title: 'Design System Guide', saved: '1 week ago', views: 8900, likes: 320 },
    { id: 3, title: 'Startup Fundraising Tips', saved: '2 weeks ago', views: 15200, likes: 680 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <SparklesIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hypermedia Oasis
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/feed" className="text-gray-700 hover:text-indigo-600 transition-colors">Feed</Link>
              <Link href="/profile" className="text-gray-700 hover:text-indigo-600 transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <BookmarkIcon className="h-10 w-10 text-indigo-600" />
            <div>
              <h1 className="text-4xl font-bold">Saved Content</h1>
              <p className="text-gray-600">{bookmarks.length} items saved</p>
            </div>
          </div>

          <div className="space-y-4">
            {bookmarks.map(item => (
              <div key={item.id} className="card p-6 hover-lift cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        Saved {item.saved}
                      </span>
                      <span>{item.views.toLocaleString()} views</span>
                      <span className="flex items-center gap-1">
                        <HeartIcon className="h-4 w-4" />
                        {item.likes}
                      </span>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700">
                    <BookmarkIcon className="h-6 w-6 fill-current" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
