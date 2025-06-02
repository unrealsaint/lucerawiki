import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function OlympiadArenasClassicGuide() {
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
            <h1>New Olympiad Arenas Guide (Classic)</h1>
            <p className="lead">
              Learn how to enable and configure new Olympiad arenas for Classic servers.
            </p>

            <h2>Overview</h2>
            <p>
              This guide explains how to enable new Olympiad arenas in Classic servers, providing additional battle locations for Olympiad competitions.
            </p>

            <h2>Configuration Steps</h2>
            <p>
              Follow these steps to enable new Olympiad arenas:
            </p>

            <h3>1. Enable in Configuration</h3>
            <p>
              Modify the Olympiad properties file:
            </p>
            <ul>
              <li>Location: <code>gameserver/config/olympiad.properties</code></li>
              <li>Change: <code>OlympiadNewStadiums = True</code></li>
            </ul>

            <h3>2. Update Game Files</h3>
            <p>
              Replace the following file:
            </p>
            <ul>
              <li>Location: <code>Fafurion/Maps/17_10_Classic.unr</code></li>
            </ul>

            <h3>3. Update Geodata</h3>
            <p>
              Replace the geodata file:
            </p>
            <ul>
              <li>Location: <code>gameserver/geodata/17_10.l2g</code></li>
            </ul>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Make sure to use the correct version of files for your server type</li>
                <li>Both the map file and geodata file must be updated together</li>
                <li>Incorrect file versions may cause players to fall through the ground</li>
                <li>Backup your original files before making any changes</li>
              </ul>
            </div>

            <h2>File Requirements</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">File</th>
                    <th className="px-4 py-2 text-left">Size</th>
                    <th className="px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">17_10_Classic.unr</td>
                    <td className="px-4 py-2">6.4 MB</td>
                    <td className="px-4 py-2">Map file for new arenas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">17_10.l2g</td>
                    <td className="px-4 py-2">1.5 MB</td>
                    <td className="px-4 py-2">Geodata file for collision detection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test the new arenas on a test server first</li>
                <li>Verify that players can properly move and fight in the new arenas</li>
                <li>Check for any collision or pathfinding issues</li>
                <li>Monitor server performance with the new arenas</li>
                <li>Keep backups of both original and new files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The new Olympiad arenas provide additional battle locations for competitions.
                Make sure to test thoroughly before implementing on a live server to avoid any issues with player movement or combat.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 