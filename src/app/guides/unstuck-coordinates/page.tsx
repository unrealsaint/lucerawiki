import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function UnstuckCoordinatesGuide() {
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
            <h1>Editing Unstuck Command and Coordinates Guide</h1>
            <p className="lead">
              Learn how to configure the unstuck command and set custom coordinates for player teleportation.
            </p>

            <h2>Configuring the Unstuck Command</h2>
            <p>
              The unstuck command is implemented as a skill with ID 2099. To modify its behavior,
              you need to edit the skill configuration in the data/skills directory.
            </p>

            <h3>Basic Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="2099" levels="1" name="Escape: 5 minutes">
    <set name="magicType" val="SPECIAL"/>
    <set name="icon" val="icon.skill0000"/>
    <set name="magicLevel" val="1"/>
    <set name="hitTime" val="300000"/>
    <set name="hitCancelTime" val="500"/>
    <set name="target" val="TARGET_SELF"/>
    <set name="skillType" val="RECALL"/>
    <set name="operateType" val="OP_ACTIVE"/>
    <cond msgId="1509">
        <not>
            <player olympiad="true"/>
        </not>
    </cond>
</skill>`}
              </pre>
            </div>

            <h3>Setting Custom Coordinates</h3>
            <p>
              To set specific coordinates for the unstuck command, you can use either the townId parameter
              or random locations:
            </p>

            <h4>1. Using Town ID</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="2099" levels="1" name="Escape: Town of Giran">
    <set name="magicType" val="MAGIC"/>
    <set name="icon" val="icon.skill0000"/>
    <set name="magicLevel" val="1"/>
    <set name="hitTime" val="20000"/>
    <set name="townId" val="9"/>
    <set name="hitCancelTime" val="500"/>
    <set name="reuseDelay" val="10000"/>
    <set name="target" val="TARGET_SELF"/>
    <set name="skillType" val="RECALL"/>
    <set name="operateType" val="OP_ACTIVE"/>
    <set name="isSharedClassReuse" val="true"/>
    <set name="isSkillTimePermanent" val="true"/>
    <set name="isReuseDelayPermanent" val="true"/>
    <cond msgId="1509">
        <not>
            <player olympiad="true"/>
        </not>
    </cond>
</skill>`}
              </pre>
            </div>

            <h4>2. Using Random Locations</h4>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<set name="random_loc" val="81562;147782;-3472 82480;149087;-3472 83415;148235;-3408 81637;149427;-3472"/>`}
              </pre>
            </div>

            <h3>Town ID Reference</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-disc list-inside text-gray-400">
                <li>1: Talking Island</li>
                <li>2: Elven Village</li>
                <li>3: Dark Elven Village</li>
                <li>4: Orc Village</li>
                <li>5: Dwarven Village</li>
                <li>6: Town of Gludio</li>
                <li>7: Gludin Village</li>
                <li>8: Town of Dion</li>
                <li>9: Town of Giran</li>
                <li>10: Town of Oren</li>
                <li>11: Town of Aden</li>
                <li>12: Hunters Village</li>
                <li>13: Heine</li>
                <li>14: Rune Township</li>
                <li>15: Town of Goddard</li>
                <li>16: Town of Schuttgart</li>
                <li>17: Primeval Isle</li>
                <li>18: Floran Village</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Set appropriate cast times and reuse delays</li>
                <li>Use random locations to prevent player clustering</li>
                <li>Ensure coordinates are accessible and safe</li>
                <li>Test the unstuck command in-game after making changes</li>
                <li>Keep backup copies of original configurations</li>
                <li>Consider server population when setting coordinates</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The unstuck command is a critical feature for player experience. Make sure to test
                any changes thoroughly and ensure the destination coordinates are safe and accessible.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 