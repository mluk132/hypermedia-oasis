'use client'

import Link from 'next/link'
import { SparklesIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function MessagesPage() {
  const conversations = [
    { id: 1, user: 'Sarah Tech', message: 'Great article on AI!', time: '5m ago', unread: 2, avatar: '👩‍💻' },
    { id: 2, user: 'Mike Designer', message: 'Can we collaborate?', time: '1h ago', unread: 0, avatar: '👨‍🎨' },
    { id: 3, user: 'Emma Founder', message: 'Thanks for the feedback', time: '2h ago', unread: 0, avatar: '👩‍💼' },
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
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="card p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Messages</h2>
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="relative mb-4">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200" />
                </div>
                <div className="space-y-2">
                  {conversations.map(conv => (
                    <div key={conv.id} className="p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{conv.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold truncate">{conv.user}</p>
                            {conv.unread > 0 && (
                              <span className="bg-indigo-600 text-white text-xs rounded-full px-2 py-1">{conv.unread}</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 truncate">{conv.message}</p>
                          <p className="text-xs text-gray-400">{conv.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="card p-8 h-[600px] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <ChatBubbleLeftRightIcon className="h-16 w-16 mx-auto mb-4" />
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
