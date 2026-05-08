'use client'

import Link from 'next/link'
import { SparklesIcon, CalendarIcon, ClockIcon, UserGroupIcon , MusicalNoteIcon } from '@heroicons/react/24/outline'

export default function EventsPage() {
  const events = [
    { id: 1, title: 'AI & Future of Content', date: 'May 15, 2026', time: '2:00 PM EST', attendees: 1200, type: 'Webinar', image: '🤖' },
    { id: 2, title: 'Design Systems Workshop', date: 'May 20, 2026', time: '10:00 AM EST', attendees: 850, type: 'Workshop', image: '🎨' },
    { id: 3, title: 'Creator Economy Summit', date: 'May 25, 2026', time: '9:00 AM EST', attendees: 2500, type: 'Conference', image: '💼' },
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
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <CalendarIcon className="h-10 w-10 text-purple-600" />
            <div>
              <h1 className="text-4xl font-bold">Upcoming Events</h1>
              <p className="text-gray-600">Live webinars, workshops, and conferences</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
              <div key={event.id} className="card overflow-hidden hover-lift cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-6xl">
                  {event.image}
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-purple-100 text-indigo-700 rounded-full text-sm font-medium mb-3">
                    {event.type}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <UserGroupIcon className="h-4 w-4" />
                      {event.attendees.toLocaleString()} registered
                    </div>
                  </div>
                  <button className="btn btn-primary w-full">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
