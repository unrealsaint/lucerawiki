import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CharacterAppearanceGuide() {
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
            <h1>Character Appearance System Guide</h1>
            <p className="lead">
              Learn how to configure and customize character appearances using skills and effects in your server.
            </p>

            <h2>Skill Configuration</h2>
            <p>
              There are two ways to implement character appearance changes:
            </p>

            <h3>1. Passive Skill</h3>
            <p>
              Configure a passive skill that changes appearance:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="100500" levels="1" name="High Priest Suit">
    <set name="icon" val="icon.etc_some_icon" />
    <set name="magicLevel" val="40" />
    <set name="target" val="TARGET_SELF" />
    <set name="abnormal" val="HIGH_PRIEST_LIGHT" />
    <set name="skillType" val="BUFF" />
    <set name="operateType" val="OP_PASSIVE" />
</skill>`}
              </pre>
            </div>

            <h3>2. Active Skill</h3>
            <p>
              Configure an active skill with appearance effect:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="100500" levels="1" name="High Priest Suit">
  <set name="magicType" val="SPECIAL" />
  <set name="icon" val="icon.skill1044" />
  <set name="target" val="TARGET_SELF" />
  <set name="skillType" val="BUFF" />
  <set name="operateType" val="OP_ACTIVE" />
  <for>
    <effect count="1" name="Buff" stackOrder="99" abnormal="high_priest_light" stackType="hpregen" time="45" val="0">
      <mul order="0x30" stat="regHp" val="1.4" />
      <mul order="0x30" stat="regMp" val="1.2" />
    </effect>
  </for>
</skill>`}
              </pre>
            </div>

            <h2>Available Appearances</h2>
            <p>
              The system supports a wide variety of appearances. Here are some examples:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4>Classic Appearances</h4>
                <ul>
                  <li>pirate_suit</li>
                  <li>dark_assassin_suit</li>
                  <li>white_assassin_suit</li>
                  <li>musketeer_suit</li>
                  <li>wizard_suit</li>
                  <li>halloween_suit</li>
                  <li>baseball_uniform</li>
                  <li>santa_claus_light_glow</li>
                  <li>school_uniform_light_glow</li>
                  <li>beach_swimsuit_light</li>
                </ul>
              </div>
              <div>
                <h4>Special Appearances</h4>
                <ul>
                  <li>teddy_bear_light</li>
                  <li>toy_cat_light</li>
                  <li>toy_panda_light</li>
                  <li>seductive_light</li>
                  <li>hanbok_light</li>
                  <li>metal_suit_light</li>
                  <li>samurai_light</li>
                  <li>green_archer_light</li>
                  <li>formal_wear_light</li>
                  <li>kat_the_cat_light</li>
                </ul>
              </div>
            </div>

            <h2>Implementation Methods</h2>
            <p>
              You can implement appearance changes in several ways:
            </p>
            <ul>
              <li>As a buff effect on active skills</li>
              <li>As a passive skill in hats or runes</li>
              <li>As a permanent effect through items</li>
            </ul>

            <h2>Color Variations</h2>
            <p>
              Most appearances come in three color variations:
            </p>
            <ul>
              <li><strong>Light</strong> - Standard version (e.g., high_priest_light)</li>
              <li><strong>Black</strong> - Dark version (e.g., high_priest_black)</li>
              <li><strong>Red</strong> - Special version (e.g., high_priest_red)</li>
            </ul>

            <h2>Legacy Version Appearances</h2>
            <p>
              Additional appearances available in Legacy version:
            </p>
            <ul>
              <li>assassin (low/middle/high)</li>
              <li>white_capitan (low/middle/high)</li>
              <li>skeleton (low/middle/high)</li>
              <li>bunny (low/middle/high)</li>
              <li>vampire_suit (low/middle/high)</li>
              <li>steampunk_suit (low/middle/high)</li>
              <li>flower_suit (low/middle/high)</li>
              <li>maid_suit (low/middle/high)</li>
              <li>body_fire</li>
              <li>joker_suit (low/middle/high)</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test appearance effects on a test server before deployment</li>
                <li>Consider server balance when implementing appearance changes</li>
                <li>Document custom appearance configurations</li>
                <li>Ensure client files are properly updated</li>
                <li>Test appearance compatibility with different character classes</li>
                <li>Set appropriate durations for temporary appearances</li>
                <li>Consider implementing appearance restrictions if needed</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The appearance system is available in both Classic and Legacy versions,
                with some variations in available appearances. Make sure to test thoroughly
                before implementing on your server.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 