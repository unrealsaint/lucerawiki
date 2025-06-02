import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function OlympiadTypeCompetitionGuide() {
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
            <h1>Type-Based Olympiad Competition Guide</h1>
            <p className="lead">
              Learn how to enable and configure type-based Olympiad competitions, allowing Mages vs Mages and Warriors vs Warriors matches.
            </p>

            <h2>Overview</h2>
            <p>
              This feature introduces a new type of Olympiad competition that matches players based on their character type rather than specific class.
              This helps address the issue of class-based competitions becoming less relevant and rarely used.
            </p>

            <h2>Configuration Location</h2>
            <p>
              To enable type-based competitions, you need to modify the Olympiad operator HTML file:
            </p>
            <ul>
              <li><code>gameserver/data/html/oly/olympiad_operator100.htm</code></li>
            </ul>

            <h2>Implementation</h2>
            <p>
              Add the following line to the Olympiad operator HTML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<a action="bypass -h npc_%objectId%_oly 10001">"I want to join the type-based games."</a>`}
              </pre>
            </div>

            <h2>Complete HTML Example</h2>
            <p>
              Here's the complete HTML structure for the Olympiad operator:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<html><body>
Grand Olympiad Manager:<br>
Do you wish to participate in the games of the Grand Olympiad?

<tr><td align=center><font color="bea27b">(%season% round, %period% circle, count of participant:%currpartcnt%)</font></td></tr>

<a action="bypass -h npc_%objectId%_oly 102">"I want to join the games without a class distinction."</a>

<a action="bypass -h npc_%objectId%_oly 101">"I want to join the class-based games."</a>

<a action="bypass -h npc_%objectId%_oly 10001">"I want to join the type-based games."</a>

<a action="bypass -h npc_%objectId%_Chat 0">Return</a><br>

</body></html>`}
              </pre>
            </div>

            <h2>Competition Types</h2>
            <p>
              The type-based competition system matches players based on their character type:
            </p>
            <ul>
              <li>Mages vs Mages</li>
              <li>Warriors vs Warriors</li>
            </ul>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>This feature is designed to make Olympiad competitions more relevant and engaging</li>
                <li>Type-based matches provide more balanced competition compared to class-based matches</li>
                <li>The system automatically matches players based on their character type</li>
                <li>All existing Olympiad rules and rewards apply to type-based competitions</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test the feature on a test server before implementing on live</li>
                <li>Monitor player participation in different competition types</li>
                <li>Consider adjusting rewards based on competition type popularity</li>
                <li>Document the implementation for future reference</li>
                <li>Backup the original HTML file before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Type-based competitions provide a more balanced and engaging Olympiad experience.
                Consider your server's population and player preferences when implementing this feature.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 