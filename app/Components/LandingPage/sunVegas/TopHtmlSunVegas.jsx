export default function TopHtml(data) {
  return `
 <!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            .fixed-join {
                opacity: 0;
            }
            .button {
                color: white;
            }
            .button-login {
                background-color: transparent;
                border: 2px solid white;
            }
            .button-primary {
                background-color: #33aa2d;
                border: 2px solid #33aa2d;
            }
        </style>

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${data.title}</title>
        <meta name="description" content=${data.title} />
        <meta name="theme-color" content="#190A0B" />
        <!-- Favicons and App Icons -->
        <link rel="icon" type="image/x-icon" href="/library/offers/100FSDIGITAL/favicon.ico" />

        <link href="/library/offers/100FSDIGITAL/output.css?v=1" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
        />
          <link rel="stylesheet" href="stylesforall.css">
    </head>
    <body>
        <!-- Header -->
        <header class="p-3 md:p-4 flex items-center justify-between z-50 fixed inset-x-0 top-0 w-full">
            <img
                src="/library/offers/100FSDIGITAL/sun-vegas-logo.webp"
                class="w-32 md:w-48 2xl:w-56 block max-w-full"
                alt="Sun Vegas Logo"
            />
            <div class="space-x-3 md:space-x-5 flex flex-row">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.thesunvegas.co.uk/login"
                    class="button button-login"
                    >Login</a
                >
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.thesunvegas.co.uk/page"
                    class="button button-primary"
                    >Join Now</a
                >
            </div>
        </header>
        <!-- End Header -->

        
    <div id="cookie-banner" style="display:none;">
  <p><p>
	We use cookies and similar tools to store and read information on your device, such as your IP address and how you use our site. This helps us operate the site, improve your experience, and support marketing. By clicking&nbsp;<strong>“Accept All Cookies,”&nbsp;</strong>you agree to this. You can choose to allow only essential cookies by selecting&nbsp;<strong>“Decline Optional Cookies,”</strong>&nbsp;or update your preferences at any time using the&nbsp;<strong>“Change my cookie preferences”&nbsp;</strong>link in our&nbsp;<a href="/cookies-notice" class=" hyper-red" target="_self">Cookie Notice</a>.</p><a href="/cookies-policy" style="color: var(--secondary-background-color); text-decoration: underline;">Cookie Notice</a>.</p>

<button id ="accept-cookies">Accept All Cookies</button>
<button id ="accept-decline">Decline Optional Cookies</button>

</div>

        <!-- Hero -->
        <section id="hero" class="hero relative flex flex-col lg:block w-full overflow-hidden bg-sv-brown">
            <div class="hero-background inset-0 absolute z-10">
                <picture class="">
                    <source
                        media="(min-width:1024px)"
                        srcset="/library/offers/NEWIMG/${data.foldername}/hero-bg-desktop-1920x760.webp"
                    />
                    <source
                        media="(min-width:300px)"
                        srcset="/library/offers/NEWIMG/${data.foldername}/hero-bg-mobile-400x1100.webp"
                    />
                    <img
                        class="w-full h-full lg:object-cover"
                        src="/library/offers/NEWIMG/${data.foldername}/hero-graphic-870x988.webp"
                        alt="Sun Vegas"
                    />
                </picture>
            </div>

            <div class="hero-content">
                <div class="hero-content-wrap">
                    <div class="hero-image">
                        <img
                            class="w-full max-w-sm mx-auto md:max-w-lg lg:max-w-full -mt-12 lg:-mt-20 xl:-mt-28 2xl:-mt-40"
                            src="/library/offers/NEWIMG/${data.foldername}/hero-graphic-870x988.webp"
                            alt="Fishin Frenzy"
                            style="padding-top: 50px"
                        />
                    </div>
                    <div class="caption">
                        <div class="space-y-3 md:space-y-4 flex flex-col text-white">
                            <div
                                class="main-headings space-y-2.5 md:space-y-4 lg:space-y-5 flex flex-col items-center lg:block"
                            >
                                <h1 class=""><span class="lg:block">${data.header}</span></h1>
                                <div class="divide w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-orange-600 to-yellow-300">
                                </div>
                                <h2 class="">${data.subheader}<span class="block lg:mt-1.5"></span></h2>
								<a rel="noreferrer" target="_blank" href="https://www.thesunvegas.co.uk/register/page" class="button button-primary button-large">Join Now</a>
                            </div>
                            <!-- Begin Quick Terms -->
                            <div class="quick-terms pb-1.5">
                                <p
                                    class="text-[11px] md:text-xs text-slate-200 leading-normal md:leading-normal lg:max-w-screen-md"
                                >
                                    ${data.standardterms} T&Cs Apply. GambleAware.org
                                </p>
                            </div>
                            <!-- End Quick Terms -->
                        </div>
                    </div>
                </div>

                <!-- How it works steps -->
                <ul class="how-it-works relative z-40 mx-4 lg:mx-0">
                    <li class="">
                        <span class="hiw-number">1</span>
                        <span class="flex flex-col hiw-text"
                            ><span class="">${data.ribbon1top}</span> ${data.ribbon1bottom}</span
                        >
                    </li>
                    <li class="">
                        <span class="hiw-number">2</span>
                        <span class="flex flex-col hiw-text"
                            ><span class="">${data.ribbon2top}</span> ${data.ribbon2bottom}</span
                        >
                    </li>
                    <li class="">
                        <span class="hiw-number">3</span>
                        <span class="flex flex-col hiw-text"><span class="">${data.ribbon3top}</span> ${data.ribbon3bottom}</span>
                    </li>
                </ul>
                <!-- END How it works steps -->
            </div>
        </section>
        <!-- End Hero -->

        <!-- Eligible Games -->
        <section id="eligible" class="bg-sun-dark-grey text-white">
            <div class="wrapper">
                <div class="copy-container">
                    <div class="copy-holder">
                        <h5 class="">READY TO SPIN?</h5>
                        <h2>You can use your bonus on any of the Eligible Games below.</h2>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-7 gap-4 lg:gap-6">
                    <div class="eligible-game">
                        <img
                            class=""
                            alt="Big Bass Return to the Races"
                            src="/library/2025/games/Q1/BigBassReturntotheRaces_300X260_CSS.svg"
                        />
                    </div>

                    <div class="eligible-game">
                        <img
                            class=""
                            alt="Big Bass Day at the Races"
                            src="/library/2024/games/February/BigBassDayAtTheRaces_VEGAS_Char.jpg"
                        />
                    </div>

                    <div class="eligible-game">
                        <img
                            class=""
                            alt="Fishin ’ Frenzy Even Bigger Catch"
                            src="/library/2023/games/February/FishinFrenzyEvenBiggerCatch.png"
                        />
                    </div>

                    <div class="eligible-game">
                        <img
                            class=""
                            alt="Big Bass Vegas Double Down Deluxe"
                            src="/library/2024/games/Q4/BigBassVegasDoubleDownDeluxe_Char_VEGAS.webp"
                        />
                    </div>

                    <div class="eligible-game">
                        <img class="" alt="Big Piggy Bank" src="/library/2023/games/August/BigPiggyBank_Char%20.png" />
                    </div>
                </div>
            </div>
        </section>
        <!-- End Eligible Games -->

        <div class="divider"></div>

        <!-- Payment Methods -->
        <section class="payments">
            <div class="wrapper">
                <div class="logo-grid grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6">
                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-visa.webp" alt="Visa logo" />
                    </div>
                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-mastercard.webp" alt="Mastercard logo" />
                    </div>
                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-paypal.webp" alt="Paypal logo" />
                    </div>
                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-skrill.webp" alt="Skrill logo" />
                    </div>
                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-paysafe.webp" alt="Paysafe logo" />
                    </div>
                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-maestro.webp" alt="Maestro logo" />
                    </div>
                </div>
            </div>
        </section>
        <!-- End Payment Methods -->

        <div class="divider"></div>

        <!-- FAQs -->
        <section class="faqs">
            <div class="wrapper">
                <div class="copy-container">
                    <div class="copy-holder">
                        <h3>Frequently asked questions</h3>
                        <div class="faqs-holder">
                         ${data.terms}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End FAQs -->

        <div class="divider"></div>

        <!-- Standard Terms -->
        <section class="standard-terms">
            <div class="wrapper">
                <div class="copy-container">
                    <div class="copy-holder">
                        <h3>Standard terms</h3>

                        <ol>
                            <li>The promoter of this promotion is VF2011 Limited ("Promoter").</li>
                            <li>
                                By participating in this promotion, you will be deemed to have accepted, and agree to be
                                bound by, these terms and conditions and the Terms and Conditions for thesunvegas.co.uk.
                            </li>
                            <li>
                                Players must be resident in the United Kingdom, and must be aged 18 years or over. Proof
                                of identity, address and age must be provided on request. If you do not provide this
                                information, or we are not fully satisfied that what has been provided meets the
                                requirements of applicable law, we may withhold and/or retain any and all bonuses until
                                such time as this has been fulfilled.
                            </li>
                            <li>If you have any issues, please contact our Customer Services team.</li>
                            <li>
                                No responsibility is accepted for game plays or stakes lost, corrupted or delayed in
                                transmission for any reason.
                            </li>
                            <li>
                                If an act, omission, event or circumstance occurs which is beyond the reasonable control
                                of the Promoter and which prevents the Promoter from complying with these terms and
                                conditions the Promoter will not be liable for any failure to perform or delay in
                                performing its obligation.
                            </li>
                            <li>
                                Employees of the Playtech plc group, the News UK group or any other company associated
                                or involved in the promotion are not eligible to enter this promotion.
                            </li>
                            <li>
                                The promotion is limited to one per registered account / person. If we find that you
                                have used more than one account to participate, we reserve the right to withhold payment
                                of any promotional amount or bonus earned on the duplicate account(s).
                            </li>
                            <li>
                                Your personal details will be kept in accordance with relevant data protection laws and
                                our Privacy Policy. We will use the personal details you supplied for the administration
                                of this promotion.
                            </li>
                            <li>
                                These terms and conditions shall be exclusively governed by and construed in accordance
                                with the laws of England. The entrant irrevocably submits to the exclusive jurisdiction
                                of the courts of England and Wales.
                            </li>
                            <li>Please play responsibly. For more information, visit our Responsible Gambling page.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Standard Terms -->

        <!-- Legal Logos -->
        <section class="legal-logos bg-white">
            <div class="wrapper">
                <div class="logo-grid grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div class="secure-logo">
                        <img
                            src="/library/offers/100FSDIGITAL/logo-alderney.webp"
                            alt="Alderney Gambling Control Commission logo"
                        />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-begambleaware.webp" alt="BeGambleAware.org logo" />
                    </div>

                    <div class="secure-logo">
                        <img
                            src="/library/offers/100FSDIGITAL/logo-gambling-commission.webp"
                            alt="Gambling Commission logo"
                        />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-gamcare.webp" alt="GamCare logo" />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-gamstop.webp" alt="GAMSTOP logo" />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-gordon-moody.webp" alt="Gordon Moody logo" />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-ibas.webp" alt="IBAS logo" />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-odr.webp" alt="ODR Europe logo" />
                    </div>

                    <div class="secure-logo">
                        <img
                            src="/library/offers/100FSDIGITAL/logo-take-time-to-think.webp"
                            alt="Take Time To Think logo"
                        />
                    </div>

                    <div class="secure-logo">
                        <img src="/library/offers/100FSDIGITAL/logo-playtech.webp" alt="Playtech logo" />
                    </div>
                </div>
            </div>
        </section>
        <!-- End Legal Logos-->

        <!-- Footer -->
        <footer class="pb-20 lg:pb-0">
            <div class="wrapper">
                <div class="space-y-3 md:space-y-4">
                    <img
                        src="/library/offers/100FSDIGITAL/sun-vegas-logo.webp"
                        class="w-48 h-auto"
                        alt="Sun Vegas Logo"
                    />
                    <p class="">Copyright 2025 © News Group Newspapers Limited.</p>
                    <p class="">All Rights Reserved. Sun Vegas is operated by VF2011 Limited.</p>
                    <p class="">
                        VF2011 Ltd is licensed and regulated in Great Britain by the Gambling Commission under account
                        number 45110 and the Alderney Gambling Control Commission (License Number: 136C1).
                    </p>
                    <p class="">
                        You must be a resident in the UK or Republic of Ireland and aged 18 or over to register an
                        account at Sun Vegas. Only one account per person is permitted.
                    </p>
                    <p class="">
                        Sun Vegas supports Responsible Gambling. For more information, please visit the Gamcare website
                        or the BeGambleAware website.
                    </p>
                </div>
            </div>
        </footer>
        <!-- End Footer -->

        <div
            class="fixed-join bg-sv-brown/80 opacity-0 backdrop-blur-md w-full p-4 md:p-5 lg:p-4 2xl:p-4 z-50 fixed inset-x-0 bottom-0 shadow-lg lg:hidden border-t border-white/20"
        >
            <a
                rel="noreferrer"
                target="_blank"
                href="https://www.thesunvegas.co.uk/page"
                class="button button-pulse button-primary w-full"
                >Join Now</a
            >
        </div>


      


  `;
}
