'use client'

import Link from 'next/link'
import { SparklesIcon, UserGroupIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function CommunitiesPage() {
  const communities = [
    { id: 1, name: 'Tech Innovators', members: 45000, posts: 12500, icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Design Masters', members: 32000, posts: 8900, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'Startup Founders', members: 28000, posts: 7600, icon: '🚀', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'Content Creators', members: 38000, posts: 11200, icon: '📝', color: 'from-green-500 to-teal-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <SparklesIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Hypermedia Oasis</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Communities</h1>
              <p className="text-gray-600">Join communities and connect with like-minded creators</p>
            </div>
            <button className="btn btn-primary">
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Community
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {communities.map(community => (
              <div key={community.id} className="card p-6 hover-lift cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${community.color} flex items-center justify-center text-3xl`}>
                    {community.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{community.members.toLocaleString()} members</span>
                      <span>·</span>
                      <span>{community.posts.toLocaleString()} posts</span>
                    </div>
                    <button className="btn btn-primary btn-sm">Join Community</button>
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
