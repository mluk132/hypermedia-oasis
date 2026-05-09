'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SparklesIcon, MagnifyingGlassIcon, FireIcon, ClockIcon, HeartIcon, MusicalNoteIcon, PlayIcon } from '@heroicons/react/24/outline'
import { api, Song } from '@/lib/api'

export default function ExplorePage() {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>()
  
  const genres = ['Pop', 'Rock', 'Hip Hop', 'Electronic', 'Jazz', 'Classical']

  useEffect(() => {
    loadSongs()
  }, [selectedGenre])

  const loadSongs = async () => {
    try {
      setLoading(true)
      const data = await api.getSongs({ genre: selectedGenre })
      setSongs(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load songs')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadSongs()
      return
    }
    try {
      setLoading(true)
      const data = await api.getSongs({ search: searchQuery, genre: selectedGenre })
      setSongs(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed')
    } finally {
      setLoading(false)
    }
  }

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

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
            <div className="flex items-center space-x-6">
              <Link href="/feed" className="text-gray-700 hover:text-purple-600 transition-colors">Feed</Link>
              <Link href="/explore" className="text-purple-600 font-medium">Explore</Link>
              <Link href="/profile" className="text-gray-700 hover:text-purple-600 transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Explore Music</h1>
            <div className="relative max-w-2xl">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for songs, artists, or albums..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {genres.map(genre => (
                <button 
                  key={genre} 
                  onClick={() => setSelectedGenre(selectedGenre === genre ? undefined : genre)}
                  className={`card p-6 text-center hover-lift transition-all ${
                    selectedGenre === genre ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-purple-300' : ''
                  }`}
                >
                  <div className="text-3xl mb-2">🎵</div>
                  <div className="font-medium">{genre}</div>
                </button>
              ))}
            </div>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600">Loading songs...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 mb-6">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {selectedGenre ? `${selectedGenre} Songs` : 'All Songs'}
                </h2>
                <span className="text-gray-600">{songs.length} songs</span>
              </div>
              {songs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No songs found.</p>
                  <Link href="/create" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all">
                    Add Your First Song
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {songs.map(song => (
                    <div key={song.id} className="card p-4 hover:border-purple-300 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          {song.image_url ? (
                            <img src={song.image_url} alt={song.title} className="w-full h-full object-cover rounded-lg" />
                          ) : (
                            <MusicalNoteIcon className="h-8 w-8 text-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg truncate">{song.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            {song.artist && <span>{song.artist.name || 'Unknown Artist'}</span>}
                            {song.album && <span>• {song.album}</span>}
                            {song.genre && (
                              <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                {song.genre}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          {song.duration_seconds && (
                            <span className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4" />
                              {formatDuration(song.duration_seconds)}
                            </span>
                          )}
                          <button className="p-2 hover:bg-purple-100 rounded-full transition-colors">
                            <PlayIcon className="h-5 w-5 text-purple-600" />
                          </button>
                          <button className="p-2 hover:bg-pink-100 rounded-full transition-colors">
                            <HeartIcon className="h-5 w-5 text-pink-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
