import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function OlympiadCyclesGuide() {
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
            <h1>Olympiad Cycles Guide</h1>
            <p className="lead">
              Learn how to configure weekly Olympiad cycles, including season timing, competitions, and rewards.
            </p>

            <h2>Basic Configuration</h2>
            <p>
              The Olympiad configuration is done through the server properties file. Here are the key parameters:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Allow Olympiad event
OlympiadEnabled = true

# Allow Spectator for Players
SpectationgAllowed = true

# Maximum observers to the stadium
MaxSpectatorPerStadium = 18`}
              </pre>
            </div>

            <h2>Season Configuration</h2>
            <p>
              Configure the Olympiad season timing and calculation mode:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Season time calculation mode
# NORMAL - Season calculates from the 1st day of current month 00:00
# CUSTOM - Season calculates from the today date 00:00
SeasonTimeCalcMode = CUSTOM

# The start time of the season
SeasonStartTime = 00:00

# End of season
SeasonEndTime = +7 00:00`}
              </pre>
            </div>

            <h2>Competition Timing</h2>
            <p>
              Set up competition times and registration periods:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# During the competition
CompetitionStartTime = 18:00

# End time Competitions
CompetitionEndTime = +1 00:00

# While handing out bonuses
WeaklyBonusTime = +2 18:30

# Time distribution of heroism
NominateTime = +7 12:00`}
              </pre>
            </div>

            <h2>Rewards Configuration</h2>
            <p>
              Configure points, rewards, and competition requirements:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Points early in the season
SeasonStartPoints = 18

# Minimum competition for hero
MinRewardableHeroComps = 9

# Minimum competitions for tokens
MinRewardableNobleComps = 9

# Rank points settlement
PointSettlement = 100;75;55;40;30

# Items settlement per point
ItemsSettlementPerPoint = 1000

# Hero points bonus
HeroPointBonus = 300

# Weekly point bonus
WeaklyBonusPoints = 3`}
              </pre>
            </div>

            <h2>Match Limits</h2>
            <p>
              Configure maximum matches and participant requirements:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Maximum matches
MaxTotalMatches = 300
MaxClassFreeMatches = 300
MaxClassBaseMatches = 300
MaxTeamBaseMatches = 300

# Minimum participants
MinParticipantClassFree = 11
MinParticipantClassBase = 11
MinParticipantTeamBase = 6`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>After changing the configuration, clear the oly_season table in the database</li>
                <li>Use the command: <code>DELETE FROM oly_season;</code></li>
                <li>If changes are made after season settlement, clear the oly_season table data</li>
                <li>CompetitionEndTime should not be changed - use CompetitionCustomEndTime instead</li>
                <li>PointSettlement values correspond to Hero, 2nd, 3rd, 4th, and 5th place rewards</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test the configuration on a test server first</li>
                <li>Consider server timezone when setting competition times</li>
                <li>Balance rewards based on server population and activity</li>
                <li>Document all configuration changes</li>
                <li>Backup configuration files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The Olympiad system is a crucial part of server balance and player engagement.
                Consider your server's population and player base when configuring cycles and rewards.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 