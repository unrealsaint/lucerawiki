import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SiegeScheduleGuide() {
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
            <h1>Siege Schedule Guide</h1>
            <p className="lead">
              Learn how to configure siege launch times and subsequent siege start cycles for your server.
            </p>

            <h2>Initial Setup</h2>
            <p>
              To set the initial siege date and time, you can use the admin panel:
            </p>
            <ol>
              <li>Access the admin panel</li>
              <li>Navigate to the "Residences" tab</li>
              <li>Set the desired date and time for the first siege</li>
            </ol>

            <h2>Automatic Schedule Configuration</h2>
            <p>
              For automatic siege scheduling, you need to modify the castle configuration files located in:
            </p>
            <ul>
              <li><code>gameserver/data/events/siege/</code></li>
            </ul>

            <h2>Schedule Parameters</h2>
            <p>
              The siege schedule is configured using the following format:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<parameter name="siege_schedule" value="0 16 +14:* * 7|0 20 +14:* * 7" />`}
              </pre>
            </div>

            <h3>Parameter Breakdown</h3>
            <p>
              Each part of the schedule represents:
            </p>
            <ul>
              <li><code>0 16</code> - Time (16:00)</li>
              <li><code>+14</code> - Days until next siege (14 days = 2 weeks)</li>
              <li><code>:* * 7</code> - Day of the week (7 = Sunday)</li>
            </ul>

            <h2>Multiple Wave Configuration</h2>
            <p>
              The schedule can include multiple waves, separated by the | character:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- First wave at 16:00 -->
0 16 +14:* * 7
<!-- Second wave at 20:00 -->
|0 20 +14:* * 7`}
              </pre>
            </div>

            <h2>Daily Siege Configuration</h2>
            <p>
              To set up daily sieges, modify the following parameters:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Single wave daily siege -->
<parameter name="siege_schedule" value="0 16 +1:* * *" />

<!-- Two waves daily siege -->
<parameter name="siege_schedule" value="0 16 +1:* * *|0 20 +1:* * *" />

<!-- Registration delay (in seconds) -->
<parameter name="next_siege_date_set_delay" value="60" />

<!-- Registration window -->
<on time="-1800">
    <stop name="registration" />
</on>`}
              </pre>
            </div>

            <h2>Disabling Sieges</h2>
            <p>
              To disable sieges for a specific castle:
            </p>
            <ol>
              <li>Remove the siege registration NPCs from <code>data/spawn</code></li>
              <li>This prevents clans from registering for the siege</li>
            </ol>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test schedule changes on a test server first</li>
                <li>Consider server timezone when setting times</li>
                <li>Balance siege frequency with server population</li>
                <li>Document all schedule changes</li>
                <li>Monitor server performance during sieges</li>
                <li>Backup configuration files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The siege schedule system allows for flexible configuration of siege times and cycles.
                Consider your server's needs and player base when setting up the schedule.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 