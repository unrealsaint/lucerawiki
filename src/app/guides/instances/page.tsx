import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function InstancesGuide() {
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
            <h1>Instances Guide</h1>
            <p className="lead">
              Learn how to create and configure instances like Kamaloka and other custom instances in your server.
            </p>

            <h2>Overview</h2>
            <p>
              Instances are private zones where players can enter with their party to complete specific challenges. Each instance can have its own rules, mobs, rewards, and mechanics.
            </p>

            <h2>Instance Configuration</h2>
            <p>
              Create an XML file in <code>gameserver/data/instances/</code> with the following structure:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!DOCTYPE list SYSTEM "instances.dtd">
<list>
    <instance id="72" name="Kamaloka, Hall of the Abyss" maxChannels="10" collapseIfEmpty="5" timelimit="30" dispelBuffs="true">
        <collapse on-party-dismiss="true" timer="60"/>
        <level min="70" max="80"/>
        <party min="2" max="6"/>
        <return loc="43928 -49144 -792"/>
        <teleport loc="180056 -88968 -7216"/>
        <geodata map="25_15"/>
        <remove itemId="0" count="0" necessary="false"/>
        <give itemId="0" count="0"/>
        <quest id="0"/>
        <reuse resetReuse="30 6 * * *" setUponEntry="true" sharedReuseGroup="1"/>
        <spawns>
            <spawn mobId="25657" type="point" respawn="0">
                <coords loc="180375 -88984 -7216"/>
            </spawn>
        </spawns>
        <doors>
            <door id="25150001" opened="false"/>
        </doors>
    </instance>
</list>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside">
                <li><code>id</code> - Unique instance identifier</li>
                <li><code>name</code> - Instance name</li>
                <li><code>maxChannels</code> - Maximum number of instance replicas</li>
                <li><code>collapseIfEmpty</code> - Time before auto-closing empty instances</li>
                <li><code>timelimit</code> - Instance lifetime in minutes</li>
                <li><code>dispelBuffs</code> - Whether to remove buffs on entry</li>
                <li><code>level min/max</code> - Level requirements</li>
                <li><code>party min/max</code> - Party size requirements</li>
                <li><code>return loc</code> - Return coordinates after completion</li>
                <li><code>teleport loc</code> - Entry coordinates</li>
                <li><code>geodata map</code> - Required for doors</li>
                <li><code>remove itemId</code> - Required item for entry</li>
                <li><code>give itemId</code> - Item given on entry</li>
                <li><code>quest id</code> - Required quest for entry</li>
                <li><code>reuse resetReuse</code> - Instance reuse timer (Cron format)</li>
              </ul>
            </div>

            <h2>Instance Manager NPC</h2>
            <p>
              Create an NPC with type <code>EventReflectionManager</code> to manage instance entry:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="40031" name="Pathfinder Worker" title="Dimensional Manager">
    <set name="type" value="EventReflectionManager" />
    <set name="ai_type" value="CharacterAI" />
    <set name="level" value="70" />
    <!-- Additional NPC settings -->
</npc>`}
              </pre>
            </div>

            <h2>Instance Mobs and Doors</h2>
            <p>
              For mobs that should interact with instance mechanics (like opening doors), use type <code>EventReflectionMob</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="25657" name="Instance Mob">
    <set name="type" value="EventReflectionMob" />
    <!-- Additional mob settings -->
</npc>`}
              </pre>
            </div>

            <h2>Advanced Features</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>HWID/IP Limits: Add <code>&lt;add_parameters&gt;&lt;param name="hwidLimit" value="true"/&gt;&lt;/add_parameters&gt;</code></li>
                <li>Custom Zones: Add <code>&lt;zones&gt;&lt;zone name="[zone_name]" active="true"/&gt;&lt;/zones&gt;</code></li>
                <li>Party Dismiss: Configure <code>on-party-dismiss</code> behavior</li>
                <li>Shared Reuse: Use <code>sharedReuseGroup</code> for related instances</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test instances thoroughly before deployment</li>
                <li>Configure appropriate level and party requirements</li>
                <li>Set reasonable time limits and reuse timers</li>
                <li>Use geodata for proper door functionality</li>
                <li>Implement proper return coordinates</li>
                <li>Consider using HWID/IP limits for fairness</li>
                <li>Backup your configuration before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The instance system is highly customizable. You can create various scenarios
                and events by combining different configuration options and custom scripts.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 