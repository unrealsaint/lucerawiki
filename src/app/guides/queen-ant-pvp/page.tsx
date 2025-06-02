import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function QueenAntPvPGuide() {
  return (
    <>
      {/* Header */}
      <header className="layout-header">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white"
            >
              <ChevronLeftIcon className="mr-1 h-4 w-4" />
              Back to Knowledge Base
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="layout-content">
        <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <article className="prose prose-invert max-w-none">
            <h1>Queen Ant PvP Server Tuning Guide</h1>
            <p className="lead">
              Learn how to tune Queen Ant and her minions for PvP servers and high-level character farming.
            </p>

            <h2>Epic Zone Configuration</h2>
            <p>
              First, you need to modify the epic zone configuration to remove level restrictions and avoid raid curse:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Default Configuration -->
<zone name="[queen_ant_epic]" type="epic" >
        <set name="playerMinLevel" val="1" />
        <set name="playerMaxLevel" val="48" />
        <set name="playerLevelLimitBackLoc" val="-25464 172424 -4203" />
        <polygon>
            <coords loc="-23176 185080 -6000 -5500" />
            <coords loc="-20104 185080 -6000 -5500" />
            <coords loc="-20104 177928 -6000 -5500" />
            <coords loc="-23176 177928 -6000 -5500" />
        </polygon>
</zone>

<!-- Modified Configuration for PvP -->
<zone name="[queen_ant_epic]" type="epic" >
        <polygon>
            <coords loc="-23176 185080 -6000 -5500" />
            <coords loc="-20104 185080 -6000 -5500" />
            <coords loc="-20104 177928 -6000 -5500" />
            <coords loc="-23176 177928 -6000 -5500" />
        </polygon>
</zone>`}
              </pre>
            </div>

            <h2>NPC Level Configuration</h2>
            <p>
              Next, you need to increase the levels of Queen Ant and her minions to avoid raid curse. Edit the following NPCs in the file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`Path: gameserver/data/npc/29000-29099.xml
NPC IDs to modify:
- 29001 (Queen Ant)
- 29002 (Nurse Ant)
- 29003 (Royal Guard Ant)
- 29004 (Royal Guard Ant)
- 29005 (Royal Guard Ant)`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Remove level restrictions from the epic zone to allow high-level characters to farm</li>
                <li>Increase NPC levels to avoid raid curse effects</li>
                <li>Consider adjusting drop rates for high-level farming</li>
                <li>Test the configuration thoroughly on a test server</li>
                <li>Monitor player feedback and adjust if needed</li>
                <li>Document the changes made to the configuration</li>
                <li>Back up your configuration files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to test the configuration thoroughly on a test server before applying it to your production server.
                The changes will affect the difficulty and rewards of the Queen Ant raid.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 