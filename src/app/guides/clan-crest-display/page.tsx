import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ClanCrestDisplayGuide() {
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
            <h1>Clan Crest Display Guide</h1>
            <p className="lead">
              Learn how to configure the display of clan crests on NPCs in your server.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the clan properties file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/config/clan.properties`}
              </pre>
            </div>

            <h2>NpcClanCrestDisplay Parameter</h2>
            <p>
              The NpcClanCrestDisplay parameter controls how clan crests are displayed on NPCs:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# -1: No crest display
# 0: Display crest of the clan that owns the territory
# clan_id: Display specific clan's crest across all territories
NpcClanCrestDisplay = -1`}
              </pre>
            </div>

            <h2>Configuration Options</h2>
            <div className="space-y-4">
              <div>
                <h3>No Crest Display (-1)</h3>
                <p>
                  When set to -1, no clan crests will be displayed on NPCs. This is the default setting.
                </p>
              </div>

              <div>
                <h3>Territory Owner Crest (0)</h3>
                <p>
                  When set to 0, NPCs will display the crest of the clan that owns their territory.
                  This is useful for castle sieges and territory control features.
                </p>
              </div>

              <div>
                <h3>Specific Clan Crest (clan_id)</h3>
                <p>
                  When set to a specific clan ID, that clan's crest will be displayed on all NPCs
                  across all territories. This is useful for server branding or special events.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg my-4">
                  <pre className="text-sm">
{`# Example: Display crest of clan with ID 268480143
NpcClanCrestDisplay = 268480143`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Back up your clan.properties file before making changes</li>
                <li>Ensure the specified clan exists and has a crest set</li>
                <li>Test the display in different territories</li>
                <li>Consider server performance when using territory-based display</li>
                <li>Document any custom clan ID configurations</li>
                <li>Monitor player feedback on crest display changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The clan ID must be valid and the clan must have a crest set for the display
                to work properly. If the specified clan doesn't exist or has no crest, no crest
                will be displayed.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 