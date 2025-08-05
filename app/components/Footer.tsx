import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1450px] mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center font-bold">
                Ч
              </div>
              <span className="text-xl font-bold">Chrdk</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              App for organizing and finding your belongings. No more lost items
              and endless searches around the house.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Telegram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L9.864 13.63l-2.896-.918c-.63-.196-.64-.63.135-.931L19.78 9.221c.523-.19.982.12.114.855z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="VK"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.711-1.033-1.026-1.49-.116-1.49.525v1.711c0 .263-.132.525-.525.525H9.82c-1.976 0-3.692-1.184-3.692-3.16V8.052c0-.394.263-.657.657-.657h1.711c.525 0 .525.263.525.657v4.342c.79-1.184 2.104-2.631 2.631-2.631.263 0 .525.131.525.394v3.16c.657-.79 1.711-2.367 2.104-3.16.131-.263.394-.394.657-.394h1.711c.525 0 .657.394.394.92-.526 1.052-1.315 2.234-1.971 3.16.657.79 1.578 1.842 2.234 2.631.394.525.263.92-.131.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/help/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help/contacts"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/help/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  href="/help/policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/help/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Download the app</h3>
              <p className="text-gray-400">Available for iOS and Android</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Chrdk. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Version 1.0</span>
              <span>PE Alexander Golubkin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
