import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function NonCancellableDebuffsGuide() {
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
            <h1>Non-Cancellable Debuffs Guide</h1>
            <p className="lead">
              Learn how to configure debuffs that cannot be removed by Cleans or Cancellation skills.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the skills XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`data/stat/skills`}
              </pre>
            </div>

            <h2>Basic Configuration</h2>
            <p>
              To make a debuff non-cancellable, add the following parameter to the skill definition:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<set name="cancelable" val="false"/>`}
              </pre>
            </div>

            <h2>Example: Malaria Configuration</h2>
            <p>
              Here's a complete example of configuring Malaria as a non-cancellable debuff:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="4554" levels="10" name="Hot Spring Malaria">
    <!-- Basic parameters -->
    <table name="#mAtkSpd">1.04 1.08 1.12 1.16 1.08 1.00 1.00 1.00 1.00 1.00</table>
    <table name="#mpConsum">1.00 0.96 0.96 0.96 0.92 0.92 0.92 0.88 0.88 0.84</table>
    <table name="#abnormal_lv">1 2 3 4 5 6 7 8 9 10</table>
    
    <!-- Skill settings -->
    <set name="magicType" val="MAGIC"/>
    <set name="icon" val="icon.skill1164"/>
    <set name="magicLevel" val="75"/>
    <set name="castRange" val="600"/>
    <set name="mpConsume1" val="14"/>
    <set name="mpConsume2" val="55"/>
    <set name="target" val="TARGET_ONE"/>
    <set name="operateType" val="OP_ACTIVE"/>
    <set name="skillType" val="DEBUFF"/>
    <set name="cancelable" val="false"/>
    
    <!-- Effect configuration -->
    <for>
        <effect count="1" name="Buff" time="3600" val="0" stackType="spa_disease_d" stackOrder="#abnormal_lv">
            <mul order="0x30" stat="mAtkSpd" val="#mAtkSpd"/>
            <mul order="0x30" stat="mpConsum" val="#mpConsum"/>
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
                    <td className="px-4 py-2">cancelable</td>
                    <td className="px-4 py-2">Determines if the debuff can be removed by Cleans or Cancellation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">skillType</td>
                    <td className="px-4 py-2">Must be set to "DEBUFF" for negative effects</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">operateType</td>
                    <td className="px-4 py-2">Usually set to "OP_ACTIVE" for active skills</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">target</td>
                    <td className="px-4 py-2">Target type (TARGET_ONE for single target)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Common Use Cases</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside text-gray-300">
                <li>Disease effects (Malaria, Flu)</li>
                <li>Curse effects</li>
                <li>Special debuffs that should persist</li>
                <li>Zone-specific effects</li>
                <li>Quest-related debuffs</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use non-cancellable debuffs sparingly to maintain game balance</li>
                <li>Consider the impact on PvP gameplay</li>
                <li>Document which debuffs are non-cancellable</li>
                <li>Test thoroughly with different skill combinations</li>
                <li>Monitor player feedback on debuff mechanics</li>
                <li>Keep backup copies of skill configuration files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Making debuffs non-cancellable can significantly impact gameplay balance. Make sure to carefully
                consider which effects should be immune to Cleans and Cancellation skills.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 