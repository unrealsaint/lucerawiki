import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function CostumeSystemGuide() {
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
            <h1>Costume System Guide</h1>
            <p className="lead">
              Learn how to configure and customize the costume system, including costumes, skills, and items for character transformations.
            </p>

            <h2>System Activation</h2>
            <p>
              Enable the costume system in your server configuration:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# gameserver/config/event.properties
CostumeSystem = True`}
              </pre>
            </div>

            <h2>Configuration Files</h2>
            <p>
              The costume system uses three main configuration files:
            </p>
            <ul>
              <li><code>data/costumes.xml</code> - Contains all costume definitions</li>
              <li><code>data/stat/skills</code> - Contains skill definitions for costume activation</li>
              <li><code>data/items/</code> - Contains item definitions for costume activation items</li>
            </ul>

            <h2>Costume Configuration</h2>
            <p>
              Each costume is defined with specific properties:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<costume id="50" skill_id="59207" grade="5">
  <cast_item id="71684" count="30"/>
  <evolution costume_id="51" mod="0"/>
  <extract item_id="71673" item_count="1">
    <fee>
      <item id="71685" count="50"/>
      <item id="57" count="1000000"/>
    </fee>
  </extract>
</costume>`}
              </pre>
            </div>

            <h3>Costume Parameters</h3>
            <ul>
              <li><strong>id</strong> - Unique identifier for the costume</li>
              <li><strong>skill_id</strong> - ID of the skill that activates the costume</li>
              <li><strong>grade</strong> - Costume level (1-5)</li>
              <li><strong>cast_item</strong> - Item required for activation</li>
              <li><strong>evolution</strong> - Evolution target and chance modifier</li>
              <li><strong>extract</strong> - Items obtained from extraction and fees</li>
            </ul>

            <h2>Skill Configuration</h2>
            <p>
              Skills define how costumes are activated:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<skill id="59398" levels="1" name="Hanbok Sealbook - Mythic">
  <set name="icon" val="br_cashtex.skill.br_cash_costume_hanbok" />
  <set name="magicLevel" val="1" />
  <set name="target" val="TARGET_SELF" />
  <set name="skillType" val="BUFF" />
  <set name="operateType" val="OP_ACTIVE" />
  <set name="hitTime" val="2500" />
  <set name="itemConsumeId" val="71527" />
  <set name="itemConsumeCount" val="1" />
  <for>
    <effect name="AppearanceAdd">
      <def name="id" val="50"/>
    </effect>
  </for>
</skill>`}
              </pre>
            </div>

            <h3>Skill Parameters</h3>
            <ul>
              <li><strong>id</strong> - Unique skill ID</li>
              <li><strong>target</strong> - Target type (usually TARGET_SELF)</li>
              <li><strong>skillType</strong> - Type of skill (BUFF for costumes)</li>
              <li><strong>operateType</strong> - Operation type (OP_ACTIVE for active use)</li>
              <li><strong>hitTime</strong> - Cast time in milliseconds</li>
              <li><strong>itemConsumeId</strong> - Item consumed on use</li>
              <li><strong>itemConsumeCount</strong> - Amount of item consumed</li>
            </ul>

            <h2>Item Configuration</h2>
            <p>
              Items serve as activation keys for costumes:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<etcitem id="71527" name="Transformation Sealbook: Hanbok">
  <set name="type" value="SPELLBOOK"/>
  <set name="stackable" value="true"/>
  <set name="sellable" value="false"/>
  <set name="dropable" value="false"/>
  <set name="icon" value="BranchIcon.Icon.g_bm_costume_hanbok"/>
  <skills>
    <skill id="59398" level="1"/>
  </skills>
</etcitem>`}
              </pre>
            </div>

            <h3>Item Parameters</h3>
            <ul>
              <li><strong>id</strong> - Unique item ID</li>
              <li><strong>type</strong> - Item type (SPELLBOOK for costume items)</li>
              <li><strong>stackable</strong> - Whether items can be stacked</li>
              <li><strong>sellable</strong> - Whether items can be sold</li>
              <li><strong>dropable</strong> - Whether items can be dropped</li>
              <li><strong>icon</strong> - Path to item icon</li>
              <li><strong>skills</strong> - Skills triggered when using the item</li>
            </ul>

            <h2>Client Configuration</h2>
            <p>
              Required client files for the costume system:
            </p>
            <ul>
              <li><code>system/interface.xdat</code> - Interface definitions</li>
              <li><code>system/interface.u</code> - Interface resources</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test costume effects on a test server before deployment</li>
                <li>Back up your configuration files before making changes</li>
                <li>Document custom costume configurations</li>
                <li>Ensure client files are properly updated</li>
                <li>Balance costume availability and effects</li>
                <li>Set appropriate evolution chances and costs</li>
                <li>Configure reasonable extraction fees</li>
                <li>Test costume compatibility with other systems</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The costume system is only available in Classic version.
                Make sure to update both server and client files when adding new costumes.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 