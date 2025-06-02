import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function Olympiad3v3Guide() {
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
            <h1>3v3 Olympiad Games Guide</h1>
            <p className="lead">
              Learn how to enable and configure 3v3 team-based Olympiad competitions, similar to High Five servers.
            </p>

            <h2>Overview</h2>
            <p>
              This guide explains how to enable 3v3 team-based Olympiad competitions, allowing parties of three players to compete together.
            </p>

            <h2>Configuration Steps</h2>
            <p>
              Follow these steps to enable 3v3 Olympiad games:
            </p>

            <h3>1. Configure Minimum Participants</h3>
            <p>
              Modify the Olympiad properties file:
            </p>
            <ul>
              <li>Location: <code>gameserver/config/olympiad.properties</code></li>
              <li>Add: <code>MinParticipantTeamBase = 6</code></li>
            </ul>
            <p className="text-sm text-gray-400">
              Note: This setting requires at least 2 parties of 3 players each to start the competition.
            </p>

            <h3>2. Update Olympiad Manager HTML</h3>
            <p>
              Modify the Olympiad operator HTML file:
            </p>
            <ul>
              <li>Location: <code>gameserver/data/html/oly/olympiad_operator100.htm</code></li>
            </ul>

            <h3>3. Add 3v3 Registration Option</h3>
            <p>
              Add the following line to the Olympiad operator HTML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<a action="bypass -h npc_%objectId%_oly 103">"I want to join the 3v3 games."</a>`}
              </pre>
            </div>

            <h2>Complete HTML Example</h2>
            <p>
              Here's the complete HTML structure for the Olympiad operator:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<html>
<body>
Grand Olympiad Manager:<br>
Do you wish to participate in the games of the Grand Olympiad?

<tr><td align=center><font color="bea27b">(%season% round, %period% circle, count of participant:%currpartcnt%)</font></td></tr>

<a action="bypass -h npc_%objectId%_oly 102">"I want to join the games without a class distinction."</a>

<a action="bypass -h npc_%objectId%_oly 101">"I want to join the class-based games."</a>

<a action="bypass -h npc_%objectId%_oly 103">"I want to join the 3v3 games."</a>

<a action="bypass -h npc_%objectId%_Chat 0">Return</a><br>

</body>
</html>`}
              </pre>
            </div>

            <h2>Participation Rules</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>All 3 players must be in the same party to register</li>
                <li>Victory points are awarded or deducted after each match</li>
                <li>Points are divided equally among all 3 team members</li>
                <li>Hero status is awarded to the player with the most points in their class</li>
              </ul>
            </div>

            <h2>Hero Status Rules</h2>
            <p>
              The hero status system works as follows:
            </p>
            <ul>
              <li>Points from both 3v3 and 1v1 competitions are combined</li>
              <li>Hero status is awarded to the player with the highest total points in their class</li>
              <li>It doesn't matter which type of competition the points came from</li>
              <li>Only the top player in each class receives hero status</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test the feature on a test server first</li>
                <li>Monitor team compositions and balance</li>
                <li>Consider adjusting rewards based on team performance</li>
                <li>Document the implementation for future reference</li>
                <li>Backup the original HTML file before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: 3v3 Olympiad games provide a more team-oriented competitive experience.
                Consider your server's population and player preferences when implementing this feature.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 