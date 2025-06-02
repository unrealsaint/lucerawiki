import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function EpicRaidDeadGuide() {
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
            <h1>Epic and Raid Boss Dead Status Guide</h1>
            <p className="lead">
              Learn how to set Epic and Raid Bosses as dead for server start.
            </p>

            <h2>Database Tables</h2>
            <p>
              There are two main tables that control boss respawn status:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`raidboss_status - For standard raids (Queen Ant, Zaken, Orfen, Core, etc.)
epic_boss_spawn - For grand bosses (Baium, Antharas, Valakas, etc.)`}
              </pre>
            </div>

            <h2>Setting Standard Raid Bosses Dead</h2>
            <p>
              To set a standard raid boss as dead, use the raidboss_status table:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`INSERT INTO \`raidboss_status\` (\`id\`, \`current_hp\`, \`current_mp\`, \`respawn_delay\`)
VALUES (29001, 0, 0, 1544566860);`}
              </pre>
            </div>
            <p>
              Where:
            </p>
            <ul>
              <li>id: The raid boss ID (e.g., 29001 for Queen Ant)</li>
              <li>current_hp: Set to 0 for dead status</li>
              <li>current_mp: Set to 0 for dead status</li>
              <li>respawn_delay: Unix timestamp for respawn time</li>
            </ul>

            <h2>Setting Epic Bosses Dead</h2>
            <p>
              To set an epic boss as dead, use the epic_boss_spawn table:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`UPDATE epic_boss_spawn
SET respawnDate = UNIX_TIMESTAMP('2025-01-01 21:00:00'),
    state = 3
WHERE bossId = 29020;`}
              </pre>
            </div>
            <p>
              Where:
            </p>
            <ul>
              <li>respawnDate: Unix timestamp for respawn time</li>
              <li>state: Set to 3 for dead status</li>
              <li>bossId: The epic boss ID (e.g., 29020 for Baium)</li>
            </ul>

            <h2>Bulk Operations</h2>
            <p>
              To set all bosses as alive:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`UPDATE epic_boss_spawn SET respawnDate=0, state=0;
UPDATE raidboss_status SET current_hp = 0, current_mp = 0, respawn_delay = 0;`}
              </pre>
            </div>

            <p>
              To set all bosses as dead with specific respawn times:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`INSERT INTO \`epic_boss_spawn\` (\`bossId\`, \`respawnDate\`, \`state\`, \`boss_name\`)
VALUES
  (29020, UNIX_TIMESTAMP('2025-01-01 21:00:00'), 3, 'Baium'),
  (29068, UNIX_TIMESTAMP('2025-01-03 21:00:00'), 3, 'Antharas'),
  (29045, UNIX_TIMESTAMP('2025-01-05 17:30:00'), 3, 'Frintezza'),
  (29028, UNIX_TIMESTAMP('2025-01-05 20:30:00'), 3, 'Valakas')
ON DUPLICATE KEY UPDATE
  \`respawnDate\` = VALUES(\`respawnDate\`),
  \`state\` = VALUES(\`state\`);

INSERT INTO raidboss_status (id, current_hp, current_mp, respawn_delay)
VALUES
  (29006, 0, 0, UNIX_TIMESTAMP('2025-01-06 19:30:00')), -- Core
  (29001, 0, 0, UNIX_TIMESTAMP('2025-01-06 21:00:00')), -- Queen Ant
  (29022, 0, 0, UNIX_TIMESTAMP('2025-01-07 21:00:00')), -- Zaken
  (29014, 0, 0, UNIX_TIMESTAMP('2025-01-01 19:30:00'))  -- Orfen
ON DUPLICATE KEY UPDATE
  current_hp = VALUES(current_hp),
  current_mp = VALUES(current_mp),
  respawn_delay = VALUES(respawn_delay);`}
              </pre>
            </div>

            <h2>Unix Timestamp Conversion</h2>
            <p>
              You can convert dates to Unix timestamps using these online tools:
            </p>
            <ul>
              <li><a href="https://www.cy-pr.com/tools/time/" className="text-blue-400 hover:text-blue-300">cy-pr.com/tools/time</a></li>
              <li><a href="https://www.epochconverter.com/" className="text-blue-400 hover:text-blue-300">epochconverter.com</a></li>
            </ul>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always perform these operations when the server is offline</li>
                <li>Back up your database before making changes</li>
                <li>Use consistent respawn times for better player experience</li>
                <li>Document your respawn schedule</li>
                <li>Test the changes on a test server first</li>
                <li>Monitor boss spawns after server start</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to use the correct boss IDs and verify the timestamps
                before applying changes to your production server.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 