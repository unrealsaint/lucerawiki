import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function GmCommandsGuide() {
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
            <h1>GM Commands Guide</h1>
            <p className="lead">
              Comprehensive list of GM commands for server administration and management.
            </p>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Important Note</p>
              <p className="text-blue-100">
                These commands are only available to users with appropriate GM access levels.
                Use these commands responsibly and only for server administration purposes.
              </p>
            </div>

            <h2>Menu and Interface Commands</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>//admin</code> - Opens the main admin panel</li>
                <li><code>//play_sounds</code> - Displays an HTML list of sounds</li>
                <li><code>//play_sound &lt;sound_id&gt;</code> - Plays the specified sound</li>
                <li><code>//silence</code> - Toggles incoming message blocking</li>
                <li><code>//tradeoff [on|off]</code> - Toggles trade blocking</li>
                <li><code>//show_html &lt;file_name&gt;</code> - Displays an HTML file from admin folder</li>
                <li><code>//loc</code> - Shows current coordinates (X, Y, Z, Heading)</li>
                <li><code>//undying</code> - Toggles admin immortality mode</li>
              </ul>
            </div>

            <h2>Character Management</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>//disconnect</code> or <code>//kick [player_name]</code> - Disconnects a player</li>
                <li><code>//nokarma</code> - Sets target's karma to 0</li>
                <li><code>//setkarma &lt;value&gt;</code> - Sets specified karma for target</li>
                <li><code>//character_list [player_name|object_id]</code> - Shows character info</li>
                <li><code>//show_characters &lt;page&gt;</code> - Lists all characters (20 per page)</li>
                <li><code>//find_character &lt;name&gt;</code> - Searches for characters by partial name</li>
                <li><code>//current_player</code> - Shows information about current target</li>
              </ul>
            </div>

            <h2>Item Management</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>//give_item &lt;item_id&gt; &lt;count&gt;</code> - Gives item to player</li>
                <li><code>//give_all &lt;item_id&gt; &lt;count&gt;</code> - Gives item to all online players</li>
                <li><code>//give_all_by_ip &lt;item_id&gt; &lt;count&gt;</code> - Gives item to one player per IP</li>
                <li><code>//give_all_by_hwid &lt;item_id&gt; &lt;count&gt;</code> - Gives item to one player per HWID</li>
                <li><code>//give_all_radius &lt;item_id&gt; &lt;count&gt; &lt;radius&gt;</code> - Gives item to players within radius</li>
                <li><code>//remove_item &lt;item_id&gt; &lt;count&gt; [player_name]</code> - Removes items from player</li>
              </ul>
            </div>

            <h2>Level Management</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>//add_level &lt;level&gt;</code> - Adds levels to player or pet</li>
                <li><code>//set_level &lt;level&gt;</code> - Sets specified level (1–max level)</li>
              </ul>
            </div>

            <h2>Data Reloading</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>//reload_config</code> - Reloads server configuration</li>
                <li><code>//reload_multisell</code> - Reloads multisell lists</li>
                <li><code>//reload_gmaccess</code> - Reloads GM access rights</li>
                <li><code>//reload_htm</code> - Reloads HTML file cache</li>
                <li><code>//reload_skills</code> - Reloads skill table</li>
                <li><code>//reload_items</code> - Reloads item data</li>
                <li><code>//reload_npc</code> - Reloads NPC data</li>
                <li><code>//reload_spawn</code> - Reloads all spawns</li>
              </ul>
            </div>

            <h2>Geodata and Debugging</h2>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <ul className="list-none space-y-2">
                <li><code>//geo_z [z]</code> - Shows geodata height</li>
                <li><code>//geo_type</code> - Shows geodata type at current point</li>
                <li><code>//geo_nswe</code> - Shows directions (N, S, W, E)</li>
                <li><code>//geo_los</code> - Checks line-of-sight through geodata</li>
                <li><code>//geo_move</code> - Checks movement possibility through geodata</li>
                <li><code>//geo_trace &lt;on|off&gt;</code> - Toggles path tracing</li>
              </ul>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Always verify target before using commands</li>
                <li>Use appropriate access level for each command</li>
                <li>Keep track of changes made to characters</li>
                <li>Use radius-based commands carefully</li>
                <li>Test commands on test server first</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: Some commands may require specific access levels or permissions.
                Always ensure you have the appropriate rights before using any command.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 