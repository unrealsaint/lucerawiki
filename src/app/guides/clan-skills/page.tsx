import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ClanSkillsGuide() {
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
            <h1>Clan Skills and Ranks Guide</h1>
            <p className="lead">
              Learn how to configure clan skills and manage clan ranks in your server.
            </p>

            <h2>Clan Ranks</h2>
            <p>
              Clan ranks are defined by numbers in the configuration. Here are all available ranks:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Rank Number</th>
                    <th className="px-4 py-2">Rank Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">0</td>
                    <td className="px-4 py-2">VAGABOND</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">VASSAL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">HEIR</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2">KNIGHT</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">4</td>
                    <td className="px-4 py-2">WISEMAN</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2">BARON</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">6</td>
                    <td className="px-4 py-2">VISCOUNT</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">7</td>
                    <td className="px-4 py-2">COUNT</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">8</td>
                    <td className="px-4 py-2">MARQUIS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Configuring Clan Skills</h2>
            <p>
              To manage which rank in the clan can use a skill, edit the skill conditions using the minPledgeClass parameter:
            </p>

            <h3>Rank-Restricted Skill Example</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="372" levels="3" name="Clan Essence">
  <table name="#maxMp">1.03 1.05 1.06</table>
  <set name="icon" val="icon.skill0372"/>
  <set name="magicLevel" val="1"/>
  <set name="target" val="TARGET_SELF"/>
  <set name="skillType" val="BUFF"/>
  <set name="operateType" val="OP_PASSIVE"/>
  <set name="minPledgeClass" val="6"/> <!-- Minimum rank: VISCOUNT -->
  <set name="isCommon" val="true"/>
  <for>
    <mul order="0x30" stat="maxMp" val="#maxMp"/>
  </for>
</skill>`}
              </pre>
            </div>

            <h3>All-Ranks Skill Example</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="372" levels="3" name="Clan Essence">
  <table name="#maxMp">1.03 1.05 1.06</table>
  <set name="icon" val="icon.skill0372"/>
  <set name="magicLevel" val="1"/>
  <set name="target" val="TARGET_SELF"/>
  <set name="skillType" val="BUFF"/>
  <set name="operateType" val="OP_PASSIVE"/>
  <set name="minPledgeClass" val="0"/> <!-- Available to all ranks -->
  <set name="isCommon" val="true"/>
  <for>
    <mul order="0x30" stat="maxMp" val="#maxMp"/>
  </for>
</skill>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Plan your clan skill distribution across ranks carefully</li>
                <li>Keep backup copies of your clan skill configurations</li>
                <li>Test skill restrictions in a controlled environment first</li>
                <li>Document custom clan skill modifications</li>
                <li>Consider server balance when assigning skills to ranks</li>
                <li>Monitor clan progression and skill usage</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Clan skills and ranks are important for clan progression and hierarchy.
                Make sure to balance skill availability across ranks to maintain clan engagement
                and progression.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 