import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ResurrectionTimeGuide() {
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
            <h1>Fixed Resurrection Time Guide</h1>
            <p className="lead">
              Learn how to configure a fixed time limit for resurrection windows in your server.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the skills XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`data/stats/skills`}
              </pre>
            </div>

            <h2>Basic Configuration</h2>
            <p>
              There are two ways to configure fixed resurrection time:
            </p>

            <h3>1. In Skill Effects</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<effect count="1" name="Salvation" stackOrder="0" stackType="Salvation" time="3600" val="0">
    <def name="expireResurrectTime" val="60000"/>
</effect>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                The expireResurrectTime parameter is set in milliseconds (60000 = 60 seconds)
              </p>
            </div>

            <h3>2. In Skill Parameters</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<set name="expireResurrectTime" val="60000"/>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                This sets the resurrection window to expire after 60 seconds
              </p>
            </div>

            <h2>Complete Examples</h2>

            <h3>1. Salvation Skill</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="1410" levels="1" name="Salvation">
    <!-- Basic parameters -->
    <set name="magicType" val="MAGIC"/>
    <set name="icon" val="icon.skill1410"/>
    <set name="reuseDelay" val="3600000"/>
    <set name="magicLevel" val="79"/>
    <set name="castRange" val="400"/>
    <set name="hitTime" val="4000"/>
    <set name="hitCancelTime" val="500"/>
    <set name="mpConsume1" val="17"/>
    <set name="mpConsume2" val="70"/>
    <set name="itemConsumeId" val="8874"/>
    <set name="itemConsumeCount" val="2"/>
    <set name="target" val="TARGET_ONE"/>
    <set name="skillType" val="BUFF"/>
    <set name="operateType" val="OP_ACTIVE"/>
    <set name="isReuseDelayPermanent" val="true"/>
    
    <!-- Effect with resurrection time -->
    <for>
        <effect count="1" name="Salvation" stackOrder="0" stackType="Salvation" time="3600" val="0">
            <def name="expireResurrectTime" val="60000"/>
        </effect>
    </for>
</skill>`}
              </pre>
            </div>

            <h3>2. Standard Resurrection Skill</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="1016" levels="9" name="Resurrection">
    <!-- Basic parameters -->
    <table name="#effectPoint">121 196 290 374 460 502 542 595 624</table>
    <table name="#mpConsume2">47 70 97 121 144 156 165 182 191</table>
    <table name="#mpConsume1">12 18 25 31 36 39 42 46 48</table>
    <table name="#magicLevel">20 30 40 48 56 60 64 70 74</table>
    <table name="#power">0 20 30 40 50 55 60 65 70</table>
    
    <!-- Skill settings -->
    <set name="magicType" val="MAGIC"/>
    <set name="icon" val="icon.skill1016"/>
    <set name="reuseDelay" val="120000"/>
    <set name="power" val="#power"/>
    <set name="magicLevel" val="#magicLevel"/>
    <set name="castRange" val="400"/>
    <set name="hitTime" val="6000"/>
    <set name="hitCancelTime" val="500"/>
    <set name="mpConsume1" val="#mpConsume1"/>
    <set name="mpConsume2" val="#mpConsume2"/>
    <set name="effectPoint" val="#effectPoint"/>
    <set name="target" val="TARGET_CORPSE_PLAYER"/>
    <set name="expireResurrectTime" val="60000"/>
    <set name="corpse" val="true"/>
    <set name="skillType" val="RESURRECT"/>
    <set name="canPet" val="true"/>
    <set name="operateType" val="OP_ACTIVE"/>
    
    <!-- Olympiad restriction -->
    <cond msgId="1509">
        <not>
            <player olympiad="true"/>
        </not>
    </cond>
</skill>`}
              </pre>
            </div>

            <h2>Configuration Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Parameter</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">expireResurrectTime</td>
                    <td className="px-4 py-2">Time in milliseconds before resurrection window expires</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">skillType</td>
                    <td className="px-4 py-2">Must be set to "RESURRECT" for resurrection skills</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">target</td>
                    <td className="px-4 py-2">TARGET_CORPSE_PLAYER for player corpses</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">corpse</td>
                    <td className="px-4 py-2">Set to "true" for corpse-targeting skills</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Set reasonable time limits for resurrection windows</li>
                <li>Consider server performance when setting time values</li>
                <li>Test resurrection mechanics thoroughly</li>
                <li>Document resurrection time settings</li>
                <li>Monitor player feedback on resurrection mechanics</li>
                <li>Keep backup copies of skill configuration files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The resurrection window will disappear after the specified time has elapsed, similar to party
                invitations or friend requests. Make sure to set appropriate time limits for your server's gameplay style.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 