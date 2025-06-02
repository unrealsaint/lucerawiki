import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function KamalokaItemReuseGuide() {
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
            <h1>Kamaloka Item Reuse Guide</h1>
            <p className="lead">
              Learn how to configure item reuse for Kamaloka instances using custom items and scripts.
            </p>

            <h2>Overview</h2>
            <p>
              This guide explains how to create items that can reset Kamaloka instance reuse timers. These items can be configured to work with specific instance groups or individual instances.
            </p>

            <h2>Item Handler Implementation</h2>
            <p>
              Create a new item handler class in <code>gameserver/handler/items/</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`package handler.items;

import l2.gameserver.model.Player;
import l2.gameserver.model.items.ItemInstance;
import l2.gameserver.network.l2.s2c.SystemMessage;

public class Kamaloka extends SimpleItemHandler
{
    private static final int[] ITEM_IDS = new int[] { 13010, 13297, 20026, 13011, 13298, 20027, 13012, 13299, 20028 };

    @Override
    public int[] getItemIds()
    {
        return ITEM_IDS;
    }

    @Override
    protected boolean useItemImpl(Player player, ItemInstance item, boolean ctrl)
    {
        int itemId = item.getItemId();

        switch(itemId)
        {
            case 13010:
            case 13297:
            case 20026:
                useItem(player, item, 1);
                player.removeInstanceReusesByGroupId(1);
                break;
            case 13011:
            case 13298:
            case 20027:
                useItem(player, item, 1);
                player.removeInstanceReusesByGroupId(2);
                break;
            case 13012:
            case 13299:
            case 20028:
                useItem(player, item, 1);
                player.removeInstanceReusesByGroupId(3);
                break;
        }
        player.sendPacket(new SystemMessage(SystemMessage.S1_CANNOT_BE_USED_DUE_TO_UNSUITABLE_TERMS).addItemName(itemId));
        return false;
    }
}`}
              </pre>
            </div>

            <h2>Instance Group Configuration</h2>
            <p>
              In your instance XML file, specify the shared reuse group:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<instance id="72" name="Kamaloka, Hall of the Abyss" maxChannels="10" collapseIfEmpty="5" timelimit="30" dispelBuffs="true">
    <!-- Other settings -->
    <reuse resetReuse="30 6 * * *" setUponEntry="true" sharedReuseGroup="1"/>
</instance>`}
              </pre>
            </div>

            <h2>Individual Instance Reset</h2>
            <p>
              To reset a specific instance instead of a group, use <code>removeInstanceReuse</code>:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`protected boolean useItemImpl(Player player, ItemInstance item, boolean ctrl)
{
    int itemId = item.getItemId();

    switch(itemId)
    {
        case 13010:
        case 13297:
        case 20026:
            useItem(player, item, 1);
            player.removeInstanceReuse(22);
            break;
        case 13011:
        case 13298:
        case 20027:
            useItem(player, item, 1);
            player.removeInstanceReuse(23);
            break;
        case 13012:
        case 13299:
        case 20028:
            useItem(player, item, 1);
            player.removeInstanceReuse(24);
            break;
    }
    player.sendPacket(new SystemMessage(SystemMessage.S1_CANNOT_BE_USED_DUE_TO_UNSUITABLE_TERMS).addItemName(itemId));
    return false;
}`}
              </pre>
            </div>

            <h2>Important Notes</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Items will be consumed when used</li>
                <li>Instance reuse timers are reset at 6:30 AM by default</li>
                <li>Group-based reset affects all instances in the same group</li>
                <li>Individual instance reset only affects the specified instance</li>
                <li>Make sure to compile and register your item handler</li>
              </ul>
            </div>

            <h2>Best Practices</h2>
            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use group-based reset for related instances</li>
                <li>Use individual reset for specific instance access</li>
                <li>Configure appropriate item requirements</li>
                <li>Test thoroughly before deployment</li>
                <li>Consider server timezone when setting reset time</li>
                <li>Backup your configuration before making changes</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The item reuse system allows for flexible control over instance access.
                Make sure to configure appropriate restrictions and requirements for your server's needs.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 