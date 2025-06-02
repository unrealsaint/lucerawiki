import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CronSpawnGuide() {
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
            <h1>Non-Fixed Spawn with Time Reference (Cron Tab) Guide</h1>
            <p className="lead">
              Learn how to configure non-fixed spawns with time-based references using Cron Tab format.
            </p>

            <h2>Grand Boss Configuration</h2>
            <p>
              For Grand Bosses, configure the respawn pattern in:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/config/bosses.properties`}
              </pre>
            </div>

            <h2>Cron Tab Format</h2>
            <p>
              The format for non-fixed spawns uses Cron Tab syntax with additional parameters:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`~[spread]:[minute] [hour] [day] [month] [day_of_week]`}
              </pre>
            </div>

            <h2>Example Configurations</h2>

            <h3>Fixed Day of Week</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`ValakasRespawnTimePattern = ~180:0 20 5 * *`}
              </pre>
            </div>
            <p>
              This example means:
            </p>
            <ul>
              <li>~180: Random spread of 0 to 180 minutes</li>
              <li>0: At minute 0</li>
              <li>20: At 20:00 (8 PM)</li>
              <li>5: On Friday (5)</li>
              <li>* *: Every month, every year</li>
            </ul>

            <h3>Days After Kill</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`ValakasRespawnTimePattern = ~180:0 20 +5:* * *`}
              </pre>
            </div>
            <p>
              This example means:
            </p>
            <ul>
              <li>~180: Random spread of 0 to 180 minutes</li>
              <li>0: At minute 0</li>
              <li>20: At 20:00 (8 PM)</li>
              <li>+5: 5 days after kill</li>
              <li>* * *: Every month, every year</li>
            </ul>

            <h2>Regular Spawn Configuration</h2>
            <p>
              For regular spawns in data/spawn directory (Zaken, Orfen, AQ, Core, etc.):
            </p>

            <h3>Basic Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[queenant_room]">
  <npc id="29001" count="1" respawn="129600" respawn_rand="61200" pos="-21610 181594 -5720 0" />
</spawn>`}
              </pre>
            </div>

            <h3>Cron Tab Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[queenant_room]">
  <npc id="29001" count="1" respawn_cron="~120:0 20 +1:* * *" pos="-21610 181594 -5720 0" />
</spawn>`}
              </pre>
            </div>
            <p>
              This example means:
            </p>
            <ul>
              <li>~120: Random spread of 0 to 120 minutes</li>
              <li>0: At minute 0</li>
              <li>20: At 20:00 (8 PM)</li>
              <li>+1: 1 day after kill</li>
              <li>* * *: Every month, every year</li>
            </ul>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use appropriate time spreads based on boss type and server population</li>
                <li>Consider server timezone when setting spawn times</li>
                <li>Test spawn patterns in a controlled environment first</li>
                <li>Keep backup copies of your spawn configurations</li>
                <li>Document custom spawn patterns for future reference</li>
                <li>Monitor server performance with multiple timed spawns</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Proper spawn timing configuration is crucial for server economy and player engagement.
                Make sure to balance spawn times to maintain server activity and prevent player frustration.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 