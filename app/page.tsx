'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BookOpenIcon, 
  PencilSquareIcon, 
  ChartBarIcon,
  SparklesIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SparklesIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hypermedia Oasis
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/feed" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Feed
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Create
              </Link>
              <Link href="/analytics" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Analytics
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Video Background Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                🎬 The Future of Content Creation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Create <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Rich Interactive</span> Content That Captivates
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The ultimate platform for hypermedia storytelling. Embed videos, audio, interactive widgets, and more. Engage your audience like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register" className="btn btn-primary text-lg px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600">
                  Start Creating Free →
                </Link>
                <Link href="/feed" className="btn btn-secondary text-lg px-8 py-4">
                  Explore Content
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <span>500K+ creators</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card p-8 bg-gradient-to-br from-white to-indigo-50">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <SparklesIcon className="h-24 w-24 text-indigo-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-indigo-200 rounded w-3/4"></div>
                    <div className="h-4 bg-purple-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-24 container-custom">
            <Link href="/feed" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <BookOpenIcon className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Dynamic Feed</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover rich content with embedded media, interactive elements, and real-time updates. Filter by type, tags, and popularity.
              </p>
            </Link>

            <Link href="/create" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <PencilSquareIcon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Content Creator</h3>
              <p className="text-gray-600 leading-relaxed">
                Powerful editor with hypermedia embedding, drag-and-drop uploads, live preview, and auto-save. Create stunning content effortlessly.
              </p>
            </Link>

            <Link href="/analytics" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-pink-100 flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors">
                <ChartBarIcon className="h-7 w-7 text-pink-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Track performance with detailed metrics, audience insights, and real-time analytics. Export reports and optimize your content.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-indigo-600 mb-2">10M+</div>
              <div className="text-gray-600 text-lg">Content Pieces</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-purple-600 mb-2">500K+</div>
              <div className="text-gray-600 text-lg">Active Creators</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-pink-600 mb-2">50M+</div>
              <div className="text-gray-600 text-lg">Monthly Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">Powerful features for modern content creation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6 animate-fade-in">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <GlobeAltIcon className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rich Media Embedding</h3>
                <p className="text-gray-600">Embed videos, images, audio, and interactive widgets seamlessly into your content.</p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <UserGroupIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
                <p className="text-gray-600">Work together with your team in real-time with live updates and notifications.</p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Get intelligent recommendations and insights to optimize your content strategy.</p>
              </div>
            </div>

            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <ChartBarIcon className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600">Track engagement, views, shares, and audience demographics with detailed reports.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using Hypermedia Oasis to tell their stories.
          </p>
          <button className="btn bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <SparklesIcon className="h-6 w-6 text-indigo-400" />
                <span className="text-white font-bold">Hypermedia Oasis</span>
              </div>
              <p className="text-sm">Create, share, and discover rich hypermedia content.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/feed" className="hover:text-white transition-colors">Feed</Link></li>
                <li><Link href="/create" className="hover:text-white transition-colors">Creator</Link></li>
                <li><Link href="/analytics" className="hover:text-white transition-colors">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2026 Hypermedia Oasis. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
