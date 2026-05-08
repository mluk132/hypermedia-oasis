'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  SparklesIcon, 
  UserCircleIcon,
  ChartBarIcon,
  HeartIcon,
  EyeIcon,
  ShareIcon,
  PencilSquareIcon,
  Cog6ToothIcon
, MusicalNoteIcon } from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [user] = useState({
    name: 'Alex Creator',
    email: 'alex@example.com',
    joinedDate: 'January 2026',
    bio: 'Content creator passionate about hypermedia storytelling and interactive experiences.',
    avatar: '👤'
  })

  const [stats] = useState({
    posts: 42,
    views: 125000,
    likes: 8500,
    followers: 2340
  })

  const [recentPosts] = useState([
    { id: 1, title: 'The Future of Interactive Content', views: 12500, likes: 450, date: '2 days ago' },
    { id: 2, title: 'Building Engaging Hypermedia Experiences', views: 8900, likes: 320, date: '5 days ago' },
    { id: 3, title: 'Tips for Content Creators', views: 15200, likes: 680, date: '1 week ago' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
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
              <Link href="/create" className="text-gray-700 hover:text-purple-600 transition-colors">Create</Link>
              <Link href="/profile" className="text-purple-600 font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          {/* Profile Header */}
          <div className="card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-6xl">
                  {user.avatar}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="text-gray-600 mb-1">{user.email}</p>
                    <p className="text-sm text-gray-500">Joined {user.joinedDate}</p>
                  </div>
                  <Link href="/settings" className="btn btn-secondary">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Settings
                  </Link>
                </div>
                <p className="text-gray-700 mb-6">{user.bio}</p>
                <div className="flex gap-4">
                  <Link href="/create" className="btn btn-primary bg-gradient-to-r from-purple-600 to-pink-600">
                    <PencilSquareIcon className="h-5 w-5 mr-2" />
                    Create Content
                  </Link>
                  <button className="btn btn-secondary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Posts</span>
                <PencilSquareIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">{stats.posts}</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Total Views</span>
                <EyeIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">{stats.views.toLocaleString()}</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Likes</span>
                <HeartIcon className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-pink-600">{stats.likes.toLocaleString()}</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Followers</span>
                <UserCircleIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">{stats.followers.toLocaleString()}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Recent Posts */}
            <div className="md:col-span-2">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Recent Posts</h2>
                  <Link href="/feed" className="text-purple-600 hover:text-indigo-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentPosts.map(post => (
                    <div key={post.id} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                      <h3 className="font-semibold mb-2">{post.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <EyeIcon className="h-4 w-4" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <HeartIcon className="h-4 w-4" />
                          {post.likes}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/create" className="block p-3 bg-indigo-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <PencilSquareIcon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Create Post</span>
                    </div>
                  </Link>
                  <Link href="/analytics" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <ChartBarIcon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">View Analytics</span>
                    </div>
                  </Link>
                  <Link href="/bookmarks" className="block p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <HeartIcon className="h-5 w-5 text-pink-600" />
                      <span className="font-medium">Bookmarks</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4">Achievements</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                      🏆
                    </div>
                    <div>
                      <div className="font-medium">Top Creator</div>
                      <div className="text-sm text-gray-600">100K+ views</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                      ⭐
                    </div>
                    <div>
                      <div className="font-medium">Consistent</div>
                      <div className="text-sm text-gray-600">30 day streak</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                      💎
                    </div>
                    <div>
                      <div className="font-medium">Influencer</div>
                      <div className="text-sm text-gray-600">2K+ followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
