"use client";

import { useState } from "react";

export default function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full max-w-[1920px] min-h-screen bg-white relative mx-auto overflow-x-hidden">
      
      {/* ======================= */}
      {/* HERO SECTION (0-873px)  */}
      {/* ======================= */}
      
      <section className="w-full max-w-[1920px] h-[200px] md:h-[892px]">
        {/* Hero Background */}
        <div className=" max-w-[1920px] w-full h-[200px] md:h-[892px] overflow-x-hidden">
          
          {/* Background gradient layers */}
          <img src="images/header-bg.png" alt="" className="absolute left-0 top-[0px] max-w-[1920px] w-full h-auto object-cover" />

          {/* Top overlay */}
            <img src="/images/top-right-blob.png" alt="" className="max-w-[1920px] w-full h-auto absolute right-0 top-0" />
          
          
          {/* Phone mockup */}
          <div className="hidden md:flex absolute left-[804px] top-[110px] w-[927px] h-[758px] items-center justify-center">
            <img src="/images/phone-mock-header.png" alt="Manifest369 App" className="w-full h-full object-cover"/>
          </div>
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
        
        {/* Hero content */}
        <div className="absolute left-[390px] top-[256px] w-[567px]">
          <h1 className="font-darker-grotesque font-extrabold text-[80px] text-white leading-[0.9] capitalize mb-4">
            Beautiful Apps for a rich life
          </h1>
          <p className="font-darker-grotesque font-medium text-[28px] text-white leading-[1.1] w-[538px]">
            Creating the apps that you love to use to romanticise the everyday.
          </p>
        </div>
      </section>
      
      {/* ============================== */}
      {/* MANIFEST369 SECTION (1003-1723px) */}
      {/* ============================== */}
      
      <section className="hidden md:block mx-auto w-[1140px] h-[720px]">

        {/* Section titles */}
        <div className="mb-[40px] relative h-[60px]">
          <p className="absolute left-1/2 -translate-x-1/2 top-0 font-codystar text-[40px] text-[#cccccc] capitalize text-center z-10">
            MANIFEST369
          </p>
          <p className="absolute left-1/2 -translate-x-1/2 top-0 font-darker-grotesque font-semibold text-[50px] text-black capitalize text-center leading-none z-20">
            Manifest369
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="flex width-full gap-[30px] items-center justify-center">
          {/* Card 1 - Your Desire */}
          <div className="w-[360px] h-[600px] bg-white rounded-[20px] shadow-[0px_10px_20px_rgba(47,21,135,0.06)] p-10 relative">
            <img src="images/heart.svg" alt="" className="w-[294px] h-[325px] mb-4" />
            <p className="font-darker-grotesque font-semibold text-[28px] text-black leading-[1.1] mb-3">Your Desire</p>
            <p className="font-roboto text-[16px] text-[#888888] leading-[1.7]">
              Write your desire 3 times in the present tense as if you have already received it. e.g. I love driving my new car.
            </p>
          </div>
          
          {/* Card 2 - Your Intention */}
          <div className="w-[360px] h-[600px] bg-white rounded-[20px] shadow-[0px_10px_20px_rgba(47,21,135,0.06)] p-10 relative">
            <img src="images/plane.svg" alt="" className="w-[294px] h-[325px] mb-4" />
            <p className="font-darker-grotesque font-semibold text-[28px] text-black leading-[1.1] mb-3">Your Intention</p>
            <p className="font-roboto text-[16px] text-[#888888] leading-[1.7]">
              Write your intention 6 times, the inspired action you will take. e.g I will buy myself a new car.
            </p>
          </div>
          
          {/* Card 3 - The Outcome */}
          <div className="w-[360px] h-[600px] bg-white rounded-[20px] shadow-[0px_10px_20px_rgba(47,21,135,0.06)] p-10 relative">
            <img src="images/present.svg" alt="" className="w-[294px] h-[325px] mb-4" />
            <p className="font-darker-grotesque font-semibold text-[28px] text-black leading-[1.1] mb-3">The Outcome</p>
            <p className="font-roboto text-[16px] text-[#888888] leading-[1.7]">
              Write the outcome 9 times, how you feel when you have what you desire. e.g. Enjoyment and safety.
            </p>
          </div>
        </div>
      </section>
      
      {/* ============================== */}
      {/* INFO SECTION (1878-2426px) */}
      {/* ============================== */}
      
      <section className="mx-auto w-full max-w-[1226px] px-4 md:px-0 flex flex-col md:flex-row items-start gap-[30px] md:gap-[60px] mt-[60px] md:mt-[180px] mb-[40px] md:mb-[80px]">
        {/* Phone image */}
        <img src="images/rainbow-heart.png" alt="" className="w-full max-w-[609px] h-auto md:h-[548px] object-contain mx-auto md:mx-0" />
        
        {/* Content */}
        <div className="w-full md:w-[557px] relative">
          <div className="relative h-[45px] md:h-[60px] mb-[20px] md:mb-[40px]">
            <p className="absolute left-0 top-0 font-codystar text-[24px] md:text-[40px] text-[#cccccc] capitalize z-10" style={{lineHeight: '1.2'}}>
              THE MANIFESTATION TOOL OF YOUR DREAMS
            </p>
            <p className="absolute left-0 top-0 font-darker-grotesque font-semibold text-[32px] md:text-[50px] text-black capitalize leading-none z-20">
              the Manifestation tool of your dreams
            </p>
          </div>
          <p className="font-darker-grotesque font-medium text-[20px] md:text-[28px] text-[#888888] leading-[1.1] mt-[80px] md:mt-[10px] mb-[40px] md:mb-[90px]">
            Make the powerful 369 manifestation method easy and automatic
          </p>
          
          {/* Feature list */}
          <div className="space-y-[20px]">
            <div className="flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] flex-shrink-0">
                <circle cx="10" cy="10" r="9" stroke="#FF31D2" strokeWidth="2" fill="none"/>
                <path d="M6 10L8.5 12.5L14 7" stroke="#FF31D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-roboto text-[16px] text-[#888888] leading-[1.7]">
                Step by step guide to the 369 manifestation method makes this process easy for everyone.
              </p>
            </div>
            <div className="flex items-start gap-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] flex-shrink-0">
                <circle cx="10" cy="10" r="9" stroke="#FF31D2" strokeWidth="2" fill="none"/>
                <path d="M6 10L8.5 12.5L14 7" stroke="#FF31D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-roboto text-[16px] text-[#888888] leading-[1.7]">
                Daily reminders and completion tracking to foster that vitally important consistency in your practice.
              </p>
            </div>
            <div className="flex items-start gap-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] flex-shrink-0">
                <circle cx="10" cy="10" r="9" stroke="#FF31D2" strokeWidth="2" fill="none"/>
                <path d="M6 10L8.5 12.5L14 7" stroke="#FF31D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-roboto text-[16px] text-[#888888] leading-[1.7]">
                A beautiful interface and ambient music to put you in the mood for manifesting your dream life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ============================== */}
      {/* GALLERY SECTION (2521-3693px) */}
      {/* ============================== */}
      
      <section className="hidden md:block w-full max-w-[1920px] mx-auto h-[1172px] overflow-hidden relative">
        {/* Background */}
        <img src="images/gallery-bg.png" alt="" className="absolute left-0 top-0 w-full h-full object-cover z-1" />
        
        {/* Titles */}
        <div className="relative h-[40px] z-5">
          <p className="absolute left-1/2 -translate-x-1/2 top-[375px] font-codystar text-[40px] text-white/50 capitalize text-center">
            A beautiful manifestation experience
          </p>
          <p className="absolute left-1/2 -translate-x-1/2 top-[375px] font-darker-grotesque font-semibold text-[50px] text-white capitalize text-center leading-none">
            a Beautiful Manifestation experience
          </p>
        </div>

        {/* Gallery images */}
        <div className="w-[1080px] mx-auto h-[690px] top-[425px] relative z-50">
          <img src="images/complete.png" alt="" className="absolute left-[0px] top-[100px] w-[234px] h-[490px] object-cover rounded-[20px] z-10" />
          <img src="images/step2.png" alt="" className="absolute left-[165px] top-[50px] w-[282px] h-[590px] object-cover rounded-[20px] z-20" />
          <img src="images/step1.png" alt="" className="absolute left-[375px] top-[0px] w-[330px] h-[690px] object-cover rounded-[20px] z-30" />
          <img src="images/step3.png" alt="" className="absolute left-[635px] top-[50px] w-[282px] h-[590px] object-cover rounded-[20px] z-20" />
          <img src="images/settings.png" alt="" className="absolute left-[845px] top-[100px] w-[234px] h-[490px] object-cover rounded-[20px] z-10" />
        </div>
      </section>
      
      {/* ============================== */}
      {/* DOWNLOAD SECTION (3853-4230px) */}
      {/* ============================== */}
      
      <section className="w-full max-w-[1070px] px-4 md:px-0 mx-auto mt-[60px] md:mt-[180px] mb-[40px] md:mb-0 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-0">
          {/* Left content */}
          <div className="w-full md:w-[550px] order-1 md:order-none">
            <div className="relative h-[50px] md:h-[70px] mb-[20px]">
              <p className="absolute left-0 top-0 font-codystar text-[24px] md:text-[40px] text-[#cccccc] capitalize w-full md:w-[540px]">
                easy download and ready to use
              </p>
              <p className="absolute left-0 top-[5px] md:top-[10px] font-darker-grotesque font-semibold text-[32px] md:text-[50px] text-black capitalize leading-none w-full md:w-[457px]">
                easy download and ready to use
              </p>
            </div>

            <p className="font-roboto text-[16px] text-[#888888] leading-[1.7] w-full md:w-[457px] mt-[20px] md:mt-[60px]">
              Begin your easy and relaxing manifestation process today by downloading the Manifest369 app from the app store. Supercharge your practice with daily tracking and reminder notifications in the premium version.
            </p>
            
            {/* Download button */}
            {/* <button className="absolute top-[308px] px-[35px] py-[18px] border-2 border-[#ff31d2] rounded-[50px] flex items-center gap-3">
              <img src={imgGroup} alt="" className="w-[24px] h-[24px]" />
              <div>
                <p className="font-roboto text-[10px] text-[#ff31d2]">Download on the</p>
                <p className="font-roboto font-medium text-[14px] text-[#ff31d2] uppercase">app store</p>
              </div>
            </button> */}
          </div>

          {/* Pricing cards container */}
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 w-full md:w-auto justify-center order-2 md:order-none">
            {/* Pricing - Basic */}
            <div className="w-full max-w-[260px] md:w-[260px]">
              <p className="font-roboto font-medium text-[12px] text-[#ff31d2] tracking-[1.2px] uppercase">basic</p>
              <p className="font-roboto font-medium text-[32px] text-black mt-[10px]">FREE</p>
              <div className="w-full max-w-[240px] md:w-[240px] h-[2px] mt-[20px] md:mt-[51px]">
                <img src="images/purple-underline.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex mt-[20px] md:mt-[30px]">
                <ul className="font-roboto text-[16px] text-[#888888] leading-[1.7] space-y-[3px] list-disc list-inside marker:text-[#FF31D2]">
                  <li>3-6-9 guided journaling</li>
                  <li>Beautiful, dreamy interface</li>
                  <li className="font-bold">Peaceful background music</li>
                  <li>Customisable audio settings</li>
                </ul>
              </div>
            </div>
            
            {/* Pricing - Premium */}
            <div className="w-full max-w-[260px] md:w-[260px]">
              <p className="font-roboto font-medium text-[12px] text-[#ff31d2] tracking-[1.2px] uppercase">premium</p>
              <p className="font-roboto font-medium text-[32px] text-black mt-[10px]">
                $4<span className="text-[16px]">.99 USD</span>
              </p>
              <p className="font-roboto text-[16px] text-[#888888] mt-[10px]">/per year</p>
              <div className="w-full max-w-[240px] md:w-[240px] h-[2px] mt-[18px]">
                <img src="images/purple-underline.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex mt-[20px] md:mt-[30px]">
                <ul className="font-roboto text-[16px] text-[#888888] leading-[1.7] space-y-[3px] list-disc list-inside marker:text-[#FF31D2]">
                  <li className="font-bold">Daily completion tracking</li>
                  <li>Daily Reminder</li>
                  <li>Session history calendar</li>
                  <li>Ad-free experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
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
