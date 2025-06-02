import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CastleSkillsGuide() {
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
            <h1>Castle Skills Guide</h1>
            <p className="lead">
              Learn how to configure skills that are granted to clan members while they own a castle.
            </p>

            <h2>Configuration Location</h2>
            <p>
              To configure castle skills, you need to modify the castle configuration files located in:
            </p>
            <ul>
              <li><code>gameserver/data/residences/</code></li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              The skills configuration is done using the <code>&lt;skills&gt;</code> tag:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skills>
</skills>`}
              </pre>
            </div>

            <h2>Adding Skills</h2>
            <p>
              To add skills that will be granted to clan members while they own the castle:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skills>
    <skill id="100500" level="1" />
    <skill id="100501" level="1" />
    <skill id="100502" level="1" />
</skills>`}
              </pre>
            </div>

            <h2>Skill Parameters</h2>
            <p>
              Each skill entry requires:
            </p>
            <ul>
              <li><code>id</code> - The ID of the skill to grant</li>
              <li><code>level</code> - The level of the skill to grant</li>
            </ul>

            <h2>Rank Conditions</h2>
            <p>
              You can add conditions based on clan ranks to control which members receive the skills:
            </p>
            <ul>
              <li>All clan members</li>
              <li>Main Squad members only</li>
              <li>Knight rank and above</li>
              <li>Custom rank conditions</li>
            </ul>

            <h2>Example Configuration</h2>
            <p>
              A complete example configuration for a castle:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Castle configuration -->
<skills>
    <!-- Basic skills for all members -->
    <skill id="100500" level="1" />
    
    <!-- Advanced skills for higher ranks -->
    <skill id="100501" level="1" />
    <skill id="100502" level="1" />
    
    <!-- Elite skills for main squad -->
    <skill id="100503" level="1" />
</skills>`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance skills between different castles</li>
                <li>Consider server balance when assigning skills</li>
                <li>Test skill distribution on a test server</li>
                <li>Document all skill configurations</li>
                <li>Monitor skill impact on PvP balance</li>
                <li>Backup configuration files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The castle skills system allows for flexible configuration of skills granted to clan members.
                Consider your server's balance and player base when setting up castle skills.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 