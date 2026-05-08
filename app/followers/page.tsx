'use client'

import Link from 'next/link'
import { SparklesIcon, UserGroupIcon , MusicalNoteIcon } from '@heroicons/react/24/outline'

export default function FollowersPage() {
  const followers = [
    { id: 1, name: 'Sarah Tech', bio: 'AI & Machine Learning enthusiast', followers: 12500, avatar: '👩‍💻' },
    { id: 2, name: 'Mike Designer', bio: 'Product Designer at TechCo', followers: 8900, avatar: '👨‍🎨' },
    { id: 3, name: 'Emma Founder', bio: 'Building the future of work', followers: 15200, avatar: '👩‍💼' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <MusicalNoteIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Hypnotic</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <UserGroupIcon className="h-10 w-10 text-purple-600" />
            <div>
              <h1 className="text-4xl font-bold">Followers & Following</h1>
              <p className="text-gray-600">2,340 followers · 156 following</p>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium">Followers</button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">Following</button>
          </div>

          <div className="space-y-4">
            {followers.map(user => (
              <div key={user.id} className="card p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{user.avatar}</div>
                  <div>
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    <p className="text-gray-600">{user.bio}</p>
                    <p className="text-sm text-gray-500">{user.followers.toLocaleString()} followers</p>
                  </div>
                </div>
                <button className="btn btn-primary">Follow</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
