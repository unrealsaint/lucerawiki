'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  ChevronRightIcon, 
  MagnifyingGlassIcon, 
  EyeIcon, 
  ClockIcon, 
  FireIcon, 
  BookmarkIcon, 
  CheckCircleIcon, 
  ArrowPathIcon,
  ServerIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CubeIcon,
  UserIcon,
  TrophyIcon,
  UserCircleIcon,
  SparklesIcon,
  BoltIcon,
  ShareIcon,
  StarIcon,
  ChatBubbleLeftIcon,
  ArrowUpIcon,
  ChevronDoubleRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ListBulletIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { useState, useEffect, useRef, useCallback } from 'react'
import { GUIDES, CATEGORIES, type Category, type GuideStatus, type DifficultyLevel, type Guide } from '@/data/guides'

// Client-side only date formatter component
const FormattedDate = ({ dateString }: { dateString: string }) => {
  const [formattedDate, setFormattedDate] = useState('')

  useEffect(() => {
    try {
      const date = new Date(dateString)
      setFormattedDate(date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }))
    } catch (error) {
      console.error('Error formatting date:', error)
      setFormattedDate(dateString)
    }
  }, [dateString])

  return <span>{formattedDate}</span>
}

// Add user interaction types
interface UserGuideState {
  saved: boolean
  completed: boolean
  progress: number // 0-100 percentage
  lastStep?: number
}

interface GuideWithUserState extends Guide {
  userState?: UserGuideState
}

// Add social features types
interface Comment {
  id: string
  userId: string
  userName: string
  content: string
  timestamp: string
  likes: number
}

interface GuideRating {
  userId: string
  rating: number
  timestamp: string
}

interface GuideWithSocial extends GuideWithUserState {
  comments: Comment[]
  ratings: GuideRating[]
  averageRating: number
  content?: string
  tags?: string[]
}

// Helper function to get status badge color
const getStatusBadgeColor = (status: GuideStatus) => {
  switch (status) {
    case 'new':
      return 'bg-green-900/50 text-green-300'
    case 'updated':
      return 'bg-blue-900/50 text-blue-300'
    case 'popular':
      return 'bg-orange-900/50 text-orange-300'
    default:
      return ''
  }
}

// Helper function to get difficulty badge color
const getDifficultyBadgeColor = (difficulty: DifficultyLevel) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-900/50 text-green-300'
    case 'intermediate':
      return 'bg-yellow-900/50 text-yellow-300'
    case 'advanced':
      return 'bg-red-900/50 text-red-300'
  }
}

// Update GUIDES with new fields
const GUIDES_WITH_METADATA: Guide[] = GUIDES.map(guide => ({
  ...guide,
  views: Math.floor(Math.random() * 1000),
  status: (() => {
    const rand = Math.random()
    if (rand < 0.2) return 'new'
    if (rand < 0.4) return 'updated'
    if (rand < 0.6) return 'popular'
    return 'none'
  })(),
  lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
  difficulty: (() => {
    const rand = Math.random()
    if (rand < 0.4) return 'beginner'
    if (rand < 0.8) return 'intermediate'
    return 'advanced'
  })()
}))

// Define category icons
const CATEGORY_ICONS = {
  'server-setup': ServerIcon,
  'administration': ShieldCheckIcon,
  'player-features': UserGroupIcon,
  'items-equipment': CubeIcon,
  'npc-mobs': UserIcon,
  'raids-events': TrophyIcon,
  'clan-system': UserCircleIcon,
  'buffing-support': SparklesIcon,
  'skills-combat': BoltIcon,
} as const

// Define guide preview images with default fallback
const GUIDE_PREVIEWS: Record<string, string> = {
  'server-setup': '/images/guides/server-setup.jpg',
  'dat-editor': '/images/guides/dat-editor.jpg',
  'admin-rights': '/images/guides/admin-rights.jpg',
  'html-reload': '/images/guides/html-reload.jpg',
  'gm-commands': '/images/guides/gm-commands.jpg',
  'starting-items': '/images/guides/starting-items.jpg',
  'dialogues-translations': '/images/guides/dialogues.jpg',
  'multisells': '/images/guides/multisells.jpg',
  'teleports': '/images/guides/teleports.jpg',
  'unstuck-coordinates': '/images/guides/coordinates.jpg',
  'community-board': '/images/guides/community-board.jpg',
  'newbie-buffer': '/images/guides/newbie-buffer.jpg',
  'buffer-system': '/images/guides/buffer.jpg',
  'give-items': '/images/guides/give-items.jpg',
  'chat-filter': '/images/guides/chat-filter.jpg',
  'quick-drop': '/images/guides/quick-drop.jpg',
  'dynamic-rates': '/images/guides/dynamic-rates.jpg',
  'premium-account': '/images/guides/premium.jpg',
}

// Update the default image path
const DEFAULT_GUIDE_IMAGE = '/images/default-guide.svg'

interface Section {
  id: string
  title: string
  icon: any
  count: number
  collapsed: boolean
}

// Update CategoryPanel component
const CategoryPanel = ({ 
  selectedCategory, 
  onSelectCategory, 
  guides 
}: { 
  selectedCategory: Category | 'all'
  onSelectCategory: (category: Category | 'all') => void
  guides: GuideWithSocial[]
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Calculate guide counts and stats for each category
  const categoryStats = Object.keys(CATEGORIES).reduce((acc, category) => {
    const categoryGuides = guides.filter(guide => guide.categories.includes(category as Category))
    const totalViews = categoryGuides.reduce((sum, guide) => sum + (guide.views || 0), 0)
    const avgRating = categoryGuides.reduce((sum, guide) => sum + (guide.averageRating || 0), 0) / categoryGuides.length || 0
    
    acc[category] = {
      count: categoryGuides.length,
      totalViews,
      avgRating,
      guides: categoryGuides
    }
    return acc
  }, {} as Record<string, { count: number; totalViews: number; avgRating: number; guides: GuideWithSocial[] }>)

  // Filter categories based on search
  const filteredCategories = Object.entries(CATEGORIES).filter(([key, label]) => 
    label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    key.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-gray-800/95">
      {/* Header */}
      <div className="border-b border-gray-700/50 p-3">
        <h3 className="mb-3 text-base font-semibold text-white">Categories</h3>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search categories..."
            className="w-full rounded-lg border-0 bg-gray-700/50 px-3 py-1.5 pl-8 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Categories List */}
      <div className="h-[calc(100%-5rem)] overflow-y-auto p-3">
        <div className="space-y-1">
          {/* All Categories Option */}
          <button
            onClick={() => onSelectCategory('all')}
            className={`group flex w-full items-center justify-between rounded-lg p-2 text-sm transition-all duration-300 ${
              selectedCategory === 'all' 
                ? 'bg-blue-600/20 text-blue-400' 
                : 'hover:bg-gray-700/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <ListBulletIcon className="h-4 w-4" />
              <span className="font-medium">All Categories</span>
            </div>
            <span className="rounded-full bg-gray-700/50 px-2 py-0.5 text-xs text-gray-300">
              {guides.length}
            </span>
          </button>

          {/* Category List */}
          {filteredCategories.map(([key, label]) => {
            const stats = categoryStats[key]
            const Icon = CATEGORY_ICONS[key as Category]
            
            return (
              <div
                key={key}
                className={`group rounded-lg transition-all duration-300 ${
                  selectedCategory === key ? 'bg-blue-600/20' : 'hover:bg-gray-700/50'
                }`}
              >
                <button
                  onClick={() => onSelectCategory(key as Category)}
                  className="flex w-full items-center justify-between p-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 transition-colors duration-300 ${
                      selectedCategory === key ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
                    }`} />
                    <div className="text-left">
                      <span className={`text-sm font-medium transition-colors duration-300 ${
                        selectedCategory === key ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {label}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{stats.count} guides</span>
                        <span>•</span>
                        <span>{stats.totalViews.toLocaleString()} views</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRightIcon className={`h-4 w-4 transition-transform duration-300 ${
                    selectedCategory === key ? 'rotate-90 text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
                  }`} />
                </button>

                {/* Expanded Category Content */}
                {selectedCategory === key && (
                  <div className="animate-fadeIn space-y-1 border-t border-gray-700/50 p-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Average Rating</span>
                      <div className="flex items-center gap-1">
                        <StarIconSolid className="h-3 w-3 text-yellow-400" />
                        <span className="text-gray-300">{stats.avgRating.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {stats.guides.slice(0, 3).map(guide => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          className="block rounded-lg p-1.5 text-xs text-gray-300 transition-colors duration-300 hover:bg-gray-700/50 hover:text-white"
                        >
                          {guide.title}
                        </Link>
                      ))}
                      {stats.guides.length > 3 && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="w-full rounded-lg p-1.5 text-xs text-blue-400 transition-colors duration-300 hover:bg-gray-700/50 hover:text-blue-300"
                        >
                          {isExpanded ? 'Show Less' : `Show ${stats.guides.length - 3} More`}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700/50 bg-gray-800/95 p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Total Guides</span>
          <span className="font-medium text-white">{guides.length}</span>
        </div>
      </div>
    </div>
  )
}

// Add NavigationPanel component before the main component
const NavigationPanel = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [searchTerm, setSearchTerm] = useState('')

  const sections = [
    {
      id: 'server-setup',
      title: 'Server Setup & Configuration',
      icon: ServerIcon,
      guides: [
        { title: 'Server Setup Guide', href: '/guides/server-setup' },
        { title: 'Command Line Login Guide', href: '/guides/command-line-login' },
        { title: 'Admin Rights Guide', href: '/guides/admin-rights' },
        { title: 'GM Commands Guide', href: '/guides/gm-commands' },
        { title: 'Dynamic Rates Guide', href: '/guides/dynamic-rates' },
        { title: 'Moderator Management Guide', href: '/guides/moderator-management' },
        { title: 'HAProxy Setup Guide', href: '/guides/haproxy-setup' },
        { title: 'Zone and Territory Guide', href: '/guides/zone-territory' }
      ]
    },
    {
      id: 'file-management',
      title: 'File Management & Tools',
      icon: CubeIcon,
      guides: [
        { title: 'DAT Editor Guide', href: '/guides/dat-editor' },
        { title: 'HTML Reload Guide', href: '/guides/html-reload' },
        { title: 'Dialogues and Translations Guide', href: '/guides/dialogues-translations' },
        { title: 'Welcome HTML Guide', href: '/guides/welcome-html' }
      ]
    },
    {
      id: 'items-equipment',
      title: 'Items & Equipment',
      icon: ShieldCheckIcon,
      guides: [
        { title: 'Items Configuration Guide', href: '/guides/items-configuration' },
        { title: 'Special Craft Store Guide', href: '/guides/special-craft-store' },
        { title: 'Armor Appearance Guide', href: '/guides/armor-appearance' },
        { title: 'Extractable Items Guide', href: '/guides/extractable-items' },
        { title: 'Item Augmentation Guide', href: '/guides/item-augmentation' },
        { title: 'Services Manager Augmentation Guide', href: '/guides/services-augmentation' },
        { title: 'Equipment Enchantment Guide', href: '/guides/equipment-enchantment' },
        { title: 'Recipe Configuration Guide', href: '/guides/recipe-configuration' },
        { title: 'Fitting Room Guide', href: '/guides/fitting-room' },
        { title: 'Stackable Enchant Scrolls Guide', href: '/guides/stackable-enchant-scrolls' },
        { title: 'Crystal Grades Guide', href: '/guides/crystal-grades' },
        { title: 'Item Crystallization Guide', href: '/guides/item-crystallization' },
        { title: 'Starting Items Guide', href: '/guides/starting-items' },
        { title: 'Give Items Guide', href: '/guides/give-items' },
        { title: 'Multisells Guide', href: '/guides/multisells' },
        { title: 'Chance Multisell Guide', href: '/guides/chance-multisell' }
      ]
    },
    {
      id: 'player-features',
      title: 'Player Features',
      icon: UserGroupIcon,
      guides: [
        { title: 'Premium Account Guide', href: '/guides/premium-account' },
        { title: 'Prime Shop Guide', href: '/guides/prime-shop' },
        { title: 'Attendance Event Guide', href: '/guides/attendance-event' },
        { title: 'Promo Code Guide', href: '/guides/promo-code' },
        { title: 'Character Appearance Guide', href: '/guides/character-appearance' },
        { title: 'Costume System Guide', href: '/guides/costume-system' },
        { title: 'Rune Configuration Guide', href: '/guides/rune-configuration' },
        { title: 'Henna Tuning Guide', href: '/guides/henna-tuning' },
        { title: 'Teleports Guide', href: '/guides/teleports' },
        { title: 'Unstuck and Coordinates Guide', href: '/guides/unstuck-coordinates' },
        { title: 'Community Board Guide', href: '/guides/community-board' },
        { title: 'Chat Filter Guide', href: '/guides/chat-filter' }
      ]
    },
    {
      id: 'buffing-support',
      title: 'Buffing & Support Systems',
      icon: SparklesIcon,
      guides: [
        { title: 'Newbie Buffer Guide', href: '/guides/newbie-buffer' },
        { title: 'Buffer System Guide', href: '/guides/buffer-system' },
        { title: 'Buff Return Guide', href: '/guides/buff-return' },
        { title: 'Buff Book Guide', href: '/guides/buff-book' }
      ]
    },
    {
      id: 'skills-combat',
      title: 'Skills & Combat',
      icon: BoltIcon,
      guides: [
        { title: 'Skills and Effects Guide', href: '/guides/skills-effects' },
        { title: 'Multiprof Guide', href: '/guides/multiprof' },
        { title: 'Clan Skills Guide', href: '/guides/clan-skills' },
        { title: 'Custom Skill Learning Guide', href: '/guides/custom-skill-learning' },
        { title: 'Custom Stats Guide', href: '/guides/custom-stats' },
        { title: 'Skill Enchantment Guide', href: '/guides/skill-enchantment' },
        { title: 'Skill Tree Guide', href: '/guides/skill-tree' },
        { title: 'Non-Cancellable Debuffs Guide', href: '/guides/non-cancellable-debuffs' },
        { title: 'Fixed Resurrection Time Guide', href: '/guides/fixed-resurrection-time' }
      ]
    },
    {
      id: 'npc-mobs',
      title: 'NPCs & Mobs',
      icon: UserIcon,
      guides: [
        { title: 'Player Action Phantoms Guide', href: '/guides/player-action-phantoms' },
        { title: 'Phantom Configuration Guide', href: '/guides/phantom-configuration' },
        { title: 'Spawn NPC Guide', href: '/guides/spawn-npc' },
        { title: 'Cron Spawn Guide', href: '/guides/cron-spawn' },
        { title: 'Fixed Cron Spawn Guide', href: '/guides/fixed-cron-spawn' },
        { title: 'NPC and Drop Configuration Guide', href: '/guides/npc-drop-configuration' },
        { title: 'Quick Drop Configuration Guide', href: '/guides/quick-drop' },
        { title: 'Remove NPC Drops Guide', href: '/guides/remove-npc-drops' },
        { title: 'Pet Configuration Guide', href: '/guides/pet-configuration' }
      ]
    },
    {
      id: 'raids-events',
      title: 'Raids & Special Events',
      icon: TrophyIcon,
      guides: [
        { title: 'Instances Guide', href: '/guides/instances' },
        { title: 'Olympiad Cycles Guide', href: '/guides/olympiad-cycles' },
        { title: 'Type-Based Olympiad Competition Guide', href: '/guides/olympiad-competition' },
        { title: 'New Olympiad Arenas Guide (Classic)', href: '/guides/olympiad-arenas' },
        { title: '3v3 Olympiad Games Guide', href: '/guides/3v3-olympiad' },
        { title: 'PvP Events Guide', href: '/guides/pvp-events' },
        { title: 'PvP Events Locations Guide', href: '/guides/pvp-events-locations' },
        { title: 'Restricted Siege Zone Guide', href: '/guides/restricted-siege-zone' },
        { title: 'Castle Skills Guide', href: '/guides/castle-skills' },
        { title: 'Residence Rewards Guide', href: '/guides/residence-rewards' },
        { title: 'Siege Schedule Guide', href: '/guides/siege-schedule' },
        { title: 'Service Mob and Raid Configuration Guide', href: '/guides/service-mob-raid' },
        { title: 'Raid Boss Points Guide', href: '/guides/raid-boss-points' },
        { title: 'Epic and Raid Boss Dead Status Guide', href: '/guides/raid-boss-dead-status' },
        { title: 'Noble Raid Boss Guide', href: '/guides/noble-raid-boss' },
        { title: 'Hero and Noble Raid Boss Guide', href: '/guides/hero-noble-raid-boss' },
        { title: 'Boss Statistics Guide', href: '/guides/boss-statistics' },
        { title: 'Queen Ant PvP Server Tuning Guide', href: '/guides/queen-ant-pvp-tuning' }
      ]
    },
    {
      id: 'clan-system',
      title: 'Clan System',
      icon: UserCircleIcon,
      guides: [
        { title: 'Clan Crest Display Guide', href: '/guides/clan-crest-display' },
        { title: 'Kamaloka Item Reuse Guide', href: '/guides/kamaloka-item-reuse' }
      ]
    }
  ]

  // Filter sections and guides based on search term
  const filteredSections = sections.map(section => ({
    ...section,
    guides: section.guides.filter(guide => 
      guide.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.guides.length > 0)

  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-gray-800/95">
      {/* Header */}
      <div className="border-b border-gray-700/50 p-3">
        <h3 className="mb-3 text-base font-semibold text-white">Guides</h3>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search guides..."
            className="w-full rounded-lg border-0 bg-gray-700/50 px-3 py-1.5 pl-8 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Navigation List */}
      <div className="h-[calc(100%-5rem)] overflow-y-auto p-3">
        <div className="space-y-1">
          {filteredSections.map(section => (
            <div
              key={section.id}
              className="group rounded-lg transition-all duration-300 hover:bg-gray-700/50"
            >
              <button
                onClick={() => setExpandedSections(prev => ({
                  ...prev,
                  [section.id]: !prev[section.id]
                }))}
                className="flex w-full items-center justify-between p-2"
              >
                <div className="flex items-center gap-2">
                  <section.icon className="h-4 w-4 text-blue-400" />
                  <div className="text-left">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {section.title}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{section.guides.length} guides</span>
                    </div>
                  </div>
                </div>
                <ChevronRightIcon className={`h-4 w-4 transition-transform duration-300 ${
                  expandedSections[section.id] ? 'rotate-90 text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
                }`} />
              </button>

              {/* Expanded Section Content */}
              {expandedSections[section.id] && (
                <div className="animate-fadeIn space-y-1 border-t border-gray-700/50 p-2">
                  <div className="space-y-1">
                    {section.guides.map(guide => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        className="group/guide block rounded-lg p-2 text-sm transition-all duration-300 hover:bg-gray-700/50"
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRightIcon className="h-3 w-3 text-gray-400 group-hover/guide:text-blue-400" />
                          <span className="text-gray-300 group-hover/guide:text-white">
                            {guide.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-700/50 bg-gray-800/95 p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Total Guides</span>
          <span className="font-medium text-white">
            {sections.reduce((sum, section) => sum + section.guides.length, 0)}
          </span>
        </div>
      </div>
    </div>
  )
}

// Update the main component to use NavigationPanel
export default function FeaturedGuides() {
  const [showMore, setShowMore] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all')
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([])
  const [guides, setGuides] = useState<GuideWithSocial[]>(GUIDES_WITH_METADATA.map(guide => ({
    ...guide,
    comments: [],
    ratings: [],
    averageRating: 0
  })) as GuideWithSocial[])
  const [userStates, setUserStates] = useState<Record<string, UserGuideState>>({})
  const [showComments, setShowComments] = useState<Record<string, boolean>>({})
  const [newComment, setNewComment] = useState<Record<string, string>>({})
  const [userRatings, setUserRatings] = useState<Record<string, number>>({})
  const [showBackToTop, setShowBackToTop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showMiniMap, setShowMiniMap] = useState(false)
  const [miniMapPosition, setMiniMapPosition] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({})
  const [showTableOfContents, setShowTableOfContents] = useState(false)
  const [sections, setSections] = useState<Section[]>([
    { id: 'saved', title: 'Saved Guides', icon: BookmarkIcon, count: 0, collapsed: false },
    { id: 'inProgress', title: 'In Progress', icon: ArrowPathIcon, count: 0, collapsed: false },
    { id: 'popular', title: 'Most Popular', icon: FireIcon, count: 0, collapsed: false },
    { id: 'recent', title: 'Recently Viewed', icon: ClockIcon, count: 0, collapsed: false },
    { id: 'all', title: 'All Guides', icon: ListBulletIcon, count: 0, collapsed: false }
  ])
  const [highlightedText, setHighlightedText] = useState('')
  const [showCategories, setShowCategories] = useState(false)

  // Load user states from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('guideUserStates')
    if (stored) {
      setUserStates(JSON.parse(stored))
    }
  }, [])

  // Save user states to localStorage
  useEffect(() => {
    localStorage.setItem('guideUserStates', JSON.stringify(userStates))
  }, [userStates])

  // Load user ratings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('guideUserRatings')
    if (stored) {
      setUserRatings(JSON.parse(stored))
    }
  }, [])

  // Save user ratings to localStorage
  useEffect(() => {
    localStorage.setItem('guideUserRatings', JSON.stringify(userRatings))
  }, [userRatings])

  // Update guide with user state
  const updateGuideUserState = (guideHref: string, updates: Partial<UserGuideState>) => {
    setUserStates(current => {
      const newStates = {
        ...current,
        [guideHref]: {
          ...current[guideHref],
          ...updates
        }
      }
      return newStates
    })
  }

  // Toggle save for later
  const toggleSaveForLater = (guideHref: string) => {
    updateGuideUserState(guideHref, {
      saved: !userStates[guideHref]?.saved
    })
  }

  // Toggle completion
  const toggleCompletion = (guideHref: string) => {
    updateGuideUserState(guideHref, {
      completed: !userStates[guideHref]?.completed,
      progress: !userStates[guideHref]?.completed ? 100 : 0
    })
  }

  // Update progress
  const updateProgress = (guideHref: string, progress: number) => {
    updateGuideUserState(guideHref, {
      progress,
      completed: progress === 100
    })
  }

  // Load recently viewed guides from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewedGuides')
    if (stored) {
      setRecentlyViewed(JSON.parse(stored))
    }
  }, [])

  // Track guide views
  const trackGuideView = (guideHref: string) => {
    // Update view count
    setGuides(currentGuides => 
      currentGuides.map(guide => 
        guide.href === guideHref 
          ? { ...guide, views: (guide.views || 0) + 1 }
          : guide
      )
    )

    // Update recently viewed
    setRecentlyViewed(current => {
      const newRecentlyViewed = [guideHref, ...current.filter(href => href !== guideHref)].slice(0, 5)
      localStorage.setItem('recentlyViewedGuides', JSON.stringify(newRecentlyViewed))
      return newRecentlyViewed
    })
  }

  // Filter guides based on selected category
  const filteredGuides = guides.filter(guide => {
    return selectedCategory === 'all' || guide.categories.includes(selectedCategory)
  })

  // Get saved guides
  const savedGuides = guides.filter(guide => userStates[guide.href]?.saved)

  // Get completed guides
  const completedGuides = guides.filter(guide => userStates[guide.href]?.completed)

  // Get in-progress guides
  const inProgressGuides = guides.filter(guide => {
    const state = userStates[guide.href]
    return state?.progress > 0 && !state.completed
  })

  // Get most popular guides
  const mostPopularGuides = [...guides]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 4)

  // Get recently viewed guides
  const recentlyViewedGuides = guides.filter(guide => 
    recentlyViewed.includes(guide.href)
  )

  // Split guides into initial and additional
  const initialGuides = filteredGuides.slice(0, 4)
  const additionalGuides = filteredGuides.slice(4)

  // Scroll to top
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId]
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Get recently viewed guides for breadcrumbs
  const getRecentlyViewedGuides = () => {
    return recentlyViewed
      .map(href => guides.find(g => g.href === href))
      .filter((guide): guide is GuideWithSocial => guide !== undefined)
      .slice(0, 3)
  }

  // Enhanced related guides with metadata
  const getRelatedGuides = (currentGuide: GuideWithSocial) => {
    return guides
      .filter(guide => 
        guide.href !== currentGuide.href &&
        guide.categories.some(category => 
          currentGuide.categories.includes(category)
        )
      )
      .map(guide => ({
        ...guide,
        relevance: guide.categories.filter(cat => 
          currentGuide.categories.includes(cat)
        ).length,
        lastViewed: recentlyViewed.indexOf(guide.href),
        userProgress: userStates[guide.href]?.progress || 0
      }))
      .sort((a, b) => {
        // Sort by relevance, then by last viewed, then by user progress
        if (a.relevance !== b.relevance) return b.relevance - a.relevance
        if (a.lastViewed !== b.lastViewed) return a.lastViewed - b.lastViewed
        return b.userProgress - a.userProgress
      })
      .slice(0, 3)
  }

  // Guide card component
  const GuideCard = ({ guide, showViews = true }: { guide: GuideWithSocial, showViews?: boolean }) => {
    const userState = userStates[guide.href] || { saved: false, completed: false, progress: 0 }
    const guideId = guide.href.split('/').pop() || ''
    const [imageError, setImageError] = useState(false)
    const userRating = userRatings[guide.href] || 0
    
    const relatedGuides = getRelatedGuides(guide)

    return (
      <div className="card group overflow-hidden transition-all duration-300 bg-gray-800 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
        {/* Preview Image with Link */}
        <Link 
          href={guide.href}
          onClick={() => trackGuideView(guide.href)}
          className="block relative h-48 w-full cursor-pointer overflow-hidden"
        >
          <Image
            src={DEFAULT_GUIDE_IMAGE}
            alt={guide.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={guide.status === 'new' || guide.status === 'updated'}
          />
          {/* Image Overlay with Animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
          {/* View Guide Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              View Guide
            </span>
          </div>
        </Link>

        <div className="p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {/* Status Badge with Animation */}
            {guide.status !== 'none' && (
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors duration-300 ${getStatusBadgeColor(guide.status)}`}>
                {guide.status.charAt(0).toUpperCase() + guide.status.slice(1)}
              </span>
            )}
            {/* Difficulty Badge with Animation */}
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors duration-300 ${getDifficultyBadgeColor(guide.difficulty)}`}>
              {guide.difficulty.charAt(0).toUpperCase() + guide.difficulty.slice(1)}
            </span>
            {/* Category Tags with Icons and Animation */}
            {guide.categories.map((category) => {
              const Icon = CATEGORY_ICONS[category]
              return (
                <span
                  key={category}
                  className="flex items-center gap-1 rounded-full bg-blue-900/50 px-2 py-0.5 text-xs text-blue-300 transition-all duration-300 hover:bg-blue-800/50 hover:text-blue-200"
                >
                  <Icon className="h-3 w-3" />
                  {CATEGORIES[category]}
                </span>
              )
            })}
          </div>

          <h3 className="mb-2 text-xl font-semibold transition-colors duration-300 group-hover:text-blue-400">{guide.title}</h3>
          <p className="mb-4 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            {highlightText(guide.description)}
          </p>

          {/* Progress Bar with Animation */}
          {userState.progress > 0 && (
            <div className="mb-4">
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">Progress</span>
                <span className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{userState.progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                <div
                  className="h-full bg-blue-500 transition-all duration-500 ease-out"
                  style={{ width: `${userState.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Social Features with Enhanced Animations */}
          <div className="mt-4 flex items-center justify-between border-t border-gray-700 pt-4">
            <div className="flex items-center gap-4">
              {/* Rating with Enhanced Animation */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={(e) => {
                      e.stopPropagation()
                      rateGuide(guide.href, rating)
                    }}
                    className="transform transition-all duration-300 hover:scale-110 hover:text-yellow-300"
                  >
                    {rating <= userRating ? (
                      <StarIconSolid className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <StarIcon className="h-5 w-5 text-yellow-400/50" />
                    )}
                  </button>
                ))}
                <span className="ml-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  ({guide.ratings?.length || 0})
                </span>
              </div>

              {/* Comments with Enhanced Animation */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleComments(guide.href)
                }}
                className="flex items-center gap-1 text-gray-400 transition-all duration-300 hover:text-gray-300 hover:scale-105"
              >
                <ChatBubbleLeftIcon className="h-5 w-5" />
                <span className="text-sm">
                  {guide.comments?.length || 0}
                </span>
              </button>
            </div>

            {/* Share Button with Enhanced Animation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                shareGuide(guide)
              }}
              className="transform transition-all duration-300 hover:scale-110 hover:text-gray-300"
              title="Share guide"
            >
              <ShareIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Comments Section with Animation */}
          {showComments[guide.href] && (
            <div className="mt-4 space-y-4 animate-fadeIn">
              {/* Add Comment with Enhanced Animation */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newComment[guide.href] || ''}
                  onChange={(e) => setNewComment(current => ({
                    ...current,
                    [guide.href]: e.target.value
                  }))}
                  placeholder="Add a comment..."
                  className="flex-1 rounded-lg border-0 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 transition-all duration-300 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addComment(guide.href)
                  }}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Post
                </button>
              </div>

              {/* Comments List with Animation */}
              <div className="space-y-3">
                {guide.comments?.map((comment) => (
                  <div
                    key={comment.id}
                    className="rounded-lg bg-gray-700 p-3 transition-all duration-300 hover:bg-gray-600"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-blue-400">
                        {comment.userName}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">
                      {highlightText(comment.content)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Guides with Animation */}
          {relatedGuides.length > 0 && (
            <div className="mt-6 border-t border-gray-700 pt-4">
              <h4 className="mb-3 text-sm font-medium text-gray-400">Related Guides</h4>
              <div className="space-y-2">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.href}
                    href={relatedGuide.href}
                    className="flex items-center gap-2 rounded-lg p-2 text-sm transition-all duration-300 hover:bg-gray-700/50 hover:text-blue-400"
                  >
                    <ChevronDoubleRightIcon className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-300">{relatedGuide.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href={guide.href}
                onClick={(e) => {
                  e.stopPropagation()
                  trackGuideView(guide.href)
                }}
                className="inline-flex items-center text-blue-400 transition-all duration-300 hover:text-blue-300 hover:scale-105"
              >
                Read Guide
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
              <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                Updated <FormattedDate dateString={guide.lastUpdated} />
              </span>
            </div>
            <div className="flex items-center gap-2">
              {showViews && (
                <div className="flex items-center text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  <EyeIcon className="mr-1 h-4 w-4" />
                  {guide.views?.toLocaleString() || 0} views
                </div>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleSaveForLater(guide.href)
                }}
                className={`rounded-full p-1.5 transition-all duration-300 hover:scale-110 ${
                  userState.saved ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-400 hover:text-gray-300'
                }`}
                title={userState.saved ? 'Remove from saved' : 'Save for later'}
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleCompletion(guide.href)
                }}
                className={`rounded-full p-1.5 transition-all duration-300 hover:scale-110 ${
                  userState.completed ? 'text-green-400 hover:text-green-300' : 'text-gray-400 hover:text-gray-300'
                }`}
                title={userState.completed ? 'Mark as incomplete' : 'Mark as completed'}
              >
                <CheckCircleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Update section counts
  useEffect(() => {
    setSections(current => current.map(section => ({
      ...section,
      count: section.id === 'saved' ? savedGuides.length :
             section.id === 'inProgress' ? inProgressGuides.length :
             section.id === 'popular' ? mostPopularGuides.length :
             section.id === 'recent' ? recentlyViewedGuides.length :
             filteredGuides.length
    })))
  }, [savedGuides.length, inProgressGuides.length, mostPopularGuides.length, recentlyViewedGuides.length, filteredGuides.length])

  // Toggle section collapse
  const toggleSection = (sectionId: string) => {
    setSections(current => current.map(section => 
      section.id === sectionId 
        ? { ...section, collapsed: !section.collapsed }
        : section
    ))
  }

  // Highlight text in guide content
  const highlightText = (text: string) => {
    return text
  }

  // Share guide
  const shareGuide = async (guide: GuideWithSocial) => {
    try {
      await navigator.share({
        title: guide.title,
        text: guide.description,
        url: window.location.origin + guide.href
      })
    } catch (err) {
      // Fallback for browsers that don't support Web Share API
      const url = window.location.origin + guide.href
      await navigator.clipboard.writeText(url)
      alert('Guide URL copied to clipboard!')
    }
  }

  // Rate guide
  const rateGuide = (guideHref: string, rating: number) => {
    setUserRatings(current => ({
      ...current,
      [guideHref]: rating
    }))
  }

  // Add comment
  const addComment = (guideHref: string) => {
    if (!newComment[guideHref]?.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      userId: 'current-user', // Replace with actual user ID
      userName: 'Current User', // Replace with actual username
      content: newComment[guideHref],
      timestamp: new Date().toISOString(),
      likes: 0
    }

    setGuides(currentGuides => 
      currentGuides.map(guide => 
        guide.href === guideHref
          ? {
              ...guide,
              comments: [...(guide.comments || []), comment]
            }
          : guide
      )
    )

    setNewComment(current => ({
      ...current,
      [guideHref]: ''
    }))
  }

  // Toggle comments
  const toggleComments = (guideHref: string) => {
    setShowComments(current => ({
      ...current,
      [guideHref]: !current[guideHref]
    }))
  }

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = containerRef.current
        setShowBackToTop(scrollTop > 300)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle scroll for progress and mini-map
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
        setScrollProgress(progress)
        setMiniMapPosition(progress)

        // Update active section
        const sections = Object.entries(sectionsRef.current)
        for (const [id, element] of sections) {
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100) {
              setActiveSection(id)
            }
          }
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!containerRef.current) return

      switch (e.key) {
        case 'Home':
          e.preventDefault()
          scrollToTop()
          break
        case 'End':
          e.preventDefault()
          scrollToBottom()
          break
        case 'ArrowUp':
          e.preventDefault()
          scrollBy(-100)
          break
        case 'ArrowDown':
          e.preventDefault()
          scrollBy(100)
          break
        case 'm':
          if (e.ctrlKey) {
            e.preventDefault()
            setShowMiniMap(!showMiniMap)
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showMiniMap])

  // Scroll helpers
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  const scrollBy = (amount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: amount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="space-y-2 px-4">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="flex items-center text-gray-400 hover:text-gray-300">
            <HomeIcon className="mr-1 h-4 w-4" />
            Home
          </Link>
          <ChevronRightIcon className="h-4 w-4 text-gray-500" />
          <span className="text-gray-300">Guides</span>
          {selectedCategory !== 'all' && (
            <>
              <ChevronRightIcon className="h-4 w-4 text-gray-500" />
              <span className="text-gray-300">{CATEGORIES[selectedCategory]}</span>
            </>
          )}
        </div>

        {/* Recently Viewed in Breadcrumbs */}
        {getRecentlyViewedGuides().length > 0 && (
          <div className="flex items-center space-x-2 text-sm">
            <ClockIcon className="h-4 w-4 text-gray-500" />
            <span className="text-gray-400">Recently viewed:</span>
            {getRecentlyViewedGuides().map((guide, index) => (
              <div key={guide.href} className="flex items-center">
                <Link
                  href={guide.href}
                  className="text-blue-400 hover:text-blue-300"
                >
                  {guide.title}
                </Link>
                {index < getRecentlyViewedGuides().length - 1 && (
                  <ChevronRightIcon className="mx-2 h-4 w-4 text-gray-500" />
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Panel */}
      <div 
        className={`fixed left-4 top-28 z-40 h-[calc(100vh-8rem)] w-72 transform transition-all duration-300 ${
          showCategories 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full opacity-0'
        }`}
      >
        <div className="h-full overflow-hidden rounded-lg shadow-xl">
          {showCategories ? (
            <CategoryPanel
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              guides={guides}
            />
          ) : (
            <NavigationPanel />
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowCategories(!showCategories)}
        className="fixed left-4 top-20 z-50 flex items-center gap-2 rounded-lg bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:text-white"
      >
        {showCategories ? (
          <>
            <Squares2X2Icon className="h-4 w-4" />
            Hide Categories
          </>
        ) : (
          <>
            <ListBulletIcon className="h-4 w-4" />
            Show Categories
          </>
        )}
      </button>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header Section */}
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-white">Featured Guides</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="category-filter" className="text-sm text-gray-400">
                Filter by:
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
                className="rounded-lg border-0 bg-gray-700 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {Object.entries(CATEGORIES).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {initialGuides.map((guide) => (
            <GuideCard key={guide.href} guide={guide} />
          ))}
          {showMore && additionalGuides.map((guide) => (
            <GuideCard key={guide.href} guide={guide} />
          ))}
        </div>

        {/* Show More Button */}
        {additionalGuides.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-600"
            >
              {showMore ? (
                <>
                  Show Less
                  <ChevronUpIcon className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDownIcon className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 