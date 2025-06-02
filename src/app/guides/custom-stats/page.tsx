import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CustomStatsGuide() {
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
            <h1>Custom Stats Modification Guide</h1>
            <p className="lead">
              Learn how to modify character stats without changing their skills or base characteristics.
            </p>

            <h2>Configuration File</h2>
            <p>
              The custom stats modification system is configured in:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/stats_custom_mod.xml`}
              </pre>
            </div>

            <h2>Basic Structure</h2>
            <p>
              The configuration file uses XML format with the following structure:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE list SYSTEM "stats_custom_mod.dtd">
<list enabled="false"> <!-- Enable custom stat settings -->
    <player classId="106"> <!-- Class ID -->
        <!-- Stat modifications -->
    </player>
</list>`}
              </pre>
            </div>

            <h2>Modification Types</h2>
            <p>
              There are several ways to modify stats:
            </p>

            <h3>1. Target Player Modifications</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<player classId="106"> <!-- Shillien Templar -->
    <targetPlayer classId="108"> <!-- Ghost Hunter -->
        <mul stat="mAtk" val="1.1"/> <!-- Increase mAtk by 10% -->
        <add stat="pAtk" val="20"/> <!-- Add 20 pAtk -->
    </targetPlayer>
</player>`}
              </pre>
            </div>

            <h3>2. Equipment-Based Modifications</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<player classId="106"> <!-- Shillien Templar -->
    <equipedWith itemId="365"> <!-- Dark Crystal Breastplate -->
        <mul stat="mDef" val="1.2"/> <!-- Increase mDef by 20% -->
        <add stat="pDef" val="30"/> <!-- Add 30 pDef -->
    </equipedWith>
</player>`}
              </pre>
            </div>

            <h3>3. Direct Stat Modifications</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<player classId="106"> <!-- Shillien Templar -->
    <mul stat="mDef" val="1.3"/> <!-- Increase mDef by 30% -->
    <add stat="mAtkSpd" val="30"/> <!-- Add 30 mAtkSpd -->
</player>`}
              </pre>
            </div>

            <h3>4. Stat Reduction</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<player classId="88"> <!-- Duelist -->
    <mul stat="mDef" val="0.8"/> <!-- Reduce mDef by 20% -->
    <add stat="mAtkSpd" val="-30"/> <!-- Reduce mAtkSpd by 30 -->
</player>`}
              </pre>
            </div>

            <h2>Available Stats</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Stat</th>
                    <th className="px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">pAtk</td>
                    <td className="px-4 py-2">Physical Attack</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">mAtk</td>
                    <td className="px-4 py-2">Magical Attack</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">pDef</td>
                    <td className="px-4 py-2">Physical Defense</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">mDef</td>
                    <td className="px-4 py-2">Magical Defense</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">mAtkSpd</td>
                    <td className="px-4 py-2">Magical Attack Speed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">pAtkSpd</td>
                    <td className="px-4 py-2">Physical Attack Speed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">maxHp</td>
                    <td className="px-4 py-2">Maximum HP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">maxMp</td>
                    <td className="px-4 py-2">Maximum MP</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">mCritRate</td>
                    <td className="px-4 py-2">Magical Critical Rate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always test stat modifications in a controlled environment first</li>
                <li>Keep backup copies of your stats_custom_mod.xml file</li>
                <li>Use appropriate multipliers and values for server balance</li>
                <li>Consider class balance when modifying stats</li>
                <li>Document custom stat modifications for future reference</li>
                <li>Monitor server performance with modified stats</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Custom stat modifications can significantly impact server balance and player experience.
                Make sure to thoroughly test any modifications before implementing them on your live server.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 