"use client";

import { useState } from "react";

export default function ProfilePerfectSupport() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full max-w-[1920px] min-h-screen bg-white relative mx-auto overflow-x-hidden">
      {/* Header */}
      <header className="max-w-[1920px] w-full h-[453px] overflow-hidden">
        <div className="absolute h-[454px] left-0 top-0 w-full">
          {/* Background Gradients */}
          <img
            alt=""
            className="absolute h-[453px] left-0 top-0 w-full object-cover"
            src="/images/small-header-bg.png"
          />

          {/* Top overlay */}
          <img
            src="/images/top-right-blob.png"
            alt=""
            className="max-w-[1920px] w-full h-[269px] absolute right-0 top-0"
          />

          {/* Page Title */}
          <h1 className="absolute capitalize font-darker-grotesque font-semibold text-[32px] sm:text-[40px] md:text-[60px] text-white left-1/2 -translate-x-1/2 md:left-[200px] md:translate-x-0 top-[150px] sm:top-[180px] md:top-[209px] leading-none text-center md:text-left px-4">
            ProfilePerfect Support
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
        {/* Contact Information */}
        <section className="mt-10 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Contact Information
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">SUPPORT CONTACT</p>
            <p className="mb-2">Email: support@boldinmagenta.com</p>
            <p className="mb-2">Response Time: Within 24-48 hours</p>
            <p className="mt-4">For urgent issues, please email with &quot;URGENT&quot; in the subject line.</p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Getting Started
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">HOW TO USE PROFILEPERFECT</p>
            <p className="mb-2">
              <strong>Step 1:</strong> Tap &quot;Get Started&quot; on the welcome screen
            </p>
            <p className="mb-2">
              <strong>Step 2:</strong> Grant photo permissions when prompted
            </p>
            <p className="mb-2">
              <strong>Step 3:</strong> Choose &quot;Take New Photo&quot; or &quot;Choose from Library&quot;
            </p>
            <p className="mb-2">
              <strong>Step 4:</strong> Select your desired enhancement style:
            </p>
            <p className="mb-1">- Professional (LinkedIn, resume, business)</p>
            <p className="mb-1">- Natural (Dating apps, social media)</p>
            <p className="mb-2">- Creative (Instagram, personal brand)</p>
            <p className="mb-2">
              <strong>Step 5:</strong> Tap &quot;Enhance Photo&quot; and wait 10-20 seconds
            </p>
            <p className="mb-2">
              <strong>Step 6:</strong> Compare before/after using the slider
            </p>
            <p className="mb-2">
              <strong>Step 7:</strong> Save your enhanced photo
            </p>
            <p className="mt-4">
              <strong>Tip:</strong> Your first photo is free! No payment required to try.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Frequently Asked Questions
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px] space-y-6">
            <div>
              <p className="mb-1">Q: How does ProfilePerfect enhance photos?</p>
              <p>
                A: We use Google&apos;s Gemini AI technology (via Replicate) to professionally enhance your photos. The AI improves
                lighting, sharpness, and overall quality while maintaining your natural appearance.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: Are my photos stored or shared?</p>
              <p>
                A: No. Photos are sent to our AI processor for enhancement and immediately deleted after processing. We never permanently
                store your photos. Enhanced photos are only saved to your device&apos;s photo library.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: What&apos;s the difference between the three styles?</p>
              <p className="mb-1">
                A: <strong>Professional</strong>: Studio-quality corporate headshots with neutral backgrounds, perfect for LinkedIn
              </p>
              <p className="mb-1">
                <strong>Natural</strong>: Warm, approachable photos with subtle enhancement, ideal for dating apps
              </p>
              <p>
                <strong>Creative</strong>: Stylish, modern portraits with artistic flair, great for Instagram
              </p>
            </div>

            <div>
              <p className="mb-1">Q: How many photos can I enhance for free?</p>
              <p>
                A: Your first photo is completely free with no credit card required. After that, you&apos;ll need to purchase credits or a
                subscription.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: How do credits work?</p>
              <p>
                A: Each photo enhancement uses 1 credit. You can purchase 10 credits for $9.99, or get unlimited enhancements with a
                monthly subscription for $14.99.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: Can I enhance the same photo multiple times?</p>
              <p>
                A: Yes! You can try different enhancement styles on the same photo. Each enhancement uses 1 credit (or is free with
                unlimited subscription). Maximum 5 enhancements per photo.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: How do I cancel my subscription?</p>
              <p>
                A: Open iPhone Settings → Your Name → Subscriptions → ProfilePerfect → Cancel Subscription. You&apos;ll continue to have
                access until the end of your billing period.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: How do I restore my purchases?</p>
              <p>
                A: Go to Settings (gear icon) → Restore Purchases. This will restore your credits or subscription if you reinstalled the
                app or got a new device.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: What photo formats are supported?</p>
              <p>
                A: ProfilePerfect works with JPEG, PNG, and HEIC formats - all standard iPhone photo formats.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: Why did my enhancement take a long time?</p>
              <p>
                A: Enhancements typically take 10-20 seconds. Longer times can occur due to slow internet connection or high server load.
                The app will show progress updates while processing.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: Can I use enhanced photos commercially?</p>
              <p>
                A: Yes! You have full rights to use your enhanced photos for any purpose, including commercial use, LinkedIn, business
                websites, marketing materials, etc.
              </p>
            </div>

            <div>
              <p className="mb-1">Q: Does it work offline?</p>
              <p>A: No. ProfilePerfect requires an internet connection to process photos using AI technology.</p>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Troubleshooting
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px] space-y-6">
            <p className="mb-2">COMMON ISSUES</p>

            <div>
              <p className="mb-1">Photo enhancement fails:</p>
              <p className="mb-1">- Check your internet connection</p>
              <p className="mb-1">- Ensure you have a strong WiFi or cellular signal</p>
              <p className="mb-1">- Try again in a few minutes</p>
              <p>- Try a different photo</p>
            </div>

            <div>
              <p className="mb-1">Can&apos;t select photos from library:</p>
              <p className="mb-1">- Go to Settings → Privacy → Photos → ProfilePerfect</p>
              <p className="mb-1">- Enable &quot;All Photos&quot; access</p>
              <p>- Restart the app</p>
            </div>

            <div>
              <p className="mb-1">Camera not working:</p>
              <p className="mb-1">- Go to Settings → Privacy → Camera → ProfilePerfect</p>
              <p className="mb-1">- Enable camera access</p>
              <p>- Restart the app</p>
            </div>

            <div>
              <p className="mb-1">Purchase not working:</p>
              <p className="mb-1">- Ensure you&apos;re signed into the App Store</p>
              <p className="mb-1">- Check that your payment method is valid</p>
              <p className="mb-1">- Try &quot;Restore Purchases&quot; in Settings</p>
              <p>- Contact support if issue persists</p>
            </div>

            <div>
              <p className="mb-1">Credits not updating after purchase:</p>
              <p className="mb-1">- Wait 30 seconds and restart the app</p>
              <p className="mb-1">- Tap &quot;Restore Purchases&quot; in Settings</p>
              <p className="mb-1">- Check your email for purchase confirmation</p>
              <p>- Contact support with your receipt</p>
            </div>

            <div>
              <p className="mb-1">Enhanced photo looks too different:</p>
              <p className="mb-1">- Try a different enhancement style (Natural for more subtle results)</p>
              <p className="mb-1">- Ensure your original photo has good lighting</p>
              <p>- Use a clear, well-lit photo for best results</p>
            </div>

            <div>
              <p className="mb-1">App crashes or freezes:</p>
              <p className="mb-1">- Update to the latest iOS version</p>
              <p className="mb-1">- Ensure ProfilePerfect is updated to the latest version</p>
              <p className="mb-1">- Restart your device</p>
              <p>- Reinstall the app (your purchases will be restored)</p>
            </div>

            <div>
              <p className="mb-1">&quot;Rate limit reached&quot; error:</p>
              <p className="mb-1">- You&apos;ve enhanced photos too quickly</p>
              <p>- Wait 5 seconds between enhancements (prevents accidental duplicate enhancements)</p>
            </div>

            <div>
              <p className="mb-1">&quot;Maximum enhancements reached for this photo&quot;:</p>
              <p>- You&apos;ve enhanced the same photo 5 times (our safety limit). Try a different photo or choose from your previous enhancements.</p>
            </div>
          </div>
        </section>

        {/* Pricing & Purchases */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Pricing &amp; Purchases
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">PURCHASE OPTIONS</p>

            <p className="mt-4 mb-1">
              <strong>Free Trial:</strong>
            </p>
            <p className="mb-1">- First photo completely free</p>
            <p className="mb-1">- No credit card required</p>
            <p className="mb-2">- Try all three enhancement styles</p>

            <p className="mt-4 mb-1">
              <strong>10 Photo Pack:</strong>
            </p>
            <p className="mb-1">- Price: $9.99 USD</p>
            <p className="mb-1">- 10 photo enhancements</p>
            <p className="mb-1">- Perfect for updating multiple profiles</p>
            <p className="mb-1">- Credits never expire</p>
            <p className="mb-2">- One-time purchase</p>

            <p className="mt-4 mb-1">
              <strong>Unlimited Monthly:</strong>
            </p>
            <p className="mb-1">- Price: $14.99 USD/month</p>
            <p className="mb-1">- Unlimited photo enhancements</p>
            <p className="mb-1">- Up to 100 enhancements per day</p>
            <p className="mb-1">- 20 enhancements per hour (prevents abuse)</p>
            <p className="mb-1">- Cancel anytime</p>
            <p className="mb-2">- Auto-renews monthly</p>

            <p className="mt-4 mb-1">
              <strong>Payment:</strong>
            </p>
            <p className="mb-1">- Charged to your iTunes Account</p>
            <p className="mb-1">- Auto-renewal for subscriptions (can be disabled)</p>
            <p className="mb-2">- Manage subscriptions in iPhone Settings</p>

            <p className="mt-4 mb-1">
              <strong>Refunds:</strong>
            </p>
            <p className="mb-1">- Contact support@boldinmagenta.com</p>
            <p className="mb-1">- Include your receipt from Apple</p>
            <p>- Processed within 24-48 hours</p>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Privacy &amp; Security
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">YOUR DATA IS SAFE</p>

            <p className="mt-4 mb-1">
              <strong>Photos:</strong>
            </p>
            <p className="mb-1">- Transmitted securely via HTTPS</p>
            <p className="mb-1">- Processed immediately for enhancement</p>
            <p className="mb-1">- Never permanently stored by us or our AI partner</p>
            <p className="mb-1">- Deleted immediately after processing</p>
            <p className="mb-2">- Enhanced photos only saved to your device</p>

            <p className="mt-4 mb-1">
              <strong>Purchase Data:</strong>
            </p>
            <p className="mb-1">- Managed securely by RevenueCat and Apple</p>
            <p className="mb-1">- We never see your credit card details</p>
            <p className="mb-2">- Purchase history used only for providing service</p>

            <p className="mt-4 mb-1">
              <strong>No Account Required:</strong>
            </p>
            <p className="mb-1">- No email or personal information needed</p>
            <p className="mb-1">- No passwords to remember</p>
            <p className="mb-2">- Complete privacy</p>

            <p className="mt-4">
              Full Privacy Policy:{" "}
              <a
                href="https://www.boldinmagenta.com/privacy"
                className="text-[#ff31d2] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.boldinmagenta.com/privacy
              </a>
            </p>
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
            <p className="mb-2">Ideas we&apos;re considering:</p>
            <p className="mb-1">- Background replacement options</p>
            <p className="mb-1">- Batch photo enhancement</p>
            <p className="mb-1">- Custom style presets</p>
            <p className="mb-1">- Photo comparison gallery</p>
            <p className="mb-2">- Social media direct sharing</p>
            <p>
              Send feature requests to: <span className="font-semibold">feedback@boldinmagenta.com</span>
            </p>
            <p className="mt-2">Your feedback shapes our roadmap!</p>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Technical Details
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">APP INFORMATION</p>

            <p className="mt-4 mb-1">
              <strong>AI Technology:</strong>
            </p>
            <p className="mb-1">- Powered by Google Gemini (via Replicate)</p>
            <p className="mb-2">- State-of-the-art image enhancement</p>
            <p className="mb-2">- Maintains facial likeness while improving quality</p>

            <p className="mt-4 mb-1">
              <strong>Requirements:</strong>
            </p>
            <p className="mb-1">- iOS 14.0 or later</p>
            <p className="mb-1">- Internet connection required</p>
            <p className="mb-1">- Camera or photo library access</p>
            <p className="mb-2">- ~50MB storage space</p>

            <p className="mt-4 mb-1">
              <strong>Processing Time:</strong>
            </p>
            <p className="mb-1">- Typical: 10-20 seconds</p>
            <p className="mb-1">- Varies by internet speed and server load</p>
            <p className="mb-2">- Progress updates shown during enhancement</p>

            <p className="mt-4 mb-1">
              <strong>Photo Quality:</strong>
            </p>
            <p className="mb-1">- Supports all iPhone camera resolutions</p>
            <p className="mb-1">- Outputs high-quality PNG format</p>
            <p className="mb-2">- Maintains original aspect ratio, optimized for profile photos</p>

            <p className="mt-4 mb-1">
              <strong>Privacy Features:</strong>
            </p>
            <p className="mb-1">- No photo storage</p>
            <p className="mb-1">- No data collection beyond usage metrics</p>
            <p className="mb-1">- No third-party sharing of photos</p>
            <p className="mb-2">- Local storage only for enhanced results</p>
          </div>
        </section>

        {/* Version Information */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Version Information
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">CURRENT VERSION</p>
            <p className="mb-2">
              <strong>Version 1.0</strong>
            </p>

            <p className="mt-4 mb-1">What&apos;s New:</p>
            <p className="mb-1">- Initial release</p>
            <p className="mb-1">- Three enhancement styles (Professional, Natural, Creative)</p>
            <p className="mb-1">- AI-powered photo enhancement using Google Gemini</p>
            <p className="mb-1">- Before/after comparison slider</p>
            <p className="mb-1">- Credit and subscription system</p>
            <p className="mb-1">- Rate limiting for fair usage</p>
            <p>- RevenueCat payment integration</p>
          </div>
        </section>

        {/* Rate Limits & Fair Use */}
        <section className="mt-20 ml-[34px]">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Rate Limits &amp; Fair Use
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">USAGE POLICIES</p>
            <p className="mb-2">To ensure fair access and prevent abuse:</p>

            <p className="mt-4 mb-1">
              <strong>For All Users:</strong>
            </p>
            <p className="mb-1">- Maximum 1 enhancement every 5 seconds</p>
            <p className="mb-2">- Maximum 5 enhancements of the same photo</p>

            <p className="mt-4 mb-1">
              <strong>For Unlimited Subscribers:</strong>
            </p>
            <p className="mb-1">- Maximum 20 enhancements per hour</p>
            <p className="mb-2">- Maximum 100 enhancements per day</p>
            <p className="mb-2">- Limits reset automatically</p>

            <p className="mt-4 mb-1">
              <strong>Why these limits?</strong>
            </p>
            <p className="mb-1">- Prevents accidental duplicate enhancements</p>
            <p className="mb-1">- Ensures server availability for all users</p>
            <p className="mb-1">- Controls costs to keep prices affordable</p>
            <p className="mb-2">- Protects against automated abuse</p>

            <p className="mt-4">
              These limits are very generous – they allow legitimate heavy users while still preventing abuse.
            </p>
          </div>
        </section>

        {/* Need More Help */}
        <section className="mt-20 ml-[34px] mb-40">
          <h2 className="capitalize font-darker-grotesque font-semibold text-[36px] text-black mb-6 leading-none">
            Need More Help?
          </h2>
          <div className="font-roboto font-normal text-[#888888] text-[16px] leading-relaxed max-w-[828px]">
            <p className="mb-2">ADDITIONAL RESOURCES</p>

            <p className="mt-4 mb-1">
              <strong>Email Support:</strong>
            </p>
            <p className="mb-2">support@boldinmagenta.com</p>

            <p className="mt-4 mb-1">
              <strong>Privacy Policy:</strong>
            </p>
            <p className="mb-2">
              <a
                href="https://www.boldinmagenta.com/privacy"
                className="text-[#ff31d2] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.boldinmagenta.com/privacy
              </a>
            </p>

            <p className="mt-4 mb-1">
              <strong>Website:</strong>
            </p>
            <p className="mb-2">
              <a
                href="https://www.boldinmagenta.com"
                className="text-[#ff31d2] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.boldinmagenta.com
              </a>
            </p>

            <p className="mt-4 mb-2">
              <strong>Response Time:</strong> 24-48 hours for all inquiries
            </p>
            <p>
              We&apos;re committed to providing excellent support and continuously improving ProfilePerfect based on your feedback!
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-[1920px] w-full h-[546px] mt-[80px] relative">
        <img
          src="images/footer-bg.png"
          alt=""
          className="absolute left-0 top-0 max-w-[1920px] w-full h-[546px] object-cover"
        />

        <p className="absolute left-1/2 -translate-x-1/2 top-[299px] font-codystar text-[40px] text-white opacity-20">
          PROFILEPERFECT
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

