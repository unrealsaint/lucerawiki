import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function FixedCronSpawnGuide() {
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
            <h1>Fixed Spawn with Time Reference (Cron Tab) Guide</h1>
            <p className="lead">
              Learn how to configure fixed spawns with time-based references using Cron Tab format.
            </p>

            <h2>Basic Syntax</h2>
            <p>
              The fixed spawn format uses Cron Tab syntax with five mandatory stars:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`respawn_cron="* * * * *"`}
              </pre>
            </div>
            <p>
              Each star represents a time unit:
            </p>
            <ul>
              <li>First star: Minutes (0-59)</li>
              <li>Second star: Hours (0-23)</li>
              <li>Third star: Day of month (1-31)</li>
              <li>Fourth star: Month (1-12)</li>
              <li>Fifth star: Day of week (1-7, where 1 is Monday)</li>
            </ul>

            <h2>Example Configurations</h2>

            <h3>Daily Spawn</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[queenant_room]">
  <npc id="29001" count="1" respawn_cron="0 19 * * *" pos="-21610 181594 -5720 0" />
</spawn>`}
              </pre>
            </div>
            <p>
              This example means:
            </p>
            <ul>
              <li>0: At minute 0</li>
              <li>19: At 19:00 (7 PM)</li>
              <li>* * *: Every day, every month, every year</li>
            </ul>

            <h3>Weekly Spawn</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[queenant_room]">
  <npc id="29001" count="1" respawn_cron="0 20 * * 7" pos="-21610 181594 -5720 0" />
</spawn>`}
              </pre>
            </div>
            <p>
              This example means:
            </p>
            <ul>
              <li>0: At minute 0</li>
              <li>20: At 20:00 (8 PM)</li>
              <li>* *: Every month, every year</li>
              <li>7: On Sunday</li>
            </ul>

            <h3>Multiple Days Per Week</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<spawn name="[queenant_room]">
  <npc id="29001" count="1" respawn_cron="0 20 * * 1,3,5" pos="-21610 181594 -5720 0" />
</spawn>`}
              </pre>
            </div>
            <p>
              This example means:
            </p>
            <ul>
              <li>0: At minute 0</li>
              <li>20: At 20:00 (8 PM)</li>
              <li>* *: Every month, every year</li>
              <li>1,3,5: On Monday, Wednesday, and Friday</li>
            </ul>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Important Notes</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Remove respawn and respawn_rand attributes when using respawn_cron</li>
                <li>The spawn will occur at the exact time specified, regardless of when the NPC was killed</li>
                <li>If the NPC is killed at 18:59:59, it will still respawn at the next scheduled time</li>
                <li>Use appropriate time slots based on server population and activity</li>
                <li>Test spawn patterns in a controlled environment first</li>
                <li>Keep backup copies of your spawn configurations</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Fixed spawn times are useful for creating predictable server events and maintaining
                regular player activity. Make sure to choose times that work well for your server's
                player base.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 