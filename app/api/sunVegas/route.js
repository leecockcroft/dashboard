import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

function buildHtml(data) {
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
                        srcset="/library/offers/${data.foldername}/hero-bg-desktop-1920x760.webp"
                    />
                    <source
                        media="(min-width:300px)"
                        srcset="/library/offers/${data.foldername}/hero-bg-mobile-400x1100.webp"
                    />
                    <img
                        class="w-full h-full lg:object-cover"
                        src="/library/offers/${data.foldername}/hero-graphic-870x988.webp"
                        alt="Sun Vegas"
                    />
                </picture>
            </div>

            <div class="hero-content">
                <div class="hero-content-wrap">
                    <div class="hero-image">
                        <img
                            class="w-full max-w-sm mx-auto md:max-w-lg lg:max-w-full -mt-12 lg:-mt-20 xl:-mt-28 2xl:-mt-40"
                            src="/library/offers/110FSOFFER/hero-graphic-870x988.webp"
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
                            <div class="faq">
                                <h4>What is the Promotion and how do I qualify?</h4>
                                <p>
                                    Newly registered players can claim 10 free spins at 10p per spin that can be used on
                                    Eligible Games. Players will need to register to receive the free spins. Newly
                                    registered players can then deposit and spend £10 to receive 100 Extra Spins at 10
                                    per spin that can also be used on Eligible Games.
                                </p>
                                <p>Offer Ends 30.04.26.</p>
                            </div>

                            <div class="faq">
                                <h4>Who is eligible?</h4>
                                <p>
                                    Newly registered players, who have not previously opened a thesunvegas.co.uk
                                    account, UK & ROI residents, aged 18+ years old (registration and ID verification
                                    required). Deposits made with Neteller/Skrill/PayPal are not valid for this
                                    promotion.
                                </p>
                            </div>

                            <div class="faq">
                                <h4>What will I receive and how will I receive it?</h4>
                                <p>
                                    10 Free Spins at 10p per spin will be credited to new players when they register. An
                                    additional 100 Extra Spins at 10p per spin will be credited to the account once a
                                    deposit of £10 has been made and spent.
                                </p>
                                <p>Free spins can be used on the games below (or found here ) only.</p>
                                <ul>
                                    <li>Big Bass Return to the Races</li>
                                    <li>Big Bass Day at the Races</li>
                                    <li>Fishin' Frenzy Even Bigger Catch</li>
                                    <li>Big Bass Vegas Double Down Deluxe</li>
                                    <li>Big Piggy Bank</li>
                                </ul>
                            </div>

                            <div class="faq">
                                <h4>What do I need to wager before I can withdraw my winnings?</h4>
                                <p>
                                    0 x Wagering requirements on the 10 Free Spins. On the 100 Extra Spins players are required to wager their winnings 10 (ten) times. For example, if you win £10 from Free Spins you must wager £10 x 10 = £100
                                </p>
                            </div>

                            <div class="faq">
                                <h4>What games can I play to fulfil the bonus wagering requirements?</h4>
                                <p>
                                    The winnings from Free Spins can only be staked on Eligible Games. Stakes made on
                                    other games will come from Cash Balance.
                                </p>
                            </div>

                            <div class="faq">
                                <h4>What do I need to do before I can withdraw my winnings from the bonus?</h4>
                                <p>
                                    You need to complete the wagering requirements. The free spins will expire 7 days
                                    after they have been credited to your account. If wagering has not been completed by
                                    then, the entire free spins balance (free spins + pending winnings) shall be
                                    removed. You are entitled to withdraw your real money balance and winnings derived
                                    from your real money at any time. However, if the wagering requirements are not
                                    completed then players will forfeit the free spins and any pending winnings from
                                    these free spins.
                                </p>
                            </div>

                            <div class="faq">
                                <h4>How are my funds used?</h4>
                                <p>
                                    When you play a game on which you can use this bonus, you will wager funds in the
                                    following order:
                                </p>
                                <ol>
                                    <li>Pending winnings – from play with your bonus</li>
                                    <li>Cash – Real money from any deposits or winnings from cash stakes</li>
                                    <li>Your bonus</li>
                                </ol>
                                <p>
                                    All bonuses are for wagering purposes only. The bonus amount can never be withdrawn.
                                </p>
                            </div>

                            <div class="faq">
                                <h4>Where can I see my cash/match deposit bonus balance?</h4>
                                <p>
                                    You can see the breakdown of both cash and bonus balance by clicking on your
                                    balance, displayed in the top right corner on desktop or a tablet device and the top
                                    right corner on a mobile device. You can also visit the Bonus History section in My
                                    Account to see your full bonus breakdown.
                                </p>
                                <p>
                                    Free Spins and their wagering requirements can be found by visiting My Account from
                                    the Home Page, clicking History and then ‘Bonus History’
                                </p>
                            </div>

                            <div class="faq">
                                <h4>Can I claim any other bonuses while this bonus is active on my account?</h4>
                                <p>
                                    Yes, but wagering requirements must be met for each bonus separately, in the order
                                    the bonus was claimed.
                                </p>
                            </div>
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

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "data.xlsx");
  const fileBuffer = fs.readFileSync(filePath);

  const workbook = XLSX.read(fileBuffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet);

  const firstRow = json[0]; // take the first row of the sheet
console.log(firstRow)
  const html = buildHtml(firstRow);

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html" }
  });
}
