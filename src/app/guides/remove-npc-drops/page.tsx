import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function RemoveNpcDropsGuide() {
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
            <h1>Remove NPC Drops Guide</h1>
            <p className="lead">
              Learn how to remove specific items from NPC drops using the NoDropItems configuration.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the server properties file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`gameserver/config/server.properties`}
              </pre>
            </div>

            <h2>NoDropItems Configuration</h2>
            <p>
              To remove specific items from NPC drops, add their IDs to the NoDropItems parameter:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`NoDropItems = itemId1,itemId2,itemId3,...`}
              </pre>
            </div>

            <h2>Example Configuration</h2>
            <p>
              Here's an example configuration for a PvP server that removes various items from drops:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`NoDropItems = 7638,7835,8619,8621,17,1341,1342,1343,1344,1345,7639,7640,7641,7642,7643,7644,7645,7646,7647,7648,7649,7650,7651,7652,7653,7654,7655,7656,7657,7658,7659,7660,7661,7662,7663,7664,7665,7666,7667,7668,7669,7670,7671,7672,7673,7674,7675,7676,5809,5810,5811,5812,5813,5814,5815,5816,4906,4907,4908,4909,4910,4911,4912,4913,4914,4915,4916,4917,4918,4919,4920,4921,4922,4923,4924,4925,4926,4927,4928,4929,4930,4931,4932,4933,4934,4935,4200,4201,4203,4204,4205,4206,4207,4208,3039,3040,3041,3042,3043,3044,3045,3046,3047,3048,3049,3050,3051,3052,3053,3054,3055,3056,3057,3058,3059,3060,3061,3062,3063,3064,3065,3066,3067,3068,3069,3070,3071,3072,3073,3074,3075,3076,3077,3078,3079,3080,3081,3082,3083,3084,3085,3086,3087,3088,3089,3090,3091,3092,3093,3094,3095,3096,3097,3098,3099,3100,3101,3102,3103,3104,3105,3106,3107,3108,3109,3110,3111,3112,3113,3114,3115,3116,3117,3118,1512,1513,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1524,1525,1526,1527,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1377,1378,1379,1380,1381,1382,1383,1384,1385,1386,1387,1388,1389,1390,1391,1392,1393,1394,1395,1396,1397,1398,1399,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1409,1410,1411,1412,1413,1414,1415,1416,1417,1418,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,8877,8878,8879,8880,8881,8882,8883,8884,8885,8886,8887,8888,8889,8890,8891,8892,8893,8894,8895,8896,8897,8898,8899,8900,8901,8902,8903,8904,8905,8906,8907,8908`}
              </pre>
            </div>

            <h2>How It Works</h2>
            <p>
              When an NPC dies, the server checks if any of its potential drops are in the NoDropItems list.
              If an item is found in the list, it will be removed from the possible drops, even if it was
              originally configured to drop from that NPC.
            </p>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Keep a backup of your original drop configurations</li>
                <li>Document which items you've removed from drops</li>
                <li>Test the configuration thoroughly after changes</li>
                <li>Consider server economy when removing items</li>
                <li>Monitor player feedback on drop changes</li>
                <li>Update the list when adding new items to remove</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: The NoDropItems configuration affects all NPCs in the server. If you need to remove
                drops from specific NPCs only, you should modify their individual drop configurations
                instead of using this global setting.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 