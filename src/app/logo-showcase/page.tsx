'use client';

import { FreshTrackLogo, FreshTrackWordmark, FreshTrackText } from '@/components/freshtrack/logo';

export default function LogoShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">FreshTRACK Logo System</h1>
          <p className="text-lg text-gray-600">
            Complete brand identity components with flexible sizing and variations
          </p>
        </div>

        {/* Full Wordmark Variations */}
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Wordmark</h2>

          <div className="space-y-8">
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-600 w-24">Large</span>
              <FreshTrackWordmark size="lg" />
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-600 w-24">Medium</span>
              <FreshTrackWordmark size="md" />
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-600 w-24">Small</span>
              <FreshTrackWordmark size="sm" />
            </div>
          </div>
        </section>

        {/* Logo Icon Only */}
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Icon Variations</h2>

          <div className="grid grid-cols-5 gap-8">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-xl mb-3 flex items-center justify-center">
                <FreshTrackLogo size="xs" />
              </div>
              <span className="text-xs font-medium text-gray-600">Extra Small</span>
              <span className="text-xs text-gray-400">24px</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-xl mb-3 flex items-center justify-center">
                <FreshTrackLogo size="sm" />
              </div>
              <span className="text-xs font-medium text-gray-600">Small</span>
              <span className="text-xs text-gray-400">32px</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-xl mb-3 flex items-center justify-center">
                <FreshTrackLogo size="md" />
              </div>
              <span className="text-xs font-medium text-gray-600">Medium</span>
              <span className="text-xs text-gray-400">48px</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-xl mb-3 flex items-center justify-center">
                <FreshTrackLogo size="lg" />
              </div>
              <span className="text-xs font-medium text-gray-600">Large</span>
              <span className="text-xs text-gray-400">64px</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-xl mb-3 flex items-center justify-center">
                <FreshTrackLogo size="xl" />
              </div>
              <span className="text-xs font-medium text-gray-600">Extra Large</span>
              <span className="text-xs text-gray-400">96px</span>
            </div>
          </div>
        </section>

        {/* Text Only Wordmark */}
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Text-Only Wordmark</h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-600 w-24">Large</span>
              <FreshTrackText size="lg" />
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-600 w-24">Medium</span>
              <FreshTrackText size="md" />
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
              <span className="text-sm font-medium text-gray-600 w-24">Small</span>
              <FreshTrackText size="sm" />
            </div>
          </div>
        </section>

        {/* Background Variations */}
        <section className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Background Variations</h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 flex items-center justify-center">
              <FreshTrackWordmark />
            </div>

            <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center">
              <FreshTrackWordmark />
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 flex items-center justify-center">
              <FreshTrackWordmark />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <p className="text-xs text-center text-gray-600">White Background</p>
            <p className="text-xs text-center text-gray-600">Dark Background</p>
            <p className="text-xs text-center text-gray-600">Colored Background</p>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Recommended Use</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Use full wordmark in headers and primary navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Use icon-only for app icons, favicons, and compact spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Maintain consistent sizing throughout the application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>Use appropriate size variants for different contexts</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ Avoid</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Don't distort or stretch the logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Don't change brand colors without purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Don't use low-contrast backgrounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Don't place logo on busy or patterned backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Color Reference */}
        <section className="bg-white rounded-2xl p-8 mt-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Colors</h2>

          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="w-full h-24 rounded-xl bg-[#008000] mb-3 border border-gray-200"></div>
              <p className="text-sm font-semibold text-gray-900">Dark Green</p>
              <p className="text-xs text-gray-600 font-mono">#008000</p>
              <p className="text-xs text-gray-500 mt-1">Primary brand color</p>
            </div>

            <div>
              <div className="w-full h-24 rounded-xl bg-[#7CB342] mb-3 border border-gray-200"></div>
              <p className="text-sm font-semibold text-gray-900">Lime Green</p>
              <p className="text-xs text-gray-600 font-mono">#7CB342</p>
              <p className="text-xs text-gray-500 mt-1">Secondary accent</p>
            </div>

            <div>
              <div className="w-full h-24 rounded-xl bg-[#A5D6A7] mb-3 border border-gray-200"></div>
              <p className="text-sm font-semibold text-gray-900">Light Green</p>
              <p className="text-xs text-gray-600 font-mono">#A5D6A7</p>
              <p className="text-xs text-gray-500 mt-1">Accent highlights</p>
            </div>

            <div>
              <div className="w-full h-24 rounded-xl bg-[#9E9E9E] mb-3 border border-gray-200"></div>
              <p className="text-sm font-semibold text-gray-900">Gray</p>
              <p className="text-xs text-gray-600 font-mono">#9E9E9E</p>
              <p className="text-xs text-gray-500 mt-1">Supporting text</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
