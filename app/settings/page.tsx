'use client'

import Link from 'next/link'
import { SparklesIcon, UserIcon, BellIcon, ShieldCheckIcon, CreditCardIcon , MusicalNoteIcon } from '@heroicons/react/24/outline'

export default function SettingsPage() {
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
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Settings</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/settings/profile" className="card p-6 hover-lift cursor-pointer">
              <UserIcon className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Profile Settings</h3>
              <p className="text-gray-600">Update your profile information and preferences</p>
            </Link>

            <Link href="/settings/notifications" className="card p-6 hover-lift cursor-pointer">
              <BellIcon className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Notifications</h3>
              <p className="text-gray-600">Manage your notification preferences</p>
            </Link>

            <Link href="/settings/privacy" className="card p-6 hover-lift cursor-pointer">
              <ShieldCheckIcon className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Privacy & Security</h3>
              <p className="text-gray-600">Control your privacy and security settings</p>
            </Link>

            <Link href="/settings/billing" className="card p-6 hover-lift cursor-pointer">
              <CreditCardIcon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Billing</h3>
              <p className="text-gray-600">Manage your subscription and payment methods</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
