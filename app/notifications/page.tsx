'use client'

import Link from 'next/link'
import { SparklesIcon, BellIcon, HeartIcon, ChatBubbleLeftIcon, UserPlusIcon } from '@heroicons/react/24/outline'

export default function NotificationsPage() {
  const notifications = [
    { id: 1, type: 'like', user: 'Sarah Tech', action: 'liked your post', content: 'The Future of AI', time: '5m ago', icon: HeartIcon, color: 'text-pink-600' },
    { id: 2, type: 'comment', user: 'Mike Designer', action: 'commented on', content: 'Design Systems', time: '1h ago', icon: ChatBubbleLeftIcon, color: 'text-blue-600' },
    { id: 3, type: 'follow', user: 'Emma Founder', action: 'started following you', content: '', time: '2h ago', icon: UserPlusIcon, color: 'text-green-600' },
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
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <BellIcon className="h-10 w-10 text-indigo-600" />
            <h1 className="text-4xl font-bold">Notifications</h1>
          </div>

          <div className="space-y-3">
            {notifications.map(notif => {
              const Icon = notif.icon
              return (
                <div key={notif.id} className="card p-4 hover-lift cursor-pointer flex items-start gap-4">
                  <Icon className={`h-6 w-6 ${notif.color}`} />
                  <div className="flex-1">
                    <p className="text-gray-900">
                      <span className="font-semibold">{notif.user}</span> {notif.action} {notif.content && <span className="font-medium">"{notif.content}"</span>}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
