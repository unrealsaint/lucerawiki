import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function HeroNobleRaidBossGuide() {
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
            <h1>Hero and Noble Raid Boss Guide</h1>
            <p className="lead">
              Learn how to configure Raid Bosses that grant both Hero and Noble status.
            </p>

            <h2>Server Configuration</h2>
            <p>
              First, you need to enable custom hero status in your server configuration:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`# Allow custom hero status / Issuance of a custom heroism after the kill RB type HeroAndNoblessRewarder
AltAllowCustomHero = True

# Time Expire of Custom Hero status (in hours)
CustomHeroExpireTime = 24`}
              </pre>
            </div>

            <h2>Raid Boss Configuration</h2>
            <p>
              To make a Raid Boss grant both Hero and Noble status, modify the NPC's type in its configuration file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="25325" name="Flame of Splendor Barakiel" title="Raid Boss">
  <!-- ... other configurations ... -->
  <set name="type" value="HeroAndNoblessRewarder"/>
  <!-- ... other configurations ... -->
</npc>`}
              </pre>
            </div>

            <h2>Requirements</h2>
            <p>
              Players must meet the following conditions to receive Hero and Noble status:
            </p>
            <ul>
              <li>Must be in a party</li>
              <li>Must be within 1500 units of the Raid Boss when it dies</li>
              <li>Must be on their main class (not subclass)</li>
              <li>Must be level 75 or higher</li>
            </ul>

            <h2>Example Configuration</h2>
            <p>
              Here's a complete example using Barakiel as the Hero and Noble-granting Raid Boss:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="25325" name="Flame of Splendor Barakiel" title="Raid Boss">
  <set name="aggroRange" value="0"/>
  <set name="ai_type" value="Fighter"/>
  <set name="baseAtkRange" value="40"/>
  <set name="baseCON" value="57"/>
  <set name="baseCritRate" value="40"/>
  <set name="baseDEX" value="73"/>
  <set name="baseHpMax" value="562442"/>
  <set name="baseHpRate" value="1"/>
  <set name="baseHpReg" value="117.684"/>
  <set name="baseINT" value="76"/>
  <set name="baseMAtk" value="1190"/>
  <set name="baseMAtkSpd" value="3819"/>
  <set name="baseMDef" value="764"/>
  <set name="baseMEN" value="80"/>
  <set name="baseMpMax" value="1345.8"/>
  <set name="baseMpReg" value="2.7"/>
  <set name="basePAtk" value="4077"/>
  <set name="basePAtkSpd" value="253"/>
  <set name="basePDef" value="1412"/>
  <set name="baseRunSpd" value="190"/>
  <set name="baseSTR" value="60"/>
  <set name="baseShldDef" value="0"/>
  <set name="baseShldRate" value="0"/>
  <set name="baseWIT" value="70"/>
  <set name="baseWalkSpd" value="50"/>
  <set name="collision_height" value="30.0"/>
  <set name="collision_radius" value="8.0"/>
  <set name="level" value="70"/>
  <set name="rewardExp" value="4135550"/>
  <set name="rewardRp" value="2884"/>
  <set name="rewardSp" value="777993"/>
  <set name="shots" value="NONE"/>
  <set name="texture" value=""/>
  <set name="type" value="HeroAndNoblessRewarder"/>
  <equip>
    <rhand item_id="6717"/>
  </equip>
  <minions>
    <minion npc_id="25326" count="1"/>
    <minion npc_id="25327" count="1"/>
  </minions>
  <skills>
    <skill id="4045" level="1"/>
    <skill id="4188" level="7"/>
    <skill id="4190" level="7"/>
    <skill id="4192" level="7"/>
    <skill id="4408" level="1"/>
    <skill id="4409" level="1"/>
    <skill id="4410" level="11"/>
    <skill id="4411" level="11"/>
    <skill id="4412" level="11"/>
    <skill id="4413" level="11"/>
    <skill id="4414" level="2"/>
    <skill id="4415" level="4"/>
    <skill id="4416" level="8"/>
    <skill id="4494" level="1"/>
    <skill id="4913" level="1"/>
  </skills>
  <attributes>
    <defence attribute="fire" value="0"/>
    <defence attribute="water" value="0"/>
    <defence attribute="wind" value="0"/>
    <defence attribute="earth" value="0"/>
    <defence attribute="holy" value="0"/>
    <defence attribute="unholy" value="0"/>
  </attributes>
  <rewardlist type="RATED_GROUPED">
    <group chance="88.8576">
      <reward item_id="5312" min="1" max="1" chance="10.1358"/>
      <reward item_id="5528" min="140" max="420" chance="5.713"/>
      <reward item_id="5527" min="81" max="243" chance="9.8743"/>
      <reward item_id="5495" min="40" max="120" chance="25.396"/>
      <reward item_id="5317" min="1" max="1" chance="10.1358"/>
      <reward item_id="5315" min="1" max="1" chance="14.4641"/>
      <reward item_id="6570" min="1" max="1" chance="17.3435"/>
      <reward item_id="6578" min="1" max="1" chance="6.9375"/>
    </group>
    <group chance="75.0">
      <reward item_id="8172" min="1" max="3" chance="33.3334"/>
      <reward item_id="8176" min="3" max="9" chance="33.3333"/>
      <reward item_id="8619" min="1" max="1" chance="33.3333"/>
    </group>
  </rewardlist>
</npc>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Choose appropriate Raid Bosses for Hero and Noble status rewards</li>
                <li>Consider the difficulty level and spawn time</li>
                <li>Test the configuration thoroughly</li>
                <li>Monitor player feedback and adjust if needed</li>
                <li>Document which Raid Bosses grant Hero and Noble status</li>
                <li>Back up your configuration files before making changes</li>
                <li>Consider the impact on server economy and balance</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to test the configuration thoroughly on a test server before applying it to your production server.
                The Hero status will expire after the configured time (default 24 hours).
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 