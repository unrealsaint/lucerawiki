import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function QuickDropGuide() {
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
            <h1>Quick Drop Configuration Guide</h1>
            <p className="lead">
              Learn how to quickly add drops to monsters without editing XML files.
            </p>

            <h2>Configuration File</h2>
            <p>
              The drop configuration is managed in the following file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/config/events.properties`}
              </pre>
            </div>

            <h2>Drop Configuration Format</h2>
            <p>
              You can configure drops for specific mob levels or specific mobs using the following format:
            </p>

            <h3>Fixed Amount Drops</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`DropEvent_Items = 4037-5(100)&lt;1-20&gt;

Where:
- 4037: Item ID
- 5: Fixed amount
- (100): Drop chance percentage
- &lt;1-20&gt;: Mob level range`}
              </pre>
            </div>

            <h3>Random Amount Drops</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`DropEvent_Items = 4037-5-10(100)&lt;1-20&gt;

Where:
- 4037: Item ID
- 5-10: Random amount range
- (100): Drop chance percentage
- &lt;1-20&gt;: Mob level range`}
              </pre>
            </div>

            <h3>Specific Mob Drops</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`DropEvent_Items = 4037-1000(100)[29001,29006]

Where:
- 4037: Item ID
- 1000: Amount
- (100): Drop chance percentage
- [29001,29006]: Specific mob IDs`}
              </pre>
            </div>

            <h3>Multiple Drop Configurations</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`DropEvent_Items = 4037-5(100)&lt;1-20&gt;;6673-5(100)&lt;21-85&gt;

Where:
- Multiple configurations are separated by semicolons (;)
- Each configuration follows the same format as above`}
              </pre>
            </div>

            <h2>Party Drops</h2>
            <p>
              To enable drops for party members, add the same configuration to the party items section:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Solo player drops
DropEvent_Items = 4037-5(100)&lt;1-20&gt;

# Party member drops
DropEvent_PartyItems = 4037-5(100)&lt;1-20&gt;`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use specific mob IDs for targeted drops</li>
                <li>Configure both solo and party drops if needed</li>
                <li>Test drop rates thoroughly</li>
                <li>Monitor server performance</li>
                <li>Document your drop configurations</li>
                <li>Back up your configuration files</li>
                <li>Enable the event in Admin{'->'}Events{'->'}Simple</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to enable the event in the game through Admin{'->'}Events{'->'}Simple after configuring the drops.
                The drops will only be active when the event is enabled.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 