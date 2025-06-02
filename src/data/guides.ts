// Define guide categories
export const CATEGORIES = {
  'server-setup': 'Server Setup',
  'administration': 'Administration',
  'player-features': 'Player Features',
  'items-equipment': 'Items & Equipment',
  'npc-mobs': 'NPCs & Mobs',
  'raids-events': 'Raids & Events',
  'clan-system': 'Clan System',
  'buffing-support': 'Buffing & Support',
  'skills-combat': 'Skills & Combat',
} as const

export type Category = keyof typeof CATEGORIES

// Define guide status types
export type GuideStatus = 'new' | 'updated' | 'popular' | 'none'

// Define difficulty levels
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced'

// Define guide type with categories
export interface Guide {
  title: string
  description: string
  href: string
  categories: Category[]
  views?: number
  status: GuideStatus
  lastUpdated: string
  difficulty: DifficultyLevel
}

// Define all guides with their categories and metadata
export const GUIDES: Guide[] = [
  // Server Setup & Administration
  {
    title: 'Server Setup Guide',
    description: 'Complete step-by-step guide for setting up your Lucera 2 server from scratch.',
    href: '/guides/server-setup',
    categories: ['server-setup', 'administration'],
    status: 'popular',
    lastUpdated: '2024-03-15',
    difficulty: 'intermediate'
  },
  {
    title: 'DAT Editor Guide',
    description: 'Comprehensive guide for editing DAT, INI, and HTM files for all versions.',
    href: '/guides/dat-editor',
    categories: ['administration'],
    status: 'updated',
    lastUpdated: '2024-03-10',
    difficulty: 'advanced'
  },
  {
    title: 'Admin Rights Guide',
    description: 'Learn how to assign different levels of administrative access to characters.',
    href: '/guides/admin-rights',
    categories: ['administration'],
    status: 'none',
    lastUpdated: '2024-02-28',
    difficulty: 'intermediate'
  },
  {
    title: 'HTML Reload Guide',
    description: 'Learn how to reload HTML files without restarting the server.',
    href: '/guides/html-reload',
    categories: ['administration'],
    status: 'new',
    lastUpdated: '2024-03-20',
    difficulty: 'beginner'
  },
  {
    title: 'GM Commands Guide',
    description: 'Comprehensive list of GM commands for server administration and management.',
    href: '/guides/gm-commands',
    categories: ['administration'],
    status: 'popular',
    lastUpdated: '2024-03-01',
    difficulty: 'intermediate'
  },
  {
    title: 'Moderator Management Guide',
    description: 'Learn how to manage moderators and their permissions on your server.',
    href: '/guides/moderator-management',
    categories: ['administration'],
    status: 'none',
    lastUpdated: '2024-03-05',
    difficulty: 'intermediate'
  },
  {
    title: 'HAProxy Setup Guide',
    description: 'Configure HAProxy for load balancing and DDoS protection.',
    href: '/guides/haproxy-setup',
    categories: ['server-setup'],
    status: 'updated',
    lastUpdated: '2024-03-12',
    difficulty: 'advanced'
  },
  {
    title: 'Zone and Territory Guide',
    description: 'Configure zones and territories for your server.',
    href: '/guides/zone-territory',
    categories: ['server-setup'],
    status: 'none',
    lastUpdated: '2024-03-08',
    difficulty: 'intermediate'
  },
  {
    title: 'Command Line Login Guide',
    description: 'Configure command line login options and security settings.',
    href: '/guides/command-line-login',
    categories: ['server-setup'],
    status: 'none',
    lastUpdated: '2024-03-07',
    difficulty: 'intermediate'
  },
  {
    title: 'Welcome HTML Guide',
    description: 'Customize the welcome screen and initial HTML content.',
    href: '/guides/welcome-html',
    categories: ['administration'],
    status: 'none',
    lastUpdated: '2024-03-06',
    difficulty: 'beginner'
  },

  // Player Features
  {
    title: 'Premium Account Guide',
    description: 'Configure premium account features and benefits.',
    href: '/guides/premium-account',
    categories: ['player-features'],
    status: 'popular',
    lastUpdated: '2024-03-18',
    difficulty: 'intermediate'
  },
  {
    title: 'Prime Shop Guide',
    description: 'Set up and configure the Prime Shop system.',
    href: '/guides/prime-shop',
    categories: ['player-features'],
    status: 'new',
    lastUpdated: '2024-03-22',
    difficulty: 'intermediate'
  },
  {
    title: 'Attendance Event Guide',
    description: 'Configure daily attendance rewards for players.',
    href: '/guides/attendance-event',
    categories: ['player-features'],
    status: 'updated',
    lastUpdated: '2024-03-14',
    difficulty: 'beginner'
  },
  {
    title: 'Promo Code Guide',
    description: 'Set up and manage promotional codes for your server.',
    href: '/guides/promo-code',
    categories: ['player-features'],
    status: 'none',
    lastUpdated: '2024-03-07',
    difficulty: 'intermediate'
  },
  {
    title: 'Character Appearance Guide',
    description: 'Configure character appearance customization options.',
    href: '/guides/character-appearance',
    categories: ['player-features'],
    status: 'none',
    lastUpdated: '2024-03-09',
    difficulty: 'intermediate'
  },
  {
    title: 'Costume System Guide',
    description: 'Set up and configure the costume system.',
    href: '/guides/costume-system',
    categories: ['player-features'],
    status: 'updated',
    lastUpdated: '2024-03-16',
    difficulty: 'intermediate'
  },
  {
    title: 'Teleports Guide',
    description: 'Configure teleport locations and requirements.',
    href: '/guides/teleports',
    categories: ['player-features'],
    status: 'none',
    lastUpdated: '2024-03-11',
    difficulty: 'beginner'
  },
  {
    title: 'Unstuck Coordinates Guide',
    description: 'Set up unstuck system and safe coordinates.',
    href: '/guides/unstuck-coordinates',
    categories: ['player-features'],
    status: 'none',
    lastUpdated: '2024-03-13',
    difficulty: 'beginner'
  },
  {
    title: 'Community Board Guide',
    description: 'Configure community board features and content.',
    href: '/guides/community-board',
    categories: ['player-features'],
    status: 'none',
    lastUpdated: '2024-03-15',
    difficulty: 'intermediate'
  },
  {
    title: 'Chat Filter Guide',
    description: 'Set up chat filtering and moderation rules.',
    href: '/guides/chat-filter',
    categories: ['player-features'],
    status: 'none',
    lastUpdated: '2024-03-17',
    difficulty: 'intermediate'
  },

  // Items & Equipment
  {
    title: 'Items Configuration Guide',
    description: 'Configure items, their properties, and drop rates.',
    href: '/guides/items-configuration',
    categories: ['items-equipment'],
    status: 'popular',
    lastUpdated: '2024-03-16',
    difficulty: 'intermediate'
  },
  {
    title: 'Special Craft Store Guide',
    description: 'Set up special crafting recipes and stores.',
    href: '/guides/special-craft-store',
    categories: ['items-equipment'],
    status: 'updated',
    lastUpdated: '2024-03-11',
    difficulty: 'intermediate'
  },
  {
    title: 'Equipment Enchantment Guide',
    description: 'Configure equipment enchantment rates and effects.',
    href: '/guides/equipment-enchantment',
    categories: ['items-equipment'],
    status: 'popular',
    lastUpdated: '2024-03-19',
    difficulty: 'intermediate'
  },
  {
    title: 'Item Augmentation Guide',
    description: 'Set up and configure item augmentation system.',
    href: '/guides/item-augmentation',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-06',
    difficulty: 'advanced'
  },
  {
    title: 'Armor Appearance Guide',
    description: 'Configure armor appearance and visual effects.',
    href: '/guides/armor-appearance',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-08',
    difficulty: 'intermediate'
  },
  {
    title: 'Extractable Items Guide',
    description: 'Set up and configure item extraction system.',
    href: '/guides/extractable-items',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-10',
    difficulty: 'intermediate'
  },
  {
    title: 'Item Crystallization Guide',
    description: 'Configure item crystallization rates and effects.',
    href: '/guides/item-crystallization',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-12',
    difficulty: 'intermediate'
  },
  {
    title: 'Crystal Grades Guide',
    description: 'Set up crystal grade system and properties.',
    href: '/guides/crystal-grades',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-14',
    difficulty: 'intermediate'
  },
  {
    title: 'Starting Items Guide',
    description: 'Configure starting items for new characters.',
    href: '/guides/starting-items',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-16',
    difficulty: 'beginner'
  },
  {
    title: 'Give Items Guide',
    description: 'Set up item giving system and permissions.',
    href: '/guides/give-items',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-18',
    difficulty: 'intermediate'
  },
  {
    title: 'Multisells Guide',
    description: 'Configure multisell shops and trading.',
    href: '/guides/multisells',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-20',
    difficulty: 'intermediate'
  },
  {
    title: 'Chance Multisell Guide',
    description: 'Set up chance-based multisell system.',
    href: '/guides/chance-multisell',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-22',
    difficulty: 'intermediate'
  },
  {
    title: 'Fitting Room Guide',
    description: 'Configure fitting room system and features.',
    href: '/guides/fitting-room',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-24',
    difficulty: 'beginner'
  },
  {
    title: 'Recipe Configuration Guide',
    description: 'Set up crafting recipes and requirements.',
    href: '/guides/recipe-configuration',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-26',
    difficulty: 'intermediate'
  },
  {
    title: 'Stackable Enchant Scrolls Guide',
    description: 'Configure stackable enchant scrolls system.',
    href: '/guides/stackable-enchant-scrolls',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-28',
    difficulty: 'intermediate'
  },
  {
    title: 'Rune Configuration Guide',
    description: 'Set up rune system and properties.',
    href: '/guides/rune-configuration',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-03-30',
    difficulty: 'intermediate'
  },
  {
    title: 'Henna Tuning Guide',
    description: 'Configure henna system and effects.',
    href: '/guides/henna-tuning',
    categories: ['items-equipment'],
    status: 'none',
    lastUpdated: '2024-04-01',
    difficulty: 'intermediate'
  },

  // Skills & Combat
  {
    title: 'Skills and Effects Guide',
    description: 'Configure skills, their effects, and cooldowns.',
    href: '/guides/skills-effects',
    categories: ['skills-combat'],
    status: 'popular',
    lastUpdated: '2024-03-17',
    difficulty: 'intermediate'
  },
  {
    title: 'Multiprof Guide',
    description: 'Set up multiple profession system for players.',
    href: '/guides/multiprof',
    categories: ['skills-combat'],
    status: 'updated',
    lastUpdated: '2024-03-13',
    difficulty: 'intermediate'
  },
  {
    title: 'Clan Skills Guide',
    description: 'Configure clan skills and their requirements.',
    href: '/guides/clan-skills',
    categories: ['skills-combat', 'clan-system'],
    status: 'none',
    lastUpdated: '2024-03-09',
    difficulty: 'intermediate'
  },
  {
    title: 'Custom Stats Guide',
    description: 'Set up custom character statistics.',
    href: '/guides/custom-stats',
    categories: ['skills-combat'],
    status: 'none',
    lastUpdated: '2024-03-11',
    difficulty: 'advanced'
  },
  {
    title: 'Custom Skill Learning Guide',
    description: 'Configure custom skill learning system.',
    href: '/guides/custom-skill-learning',
    categories: ['skills-combat'],
    status: 'none',
    lastUpdated: '2024-03-13',
    difficulty: 'advanced'
  },
  {
    title: 'Skill Enchantment Guide',
    description: 'Set up skill enchantment system.',
    href: '/guides/skill-enchantment',
    categories: ['skills-combat'],
    status: 'none',
    lastUpdated: '2024-03-15',
    difficulty: 'intermediate'
  },
  {
    title: 'Skill Tree Guide',
    description: 'Configure skill tree and progression.',
    href: '/guides/skill-tree',
    categories: ['skills-combat'],
    status: 'none',
    lastUpdated: '2024-03-17',
    difficulty: 'intermediate'
  },
  {
    title: 'Non-Cancellable Debuffs Guide',
    description: 'Set up non-cancellable debuff system.',
    href: '/guides/non-cancellable-debuffs',
    categories: ['skills-combat'],
    status: 'none',
    lastUpdated: '2024-03-19',
    difficulty: 'intermediate'
  },
  {
    title: 'Resurrection Time Guide',
    description: 'Configure resurrection time and effects.',
    href: '/guides/resurrection-time',
    categories: ['skills-combat'],
    status: 'none',
    lastUpdated: '2024-03-21',
    difficulty: 'intermediate'
  },

  // NPCs & Mobs
  {
    title: 'Player Action Phantoms Guide',
    description: 'Configure player action phantom system.',
    href: '/guides/player-action-phantoms',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-03-23',
    difficulty: 'intermediate'
  },
  {
    title: 'Phantom Configuration Guide',
    description: 'Set up and configure phantom system.',
    href: '/guides/phantom-configuration',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-03-25',
    difficulty: 'intermediate'
  },
  {
    title: 'Spawn NPC Guide',
    description: 'Configure NPC spawning system.',
    href: '/guides/spawn-npc',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-03-27',
    difficulty: 'intermediate'
  },
  {
    title: 'Cron Spawn Guide',
    description: 'Set up cron-based NPC spawning.',
    href: '/guides/cron-spawn',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-03-29',
    difficulty: 'intermediate'
  },
  {
    title: 'Fixed Cron Spawn Guide',
    description: 'Configure fixed cron spawn system.',
    href: '/guides/fixed-cron-spawn',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-03-31',
    difficulty: 'intermediate'
  },
  {
    title: 'NPC Drop Configuration Guide',
    description: 'Set up NPC drop rates and items.',
    href: '/guides/npc-drop-configuration',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-04-02',
    difficulty: 'intermediate'
  },
  {
    title: 'Quick Drop Guide',
    description: 'Configure quick drop system.',
    href: '/guides/quick-drop',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-04-04',
    difficulty: 'intermediate'
  },
  {
    title: 'Remove NPC Drops Guide',
    description: 'Set up NPC drop removal system.',
    href: '/guides/remove-npc-drops',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-04-06',
    difficulty: 'intermediate'
  },
  {
    title: 'Pet Configuration Guide',
    description: 'Configure pet system and features.',
    href: '/guides/pet-configuration',
    categories: ['npc-mobs'],
    status: 'none',
    lastUpdated: '2024-04-08',
    difficulty: 'intermediate'
  },

  // Raids & Events
  {
    title: 'Instances Guide',
    description: 'Configure instance zones and their mechanics.',
    href: '/guides/instances',
    categories: ['raids-events'],
    status: 'popular',
    lastUpdated: '2024-03-21',
    difficulty: 'intermediate'
  },
  {
    title: 'Olympiad Cycles Guide',
    description: 'Set up Olympiad competition cycles and rewards.',
    href: '/guides/olympiad-cycles',
    categories: ['raids-events'],
    status: 'updated',
    lastUpdated: '2024-03-15',
    difficulty: 'intermediate'
  },
  {
    title: 'Olympiad Type Competition Guide',
    description: 'Configure type-based Olympiad competitions.',
    href: '/guides/olympiad-type-competition',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-17',
    difficulty: 'intermediate'
  },
  {
    title: 'Olympiad Arenas Classic Guide',
    description: 'Set up classic Olympiad arenas.',
    href: '/guides/olympiad-arenas-classic',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-19',
    difficulty: 'intermediate'
  },
  {
    title: '3v3 Olympiad Guide',
    description: 'Configure 3v3 Olympiad competitions.',
    href: '/guides/olympiad-3v3',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-21',
    difficulty: 'intermediate'
  },
  {
    title: 'PvP Events Guide',
    description: 'Configure PvP events and their mechanics.',
    href: '/guides/pvp-events',
    categories: ['raids-events'],
    status: 'popular',
    lastUpdated: '2024-03-18',
    difficulty: 'intermediate'
  },
  {
    title: 'PvP Events Locations Guide',
    description: 'Set up PvP event locations and zones.',
    href: '/guides/pvp-events-locations',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-20',
    difficulty: 'intermediate'
  },
  {
    title: 'Restricted Siege Zone Guide',
    description: 'Configure restricted siege zones.',
    href: '/guides/restricted-siege-zone',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-22',
    difficulty: 'intermediate'
  },
  {
    title: 'Castle Skills Guide',
    description: 'Set up castle skills and effects.',
    href: '/guides/castle-skills',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-24',
    difficulty: 'intermediate'
  },
  {
    title: 'Residence Rewards Guide',
    description: 'Configure residence rewards system.',
    href: '/guides/residence-rewards',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-26',
    difficulty: 'intermediate'
  },
  {
    title: 'Siege Schedule Guide',
    description: 'Set up siege schedule and mechanics.',
    href: '/guides/siege-schedule',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-28',
    difficulty: 'intermediate'
  },
  {
    title: 'Service Mob and Raid Guide',
    description: 'Configure service mobs and raid system.',
    href: '/guides/service-mob-raid',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-03-30',
    difficulty: 'intermediate'
  },
  {
    title: 'Raid Boss Points Guide',
    description: 'Set up raid boss points system.',
    href: '/guides/raid-boss-points',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-04-01',
    difficulty: 'intermediate'
  },
  {
    title: 'Epic Raid Dead Status Guide',
    description: 'Configure epic raid boss dead status.',
    href: '/guides/epic-raid-dead',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-04-03',
    difficulty: 'intermediate'
  },
  {
    title: 'Noble Raid Boss Guide',
    description: 'Set up noble raid boss system.',
    href: '/guides/noble-raid-boss',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-04-05',
    difficulty: 'intermediate'
  },
  {
    title: 'Hero Noble Raid Boss Guide',
    description: 'Configure hero and noble raid boss system.',
    href: '/guides/hero-noble-raid-boss',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-04-07',
    difficulty: 'intermediate'
  },
  {
    title: 'Boss Statistics Guide',
    description: 'Set up boss statistics tracking.',
    href: '/guides/boss-statistics',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-04-09',
    difficulty: 'intermediate'
  },
  {
    title: 'Queen Ant PvP Guide',
    description: 'Configure Queen Ant PvP server tuning.',
    href: '/guides/queen-ant-pvp',
    categories: ['raids-events'],
    status: 'none',
    lastUpdated: '2024-04-11',
    difficulty: 'intermediate'
  },

  // Clan System
  {
    title: 'Clan Crest Display Guide',
    description: 'Configure clan crest display system.',
    href: '/guides/clan-crest-display',
    categories: ['clan-system'],
    status: 'none',
    lastUpdated: '2024-04-13',
    difficulty: 'intermediate'
  },
  {
    title: 'Kamaloka Item Reuse Guide',
    description: 'Set up Kamaloka item reuse system.',
    href: '/guides/kamaloka-item-reuse',
    categories: ['clan-system'],
    status: 'none',
    lastUpdated: '2024-04-15',
    difficulty: 'intermediate'
  },

  // Buffing & Support
  {
    title: 'Buffer System Guide',
    description: 'Set up and configure the buffer system.',
    href: '/guides/buffer-system',
    categories: ['buffing-support'],
    status: 'popular',
    lastUpdated: '2024-03-20',
    difficulty: 'beginner'
  },
  {
    title: 'Newbie Buffer Guide',
    description: 'Configure newbie buffer system and rewards.',
    href: '/guides/newbie-buffer',
    categories: ['buffing-support'],
    status: 'none',
    lastUpdated: '2024-03-14',
    difficulty: 'beginner'
  },
  {
    title: 'Buff Book Guide',
    description: 'Set up and configure the buff book system.',
    href: '/guides/buff-book',
    categories: ['buffing-support'],
    status: 'updated',
    lastUpdated: '2024-03-16',
    difficulty: 'intermediate'
  },
  {
    title: 'Buff Return Guide',
    description: 'Configure buff return system.',
    href: '/guides/buff-return',
    categories: ['buffing-support'],
    status: 'none',
    lastUpdated: '2024-03-18',
    difficulty: 'intermediate'
  },
  {
    title: 'Services Augmentation Guide',
    description: 'Set up services augmentation system.',
    href: '/guides/services-augmentation',
    categories: ['buffing-support'],
    status: 'none',
    lastUpdated: '2024-03-20',
    difficulty: 'intermediate'
  }
] 