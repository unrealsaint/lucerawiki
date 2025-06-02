import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function RestrictedSiegeZoneGuide() {
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
            <h1>Restricted Siege Zone Guide</h1>
            <p className="lead">
              Learn how to configure restricted siege zones that only allow registered clans to enter.
            </p>

            <h2>Configuration Location</h2>
            <p>
              To configure restricted siege zones, you need to modify the zone configuration files located in:
            </p>
            <ul>
              <li><code>data/zone/</code></li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              The zone configuration is done using XML format. Here's a basic example of a siege zone:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<zone name="[gludio_castle_siege]" type="SIEGE" >
    <set name="enabled" val="false" />
    <set name="residence" val="1" />
    <polygon>
        <coords loc="-22615 104510 -4448 3551" />
        <coords loc="-13290 104564 -4448 3551" />
        <coords loc="-13313 116950 -4448 3551" />
        <coords loc="-22638 116896 -4448 3551" />
    </polygon>
</zone>`}
              </pre>
            </div>

            <h2>Adding Restrictions</h2>
            <p>
              To add restrictions that only allow registered clans to enter the siege zone, add these parameters:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<zone name="[gludio_castle_siege]" type="SIEGE" >
    <set name="enabled" val="false" />
    <set name="residence" val="1" />
    <set name="clanSiegeLimitZone" val="true" />
    <set name="clanSiegeLimitBackLoc" val="47114 187152 -3485" />
    <polygon>
        <coords loc="-22615 104510 -4448 3551" />
        <coords loc="-13290 104564 -4448 3551" />
        <coords loc="-13313 116950 -4448 3551" />
        <coords loc="-22638 116896 -4448 3551" />
    </polygon>
</zone>`}
              </pre>
            </div>

            <h2>Restriction Parameters</h2>
            <p>
              The following parameters are used to configure the restrictions:
            </p>
            <ul>
              <li><code>clanSiegeLimitZone</code> - Set to "true" to enable the restriction</li>
              <li><code>clanSiegeLimitBackLoc</code> - X Y Z coordinates where players will be teleported if they try to enter without registration</li>
            </ul>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>This restriction only works for clans registered for the specific siege zone</li>
                <li>Allied clans are considered as separate clans and must register individually</li>
                <li>The back location coordinates must be valid and accessible</li>
                <li>Players will be automatically teleported to the back location if they try to enter without registration</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test the back location coordinates before implementing</li>
                <li>Ensure the back location is safe and accessible</li>
                <li>Consider server population and clan distribution</li>
                <li>Document all restricted zones and their configurations</li>
                <li>Backup configuration files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The restricted siege zone system allows for better control over siege participation.
                Consider your server's balance and player base when implementing these restrictions.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 