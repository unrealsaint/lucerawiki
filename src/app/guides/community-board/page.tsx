import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CommunityBoardGuide() {
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
            <h1>Community Board Guide</h1>
            <p className="lead">
              Learn how to work with both standard and custom Community Boards in your Lucera 2 server.
            </p>

            <h2>Types of Community Boards</h2>
            <p>
              There are two main types of Community Boards that you can work with:
            </p>
            <ol className="list-decimal list-inside text-gray-400">
              <li>Official Community Board</li>
              <li>Custom Community Board (with buffer/shop/etc.)</li>
            </ol>

            <h2>Basic Configuration</h2>
            <p>
              To enable and configure the Community Board, you need to modify the following settings:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Enable Community Board
AllowCommunityBoard = True

# Default bypass for standard Community Board
BBSDefault = _bbshome

# Default bypass for custom Community Board
BBSDefault = _bbspage:index`}
              </pre>
            </div>

            <h2>File Locations</h2>
            <p>
              The Community Board files are located in different directories depending on the type:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside text-gray-400">
                <li>Standard Community Board: <code>gameserver/data/html/scripts/services/community/</code></li>
                <li>Custom Community Board: <code>gameserver/data/html/scripts/services/community/pages/</code></li>
              </ul>
            </div>

            <h2>Adding Multisells to Custom Community Board</h2>
            <p>
              To add multisells to your custom Community Board:
            </p>
            <ol className="list-decimal list-inside text-gray-400">
              <li>Place multisell files in <code>gameserver/data/multisell/pvp/</code></li>
              <li>Name multisell files with a minus sign prefix (e.g., <code>-12000.xml</code>)</li>
              <li>Use the following bypass format in your HTML:
                <div className="bg-gray-800 p-4 rounded-lg my-4">
                  <pre className="text-sm">
{`action="bypass _bbsmultisell:-12000;_bbspage:shop"`}
                  </pre>
                </div>
              </li>
            </ol>

            <h2>Converting NPC Services to Community Board</h2>
            <p>
              To move services from NPCs to the Community Board, you need to modify the bypass format:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Original NPC bypass
action="bypass -h scripts_services.NickColor:list"

# Community Board bypass
action="bypass _bbsscripts_services.NickColor:list;_bbspage:services"`}
              </pre>
            </div>

            <h2>Variable Replacements</h2>
            <p>
              The Community Board supports various variable replacements for dynamic content:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2">Variable</th>
                    <th className="text-left p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">%char_name%</td>
                    <td className="p-2">Player name</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_level%</td>
                    <td className="p-2">Player level</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_exp_percent%</td>
                    <td className="p-2">Experience percentage</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_sp%</td>
                    <td className="p-2">SP points</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_pk%</td>
                    <td className="p-2">PK count</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_pvp%</td>
                    <td className="p-2">PvP count</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_karma%</td>
                    <td className="p-2">Karma value</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_clan%</td>
                    <td className="p-2">Clan name</td>
                  </tr>
                  <tr>
                    <td className="p-2">%char_ally%</td>
                    <td className="p-2">Alliance name</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Keep your Community Board organized with clear navigation</li>
                <li>Use appropriate bypass formats for different types of services</li>
                <li>Test all features thoroughly after implementation</li>
                <li>Backup your original files before making changes</li>
                <li>Use variable replacements for dynamic content</li>
                <li>Ensure proper file permissions for all Community Board files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Community Board is a powerful tool for providing services to players. Make sure to
                implement proper security measures and test all features thoroughly before making them available
                to players.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 