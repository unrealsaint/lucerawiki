import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function PetConfigurationGuide() {
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
            <h1>Pet Configuration Guide</h1>
            <p className="lead">
              Learn how to configure and customize pets in your server, including their stats, skills, and behavior.
            </p>

            <h2>Configuration File</h2>
            <p>
              The configuration is done in the pet data XML file:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`data/stats/pets/pet_data.xml`}
              </pre>
            </div>

            <h2>Basic Pet Configuration</h2>
            <p>
              Let's analyze the Wolf pet configuration as an example:
            </p>

            <h3>1. Basic Parameters</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<pet id="12077" max_lvl="81"> <!-- Wolf -->
    <set name="control_item_id" value="2375"/>
    <set name="food_item_id" value="2515"/>
    <set name="is_wolf" value="true" />
    <set name="min_level" value="1"/>
</pet>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Key parameters:
                - control_item_id: Item used to control the pet
                - food_item_id: Item used to feed the pet
                - is_wolf: Identifies the pet type
                - min_level: Minimum level required to use the pet
              </p>
            </div>

            <h3>2. Experience Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<set name="exp" value="0 636 798 1236 2158 3836 6598 10836 16998 25596 37198 52436 71998 96636 127158 164436 209398 263036 326398 400596 486798 586236 700198 830036 977158 1143036 1329198 1537236 1768798 2025596 2309398 2622036 2965398 3341436 3752158 4199636 4685998 5213436 5784198 6400596 7064998 7779836 8547598 9370836 10252158 11194236 12199798 13271636 14412598 15625596 17557599 19606656 21777399 24074556 26502939 29922294 33529819 37332294 41336619 45549814 52193622 59172334 66497022 74178934 82229502 93470612 105234462 117537012 130394462 143823252 157840062 176117249 198983024 226778887 259859867 298594764 352320714 412836202 480562077 555934039 639402879"/>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Experience points required for each level
              </p>
            </div>

            <h3>3. Stats Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- HP Configuration -->
<set name="hp" value="31 37 45 53 63 73 85 98 113 128 146 157 169 182 195 208 223 238 254 270 287 305 324 343 364 385 406 429 453 477 502 528 554 582 610 639 669 700 731 763 796 830 864 899 935 971 1008 1045 1084 1122 1161 1201 1240 1281 1321 1362 1403 1444 1485 1527 1568 1609 1651 1692 1732 1773 1813 1853 1892 1931 1969 2006 2043 2079 2114 2148 2182 2214 2245 2275 2304"/>

<!-- HP Regeneration -->
<set name="hp_regen" value="2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 6 6 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 9"/>

<!-- MP Configuration -->
<set name="mp" value="25 30 34 39 44 49 54 59 64 69 74 79 84 90 95 100 106 111 117 122 131 139 148 157 165 174 183 192 201 210 220 229 238 248 257 267 276 286 296 306 323 339 356 373 390 408 425 443 460 478 496 514 532 551 569 588 606 625 644 663 682 702 721 741 760 780 800 820 840 861 881 902 923 944 964 986 1007 1028 1050 1071 1073"/>

<!-- MP Regeneration -->
<set name="mp_regen" value="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4"/>`}
              </pre>
            </div>

            <h3>4. Combat Stats</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<!-- Physical Attack -->
<set name="p_atk" value="2 2 2 2 3 3 3 4 4 4 5 5 6 6 11 12 12 13 14 15 15 16 17 19 20 21 22 24 25 27 28 30 32 34 36 38 40 43 45 48 50 53 56 59 62 66 69 72 76 80 84 88 92 96 101 105 110 114 119 124 129 134 139 144 149 154 160 165 170 176 181 186 192 197 202 207 212 217 222 227 228"/>

<!-- Physical Defense -->
<set name="p_def" value="11 11 11 12 12 13 13 14 14 15 16 16 17 17 27 28 28 29 30 30 31 32 32 33 34 35 36 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 59 60 61 62 63 64 66 67 68 69 70 72 73 74 75 76 78 79 80 81 82 84 85 86 87 88 89 91 92 93 94 95"/>

<!-- Magic Attack -->
<set name="m_atk" value="1 1 1 1 2 2 2 2 3 3 3 3 4 4 5 5 5 6 6 7 8 8 9 10 11 11 12 13 14 15 16 18 19 20 22 23 25 26 28 30 31 33 35 37 40 42 44 47 49 52 54 57 60 63 66 69 72 75 78 82 85 88 92 95 99 103 106 110 113 117 121 124 128 132 135 139 142 146 149 152 153"/>

<!-- Magic Defense -->
<set name="m_def" value="8 8 8 9 9 9 10 10 10 11 11 12 12 13 13 13 14 14 15 15 16 16 17 18 18 19 19 20 21 21 22 22 23 24 25 25 26 27 27 28 29 30 30 31 32 33 34 34 35 36 37 38 39 40 40 41 42 43 44 45 46 47 47 48 49 50 51 52 53 54 55 55 56 57 58 59 60 60 61 62 63"/>`}
              </pre>
            </div>

            <h2>Special Pet Types</h2>

            <h3>1. Strider Configuration</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<pet id="12526" max_lvl="81"> <!-- Strider -->
    <set name="control_item_id" value="4422"/>
    <set name="food_item_id" value="4425"/>
    <set name="is_strider" value="true"/>
    <set name="min_level" value="1"/>
    <!-- Additional strider-specific configurations -->
</pet>`}
              </pre>
              <p className="text-sm text-gray-400 mt-2">
                Note: Strider configuration requires specific parameters and should be handled carefully
              </p>
            </div>

            <h3>2. Beast Farm Trained Pets</h3>
            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <pre className="text-sm">
{`<pet id="12564" max_lvl="81"> <!-- Trained Pet -->
    <set name="control_item_id" value="4422"/>
    <set name="food_item_id" value="4425"/>
    <set name="is_trained" value="true"/>
    <set name="min_level" value="1"/>
    <!-- Additional trained pet configurations -->
</pet>`}
              </pre>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Balance pet stats carefully for each level</li>
                <li>Test pet behavior and skills thoroughly</li>
                <li>Consider server economy when setting pet requirements</li>
                <li>Document custom pet configurations</li>
                <li>Monitor player feedback on pet balance</li>
                <li>Keep backup copies of pet configuration files</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: When configuring pets, remember that their stats and skills should be balanced
                according to their level and type. Special care should be taken when configuring
                striders and trained pets, as they have unique mechanics and requirements.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 