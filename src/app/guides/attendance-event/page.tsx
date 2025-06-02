import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function AttendanceEventGuide() {
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
            <h1>Attendance Event Guide</h1>
            <p className="lead">
              Learn how to configure and manage the Attendance Event system that rewards players for daily logins.
            </p>

            <h2>Overview</h2>
            <p>
              The Attendance Event is a daily reward system that encourages player engagement by providing rewards for consecutive logins. Players must stay online for 30 minutes to claim their daily reward.
            </p>

            <h2>Configuration</h2>
            <p>
              The Attendance Event is configured in <code>gameserver/events.properties</code> with the following settings:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Time to reset and recalculate the next awards
EventAttendance_ResetTime = 06:30

# Items that will be given out for each reward step
# Format: itemId-Count;itemId-Count;itemId-Count
# Can be configured for 7, 14, 21, or 28 steps
EventAttendance_Reward = 57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-1;57-28

# How long do you have to be online to receive the reward (in minutes)
EventAttendance_InGameTime = 30

# Which step slots will be highlighted as Special
EventAttendance_Highlights = 1, 7, 14, 21, 28

# Show Attendance window on login
EventAttendance_OnEnter = true

# Loop event after completing all steps
EventAttendance_Looped = false

# Reward an account or character
EventAttendance_Global = true

# Minimum player level to receive a reward
EventAttendance_MinLevel = 1`}
              </pre>
            </div>

            <h2>Client Configuration</h2>
            <p>
              To enable the Attendance Check button in the client:
            </p>
            <ol>
              <li>Open <code>l2.ini</code></li>
              <li>Set <code>UseVIPAttendanceClassic=true</code></li>
            </ol>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Rewards are checked off consecutively - missing a day means you'll receive the next reward in sequence</li>
                <li>The 30-minute timer resets if the player logs out or disconnects</li>
                <li>Players with full inventory (80% weight limit) cannot claim rewards</li>
                <li>Each player's reward cycle starts from their first participation</li>
                <li>The event can be configured to loop after completing all steps</li>
                <li>Rewards can be configured per character or per account</li>
              </ul>
            </div>

            <h2>Activation/Deactivation</h2>
            <p>
              The Attendance Event can be activated or deactivated through:
            </p>
            <ul>
              <li>Admin Panel: Events → Attendance Stop/Start</li>
              <li>Server Variables: <code>server_variables.sql</code></li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Configure rewards that are valuable but not game-breaking</li>
                <li>Use the highlight feature to mark special milestone rewards</li>
                <li>Consider server timezone when setting reset time</li>
                <li>Test the event thoroughly before enabling it on live server</li>
                <li>Monitor player feedback and adjust rewards if necessary</li>
                <li>Backup your configuration before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Attendance Event is a great way to encourage daily player engagement.
                Make sure to configure appropriate rewards and timing for your server's needs.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 