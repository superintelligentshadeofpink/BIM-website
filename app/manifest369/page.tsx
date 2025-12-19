"use client";

import { useState } from "react";

export default function Manifest369Support() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full max-w-[1920px] min-h-screen bg-white relative mx-auto overflow-x-hidden">
      {/* Header */}
      <header className="max-w-[1920px] w-full h-[453px] overflow-hidden">
        <div className="absolute h-[454px] left-0 top-0 w-full">
   

          {/* Background Gradients */}
          <img alt="" className="absolute h-[453px] left-0 top-0 w-full object-cover" src="/images/small-header-bg.png" />
          
          {/* Top overlay */}
          <img src="/images/top-right-blob.png" alt="" className="max-w-[1920px] w-full h-[269px] absolute right-0 top-0" />
          
          {/* Page Title */}
          <h1 className="absolute capitalize font-darker-grotesque font-semibold text-[32px] sm:text-[40px] md:text-[60px] text-white left-1/2 -translate-x-1/2 md:left-[200px] md:translate-x-0 top-[150px] sm:top-[180px] md:top-[209px] leading-none text-center md:text-left px-4">
            manifest369 Support
          </h1>
        </div>

         {/* Navigation */}
         <nav className="absolute left-[70px] top-[50px] right-[70px] md:right-auto flex items-center md:justify-start md:gap-[250px] md:left-[70px] sm:left-[20px] sm:right-[20px] sm:gap-4">
          {/* Hamburger Menu Button - visible only on mobile */}



          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 z-50 relative p-2 mt-[5px] ml-2 self-center"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Logo - visible on all screens */}
          <p className="font-darker-grotesque font-semibold text-[28px] sm:text-[24px] self-center">
            <a href="/">
            <span className="text-white">BOLDIN</span>
            <span className="text-[#ffc9d6]">MAGENTA</span>
            </a>
          </p>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-[30px] ml-auto">
            <a href="/manifest369" className="font-roboto text-[16px] text-white">Support</a>
            {/* TODO - Make this image an icon instead 
            <img src={imgEllipse7} alt="" className="w-[4px] h-[4px]" />
            <span className="font-roboto text-[16px] text-white">Download on the app store</span> */}
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 md:hidden ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6 pt-20">
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-black"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Logo in mobile menu */}
              <p className="font-darker-grotesque font-semibold text-[24px] mb-8">
                <a href="/">
                  <span className="text-black">BOLDIN</span>
                  <span className="text-[#ffc9d6]">MAGENTA</span>
                </a>
              </p>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6">
                <a
                  href="/manifest369"
                  className="font-roboto text-[16px] text-black hover:text-[#ff31d2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-[1920px] min-h-screen bg-white relative mx-auto overflow-x-hidden">

        {/* Contact Information */}
        <section className="mt-10 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Contact Information
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">SUPPORT CONTACT</p>
            <p className="mb-2">Email: support@boldinmagenta.com</p>
            <p className="mb-2">Response Time: Within 24-48 hours</p>
            <p className="mt-4">For urgent issues, please email with "URGENT" in the subject line.</p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Getting Started
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">HOW TO USE MANIFEST369</p>
            <p className="mb-2">Step 1: Write your desire in the present tense 3 times.</p>
            <p className="mb-2">Step 2: Write your intended action 6 times</p>
            <p className="mb-2">Step 3: Write how you feel when your desire is achieved 9 times</p>
            <p className="mt-4">Tip: Write in present tense as if it's already happening Example: "I am grateful for my successful business"</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Frequently Asked Questions
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px] space-y-4">
            <div>
              <p className="mb-1">Q: What is the 3-6-9 method?</p>
              <p className="mb-1">A: A structured journaling practice where you write your desire 3 times, your intention 6 times, and</p>
              <p>how you feel after you have a achieved your desire 9 times.</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Q: Do I need Premium to use the app?</p>
              <p>A: No. All core journaling features are free. Premium adds tracking, reminders, and removes ads.</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Q: How do subscriptions work?</p>
              <p>A: Premium is $4.99 USD/year, billed annually through your iTunes account. Cancel anytime in Settings.</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Q: Will this guarantee my goals come true?</p>
              <p>A: Manifest369 is a journaling tool for focus and consistency. Results depend on your actions and commitment.</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Q: Where is my data stored?</p>
              <p>A: Your journal entries are not stored after entering. Your daily tracking is stored locally on your phone.</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Q: How do I cancel my subscription?</p>
              <p>A: Open iPhone Settings → Your Name → Subscriptions → Manifest369 → Cancel Subscription</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Q: How do I restore my Premium purchase?</p>
              <p>A: Settings → Go Premium → Restore Previous Purchase</p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Troubleshooting
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">COMMON ISSUES</p>
            
            <div className="mt-4">
              <p className="mb-1">Music not playing:</p>
              <p className="mb-1">- Check device volume</p>
              <p className="mb-1">- Ensure silent mode is off</p>
              <p className="mb-2">- Restart the app</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Ads not loading:</p>
              <p className="mb-1">- Check internet connection</p>
              <p className="mb-2">- This is normal behaviour for Premium subscribers</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">Premium features not unlocking:</p>
              <p className="mb-1">- Tap "Restore Previous Purchase" in subscription screen</p>
              <p className="mb-2">- Ensure you're signed in with same Apple ID</p>
            </div>
            
            <div className="mt-4">
              <p className="mb-1">App crashes:</p>
              <p className="mb-1">- Update to latest iOS version</p>
              <p className="mb-1">- Reinstall the app</p>
              <p>- Contact support if issue persists</p>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Premium Features
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">PREMIUM SUBSCRIPTION</p>
            
            <p className="mt-4 mb-1">What's Included:</p>
            <p className="mb-1">✓ Daily completion tracking</p>
            <p className="mb-1">✓ Reminder notifications</p>
            <p className="mb-2">✓ Ad-free experience</p>
            
            <p className="mt-4 mb-1">Price: $4.99 USD/year</p>
            <p className="mb-1">Payment: Charged to iTunes Account</p>
            <p className="mb-1">Auto-Renewal: Yes, cancel anytime</p>
            <p>Free Trial: Not currently offered</p>
          </div>
        </section>

        {/* Feature Requests */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Feature Requests
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">SUGGEST A FEATURE</p>
            <p className="mt-4 mb-2">We love hearing from users!</p>
            <p>Send feature requests to: feedback@boldinmagenta.com</p>
          </div>
        </section>

        {/* Privacy */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Privacy
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">Your privacy matters:</p>
            <p className="mb-1">- Journal entries are not stored</p>
            <p className="mb-1">- No data collection or sharing</p>
            <p className="mb-1">- No third-party analytics</p>
            <p>- No account registration required</p>
          </div>
        </section>

        {/* Version Information */}
        <section className="mt-20 ml-[34px] mb-40">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Version Information
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">CURRENT VERSION</p>
            <p className="mb-2">Version 1.0</p>
            
            <p className="mt-4 mb-1">What's New:</p>
            <p className="mb-1">- Initial release</p>
            <p className="mb-1">- 3-6-9 journaling framework</p>
            <p className="mb-1">- Premium tracking features</p>
            <p className="mb-1">- Background music</p>
            <p>- Daily reminders</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-[1920px] w-full h-[546px] mt-[80px] relative">
        <img src="images/footer-bg.png" alt="" className="absolute left-0 top-0 max-w-[1920px] w-full h-[546px] object-cover" />
        
        <p className="absolute left-1/2 -translate-x-1/2 top-[299px] font-codystar text-[40px] text-white opacity-20">
          MANIFEST369
        </p>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[388px] flex items-center gap-[30px]">
          <span className="font-roboto text-[16px] text-white">Support</span>
          {/* <img src={imgEllipse7} alt="" className="w-[4px] h-[4px]" />
          <span className="font-roboto text-[16px] text-white">Download in the App Store</span> */}
        </div>
        
        <p className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[499px] font-roboto text-[14px] text-[#b3b1b7]">
          BEAUTIFUL APPS FOR A RICH LIFE
        </p>
      </footer>
    </div>
  );
}
