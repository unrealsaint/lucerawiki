import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CrystalGradesGuide() {
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
            <h1>Crystal Grades and Enchant Bonuses Guide</h1>
            <p className="lead">
              Learn how to create custom crystal grades, edit crystal properties, and modify enchant bonuses for items.
            </p>

            <h2>Configuration Files</h2>
            <p>
              Crystal grades and enchant bonuses are configured in the following files:
            </p>
            <ul>
              <li><code>gameserver/data/crystal_grades.xml</code> - Crystal grade definitions</li>
              <li><code>gameserver/data/crystal_grades.dtd</code> - XML schema for crystal grades</li>
            </ul>

            <h2>Grade Parameters</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<grade id="S" crystal="1462" crystalMod="250" externalOrdinal="5">
    <enchant_mod stat="pAtk" multiplier="5"/>
    <enchant_mod stat="mAtk" multiplier="4"/>
    <enchant_mod stat="pDef" multiplier="2"/>
    <enchant_mod stat="mDef" multiplier="2"/>
</grade>`}
              </pre>
            </div>

            <h3>Grade Properties</h3>
            <ul>
              <li><strong>id</strong> - Grade name (e.g., "S", "S80", "R99")</li>
              <li><strong>crystal</strong> - Item ID of the crystal received when breaking items</li>
              <li><strong>crystalMod</strong> - Modifier for crystallizing bonuses</li>
              <li><strong>externalOrdinal</strong> - Parent grade reference (e.g., S80 and S84 have S as parent)</li>
            </ul>

            <h2>Enchant Bonus Calculation</h2>
            <p>
              The enchant bonus calculation depends on the item type:
            </p>
            <ul>
              <li><strong>Weapons</strong>: crystalMod / 10 * enchant_level</li>
              <li><strong>Armor</strong>: crystalMod / 5 * enchant_level</li>
              <li><strong>Over-enchant</strong>: If level {'>'} 3, use crystalMod / 5</li>
            </ul>

            <h2>Creating New Grades</h2>
            <p>
              To create a new grade (e.g., S80):
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<grade id="S80" crystal="1462" crystalMod="250" externalOrdinal="5">
    <enchant_mod stat="pAtk" multiplier="5"/>
    <enchant_mod stat="mAtk" multiplier="4"/>
    <enchant_mod stat="pDef" multiplier="2"/>
    <enchant_mod stat="mDef" multiplier="2"/>
</grade>`}
              </pre>
            </div>

            <h2>Skill Configuration</h2>
            <p>
              For new grades to work properly, you need to update the Expertise skill:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="239" levels="7" name="Expertise D">
    <table name="#magicLevel">20 40 52 61 76 80 84</table>
    <set name="icon" val="icon.skill0239"/>
    <set name="magicLevel" val="#magicLevel"/>
    <set name="target" val="TARGET_SELF"/>
    <set name="skillType" val="HARDCODED"/>
    <set name="operateType" val="OP_PASSIVE"/>
    <set name="canLearn" val=""/>
    <set name="isCommon" val="true"/>
</skill>`}
              </pre>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always update both crystal_grades.xml and crystal_grades.dtd files</li>
                <li>Configure appropriate enchant multipliers for each stat</li>
                <li>Set correct crystal item IDs for each grade</li>
                <li>Update Expertise skill levels for new grades</li>
                <li>Test enchant bonuses thoroughly</li>
                <li>Back up your configuration files</li>
                <li>Document custom grade changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to test all grade configurations on a test server before applying them to production.
                Pay special attention to enchant bonus calculations and crystal properties.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 