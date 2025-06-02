import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SpawnNPCGuide() {
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
            <h1>Spawning NPCs and Mobs Guide</h1>
            <p className="lead">
              Learn how to create and manage NPC and mob spawns in your Lucera 2 server.
            </p>

            <h2>Location Data</h2>
            <p>
              All NPC location data is stored in XML format in:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/spawn`}
              </pre>
            </div>

            <h2>Creating a New Spawn File</h2>
            <p>
              To create a new spawn file:
            </p>
            <ol>
              <li>Create a new file in the spawn directory (e.g., 96_96.xml)</li>
              <li>Add the basic XML structure:</li>
            </ol>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE list SYSTEM "spawn.dtd">
<list>
</list>`}
              </pre>
            </div>

            <h2>Admin Commands for Spawning</h2>
            <p>
              Administrators have access to the following spawn commands:
            </p>

            <h3>Single Spawn Command</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`//spawn_pos npc_id`}
              </pre>
            </div>
            <p>
              This command generates a single spawn point. Best used for:
            </p>
            <ul>
              <li>Teleporters</li>
              <li>Shops</li>
              <li>Other static NPCs</li>
            </ul>

            <h3>Area Spawn Command</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`//spawn_loc 300 40010`}
              </pre>
            </div>
            <p>
              This command creates a square area spawn. Best used for:
            </p>
            <ul>
              <li>Quickly populating locations</li>
              <li>Creating mob spawn areas</li>
              <li>Multiple NPC spawns in one area</li>
            </ul>

            <h2>Spawn Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">Parameter</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">npc id</td>
                    <td className="p-2">The ID of the NPC to spawn</td>
                  </tr>
                  <tr>
                    <td className="p-2">count</td>
                    <td className="p-2">Number of NPCs to spawn in the area</td>
                  </tr>
                  <tr>
                    <td className="p-2">respawn</td>
                    <td className="p-2">Respawn time in seconds after death</td>
                  </tr>
                  <tr>
                    <td className="p-2">name</td>
                    <td className="p-2">Custom name for the spawn (optional)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Example Spawn Configurations</h2>

            <h3>Single NPC Spawn</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[custom_spawn]">
  <npc id="40010" count="1" respawn="60" pos="82520 149192 -3472 57343" />
</spawn>`}
              </pre>
            </div>

            <h3>Area Spawn with Multiple NPCs</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[custom_spawn]">
  <mesh>
    <vertex x="82306" y="149106" minz="-3472" maxz="-3344" />
    <vertex x="82606" y="149106" minz="-3472" maxz="-3344" />
    <vertex x="82606" y="149406" minz="-3472" maxz="-3344" />
    <vertex x="82306" y="149406" minz="-3472" maxz="-3344" />
  </mesh>
  <npc id="40010" count="1" respawn="60" />
  <npc id="40011" count="1" respawn="60" />
  <npc id="40012" count="1" respawn="60" />
</spawn>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use descriptive names for spawns to easily identify them</li>
                <li>Balance respawn times based on NPC type and server population</li>
                <li>Test spawns in a controlled environment first</li>
                <li>Keep backup copies of your spawn configurations</li>
                <li>Document custom spawn locations for future reference</li>
                <li>Consider server performance when creating large spawn areas</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Proper spawn configuration is crucial for server performance and player experience.
                Make sure to test spawns thoroughly and monitor server resources.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 