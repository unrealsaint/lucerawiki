import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function SkillsEffectsGuide() {
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
            <h1>Skills and Effects Guide</h1>
            <p className="lead">
              Learn how to configure and customize skills and their effects in your server.
            </p>

            <h2>Basic XML Structure</h2>
            <p>
              All skills are defined in XML files with the following basic structure:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version='1.0' encoding='utf-8'?>
<list>
  <skill id="1312" levels="1" name="Fishing">
    <set name="weaponsAllowed" val="8192"/>
    <set name="mpConsume" val="1"/>
    <set name="reuseDelay" val="1000"/>
    <set name="target" val="TARGET_SELF"/>
    <set name="skillType" val="FISHING"/>
    <set name="operateType" val="OP_ACTIVE"/>
    <for>
    </for>
  </skill>
</list>`}
              </pre>
            </div>

            <h2>Required Parameters</h2>
            <p>
              Every skill must have these basic parameters:
            </p>
            <ul>
              <li>mpConsume: Mana consumption</li>
              <li>reuseDelay: Cooldown time</li>
              <li>target: Target type</li>
              <li>skillType: Type of skill</li>
              <li>operateType: Operation type (active/passive/toggle)</li>
            </ul>

            <h2>Skill Parameters</h2>
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
                    <td className="px-4 py-2">castRange</td>
                    <td className="px-4 py-2">Distance from caster to target (default: 40)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">activateRate</td>
                    <td className="px-4 py-2">Chance for skill effect to trigger (-1 if not applicable)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">absorbPart</td>
                    <td className="px-4 py-2">Fraction of damage absorbed (e.g., 0.2 = 20%)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">baseBlowRate</td>
                    <td className="px-4 py-2">Base chance for critical hit effect</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">coolTime</td>
                    <td className="px-4 py-2">Time before skill can be reused after casting starts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">hitTime</td>
                    <td className="px-4 py-2">Time to complete skill casting animation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">skillRadius</td>
                    <td className="px-4 py-2">Area of effect radius for AoE skills (default: 80)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">power</td>
                    <td className="px-4 py-2">Base power of the skill</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">powerPvP</td>
                    <td className="px-4 py-2">Power modifier for PvP (defaults to power if 0)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">powerPvE</td>
                    <td className="px-4 py-2">Power modifier for PvE (defaults to power if 0)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Level-Based Parameters</h2>
            <p>
              For skills with multiple levels, use tables to define values:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="1313" levels="27" name="Pumping">
  <table name="#power"> 19 28 38 50 55 60 65 70 86 92 97 103 109 115 136 143 149 156 187 195 202 245 253 262 271 312 321 </table>
  <set name="power" val="#power"/>
</skill>`}
              </pre>
            </div>

            <h2>Trigger Skills</h2>
            <p>
              Configure skills that trigger under specific conditions:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<trigger id="5154" level="#level" type="RECEIVE_DAMAGE" chance="1">
  <player damage="1;0"/>
</trigger>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always test skills in a controlled environment first</li>
                <li>Keep backup copies of your skill configurations</li>
                <li>Use appropriate power values for your server's balance</li>
                <li>Consider PvP and PvE scenarios when setting power modifiers</li>
                <li>Document custom skill modifications for future reference</li>
                <li>Monitor server performance with modified skills</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Skill configuration is crucial for server balance and player experience.
                Make sure to thoroughly test any modifications before implementing them on your live server.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 