import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function BuffReturnGuide() {
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
            <h1>Buff Return After Cancellation Guide</h1>
            <p className="lead">
              Learn how to configure the system that returns buffs after they are cancelled by the Cancellation skill.
            </p>

            <h2>Configuration File</h2>
            <p>
              The buff return system is configured in the skills XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`data/stat/skills`}
              </pre>
            </div>

            <h2>Basic Configuration</h2>
            <p>
              The system is configured within the Cancellation skill definition. Here's the basic structure:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="1056" levels="12" name="Cancellation">
    <!-- Basic skill parameters -->
    <table name="#effectPoint">455 493 530 547 564 580 595 609 622 633 644 653</table>
    <table name="#mpConsume2">35 38 41 43 44 46 48 49 51 52 53 55</table>
    <table name="#mpConsume1">9 10 11 11 11 12 12 13 13 13 14 14</table>
    <table name="#magicLevel">48 52 56 58 60 62 64 66 68 70 72 74</table>
    
    <!-- Skill settings -->
    <set name="magicType" val="MAGIC"/>
    <set name="icon" val="icon.skill1056"/>
    <set name="reuseDelay" val="120000"/>
    <set name="magicLevel" val="#magicLevel"/>
    <set name="castRange" val="600"/>
    <set name="hitTime" val="6000"/>
    <set name="hitCancelTime" val="500"/>
    <set name="mpConsume1" val="#mpConsume1"/>
    <set name="mpConsume2" val="#mpConsume2"/>
    <set name="effectPoint" val="#effectPoint"/>
    <set name="target" val="TARGET_ONE"/>
    <set name="skillType" val="DEBUFF"/>
    <set name="operateType" val="OP_ACTIVE"/>
    <set name="reflectable" val="false"/>
    
    <!-- Buff return configuration -->
    <for>
        <effect count="1" name="DispelEffects" time="0" val="0">
            <def name="dispelType" val="cancellation"/>
            <def name="cancelRate" val="25"/>
            <def name="negateCount" val="5"/>
            <def name="reApplyDelay" val="0"/>
        </effect>
    </for>
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
                    <td className="px-4 py-2">dispelType</td>
                    <td className="px-4 py-2">Type of dispel effect (set to "cancellation")</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">cancelRate</td>
                    <td className="px-4 py-2">Chance of cancelling buffs (percentage)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">negateCount</td>
                    <td className="px-4 py-2">Maximum number of buffs that can be cancelled</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">reApplyDelay</td>
                    <td className="px-4 py-2">Time in seconds before cancelled buffs return</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Example Configurations</h2>

            <h3>1. Immediate Buff Return</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<effect count="1" name="DispelEffects" time="0" val="0">
    <def name="dispelType" val="cancellation"/>
    <def name="cancelRate" val="25"/>
    <def name="negateCount" val="5"/>
    <def name="reApplyDelay" val="0"/>
</effect>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Buffs will return immediately after being cancelled.
              </p>
            </div>

            <h3>2. Delayed Buff Return</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<effect count="1" name="DispelEffects" time="0" val="0">
    <def name="dispelType" val="cancellation"/>
    <def name="cancelRate" val="25"/>
    <def name="negateCount" val="5"/>
    <def name="reApplyDelay" val="10"/>
</effect>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Buffs will return after 10 seconds of being cancelled.
              </p>
            </div>

            <h3>3. Prevent Cancellation of Specific Buffs</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<set name="cancelable" val="false"/>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Add this parameter to any buff that should not be cancelled.
              </p>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test buff return timing thoroughly in PvP scenarios</li>
                <li>Balance cancelRate and negateCount for fair gameplay</li>
                <li>Consider server performance when setting reApplyDelay</li>
                <li>Document which buffs are non-cancellable</li>
                <li>Monitor player feedback on buff return mechanics</li>
                <li>Keep backup copies of skill configuration files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The buff return system can significantly impact PvP balance. Make sure to carefully plan your
                configuration to maintain fair gameplay while providing an interesting mechanic for players.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 