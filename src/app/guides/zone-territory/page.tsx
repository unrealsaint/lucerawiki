import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function ZoneTerritoryGuide() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white"
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back to Knowledge Base
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Zone and Territory Guide</h1>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none">
        <p>
          Learn how to create and configure new zones and territories in your server, including PvP zones, fun zones, and custom territories.
        </p>

        <h2>Zone Types</h2>
        <p>
          There are several types of zones you can create:
        </p>
        <ul>
          <li>PvP Zones - Areas where PvP is enabled</li>
          <li>Fun Zones - Special areas for events or activities</li>
          <li>Restricted Zones - Areas with specific access requirements</li>
          <li>Custom Territories - Areas with unique rules and mechanics</li>
          <li>No-Ride/No-Fly Zones - Areas where riding and flying are restricted</li>
          <li>Item Restriction Zones - Areas where specific items are prohibited</li>
          <li>Item Allowance Zones - Areas where only specific items are allowed</li>
          <li>Class Restriction Zones - Areas where specific classes are not allowed</li>
          <li>Skill Restriction Zones - Areas where specific skills cannot be used</li>
          <li>Auto-Buff Zones - Areas where players automatically receive buffs</li>
          <li>Class-Specific Auto-Buff Zones - Areas where specific classes receive automatic buffs</li>
          <li>Anti-Zerg Zones - Areas that limit clan and alliance members</li>
          <li>Resurrection Restoration Zones - Areas that restore HP/CP/MP and reset cooldowns upon resurrection</li>
          <li>Time-Based Zones - Areas that activate and deactivate at specific times</li>
          <li>No-Chat Zones - Areas where chat is restricted</li>
          <li>Level Limit Zones - Areas with minimum or maximum level requirements</li>
          <li>HWID Restriction Zones - Areas limited to specific hardware IDs</li>
          <li>Remove Buff Zones - Areas that remove buffs upon entry</li>
          <li>Party Restriction Zones - Areas that require party membership</li>
          <li>Player Limit Zones - Areas with a maximum number of players</li>
          <li>Gear Grade Restriction Zones - Areas that restrict equipment by grade</li>
        </ul>

        <h2>Configuration Files</h2>
        <p>
          The main configuration files are located at:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
          data/zone/aoe_fun_zone.xml
          data/mapregion/
          data/stats/skills/
        </pre>

        <h2>Zone Configuration</h2>
        <p>
          To create a new zone, you need to define its boundaries and properties:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="fun">
  <polygon>
    <coords loc="x1 y1 z1"/>
    <coords loc="x2 y2 z2"/>
    <coords loc="x3 y3 z3"/>
    <coords loc="x4 y4 z4"/>
  </polygon>
</zone>`}
        </pre>

        <h2>Time-Based Zones</h2>
        <p>
          To create a zone that activates and deactivates at specific times, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="fun">
  <set name="enabled" val="false" />
  <set name="cronZoneEnablePattern" val="0 19 * * *" />
  <set name="cronZoneDisablePattern" val="0 20 * * *" />
  <set name="cronZoneEnableBroadcastSpawnEvent" val="[cron_spawn]" />
  <set name="cronZoneDisableBroadcastDespawnEvent" val="[cron_spawn]" />
  <set name="cronZoneEnableAnnounceCustomMessage" val="voicedcommandhandlers.Debug.Enabled" />
  <set name="cronZoneDisableAnnounceCustomMessage" val="voicedcommandhandlers.Debug.Disabled" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Time-Based Zone Parameters</h3>
        <ul>
          <li><code>enabled</code> - Initial state of the zone (false = disabled by default)</li>
          <li><code>cronZoneEnablePattern</code> - Cron pattern for when to enable the zone</li>
          <li><code>cronZoneDisablePattern</code> - Cron pattern for when to disable the zone</li>
          <li><code>cronZoneEnableBroadcastSpawnEvent</code> - Event name for spawning NPCs when zone activates</li>
          <li><code>cronZoneDisableBroadcastDespawnEvent</code> - Event name for despawning NPCs when zone deactivates</li>
          <li><code>cronZoneEnableAnnounceCustomMessage</code> - Custom message to broadcast when zone activates</li>
          <li><code>cronZoneDisableAnnounceCustomMessage</code> - Custom message to broadcast when zone deactivates</li>
        </ul>

        <h3>Cron Pattern Format</h3>
        <p>
          The cron pattern format is: <code>minute hour day month weekday</code>
        </p>
        <ul>
          <li>minute (0-59)</li>
          <li>hour (0-23)</li>
          <li>day (1-31)</li>
          <li>month (1-12)</li>
          <li>weekday (0-6, where 0 is Sunday)</li>
        </ul>
        <p>
          Examples:
        </p>
        <ul>
          <li><code>0 19 * * *</code> - Every day at 19:00</li>
          <li><code>0 */2 * * *</code> - Every 2 hours</li>
          <li><code>0 12 * * 1-5</code> - Every weekday at 12:00</li>
        </ul>

        <h3>NPC Spawn Configuration</h3>
        <p>
          To spawn NPCs when the zone activates, create a spawn configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<spawn name="[custom_spawn]" event_name="[cron_spawn]">
  <npc id="20001" count="1" respawn="60" pos="x y z heading" />
  <npc id="20001" count="1" respawn="60" pos="x y z heading" />
</spawn>`}
        </pre>

        <h3>Important Notes for Time-Based Zones</h3>
        <ul>
          <li>Zone names must be unique</li>
          <li>All parameters are optional except for enable/disable patterns</li>
          <li>Custom messages must be defined in data/strings</li>
          <li>Spawn events must match between zone and spawn configurations</li>
          <li>You can combine time-based activation with other zone types</li>
          <li>Multiple zones can be activated/deactivated simultaneously</li>
          <li>You can create complex event sequences by coordinating multiple zones</li>
        </ul>

        <h3>Advanced Usage Examples</h3>
        <p>
          You can create complex events by coordinating multiple zones:
        </p>
        <ul>
          <li>Disable peace zones and enable PvP zones at specific times</li>
          <li>Activate different zones in rotation</li>
          <li>Create time-based farming areas</li>
          <li>Schedule special event zones</li>
          <li>Coordinate zone changes with NPC spawns</li>
        </ul>

        <h2>Resurrection Restoration Zones</h2>
        <p>
          To create a zone that restores HP/CP/MP and resets skill cooldowns upon resurrection, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="epic">
  <set name="restoreZoneHpCpMpOnRevive" val="true" />
  <set name="restoreZoneSkillCooldownOnRevive" val="true" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Resurrection Restoration Parameters</h3>
        <ul>
          <li><code>restoreZoneHpCpMpOnRevive</code> - When set to true, fully restores HP/CP/MP upon resurrection</li>
          <li><code>restoreZoneSkillCooldownOnRevive</code> - When set to true, resets all skill cooldowns upon resurrection</li>
        </ul>

        <h3>Important Notes for Resurrection Restoration Zones</h3>
        <ul>
          <li>Both parameters can be used independently or together</li>
          <li>HP/CP/MP restoration is applied immediately upon resurrection</li>
          <li>Skill cooldown reset affects all skills</li>
          <li>The restoration applies to all players regardless of their status</li>
          <li>This is particularly useful for PvP zones and event areas</li>
          <li>Players can return to the same location after resurrection</li>
        </ul>

        <h2>Class-Specific Auto-Buff Zones</h2>
        <p>
          To create a zone where specific classes automatically receive buffs upon entering, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="peace_zone">
  <set name="zoneClassedBuffs" val="1(1323:1)" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Multiple Buff Configuration</h3>
        <p>
          To apply multiple buffs to a specific class, separate them with semicolons:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="peace_zone">
  <set name="zoneClassedBuffs" val="1(1323:1);1(1045:6);1(1047:4)" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Custom Buff Duration</h3>
        <p>
          To set custom durations for buffs, add the duration in seconds after the skill level:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="peace_zone">
  <set name="zoneClassedBuffs" val="1(1323:1/6000);1(1045:6/6000);1(1047:4/6000)" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Class-Specific Buff Parameters</h3>
        <ul>
          <li><code>zoneClassedBuffs</code> - List of class-specific buffs to apply in the zone</li>
          <li>Format: <code>class_id(skill_id:level)</code> or <code>class_id(skill_id:level/duration)</code></li>
          <li>Multiple buffs are separated by semicolons (;)</li>
          <li>Duration is specified in seconds (e.g., 6000 = 100 minutes)</li>
        </ul>

        <h3>Class IDs Reference</h3>
        <p>
          Common class IDs:
        </p>
        <ul>
          <li>0 - Fighter</li>
          <li>1 - Warrior</li>
          <li>2 - Gladiator</li>
          <li>3 - Warlord</li>
          <li>4 - Knight</li>
          <li>5 - Paladin</li>
          <li>6 - Dark Avenger</li>
          <li>7 - Rogue</li>
          <li>8 - Treasure Hunter</li>
          <li>9 - Hawkeye</li>
          <li>10 - Mage</li>
          <li>11 - Wizard</li>
          <li>12 - Sorcerer</li>
          <li>13 - Necromancer</li>
          <li>14 - Warlock</li>
          <li>15 - Cleric</li>
          <li>16 - Bishop</li>
          <li>17 - Prophet</li>
          <li>18 - Elven Fighter</li>
          <li>19 - Elven Knight</li>
          <li>20 - Temple Knight</li>
          <li>21 - Swordsinger</li>
          <li>22 - Elven Scout</li>
          <li>23 - Plains Walker</li>
          <li>24 - Silver Ranger</li>
          <li>25 - Elven Mage</li>
          <li>26 - Elven Wizard</li>
          <li>27 - Spellsinger</li>
          <li>28 - Elemental Summoner</li>
          <li>29 - Oracle</li>
          <li>30 - Elder</li>
          <li>31 - Dark Fighter</li>
          <li>32 - Palus Knight</li>
          <li>33 - Shillien Knight</li>
          <li>34 - Bladedancer</li>
          <li>35 - Assassin</li>
          <li>36 - Abyss Walker</li>
          <li>37 - Phantom Ranger</li>
          <li>38 - Dark Mage</li>
          <li>39 - Dark Wizard</li>
          <li>40 - Spellhowler</li>
          <li>41 - Phantom Summoner</li>
          <li>42 - Shillien Oracle</li>
          <li>43 - Shillien Elder</li>
          <li>44 - Orc Fighter</li>
          <li>45 - Orc Raider</li>
          <li>46 - Destroyer</li>
          <li>47 - Orc Monk</li>
          <li>48 - Tyrant</li>
          <li>49 - Orc Mage</li>
          <li>50 - Orc Shaman</li>
          <li>51 - Overlord</li>
          <li>52 - Warcryer</li>
          <li>53 - Dwarven Fighter</li>
          <li>54 - Scavenger</li>
          <li>55 - Bounty Hunter</li>
          <li>56 - Artisan</li>
          <li>57 - Warsmith</li>
          <li>88 - Duelist</li>
          <li>89 - Dreadnought</li>
          <li>90 - Phoenix Knight</li>
          <li>91 - Hell Knight</li>
          <li>92 - Sagittarius</li>
          <li>93 - Adventurer</li>
          <li>94 - Archmage</li>
          <li>95 - Soultaker</li>
          <li>96 - Arcana Lord</li>
          <li>97 - Cardinal</li>
          <li>98 - Hierophant</li>
          <li>99 - Eva Templar</li>
          <li>100 - Sword Muse</li>
          <li>101 - Wind Rider</li>
          <li>102 - Moonlight Sentinel</li>
          <li>103 - Mystic Muse</li>
          <li>104 - Elemental Master</li>
          <li>105 - Eva Saint</li>
          <li>106 - Shillien Templar</li>
          <li>107 - Spectral Dancer</li>
          <li>108 - Ghost Hunter</li>
          <li>109 - Ghost Sentinel</li>
          <li>110 - Storm Screamer</li>
          <li>111 - Spectral Master</li>
          <li>112 - Shillien Saint</li>
          <li>113 - Titan</li>
          <li>114 - Grand Khauatari</li>
          <li>115 - Dominator</li>
          <li>116 - Doomcryer</li>
          <li>117 - Fortune Seeker</li>
          <li>118 - Maestro</li>
        </ul>

        <h3>Important Notes for Class-Specific Auto-Buff Zones</h3>
        <ul>
          <li>Buffs will not be applied if the player is:</li>
          <ul>
            <li>Registered in the Olympic Games</li>
            <li>In a duel</li>
            <li>Dead</li>
            <li>Trading</li>
            <li>In any other abnormal state</li>
          </ul>
          <li>Buffs are applied when entering the zone</li>
          <li>Custom durations override the default skill durations</li>
          <li>Multiple buffs can be applied simultaneously</li>
          <li>Class-specific buffs only apply to the specified class</li>
          <li>Players of other classes will not receive the buffs</li>
        </ul>

        <h2>Anti-Zerg Zones</h2>
        <p>
          To create a zone that limits the number of clan and alliance members, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="epic">
  <set name="restrictInsideClanCount" val="5" />
  <set name="restrictInsidePerClanPlayerCount" val="10" />
  <set name="restrictClanCapacityBackLoc" val="-25464 172424 -4203" />
  <set name="restrictInsideNonClanCount" val="0" />
  <set name="restrictClanLevelMin" val="0" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Alliance Restriction</h3>
        <p>
          To also restrict alliance members, add the following parameter:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="epic">
  <set name="restrictInsideClanCount" val="5" />
  <set name="restrictInsidePerAlliancePlayerCount" val="10" />
  <set name="restrictClanCapacityBackLoc" val="-25464 172424 -4203" />
  <set name="restrictInsideNonClanCount" val="0" />
  <set name="restrictClanLevelMin" val="0" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Anti-Zerg Parameters</h3>
        <ul>
          <li><code>restrictInsideClanCount</code> - Maximum number of clans allowed in the zone</li>
          <li><code>restrictInsidePerClanPlayerCount</code> - Maximum number of players per clan</li>
          <li><code>restrictInsidePerAlliancePlayerCount</code> - Maximum number of players per alliance</li>
          <li><code>restrictClanCapacityBackLoc</code> - Coordinates where players will be teleported if they don't meet the conditions</li>
          <li><code>restrictInsideNonClanCount</code> - Number of players without a clan allowed in the zone (0 = none allowed)</li>
          <li><code>restrictClanLevelMin</code> - Minimum clan level required to enter (0 = any level)</li>
        </ul>

        <h3>Important Notes for Anti-Zerg Zones</h3>
        <ul>
          <li>Players who exceed the clan/alliance limit will be automatically teleported to the specified location</li>
          <li>Clans without an alliance are still subject to the per-clan player limit</li>
          <li>The clan level restriction applies to all clan members</li>
          <li>Non-clan players are counted separately from clan limits</li>
          <li>Alliance restrictions apply to all clans in the same alliance</li>
        </ul>

        <h2>Auto-Buff Zones</h2>
        <p>
          To create a zone where players automatically receive buffs upon entering, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="peace_zone">
  <set name="zoneBuffs" val="1323:1" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Multiple Buff Configuration</h3>
        <p>
          To apply multiple buffs in a zone, separate them with semicolons:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="peace_zone">
  <set name="zoneBuffs" val="1323:1;1045:6;1047:4;1048:6" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Custom Buff Duration</h3>
        <p>
          To set custom durations for buffs, add the duration in seconds after the skill level:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="peace_zone">
  <set name="zoneBuffs" val="1323:1/6000;1045:6/6000;1047:4/6000;1048:6/6000" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Auto-Buff Parameters</h3>
        <ul>
          <li><code>zoneBuffs</code> - List of buffs to apply in the zone</li>
          <li>Format: <code>skill_id:level</code> or <code>skill_id:level/duration</code></li>
          <li>Multiple buffs are separated by semicolons (;)</li>
          <li>Duration is specified in seconds (e.g., 6000 = 100 minutes)</li>
        </ul>

        <h3>Important Notes for Auto-Buff Zones</h3>
        <ul>
          <li>Buffs will not be applied if the player is:</li>
          <ul>
            <li>Registered in the Olympic Games</li>
            <li>In a duel</li>
            <li>Dead</li>
            <li>Trading</li>
            <li>In any other abnormal state</li>
          </ul>
          <li>Buffs are applied when entering the zone</li>
          <li>Custom durations override the default skill durations</li>
          <li>Multiple buffs can be applied simultaneously</li>
        </ul>

        <h2>Skill Restriction Zones</h2>
        <p>
          To restrict the use of specific skills in a zone, you need to modify the skill configuration in the skills XML file:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<skill id="1323" levels="1" name="Noblesse Blessing">
  <set name="magicType" val="MAGIC"/>
  <set name="icon" val="icon.skill1323"/>
  <set name="reuseDelay" val="6000"/>
  <set name="magicLevel" val="1"/>
  <set name="castRange" val="400"/>
  <set name="hitTime" val="4000"/>
  <set name="hitCancelTime" val="500"/>
  <set name="mpConsume1" val="14"/>
  <set name="mpConsume2" val="55"/>
  <set name="itemConsumeId" val="3031"/>
  <set name="itemConsumeCount" val="5"/>
  <set name="target" val="TARGET_ONE"/>
  <set name="skillType" val="BUFF"/>
  <set name="operateType" val="OP_ACTIVE"/>
  <cond msgId="113" addName="1">
    <not>
      <zone name="[zone_name]"/>
    </not>
  </cond>
  <for>
    <effect count="1" name="BlessNoblesse" stackOrder="1" stackType="BlessOfNoble" time="3600" val="0"/>
  </for>
</skill>`}
        </pre>

        <h3>Multiple Zone Restrictions</h3>
        <p>
          To restrict a skill in multiple zones, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<skill id="1323" levels="1" name="Noblesse Blessing">
  <!-- ... other skill settings ... -->
  <cond msgId="113" addName="1">
    <not>
      <or>
        <zone name="[zone_name1]"/>
        <zone name="[zone_name2]"/>
      </or>
    </not>
  </cond>
  <!-- ... skill effects ... -->
</skill>`}
        </pre>

        <h3>Skill Restriction Parameters</h3>
        <ul>
          <li><code>msgId="113"</code> - Message ID for the restriction notification</li>
          <li><code>addName="1"</code> - Adds the zone name to the message</li>
          <li><code>&lt;not&gt;</code> - Inverts the condition (skill cannot be used in the zone)</li>
          <li><code>&lt;or&gt;</code> - Allows multiple zone restrictions</li>
        </ul>

        <h3>Important Notes for Skill Restrictions</h3>
        <ul>
          <li>Skill restrictions are configured in the skill's XML file, not the zone file</li>
          <li>You can restrict multiple skills in the same zone</li>
          <li>You can restrict the same skill in multiple zones</li>
          <li>The restriction applies to all players regardless of their status</li>
          <li>Players will receive a message when trying to use restricted skills</li>
        </ul>

        <h2>Class Restriction Zones</h2>
        <p>
          To create a zone that restricts access based on character class, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="dummy">
  <set name="playerClassIdsLimit" val="88;90" />
  <set name="playerClassIdsLimitBackLoc" val="-25464 172424 -4203" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Class Restriction Parameters</h3>
        <ul>
          <li><code>playerClassIdsLimit</code> - List of class IDs that are not allowed in the zone</li>
          <li>Class IDs are separated by semicolons (;)</li>
          <li><code>playerClassIdsLimitBackLoc</code> - X Y Z coordinates where restricted players will be teleported</li>
        </ul>

        <h3>Important Notes for Class Restriction Zones</h3>
        <ul>
          <li>Players with restricted classes will be automatically teleported out of the zone</li>
          <li>The teleport location must be valid and accessible</li>
          <li>The restriction applies to all players with the specified classes</li>
          <li>Class IDs must be correct and valid for your server version</li>
        </ul>

        <h2>Item Restriction Zones</h2>
        <p>
          To create a zone where specific items are prohibited, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="epic">
  <set name="zoneProhibitedItemIds" val="7575;6379" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>Item Restriction Parameters</h3>
        <ul>
          <li><code>zoneProhibitedItemIds</code> - List of item IDs that are prohibited in the zone</li>
          <li>Item IDs are separated by semicolons (;)</li>
          <li>Example: <code>val="7575;6379"</code> prohibits Draconic Bow (7575) and Draconic Leather Armor (6379)</li>
        </ul>

        <h3>Important Notes for Item Restriction Zones</h3>
        <ul>
          <li>Prohibited items will be automatically unequipped when entering the zone</li>
          <li>Players cannot equip prohibited items while in the zone</li>
          <li>The restriction applies to all players regardless of their status</li>
          <li>For PvP events, use the condition: <code>&lt;player on_pvp_event="true"/&gt;</code></li>
        </ul>

        <h2>No-Ride/No-Fly Zones</h2>
        <p>
          To create a zone where riding and flying are restricted, use the following configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="dummy">
  <set name="noRideZone" val="true" />
  <set name="blocked_actions" val="ride" />
  <polygon>
    <coords loc="x1 y1 z1 z2"/>
    <coords loc="x2 y2 z1 z2"/>
    <coords loc="x3 y3 z1 z2"/>
    <coords loc="x4 y4 z1 z2"/>
  </polygon>
</zone>`}
        </pre>

        <h3>No-Ride/No-Fly Parameters</h3>
        <ul>
          <li><code>type="dummy"</code> - Required for restriction zones</li>
          <li><code>noRideZone</code> - Enables the riding restriction</li>
          <li><code>blocked_actions</code> - Specifies which actions are blocked (ride, fly, etc.)</li>
        </ul>

        <h3>Important Notes for Restriction Zones</h3>
        <ul>
          <li>Players will be automatically dismounted when entering these zones</li>
          <li>The zone affects all players regardless of their status or level</li>
          <li>You can combine multiple restrictions in the blocked_actions parameter</li>
          <li>Z coordinates should specify both minimum and maximum height</li>
        </ul>

        <h2>PvP Reward Zones</h2>
        <p>
          To create a zone with PvP rewards, add the following parameters to your zone configuration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<zone name="[zone_name]" type="fun">
  <set name="enabled" val="true" />
  <set name="playerKillReward" val="4037:100,100;57:100,80" />
  <set name="karmaPlayerKillReward" val="4037:100,100;57:100,80" />
  <set name="ZoneRewardInterval" val="1" />
  <set name="playerKillCheck" val="ip|hwid" />
  <polygon>
    <coords loc="x1 y1 z1"/>
    <coords loc="x2 y2 z2"/>
    <coords loc="x3 y3 z3"/>
    <coords loc="x4 y4 z4"/>
  </polygon>
</zone>`}
        </pre>

        <h3>PvP Reward Parameters</h3>
        <ul>
          <li><code>playerKillReward</code> - Rewards for normal PvP kills</li>
          <li><code>karmaPlayerKillReward</code> - Rewards for PK kills</li>
          <li><code>ZoneRewardInterval</code> - Delay before reward (in minutes)</li>
          <li><code>playerKillCheck</code> - Method to check for abuse prevention</li>
        </ul>

        <h3>Reward Format</h3>
        <p>
          The reward format is: <code>item_id:count,chance;item_id:count,chance</code>
        </p>
        <ul>
          <li>item_id - The ID of the item to give</li>
          <li>count - How many of the item to give</li>
          <li>chance - Percentage chance to receive the reward (1-100)</li>
        </ul>

        <h3>Important Notes for PvP Zones</h3>
        <ul>
          <li>Enable <code>PvPCountingInFunZone = True</code> in pvp.properties for fun zones</li>
          <li>playerKillCheck can be set to "ip|hwid" to prevent reward farming</li>
          <li>You can add clan and alliance checks to prevent rewards for same clan/ally kills</li>
          <li>ZoneRewardInterval is in minutes (minimum 1 minute)</li>
        </ul>

        <h2>Restart Area Configuration</h2>
        <p>
          Configure where players will respawn after death in your zone:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`<restart_area>
  <polygon>
    <coords loc="x1 y1 z1"/>
    <coords loc="x2 y2 z2"/>
    <coords loc="x3 y3 z3"/>
    <coords loc="x4 y4 z4"/>
  </polygon>
  <restart race="human" loc="[zone_name]"/>
  <restart race="darkelf" loc="[zone_name]"/>
  <restart race="orc" loc="[zone_name]"/>
  <restart race="dwarf" loc="[zone_name]"/>
  <restart race="elf" loc="[zone_name]"/>
</restart_area>`}
        </pre>

        <h2>Important Notes</h2>
        <ul>
          <li>Coordinates must form a valid polygon (no self-intersecting lines)</li>
          <li>Z coordinates (height) should be consistent within the zone</li>
          <li>Zone names must be unique and match between zone and restart configurations</li>
          <li>For PvP zones, set type="pvp" instead of "fun"</li>
          <li>Restart areas should be within the zone boundaries</li>
          <li>For restriction zones, specify both minimum and maximum height</li>
          <li>Item restriction zones can be combined with other zone types</li>
          <li>Class restriction zones require valid teleport coordinates</li>
          <li>Skill restrictions require modification of the skill XML files</li>
          <li>Auto-buff zones require valid skill IDs and levels</li>
          <li>Anti-zerg zones require valid teleport coordinates for excess players</li>
          <li>Class-specific auto-buff zones require valid class IDs</li>
          <li>Item allowance zones require valid item IDs</li>
          <li>Resurrection restoration zones can be combined with other zone types</li>
          <li>Time-based zones require valid cron patterns and event names</li>
          <li>No-chat zones require type="dummy"</li>
          <li>Level limit zones require valid teleport coordinates</li>
          <li>HWID restriction zones require valid HWID list</li>
          <li>Remove buff zones affect all buffs</li>
          <li>Party restriction zones require valid teleport coordinates</li>
          <li>Player limit zones require valid teleport coordinates</li>
          <li>Gear grade restriction zones require valid item grade values</li>
        </ul>

        <h2>Common Issues</h2>
        <ul>
          <li>Invalid territory data errors usually indicate self-intersecting coordinates</li>
          <li>Missing coordinates in logs may require checking stdout.log instead of java.log</li>
          <li>Ensure all race types have defined restart points</li>
          <li>Verify zone names match exactly between configurations</li>
          <li>Restriction zones may not work if type is not set correctly</li>
          <li>Item restrictions may not apply if item IDs are incorrect</li>
          <li>Class restrictions may fail if teleport coordinates are invalid</li>
          <li>Skill restrictions may not work if the skill XML is not properly configured</li>
          <li>Auto-buffs may not apply if players are in abnormal states</li>
          <li>Anti-zerg restrictions may not work if teleport coordinates are invalid</li>
          <li>Class-specific buffs may not apply if class IDs are incorrect</li>
          <li>Item allowance zones may not work if item IDs are incorrect</li>
          <li>Resurrection restoration may not work if zone type is incorrect</li>
          <li>Time-based zones may not activate if cron patterns are invalid</li>
          <li>No-chat zones may not work if type is not set correctly</li>
          <li>Level limit zones may fail if teleport coordinates are invalid</li>
          <li>HWID restriction zones may not work if HWIDs are incorrect</li>
          <li>Remove buff zones may not remove all buffs</li>
          <li>Party restriction zones may fail if teleport coordinates are invalid</li>
          <li>Player limit zones may not count players correctly</li>
          <li>Gear grade restriction zones may not check all items</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Test zone boundaries thoroughly before deployment</li>
          <li>Use consistent naming conventions for zones</li>
          <li>Keep zone configurations organized and well-documented</li>
          <li>Backup existing configurations before making changes</li>
          <li>Test respawn points for all races</li>
          <li>Balance PvP rewards to prevent abuse</li>
          <li>Use appropriate reward intervals to prevent farming</li>
          <li>Test restriction zones with different mount types</li>
          <li>Verify item restrictions with different item combinations</li>
          <li>Test class restrictions with all affected classes</li>
          <li>Test skill restrictions with all affected skills</li>
          <li>Test auto-buff zones with different player states</li>
          <li>Test anti-zerg zones with different clan and alliance sizes</li>
          <li>Test class-specific buff zones with all affected classes</li>
          <li>Test item allowance zones with all allowed items</li>
          <li>Test resurrection restoration with different player states</li>
          <li>Test time-based zones with different cron patterns</li>
          <li>Test no-chat zones with different chat types</li>
          <li>Test level limit zones with different level ranges</li>
          <li>Test HWID restriction zones with valid HWIDs</li>
          <li>Test remove buff zones with different buff types</li>
          <li>Test party restriction zones with different party sizes</li>
          <li>Test player limit zones with different player counts</li>
          <li>Test gear grade restriction zones with different item grades</li>
        </ul>

        <h2>Miscellaneous Server Management</h2>
        
        <h3>Performance Optimization</h3>
        <p>
          To address server lag and freezes, consider the following solutions:
        </p>
        <ul>
          <li>Optimize database queries and indexes</li>
          <li>Monitor and adjust memory allocation</li>
          <li>Implement proper caching mechanisms</li>
          <li>Regularly clean up temporary files and logs</li>
          <li>Use performance monitoring tools</li>
          <li>Optimize network settings</li>
          <li>Implement rate limiting for client connections</li>
          <li>Regularly update server software</li>
        </ul>

        <h3>Anti-Cheat Protection</h3>
        <p>
          To set up anti-cheat protection using SmartGuard, LameGuard, or StrixGuard:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# SmartGuard Configuration
SmartGuard.Enabled=true
SmartGuard.CheckInterval=1000
SmartGuard.MaxViolations=3
SmartGuard.PunishmentType=KICK

# LameGuard Configuration
LameGuard.Enabled=true
LameGuard.DetectionLevel=HIGH
LameGuard.AutoBan=true

# StrixGuard Configuration
StrixGuard.Enabled=true
StrixGuard.ProtectionLevel=MAXIMUM
StrixGuard.ReportViolations=true`}
        </pre>

        <h3>Database Management</h3>
        <p>
          To merge game and login databases:
        </p>
        <ol>
          <li>Backup both databases</li>
          <li>Export necessary tables from login database</li>
          <li>Import tables into game database</li>
          <li>Update configuration files</li>
          <li>Test database connections</li>
          <li>Verify data integrity</li>
        </ol>

        <h3>Telegram Bot Integration</h3>
        <p>
          To set up a Telegram bot for server administration:
        </p>
        <pre className="bg-gray-800 p-4 rounded-lg">
{`# Telegram Bot Configuration
TelegramBot.Enabled=true
TelegramBot.Token=your_bot_token
TelegramBot.AdminChatId=your_chat_id
TelegramBot.CommandsEnabled=true
TelegramBot.NotificationsEnabled=true`}
        </pre>

        <h4>Available Bot Commands</h4>
        <ul>
          <li><code>/status</code> - Check server status</li>
          <li><code>/online</code> - Show online players</li>
          <li><code>/restart</code> - Restart server</li>
          <li><code>/announce</code> - Send server announcement</li>
          <li><code>/ban</code> - Ban player</li>
          <li><code>/unban</code> - Unban player</li>
          <li><code>/kick</code> - Kick player</li>
          <li><code>/teleport</code> - Teleport player</li>
        </ul>

        <h4>Bot Notifications</h4>
        <ul>
          <li>Server startup/shutdown</li>
          <li>Player connections/disconnections</li>
          <li>Admin actions</li>
          <li>Error reports</li>
          <li>Performance alerts</li>
          <li>Security violations</li>
        </ul>

        <h3>Important Notes for Server Management</h3>
        <ul>
          <li>Always backup data before making changes</li>
          <li>Test changes in a development environment first</li>
          <li>Monitor server performance regularly</li>
          <li>Keep security software updated</li>
          <li>Maintain proper access controls</li>
          <li>Document all configuration changes</li>
          <li>Implement proper logging</li>
          <li>Have a disaster recovery plan</li>
        </ul>

        <h3>Common Issues and Solutions</h3>
        <ul>
          <li>High CPU usage - Check for resource-intensive processes</li>
          <li>Memory leaks - Monitor memory allocation</li>
          <li>Database connection issues - Verify credentials and network</li>
          <li>Bot communication failures - Check API tokens and permissions</li>
          <li>Security breaches - Review access logs and update protection</li>
          <li>Performance degradation - Optimize configurations</li>
        </ul>

        <h3>Best Practices for Server Management</h3>
        <ul>
          <li>Regular maintenance schedule</li>
          <li>Automated backup systems</li>
          <li>Performance monitoring tools</li>
          <li>Security audit procedures</li>
          <li>Documentation maintenance</li>
          <li>Staff training programs</li>
          <li>Emergency response procedures</li>
          <li>Regular software updates</li>
        </ul>

        <div className="mt-8 rounded-lg bg-blue-900/50 p-4">
          <p className="text-blue-200">
            <strong>Note:</strong> For more information about server configuration, refer to the <Link href="/guides/server-setup" className="text-blue-300 hover:text-blue-200">Server Setup Guide</Link>.
          </p>
        </div>
      </div>
    </div>
  )
} 