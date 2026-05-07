'use client'

import Link from 'next/link'
import { SparklesIcon, DocumentTextIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function TemplatesPage() {
  const templates = [
    { id: 1, name: 'Blog Post', description: 'Perfect for long-form articles', uses: 12500, icon: '📝', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Product Launch', description: 'Announce new products', uses: 8900, icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'Tutorial', description: 'Step-by-step guides', uses: 15200, icon: '📚', color: 'from-green-500 to-teal-500' },
    { id: 4, name: 'Newsletter', description: 'Weekly updates', uses: 9800, icon: '📧', color: 'from-orange-500 to-red-500' },
    { id: 5, name: 'Case Study', description: 'Success stories', uses: 6700, icon: '📊', color: 'from-indigo-500 to-purple-500' },
    { id: 6, name: 'Interview', description: 'Q&A format', uses: 5400, icon: '🎤', color: 'from-pink-500 to-rose-500' },
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold mb-4">Content Templates</h1>
            <p className="text-xl text-gray-600">Start creating faster with professionally designed templates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map(template => (
              <div key={template.id} className="card p-6 hover-lift cursor-pointer">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center text-3xl mb-4`}>
                  {template.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{template.uses.toLocaleString()} uses</span>
                  <button className="btn btn-primary btn-sm">Use Template</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
