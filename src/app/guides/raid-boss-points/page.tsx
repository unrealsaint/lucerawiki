import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function RaidBossPointsGuide() {
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
            <h1>Raid Boss Points Guide</h1>
            <p className="lead">
              Learn how to configure and manage Raid Boss Points (RP) in your server.
            </p>

            <h2>Database Configuration</h2>
            <p>
              Raid Boss Points are stored in the characters database table:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`characters.sql
Field: raidBossPoints
Maximum value: 2147483647`}
              </pre>
            </div>

            <h2>Raid Boss Configuration</h2>
            <p>
              Configure RP rewards for raid bosses in their NPC configuration files:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`data/npc/raid_boss.xml
<npc id="25202" name="Krokian Padisha Sobekk" title="Raid Boss">
  <!-- Other configuration parameters -->
  <set name="rewardRp" value="3112"/>
  <set name="rewardCrp" value="1111"/>
</npc>`}
              </pre>
            </div>

            <h2>Points Distribution</h2>
            <p>
              When multiple players participate in killing a raid boss, the RP are distributed among them.
              The distribution is based on damage dealt and party participation.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`Example: Raid Boss with 25244 RP
Party of 2 players:
- Player 1: 1169 RP
- Player 2: 1314 RP
Total: 2483 RP`}
              </pre>
            </div>

            <h2>Raid Points Item</h2>
            <p>
              Raid Points can be traded using item ID -500. Here's how to configure trades:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Exchange Raid Points for items -->
<item>
  <ingredient id="-500" count="127"/>
  <production id="354" count="1"/>
</item>

<!-- Exchange items for Raid Points -->
<item>
  <ingredient id="4037" count="1"/>
  <production id="-500" count="1"/>
</item>`}
              </pre>
            </div>

            <h2>Admin Commands</h2>
            <p>
              Use these commands to manage Raid Boss Points:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`//set_raidpoints <target> <count>
Sets a specific value of RP for the target player.
Example: //set_raidpoints PlayerName 1000

//add_raidpoints <target> <count>
Adds the specified amount of RP to the target player's current total.
Example: //add_raidpoints PlayerName 100`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance RP rewards based on raid boss difficulty</li>
                <li>Consider party size when setting RP values</li>
                <li>Test RP distribution with different party compositions</li>
                <li>Monitor RP economy and adjust rewards if needed</li>
                <li>Document custom RP exchange rates</li>
                <li>Back up character data before using admin commands</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The total RP value cannot exceed 2147483647. When using admin commands,
                make sure to stay within this limit to avoid data corruption.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 