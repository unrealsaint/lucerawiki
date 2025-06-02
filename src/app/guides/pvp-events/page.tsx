import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PvPEventsGuide() {
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
            <h1>PvP Events Setup Guide</h1>
            <p className="lead">
              Learn how to configure and manage PvP events including Team vs Team (TvT), Capture the Flag (CtF), and Deathmatch (DM) competitions.
            </p>

            <h2>Overview</h2>
            <p>
              This guide explains how to set up and configure PvP events in your server. The system supports multiple event types and allows for detailed customization of rules, rewards, and timing.
            </p>

            <h2>Accessing PvP Event Configuration</h2>
            <p>
              To access the PvP event configuration menu:
            </p>
            <ul>
              <li>Use the chat command: <code>//pvpevent</code></li>
              <li>This will open the main configuration screen for all events</li>
            </ul>

            <h2>Basic Configuration</h2>
            <p>
              The main configuration screen includes the following options:
            </p>
            <ul>
              <li><strong>Active</strong> - Toggle all events On/Off</li>
              <li><strong>Announce time</strong> - Time before event start when announcements will be made</li>
              <li><strong>Announce reduct</strong> - Time after which administration will post announcements</li>
              <li><strong>Field Start time (add)</strong> - Times when events will run (e.g., "12:00;12:30;13:10;14:40")</li>
              <li><strong>Field Instances</strong> - Instance IDs where events will take place (default: 802;804)</li>
            </ul>

            <h2>Event-Specific Configuration</h2>
            <p>
              Each event type (TvT/CtF/DM) has its own configuration tab with the following options:
            </p>

            <h3>Team Rewards</h3>
            <p>
              Configure rewards for the winning team:
            </p>
            <ul>
              <li>Format: <code>itemId:amount</code></li>
              <li>Multiple items: <code>itemId:amount;itemId:amount</code></li>
              <li>Example: <code>57:10000;4037:1</code></li>
            </ul>

            <h3>Top Player Rewards</h3>
            <p>
              Configure rewards for the top player in the winning team:
            </p>
            <ul>
              <li>Format: <code>itemId:amount</code></li>
              <li>Example: <code>57:10000</code></li>
            </ul>

            <h2>Instance Configuration</h2>
            <p>
              Example instance configuration for PvP events:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<instance id="804" name="PvP Instance Coliseum" maxChannels="999" collapseIfEmpty="10" timelimit="30" dispelBuffs="false" respawn="60">
    <geodata map="24_19"/>
    <spawns>
        <spawn mobId="40010" type="point">
            <coords loc="148514 47435 -3408"/>
            <coords loc="150521 46039 -3408"/>
        </spawn>           
    </spawns>
    <doors>
        <door id="24190001" opened="false"/>
        <door id="24190002" opened="false"/>
        <door id="24190003" opened="false"/>
        <door id="24190004" opened="false"/>
    </doors>
    <level min="1" max="80"/>
    <return loc="82698 148638 -3472"/>
    <teleport loc="82698 148638 -3472"/>
    <zones>
        <zone name="[pvp_804_tvt_default]" active="true"/>
        <zone name="[pvp_804_tvt_spawn_red]" active="true"/>
        <zone name="[pvp_804_tvt_spawn_blue]" active="true"/>
        <zone name="[pvp_804_dm_default]" active="true"/>
        <zone name="[pvp_804_dm_spawn]" active="true"/>
        <zone name="[pvp_804_ctf_default]" active="true"/>
        <zone name="[pvp_804_ctf_spawn_red]" active="true"/>
        <zone name="[pvp_804_ctf_spawn_blue]" active="true"/>
    </zones>
</instance>`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Players with PvP flags or in combat mode cannot be teleported to events</li>
                <li>Make sure to set appropriate level ranges for your events</li>
                <li>Configure return locations to prevent players from getting stuck</li>
                <li>Test event zones and spawn points before making them live</li>
                <li>Consider server population when setting event times</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Test events on a test server first</li>
                <li>Set up multiple event times to accommodate different time zones</li>
                <li>Balance rewards based on event difficulty and participation</li>
                <li>Monitor event participation and adjust settings accordingly</li>
                <li>Keep event instances clean and well-maintained</li>
                <li>Document your event configurations for future reference</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: For additional configuration options, check the server_variables.sql file.
                Make sure to backup your configurations before making changes.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 