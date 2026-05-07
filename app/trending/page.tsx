'use client'

import Link from 'next/link'
import { SparklesIcon, FireIcon, ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function TrendingPage() {
  const trending = [
    { id: 1, title: 'The Future of AI in 2026', views: 125000, likes: 8500, trend: '+45%', time: '2h ago' },
    { id: 2, title: 'Design Systems That Scale', views: 98000, likes: 6200, trend: '+38%', time: '5h ago' },
    { id: 3, title: 'Building Sustainable Startups', views: 87000, likes: 5800, trend: '+32%', time: '8h ago' },
    { id: 4, title: 'Remote Work Best Practices', views: 76000, likes: 4900, trend: '+28%', time: '12h ago' },
    { id: 5, title: 'Web3 Explained Simply', views: 65000, likes: 4200, trend: '+25%', time: '1d ago' },
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
              <Link href="/explore" className="text-gray-700 hover:text-indigo-600 transition-colors">Explore</Link>
              <Link href="/profile" className="text-gray-700 hover:text-indigo-600 transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <FireIcon className="h-10 w-10 text-orange-600" />
            <div>
              <h1 className="text-4xl font-bold">Trending Content</h1>
              <p className="text-gray-600">Most popular content right now</p>
            </div>
          </div>

          <div className="space-y-4">
            {trending.map((item, index) => (
              <div key={item.id} className="card p-6 hover-lift cursor-pointer">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-gray-300">#{index + 1}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FireIcon className="h-4 w-4" />
                        {item.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1">
                        ❤️ {item.likes.toLocaleString()} likes
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <ArrowTrendingUpIcon className="h-4 w-4" />
                    {item.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
