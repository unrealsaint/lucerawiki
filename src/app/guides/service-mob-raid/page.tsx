import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ServiceMobRaidGuide() {
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
            <h1>Service Mob and Raid Configuration Guide</h1>
            <p className="lead">
              Learn how to create and configure custom service mobs and raids with special rewards and behaviors.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the NPC XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/data/npc`}
              </pre>
            </div>

            <h2>AI Types</h2>
            <p>
              Available AI types for service mobs and raids:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<set name="ai_type" value="UniversalMystic"/> <!-- For magic-based mobs -->
<set name="ai_type" value="UniversalFighter"/> <!-- For melee-based mobs -->`}
              </pre>
            </div>

            <h2>Basic Configuration</h2>
            <p>
              Here's a complete example of a service mob configuration:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<npc id="20001" name="Gremlin" title="">
    <set name="aggroRange" value="0"/>
    <set name="ai_type" value="UniversalMystic"/>
    <set name="baseAtkRange" value="40"/>
    <set name="baseCON" value="43"/>
    <set name="baseCritRate" value="40"/>
    <set name="baseDEX" value="30"/>
    <set name="baseHpMax" value="39.745"/>
    <set name="baseHpRate" value="1"/>
    <set name="baseHpReg" value="2"/>
    <set name="baseINT" value="21"/>
    <set name="baseMAtk" value="3"/>
    <set name="baseMAtkSpd" value="333"/>
    <set name="baseMDef" value="30"/>
    <set name="baseMEN" value="20"/>
    <set name="baseMpMax" value="40"/>
    <set name="baseMpReg" value="0.9"/>
    <set name="basePAtk" value="9"/>
    <set name="basePAtkSpd" value="253"/>
    <set name="basePDef" value="40"/>
    <set name="baseRunSpd" value="50"/>
    <set name="baseSTR" value="40"/>
    <set name="baseShldDef" value="0"/>
    <set name="baseShldRate" value="0"/>
    <set name="baseWIT" value="20"/>
    <set name="baseWalkSpd" value="20"/>
    <set name="collision_height" value="15.0"/>
    <set name="collision_radius" value="10.0"/>
    <set name="level" value="1"/>
    <set name="rewardExp" value="29"/>
    <set name="rewardRp" value="0"/>
    <set name="rewardSp" value="2"/>
    <set name="shots" value="NONE"/>
    <set name="texture" value=""/>
    <set name="type" value="Monster"/>
</npc>`}
              </pre>
            </div>

            <h2>Special Parameters</h2>
            <p>
              Configure special behaviors and rewards using these parameters:
            </p>

            <h3>1. Player Flagging</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<ai_params>
    <!-- Flag players when mob dies -->
    <set name="flagging_around_players_on_dead" value="true"/>
    
    <!-- Flag players when mob attacks -->
    <set name="flagging_around_players_on_attack" value="true"/>
</ai_params>`}
              </pre>
            </div>

            <h3>2. Noblesse Rewards</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<ai_params>
    <!-- Grant Noblesse to main class players (level 76+) -->
    <set name="give_nobles_on_main_class" value="true"/>
    
    <!-- Grant Noblesse to sub class players (level 76+) -->
    <set name="give_nobles_on_sub_class" value="true"/>
</ai_params>`}
              </pre>
            </div>

            <h3>3. Premium and Hero Rewards</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<ai_params>
    <!-- Grant premium account -->
    <set name="give_to_party_premium_account_id" value="1"/>
    
    <!-- Grant hero status (24 hours) -->
    <set name="give_to_party_custom_hero_time_hours" value="24"/>
</ai_params>`}
              </pre>
            </div>

            <h3>4. Item Rewards</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<ai_params>
    <!-- Give items to party members -->
    <set name="give_to_party_items_reward" value="57;1;6673;1"/>
    
    <!-- Level penalty for item distribution -->
    <set name="give_to_party_items_reward_level_penalty" value="9"/>
</ai_params>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Format: itemId;count;itemId;count
              </p>
            </div>

            <h3>5. Subclass Quest Rewards</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<ai_params>
    <!-- Give subclass quest to party -->
    <set name="give_to_party_subclass_quests" value="true"/>
</ai_params>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance mob stats and rewards carefully</li>
                <li>Test all reward mechanics thoroughly</li>
                <li>Consider server economy when setting rewards</li>
                <li>Document custom mob configurations</li>
                <li>Monitor player feedback on rewards</li>
                <li>Keep backup copies of configuration files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When configuring service mobs and raids, remember that their rewards and behaviors
                should be balanced according to their difficulty and purpose. Special care should be taken
                when configuring rewards that affect player progression or server economy.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 