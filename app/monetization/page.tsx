'use client'

import Link from 'next/link'
import { SparklesIcon, CurrencyDollarIcon, ChartBarIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export default function MonetizationPage() {
  const earnings = {
    thisMonth: 2450,
    lastMonth: 2180,
    total: 18750,
    subscribers: 340
  }

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
          <div className="flex items-center gap-3 mb-8">
            <CurrencyDollarIcon className="h-10 w-10 text-green-600" />
            <div>
              <h1 className="text-4xl font-bold">Creator Earnings</h1>
              <p className="text-gray-600">Track your revenue and grow your income</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">This Month</div>
              <div className="text-3xl font-bold text-green-600 mb-1">${earnings.thisMonth.toLocaleString()}</div>
              <div className="text-sm text-green-500">↑ 12% from last month</div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">Last Month</div>
              <div className="text-3xl font-bold text-gray-900">${earnings.lastMonth.toLocaleString()}</div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">Total Earned</div>
              <div className="text-3xl font-bold text-indigo-600">${earnings.total.toLocaleString()}</div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">Subscribers</div>
              <div className="text-3xl font-bold text-purple-600">{earnings.subscribers}</div>
            </div>
          </div>

          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Revenue Breakdown</h2>
            <div className="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ChartBarIcon className="h-16 w-16 text-indigo-600 mx-auto mb-2" />
                <p className="text-gray-600">Revenue chart visualization</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Payout Methods</h3>
              <button className="btn btn-primary w-full">
                <BanknotesIcon className="h-5 w-5 mr-2" />
                Setup Payout
              </button>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Subscription Tiers</h3>
              <button className="btn btn-secondary w-full">Manage Tiers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
