import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PvPEventsLocationsGuide() {
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
            <h1>Adding New Locations to PvP Events Guide</h1>
            <p className="lead">
              Learn how to add custom locations for PvP events including Team vs Team (TvT), Capture the Flag (CtF), and Deathmatch (DM) competitions.
            </p>

            <h2>Overview</h2>
            <p>
              This guide explains how to add new locations for PvP events by creating custom instances and zones. You can add unlimited zones for each event type.
            </p>

            <h2>File Locations</h2>
            <p>
              The required files are located in:
            </p>
            <ul>
              <li>Instance files: <code>gameserver/data/instances</code></li>
              <li>Zone files: <code>gameserver/data/zone</code></li>
            </ul>

            <h2>Instance Configuration</h2>
            <p>
              Create a new instance file (e.g., <code>[801] PvP Instance.xml</code>) with the following structure:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<list>
  <instance id="801" name="Bayou Fortress" maxChannels="20" collapseIfEmpty="10" timelimit="30" dispelBuffs="false" respawn="60">
    <geodata map="25_19"/>
    <reuse resetReuse="* * * * *" setUponEntry="true" sharedReuseGroup="0"/>
    <doors>
      <door id="25190002" opened="true"/>
      <door id="25190003" opened="true"/>
      <door id="25190004" opened="true"/>
      <door id="25190005" opened="true"/>
      <door id="25190010" opened="true"/>
      <door id="25190011" opened="true"/>
    </doors>
    <spawns/>
    <doors/>
    <level min="80" max="85"/>
    <return loc="42760 -48248 -800"/>
    <teleport loc="42760 -48248 -800"/>
    <collapse on-party-dismiss="false" timer="60"/>
    <quest id="0"/>
    <remove itemId="0" count="0" necessary="false"/>
    <give itemId="0" count="0"/>
    <zones>
      <zone name="[pvp_801_tvt_default]" active="true"/>
      <zone name="[pvp_801_tvt_spawn_red]" active="true"/>
      <zone name="[pvp_801_tvt_spawn_blue]" active="true"/>
      <zone name="[pvp_801_dm_default]" active="true"/>
      <zone name="[pvp_801_dm_spawn]" active="true"/>
      <zone name="[pvp_801_ctf_default]" active="true"/>
      <zone name="[pvp_801_ctf_spawn_red]" active="true"/>
      <zone name="[pvp_801_ctf_spawn_blue]" active="true"/>
    </zones>
  </instance>
</list>`}
              </pre>
            </div>

            <h2>Zone Configuration</h2>
            <p>
              Create zone files for each event type in your custom location. Example format:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<zone name="[pvp_801_tvt_default]" type="battle_zone">
  <set name="default" val="false" />
  <polygon>
    <coords loc="116755 203413 -5089 -89" />
    <coords loc="117740 202835 -5089 -89" />
    <coords loc="118832 202803 -5089 -89" />
    <coords loc="119957 203389 -5089 -89" />
    <coords loc="120538 204340 -5089 -89" />
    <coords loc="120585 205449 -5089 -89" />
    <coords loc="120080 206382 -5089 -89" />
    <coords loc="119147 206966 -5089 -89" />
    <coords loc="118041 207027 -5089 -89" />
    <coords loc="116923 206444 -5089 -89" />
    <coords loc="116328 205460 -5089 -89" />
    <coords loc="116293 204354 -5089 -89" />
  </polygon>
</zone>`}
              </pre>
            </div>

            <h2>Required Zones</h2>
            <p>
              For each event type, you need to create the following zones:
            </p>
            <ul>
              <li><strong>TvT (Team vs Team)</strong>:
                <ul>
                  <li><code>[pvp_801_tvt_default]</code> - Main battle zone</li>
                  <li><code>[pvp_801_tvt_spawn_red]</code> - Red team spawn</li>
                  <li><code>[pvp_801_tvt_spawn_blue]</code> - Blue team spawn</li>
                </ul>
              </li>
              <li><strong>DM (Deathmatch)</strong>:
                <ul>
                  <li><code>[pvp_801_dm_default]</code> - Main battle zone</li>
                  <li><code>[pvp_801_dm_spawn]</code> - Player spawn point</li>
                </ul>
              </li>
              <li><strong>CtF (Capture the Flag)</strong>:
                <ul>
                  <li><code>[pvp_801_ctf_default]</code> - Main battle zone</li>
                  <li><code>[pvp_801_ctf_spawn_red]</code> - Red team spawn</li>
                  <li><code>[pvp_801_ctf_spawn_blue]</code> - Blue team spawn</li>
                </ul>
              </li>
            </ul>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Make sure to use unique instance IDs for each new location</li>
                <li>Configure appropriate level ranges for your events</li>
                <li>Set up proper return locations to prevent players from getting stuck</li>
                <li>Test all zones and spawn points before making them live</li>
                <li>Ensure geodata is properly configured for the new location</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test new locations on a test server first</li>
                <li>Create balanced and fair battle zones</li>
                <li>Ensure spawn points are properly separated</li>
                <li>Check for potential exploits or camping spots</li>
                <li>Document your zone configurations for future reference</li>
                <li>Backup your files before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Make sure to update your PvP event configuration to include the new instance IDs.
                Test all event types in the new location before making it available to players.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 