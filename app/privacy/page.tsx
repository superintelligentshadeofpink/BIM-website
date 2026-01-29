"use client";

import { useState } from "react";

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            <a href="/manifest369" className="font-roboto text-[16px] text-white">Manifest369</a>
            <a href="/profilePerfect" className="font-roboto text-[16px] text-white">ProfilePerfect</a>
            <a href="/privacy" className="font-roboto text-[16px] text-white">Privacy</a>
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
                  Manifest369
                </a>
                <a
                  href="/profilePerfect"
                  className="font-roboto text-[16px] text-black hover:text-[#ff31d2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ProfilePerfect
                </a>
                <a
                  href="/privacy"
                  className="font-roboto text-[16px] text-black hover:text-[#ff31d2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-[1920px] min-h-screen bg-white relative mx-auto overflow-x-hidden">

        {/* Introduction */}
        <section className="mt-10 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Introduction
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">Last Updated: January 29, 2026</p>
            <p className="mb-2">
              Boldin Magenta ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard your information when you use our applications, including Manifest369 and ProfilePerfect (each an "App"
              and collectively the "Apps").
            </p>
            <p className="mt-4">By using any of our Apps, you agree to the collection and use of information in accordance with this policy.</p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Information We Collect
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">DATA COLLECTED</p>
            <p className="mb-2">Our Apps are designed with privacy in mind. The data we collect varies by App:</p>

            <p className="mt-4 mb-1 font-semibold">Manifest369</p>
            <p className="mb-1">
              • Daily Completion Status: We store only whether or not you completed your Manifestation practice each day, used solely to
              track your progress and provide completion statistics.
            </p>
            <p className="mb-1">
              • Content Not Stored: We do not store, collect, or transmit any of the content you enter during your Manifestation practice.
              This includes all text you write in Steps 1, 2, and 3.
            </p>

            <p className="mt-4 mb-1 font-semibold">ProfilePerfect</p>
            <p className="mb-1">
              • Photos: When you enhance a photo, the image is temporarily transmitted to our AI processing partner (Replicate) for
              enhancement. Photos are processed immediately and are not permanently stored on our servers or by Replicate. Enhanced photos
              are saved only to your device&apos;s local storage.
            </p>
            <p className="mb-1">
              • Purchase History: We track your in-app purchases (photo credits or subscriptions) through RevenueCat to provide you with
              access to enhancement features. This includes transaction details and subscription status.
            </p>
            <p className="mb-1">
              • Enhancement Usage: We store the number of photo enhancements you&apos;ve performed to enforce usage limits and track your
              remaining credits.
            </p>

            <p className="mt-4 mb-1 font-semibold">All Apps</p>
            <p className="mb-1">
              • Device Information: Our Apps may collect basic device information necessary for functionality, such as device type and
              operating system version, which is standard for mobile applications.
            </p>
            <p className="mb-1">
              • Payment Information: If you make in-app purchases, payment information is processed through Apple&apos;s App Store. We do
              not have access to your payment details.
            </p>
            <p className="mb-1">
              • Advertising Data: With your permission, we collect limited data for advertising attribution through the Meta (Facebook)
              SDK. This includes device identifiers and app events (such as app launches and purchases) to measure the effectiveness of our
              advertising campaigns. You can control this through the App Tracking Transparency prompt when you first open the App, or in
              your device&apos;s Settings under Privacy &amp; Security → Tracking.
            </p>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            How We Use Information
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">USE OF DATA</p>
            <p className="mb-2">The data we collect is used exclusively for the following purposes:</p>

            <p className="mt-4 mb-1 font-semibold">Manifest369</p>
            <p className="mb-1">• To track your daily Manifestation completion status</p>
            <p className="mb-1">• To provide you with progress statistics and completion history</p>
            <p className="mb-1">• To enable features such as streak tracking and daily reminders</p>

            <p className="mt-4 mb-1 font-semibold">ProfilePerfect</p>
            <p className="mb-1">• To process and enhance your photos using AI technology</p>
            <p className="mb-1">• To manage your photo credits and subscription status</p>
            <p className="mb-1">• To enforce usage limits and prevent abuse</p>
            <p className="mb-1">• To enable photo enhancement features</p>

            <p className="mt-4 mb-1 font-semibold">All Apps</p>
            <p className="mb-1">• To improve App functionality and user experience</p>
            <p className="mb-1">• To measure advertising campaign effectiveness (if you grant tracking permission)</p>

            <p className="mt-4">
              We do not sell or rent your personal data. If you grant tracking permission, anonymised advertising data is shared with Meta
              (Facebook) solely to measure ad campaign performance. We do not share your content or personal information with third parties
              for their marketing purposes.
            </p>
          </div>
        </section>

        {/* Data Storage */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Data Storage
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">WHERE YOUR DATA IS STORED</p>

            <p className="mt-4 mb-1 font-semibold">Manifest369</p>
            <p className="mb-1">
              Your daily completion tracking data is stored locally on your device. Your Manifestation content is never stored, either
              locally or remotely.
            </p>

            <p className="mt-4 mb-1 font-semibold">ProfilePerfect</p>
            <p className="mb-1">• Enhanced photos are saved to your device&apos;s local photo library (with your permission)</p>
            <p className="mb-1">
              • Purchase and credit information is stored by RevenueCat (our payment processor) and synchronized to your device
            </p>
            <p className="mb-1">
              • Photos are temporarily transmitted to Replicate (our AI processing partner) for enhancement but are not permanently stored
              by them
            </p>

            <p className="mt-4 mb-1 font-semibold">All Apps</p>
            <p className="mb-1">• We do not maintain a central database of your personal content</p>
            <p className="mb-1">• If you delete an App, all locally stored data will be removed</p>
            <p className="mb-1">
              • Some data (such as purchase history) may be retained by third-party processors (Apple, RevenueCat) according to their
              policies
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Data Security
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">PROTECTING YOUR INFORMATION</p>
            <p className="mb-2">We take the security of your information seriously:</p>

            <p className="mt-4 mb-1">• Data is stored locally on your device using standard iOS security measures</p>
            <p className="mb-1">• For Manifest369: We do not transmit your Manifestation content over the internet</p>
            <p className="mb-1">
              • For ProfilePerfect: Photos are transmitted securely via encrypted HTTPS connections to our AI processing partner. Photos
              are processed immediately and are not retained after processing is complete
            </p>
            <p className="mb-1">• We implement appropriate technical measures to protect any data we do collect</p>
            <p className="mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your
              data, we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* AI and Machine Learning (ProfilePerfect) */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            AI and Machine Learning (ProfilePerfect)
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">ARTIFICIAL INTELLIGENCE</p>
            <p className="mb-2">ProfilePerfect uses artificial intelligence to enhance your photos:</p>

            <p className="mt-4 mb-1">
              • Technology: We use Google&apos;s Gemini AI (via Replicate) to process and enhance photos.
            </p>
            <p className="mb-1">
              • Processing: Photos are sent to Replicate&apos;s servers, processed using AI, and the enhanced version is returned to your
              device.
            </p>
            <p className="mb-1">
              • Retention: Neither we nor Replicate permanently store your photos. Images are deleted immediately after processing.
            </p>
            <p className="mb-1">
              • Purpose: AI processing is used solely to enhance photo quality and is not used for training AI models or any other
              purpose.
            </p>
            <p className="mb-1">
              • Control: You choose which photos to enhance. Photos are only processed when you explicitly tap the &quot;Enhance Photo&quot;
              button.
            </p>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Third-Party Services
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">EXTERNAL SERVICES</p>
            <p className="mb-2">Our Apps may use the following third-party services:</p>

            <p className="mt-4 mb-1">
              • Apple App Store: For processing App purchases. Apple&apos;s privacy policy applies to payment transactions.
            </p>
            <p className="mb-1">
              • Apple iCloud: If you enable iCloud backup, your device data may be backed up to iCloud according to Apple&apos;s terms and
              privacy policy.
            </p>
            <p className="mb-1">
              • RevenueCat (ProfilePerfect only): Manages in-app subscriptions and purchases. RevenueCat&apos;s privacy policy applies:
              https://www.revenuecat.com/privacy
            </p>
            <p className="mb-1">
              • Replicate (ProfilePerfect only): Processes photos for AI enhancement using Google&apos;s Gemini technology. Photos are
              processed immediately and not stored. Replicate&apos;s privacy policy applies: https://replicate.com/privacy
            </p>
            <p className="mb-1">
              • Meta (Facebook) SDK: If you grant tracking permission via the App Tracking Transparency prompt, the Meta SDK collects
              device identifiers and app events to help us measure advertising effectiveness. This data is processed according to Meta&apos;s
              Privacy Policy: https://www.facebook.com/privacy/policy/. If you decline tracking, this data is not collected.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Your Rights
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">YOUR PRIVACY RIGHTS</p>
            <p className="mb-2">You have the following rights regarding your data:</p>

            <p className="mt-4 mb-1">
              • Access: You can view your data within the Apps (completion tracking in Manifest369, credits and purchase history in
              ProfilePerfect)
            </p>
            <p className="mb-1">• Deletion:</p>
            <p className="mb-1">  - Manifest369: Delete all data by uninstalling the App</p>
            <p className="mb-1">
              - ProfilePerfect: Delete enhanced photos from your device&apos;s photo library; delete usage data by uninstalling the App
            </p>
            <p className="mb-1">
              - Purchase history is retained by Apple and RevenueCat according to their policies
            </p>
            <p className="mb-1">
              • Photo Access (ProfilePerfect): You can revoke photo library permissions at any time in Settings → Privacy → Photos
            </p>
            <p className="mb-1">
              • No Account Required: Our Apps don&apos;t require account registration, so you maintain full control over your local data
            </p>
            <p className="mb-1">
              • Restore Purchases (ProfilePerfect): You can restore previous purchases through the Settings screen in the App
            </p>
            <p className="mt-4">
              If you have questions about your rights or wish to exercise them, please contact us at the email address provided below.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Children's Privacy
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">PROTECTING MINORS</p>
            <p className="mb-2">
              Our Apps are not intended for children under the age of 13. We do not knowingly collect personal information from children
              under 13.
            </p>
            <p className="mt-4">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us
              immediately so we can delete such information.
            </p>
          </div>
        </section>

        {/* Changes to This Policy */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Changes to This Policy
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">UPDATES TO PRIVACY POLICY</p>
            <p className="mb-2">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            
            <p className="mt-4 mb-1">• Posting the new Privacy Policy on this page</p>
            <p className="mb-1">• Updating the "Last Updated" date at the top of this policy</p>
            <p className="mt-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mt-20 ml-[34px] mb-40">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Contact Us
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">QUESTIONS ABOUT PRIVACY</p>
            <p className="mb-2">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <p className="mt-4 mb-1">Email: support@boldinmagenta.com</p>
            <p className="mb-1">Response Time: Within 24-48 hours</p>
            <p className="mt-4">We are committed to addressing your privacy concerns and will respond to your inquiries promptly.</p>
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
          <a href="/manifest369" className="font-roboto text-[16px] text-white">Manifest369</a>
          <a href="/profilePerfect" className="font-roboto text-[16px] text-white">ProfilePerfect</a>
          <a href="/privacy" className="font-roboto text-[16px] text-white">Privacy</a>
        </div>
        
        <p className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[499px] font-roboto text-[14px] text-[#b3b1b7]">
          BEAUTIFUL APPS FOR A RICH LIFE
        </p>
      </footer>
    </div>
  );
}

