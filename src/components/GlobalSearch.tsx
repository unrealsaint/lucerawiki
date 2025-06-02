'use client'

import { useState, useEffect, useRef } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Guide {
  title: string
  description: string
  href: string
  categories: string[]
  status: string
  lastUpdated: string
  difficulty: string
  views?: number
  comments?: any[]
  ratings?: any[]
  averageRating?: number
}

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [guides, setGuides] = useState<Guide[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Load guides when component mounts
  useEffect(() => {
    loadGuides()
  }, [])

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const loadGuides = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch('/api/guides')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      console.log('Loaded guides:', data)
      setGuides(data)
    } catch (err) {
      console.error('Error loading guides:', err)
      setError('Failed to load guides. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setIsOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      const firstResult = filteredGuides[0]
      if (firstResult) {
        router.push(firstResult.href)
        setIsOpen(false)
      }
    }
  }

  const filteredGuides = guides.filter(guide => {
    if (!searchQuery.trim()) return false
    
    const searchTerms = searchQuery.toLowerCase().split(' ')
    const searchableContent = [
      guide.title,
      guide.description,
      ...guide.categories,
      guide.status,
      guide.difficulty
    ].map(str => str.toLowerCase())

    return searchTerms.some(term => 
      searchableContent.some(content => content.includes(term))
    )
  })

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder="Search guides..."
          className="w-full rounded-lg border-0 bg-gray-700/50 px-4 py-2 pl-10 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('')
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border border-gray-700 bg-gray-800 shadow-xl">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-gray-400">Loading...</div>
          ) : error ? (
            <div className="p-4 text-center text-sm text-red-400">{error}</div>
          ) : searchQuery.trim() ? (
            filteredGuides.length > 0 ? (
              <div className="divide-y divide-gray-700">
                {filteredGuides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    onClick={() => setIsOpen(false)}
                    className="block p-4 hover:bg-gray-700/50"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-medium text-white">{guide.title}</h3>
                      <p className="text-xs text-gray-400">{guide.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {guide.categories.map((category) => (
                          <span
                            key={category}
                            className="rounded-full bg-blue-900/50 px-2 py-0.5 text-xs text-blue-300"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-gray-400">
                No guides found matching "{searchQuery}"
              </div>
            )
          ) : (
            <div className="p-4 text-center text-sm text-gray-400">
              Start typing to search guides...
            </div>
          )}
        </div>
      )}
    </div>
  )
} 