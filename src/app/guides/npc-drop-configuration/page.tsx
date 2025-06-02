import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function NpcDropConfigurationGuide() {
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
            <h1>NPC and Drop Configuration Guide</h1>
            <p className="lead">
              Learn how to create new NPCs, configure their drops, and set up soul absorption mechanics.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the NPC XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/npc`}
              </pre>
            </div>

            <h2>Basic NPC Configuration</h2>
            <p>
              The NPC configuration includes several key components:
            </p>

            <h3>1. Basic Parameters</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="25110" name="Custom NPC">
    <set name="ai_type" val="mob"/> <!-- CharacterAI, Priest, etc. -->
    <set name="level" val="75"/>
    <set name="pAtk" val="1000"/>
    <set name="mAtk" val="1000"/>
    <set name="pDef" val="1000"/>
    <set name="mDef" val="1000"/>
    <set name="hp" val="10000"/>
    <set name="mp" val="1000"/>
    <set name="exp" val="1000"/>
    <set name="sp" val="100"/>
    <set name="rp" val="100"/>
    <set name="type" val="Monster"/> <!-- NPC, RaidBoss, Monster -->
</npc>`}
              </pre>
            </div>

            <h3>2. Minions Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<minions>
    <minion npc_id="25110" count="1"/> <!-- Cloe's Servitor -->
    <minion npc_id="25111" count="1"/> <!-- Cloe's Servitor -->
</minions>`}
              </pre>
            </div>

            <h3>3. Skills Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skills>
    <skill id="4045" level="1"/> <!-- Resist Full Magic Attack -->
    <skill id="4197" level="7"/> <!-- Hold -->
    <skill id="4494" level="1"/> <!-- Raid Boss -->
    <skill id="4830" level="1"/> <!-- Raid Boss - Level 74 -->
</skills>`}
              </pre>
            </div>

            <h2>Soul Absorption Configuration</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<absorblist>
    <!-- Party member absorption -->
    <absorb chance="5" min_level="11" max_level="12" type="PARTY_ONE"/>
    
    <!-- Last hit absorption -->
    <absorb chance="5" min_level="0" max_level="4" type="LAST_HIT" skill="true"/>
    
    <!-- Random party member absorption -->
    <absorb chance="5" min_level="0" max_level="4" type="PARTY_RANDOM"/>
    
    <!-- All party members absorption -->
    <absorb chance="5" min_level="0" max_level="4" type="PARTY_ALL"/>
</absorblist>`}
              </pre>
            </div>

            <h2>Drop Configuration</h2>
            <p>
              There are four types of drop configurations:
            </p>

            <h3>1. RATED_GROUPED</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<rewardlist type="RATED_GROUPED">
    <group chance="77.473">
        <reward item_id="960" min="1" max="1" chance="60.6544"/>
    </group>
    <group chance="50.0">
        <reward item_id="8176" min="3" max="9" chance="50.0"/>
    </group>
</rewardlist>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Affected by server drop rate multipliers
              </p>
            </div>

            <h3>2. NOT_RATED_GROUPED</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<rewardlist type="NOT_RATED_GROUPED">
    <group chance="77.473">
        <reward item_id="960" min="1" max="1" chance="60.6544"/>
    </group>
    <group chance="50.0">
        <reward item_id="8176" min="3" max="9" chance="50.0"/>
    </group>
</rewardlist>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Not affected by server drop rate multipliers
              </p>
            </div>

            <h3>3. SWEEP</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<rewardlist type="SWEEP">
    <reward item_id="1799" min="1" max="1" chance="37.1205"/>
    <reward item_id="1831" min="1" max="1" chance="66.817"/>
    <reward item_id="1896" min="1" max="1" chance="10.6171"/>
</rewardlist>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Used for spoil drops
              </p>
            </div>

            <h3>4. RATED_NOT_GROUPED</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<rewardlist type="RATED_NOT_GROUPED">
    <reward item_id="8600" min="1" max="1" chance="86.0"/>
    <reward item_id="8601" min="1" max="1" chance="1.0"/>
    <reward item_id="8602" min="1" max="1" chance="1.0"/>
</rewardlist>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Affected by specific rate multipliers:
                - RateAdenaRatedNotGrouped
                - RateStonesRatedNotGrouped
                - RateBossesRatedNotGrouped
                - RateItemsRatedNotGrouped
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance NPC stats and skills carefully</li>
                <li>Test drop rates thoroughly</li>
                <li>Consider server economy when setting drop chances</li>
                <li>Document custom NPC configurations</li>
                <li>Monitor player feedback on drop rates</li>
                <li>Keep backup copies of NPC configuration files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When configuring drops, remember that group chances are calculated independently.
                For example, if you have two groups with 70% chance each, both groups can drop items
                from their respective pools.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 