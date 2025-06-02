import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function HtmlReloadGuide() {
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
            <h1>How to Reload HTML</h1>
            <p className="lead">
              Learn how to reload HTML files without restarting the server.
            </p>

            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-4 my-4">
              <p className="text-blue-200 font-semibold">Important Note</p>
              <p className="text-blue-100">
                This feature is recommended for test servers only. For battle servers, you should use the default setting.
              </p>
            </div>

            <h2>Configuration</h2>
            <p>To enable automatic HTML reloading:</p>
            <ol>
              <li>Open your <code>server.properties</code> file</li>
              <li>Find the <code>HtmCacheMode</code> setting</li>
              <li>Change the value to <code>0</code></li>
            </ol>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <code>HtmCacheMode = 0</code>
            </div>

            <h2>Default Settings</h2>
            <p>The default setting for <code>HtmCacheMode</code> is <code>2</code>. Here's what each mode means:</p>
            <ul>
              <li><code>0</code> - Automatic HTML reloading (test servers only)</li>
              <li><code>2</code> - Standard caching (recommended for battle servers)</li>
            </ul>

            <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4 my-4">
              <h3 className="text-yellow-200 font-semibold">Best Practices</h3>
              <ul className="list-disc list-inside text-yellow-100">
                <li>Use mode 0 only on test servers</li>
                <li>Always use mode 2 on battle servers</li>
                <li>No commands are needed to reload HTML with mode 0</li>
                <li>Changes to HTM files will be automatically detected</li>
              </ul>
            </div>

            <h2>Usage</h2>
            <p>With <code>HtmCacheMode = 0</code>:</p>
            <ol>
              <li>Make changes to your HTM files</li>
              <li>Save the files</li>
              <li>Changes will be automatically applied</li>
              <li>No server restart required</li>
            </ol>

            <div className="bg-gray-800 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-400">
                Note: This feature is particularly useful during development and testing phases.
                It allows for quick iteration and testing of HTML changes without server restarts.
              </p>
            </div>
          </article>
        </main>
      </div>
    </>
  )
} 