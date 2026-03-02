export default function TopHtml(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <meta name="description" content=${data.title}/>
    <meta name="theme-color" content="#95D6E9">
    <!-- Favicons and App Icons -->
    <link rel="icon" type="image/x-icon" href="/library/offers/NEWLP/favicon.ico">
    <link href="/library/offers/NEWLP/output.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.typekit.net/hiw7gvp.css">
    <link rel="stylesheet" href="stylesforall.css">
    
	<style>
	body {
    margin: 0px;
    --tw-bg-opacity: 1;
    background-color: #fa9ea9!important;
    padding: 0px;
    font-family: "omnes-variable", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    --tw-text-opacity: 1;
    color: rgb(30 30 30 / var(--tw-text-opacity));
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
	</style>
    
</head>
<body>

  <!-- Header -->
  <header class='p-3 md:p-4 flex items-center justify-between z-50 fixed inset-x-0 top-0 w-full'>
    <img src="/library/offers/NEWLP/sun-bingo-logo.webp" class='w-32 md:w-48 2xl:w-56 block max-w-full sb-logo' alt="Sun Bingo Logo" />
    <div class="space-x-3 md:space-x-5 flex flex-row">
      <a rel="noreferrer" target="_blank" href="https://www.sunbingo.co.uk/login" class='button button-login'>Login</a>
      <a rel="noreferrer" target="_blank" href="https://www.sunbingo.co.uk/register" class='button button-primary'>Join Now</a>
    </div>
  </header>


  <div id="cookie-banner" style="display:none;">
  <p>We use cookies and similar tools to store and read information on your device, such as your IP address and how you use our site. This helps us operate the site, improve your experience, and support marketing. By clicking “Accept All Cookies,” you agree to this. You can choose to allow only essential cookies by selecting “Decline Optional Cookies,” or update your preferences at any time using the “Change my cookie preferences” link in our  <a href="/cookies-policy" style="color: var(--secondary-background-color); text-decoration: underline;">Cookie Notice</a>.</p>

<button id ="accept-cookies">Accept All Cookies</button>
<button id ="accept-decline">Decline Optional Cookies</button>

</div>


  <!-- End Header -->

  <!-- Hero -->
  <section id="hero" class='hero relative flex flex-col lg:block w-full overflow-hidden bg-white'>
    
    <div class='hero-background-gradient inset-0 absolute z-10'>
      <picture class=''>
        <source media="(min-width:1024px)" srcSet="/library/offers/img/${data.foldername}/hero-bg-desktop.webp" />
        <source media="(min-width:300px)" srcSet="/library/offers/img/${data.foldername}/hero-bg-mobile.webp" />
        <img class='w-full h-full object-cover' src="/library/offers/img/${data.foldername}/hero-bg-mobile.webp" alt="Sun Bingo" />
      </picture>
    </div>


    <div class='hero-content'>
      <div class="hero-content-wrap">

        <div class='hero-image pt-12 lg:pt-0 relative z-0'>
            <img class='w-72  mx-auto max-w-full  md:w-full md:max-w-lg lg:max-w-full xl:w-full xl:max-w-full 3xl:scale' src="/library/offers/img/${data.foldername}/hero-graphic-100.webp" alt="Woman holding phone playing Big Bass Vegas" />
        </div>

        <div class='caption -mt-2 lg:mb-3'>
          <div class='space-y-3 md:space-y-4 flex flex-col'>
            <div class="main-headings space-y-2.5 md:space-y-4 lg:space-y-6 flex flex-col items-center lg:block">
              <div class="h1-box">
                <h1 class=''><span class='lg:block'>Welcome Offers <br/>Deposit £10</span></h1>
              </div>
<!--               
              <h2 class=''>Deposit £10</span></h2> -->

              <div class="hidden lg:block">
                <a rel="noreferrer" target="_blank" href="https://www.sunbingo.co.uk/register" class='button button-primary button-large'>Join Now</a>
              </div>

            </div>
            <!-- Begin Quick Terms -->
            <div class="quick-terms pb-1.5">
              <p class="text-xs md:text-xs xl:text-[13px] text-sun-bingo-font/80 leading-normal font-medium md:leading-normal xl:leading-relaxed lg:max-w-screen-sm">
                18+. New customers only. Register and deposit £10 today for 50 Free Spins and/or a £40 Bingo Bonus. Stake £10 on Casino for free spins (accept within 48hrs & use within 3 days) on selected games. No wagering requirements on winnings. Stake £10 on Bingo tickets for Bingo Bonus (accept and wager 4x within 7 days). Only completed games can be credited. Debit card deposits only. Offers end 28.02.26. T&Cs Apply. <a target="_blank" class="underline" href="https://GambleAware.org">GambleAware.org</a>
              </p>
            </div>
            <!-- End Quick Terms -->
          </div>
        </div>
      </div>

      <!-- How it works steps -->
      <ul class='how-it-works relative z-40 mx-4 mb-4 lg:mx-0'>
        <li class=''>
            <span class='hiw-number'><span>1</span></span> 
            <span class="flex flex-col hiw-text"><span class=''>Sign up</span> To Sun Bingo</span>
        </li>
        <li class=''>
            <span class='hiw-number'><span>2</span></span> 
            <span class="flex flex-col hiw-text"><span class=''>Deposit £10+ </span> Unlock 2x Offers</span>
        </li>
        <li class=''>
            <span class='hiw-number'><span>3</span></span> 
            <span class="flex flex-col hiw-text"><span class=''>SPEND TO RECEIVE </span> Free Spins And/or a Bingo bonus</span>
        </li>
      </ul>
      <!-- END How it works steps -->
    </div>
  </section>
  <!-- End Hero -->

  <!-- Payment Methods -->
  <section class='payments bg-sun-bingo-light-grey'>
    <div class='wrapper'>

      <div class="logo-grid grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-6">
        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-visa.webp" alt="Visa logo">
        </div>
        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-mastercard.webp" alt="Mastercard logo">
        </div>
        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-maestro.webp" alt="Maestro logo">
        </div>
      </div>
    </div>
  </section>
  <!-- End Payment Methods -->

 <!-- Eligible Games -->
  <section id="eligible" class='bg-white text-sun-bingo-font'>
    <div class='wrapper'>
      <div class='copy-container '>
        <div class='copy-holder'>
          <h3>Eligible Games</h3>
        </div>
      </div>
      <div class='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6'>
        <div class='eligible-game'>
          <img class='' alt="" src="/library/2025/games/Q2/KingKongCashEvenBiggerBananas4_SUNFAB.webp" />
        </div>
        <div class='eligible-game'>
          <img class='' alt="" src="/library/2025/games/Q3/FishinFrenzyBigCatch3_SUNFAB.webp" />
        </div>
        <div class='eligible-game'>
          <img class='' alt="" src="/library/2025/games/Q2/GoldenWinnerGrandChance_SUNFAB.webp" />
        </div>
        <div class='eligible-game'>
          <img class='' alt="" src="/library/2025/games/Q1/FishinFrenzyTheBigCatch2_Char_SUNFAB.webp" />
        </div>
		 <div class='eligible-game'>
          <img class='' alt="" src="/library/2025/games/Q3/CopsnRobbersGrandChance_SUNFAB.webp" />
        </div>
		 <div class='eligible-game'>
          <img class='' alt="" src="/library/2021/Games/july/Fishin-Frenzy-Big-Catch_SUNFAB_plain_SUNFAB.jpg" />
        </div>
		 
      </div>
    </div>
  </section>
  <!-- End Eligible Games -->











  <!-- FAQs -->
  <section class='faqs bg-sun-bingo-lighter-grey'>
    <div class='wrapper'>
      <div class='copy-container '>
        <div class='copy-holder'>
          <h3>FAQs</h3>
          <div class="faqs-holder">
          <div class="faqs-holder">
            <div class="faq">
             <h4><strong>Welcome Offers</strong></h4>
<p>These Terms and Conditions apply to our two welcome offer promotions, allowing qualifying players to deposit &amp; stake to receive 100 Free Spins with no wagering and/or &pound;40 Bingo Bonus.</p>
<h4><strong><u>The Free Spins Welcome Offer: Deposit &amp; Spend &pound;10 on casino to receive 100 Free Spins</u></strong></h4>



 <div class="faq">
<h4><strong>What is the promotion?</strong></h4>
<p>Newly registered players that deposit and spend a minimum of &pound;10 on Casino will receive 100 Free Spins. This stake can be made on any casino game: slots, live casino, casino, Slingo and side games.</p>




<p>All Free spins can be spent on <a href="/deposit-spend-10-get-welcome-offers-eligible-games">selected games</a></p>
<ul>
<li>King Kong Cash Even Bigger Bananas 4</li>
<li>Fishin' Frenzy Big Catch 3</li>
<li>Golden Winner Grand Chance</li>
<li>Fishin&rsquo; Frenzy The Big Catch 2</li>
<li>Cops n Robbers Grand Chance</li>
<li>Fishing Frenzy the Big Catch</li>
</ul>

</div>
 <div class="faq">
<h4><strong>Who is eligible?</strong></h4>
<p>New customers who have not previously opened a sunbingo.co.uk account, UK residents, aged 18+ years old (registration and ID verification required).</p>
<p>This is a new customer offer, and only one new customer offer can be claimed.</p>
<p>Deposits made with Neteller/Skrill/PayPal are not valid for this promotion.</p>
<p>Offer ends 28.02.26 </p>

</div>

<div class="faq">
<h4><strong>What will I receive and how will I receive it?</strong></h4>
<p>You will receive 100 Free Spins once you have made and spent a first deposit of &pound;10 minimum on Casino. Players must accept the Free Spins within 48 hours of qualifying via a pop-up message.</p>


</div>

 <div class="faq">
<h4><strong>Do I need to wager before I can withdraw my winnings?</strong></h4>
<p>There are no wagering requirements. All winnings from Free Spins are paid as cash and can be withdrawn at any time.</p>
</div>

 <div class="faq">
<h4><strong>What games can I play to fulfil the wagering requirements?</strong></h4>
<p>The winnings from your free spins can only be staked on&nbsp;. Stakes made from other games will come from cash balance.</p>
<ul>
<li>King Kong Cash Even Bigger Bananas 4</li>
<li>Fishin' Frenzy Big Catch 3</li>
<li>Golden Winner Grand Chance</li>
<li>Fishin&rsquo; Frenzy The Big Catch 2</li>
<li>Cops n Robbers Grand Chance</li>
<li>Fishing Frenzy the Big Catch</li>
</ul>

</div>
 <div class="faq">
<h4><strong>How are my funds used?</strong></h4>





<p>Free spins can be used at any stage, prior to the expiry date. Since this offer has no wagering requirement, any winnings from your Free Spins will be credited as cash.</p>






</div>
 <div class="faq">
<h4><strong>Where can I see my cash/bonus balance?</strong></h4>
<p>You can see the breakdown of both cash and bonus balance by clicking on your balance, displayed in the top right corner on desktop or a tablet device and the top right corner on a mobile device. You can also visit the Bonus History section in My Account to see your full bonus breakdown.</p>
<p>Free Spins and their wagering requirements can be found by visiting My Account from the Home Page, clicking History and then &lsquo;Bonus History&rsquo;.</p>
<h4><strong><u>The Bingo Bonus Welcome Offer</strong><strong>: Deposit &amp; Spend &pound;10 on bingo to receive &pound;40 Bingo Bonus</u></strong></h4>


</div>

 <div class="faq">
<h4><strong>What will I receive and how will I receive it?</strong></h4>
<p>Once newly registered players have deposited and spent a minimum of &pound;10 on Bingo, and Bingo games are completed, they will receive a &pound;40 Bingo Bonus. The bonus will be credited to the &ldquo;Bonus Balance&rdquo; section of the account.<br />You must accept the Bingo bonuses via a pop-up message after logging into the Bingo Lobby. The bonuses must be accepted within 7 days.<br />&nbsp;</p>
<h4><strong>What do I need to wager before I can withdraw any winnings from my bonuses?</strong></h4>
<p>Once you are eligible for the bonus, you have 7 days to accept and use it, and complete the wagering requirements.</p>
<p>You are required to wager your &pound;40 Bingo Bonus amount 4 (four) times. You must wager (4 x &pound;40) &pound;160 to meet the wagering requirements. If wagering has not been completed within 7 days, the entire bonus (bonus + pending winnings) shall be removed.</p>
<p>You are entitled to withdraw your real cash balance and winnings derived from your real cash balance at any time. However, if the bonus has not been staked within 7 days, then you will forfeit the bonus.</p>
<h4><strong>What games can I play to fulfil the wagering requirements?</strong></h4>
<p>The Bingo bonus can be wagered in any Sun Bingo room.</p>
<h4><strong>How are my funds used?</strong></h4>
<p>When you play a game on which you can use your Bingo bonus, you will wager funds in the following order:</p>
<ol>
<li>Cash &ndash; Real money from any deposits or winnings from cash stakes</li>
<li>Pending winnings &ndash; from play with your bonus</li>
<li>Any remaining bonus</li>
</ol>
<p>Your winnings from wagering with the bonus amount will be attributed to &ldquo;Pending Winnings&rdquo;. When you have winnings and play a game on which you can use this bonus, you will wager funds in the following order:</p>
<ol>
<li>Cash &ndash; Real money from any deposits or winnings from cash stakes</li>
<li>Pending winnings &ndash; from play with your bonus</li>
<li>Any remaining bonus</li>
</ol>
<p>All bonuses are for wagering purposes only. The bonus amount can never be withdrawn.</p>
<h4><strong>Where can I see my cash/bonus balance?</strong></h4>
<p>You can see the breakdown of both cash and bonus balance in the Bingo lobby, displayed in the top left corner on desktop or a tablet device and the top right corner on a mobile device. To see your bonus status just click on the "My Bonuses" tab within the Bingo lobby menu.</p>
<h4><strong><u>How to claim both of our welcome offers</u></strong></h4>
<p>After completing the wagering requirements of either the Free Spins or the Bingo Bonus Welcome Offers, you can subsequently use either your withdrawable cash balance or deposit again in order to qualify for the alternative Welcome Offer as described above.</p>
<h4><strong>Can I claim any other bonuses while this bonus is active on my account?</strong></h4>
<p>Yes, you are entitled to claim both Welcome Offers at the point in which you create a new account and make your first deposit. You may also make use of any other of our great promotions. But please remember, wagering requirements must be met for each bonus separately, in the order the bonus was claimed.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
  <!-- End FAQs -->

  <div class="divider"></div>

  <!-- Standard Terms -->
  <section class='standard-terms bg-sun-bingo-lighter-grey'>
    <div class='wrapper'>
      <div class='copy-container'>
        <div class='copy-holder'>
          
          <h3>Standard terms</h3>
          
          <ol>
            <ol>
<li>The promoter of this promotion is VF2011 Limited ('Promoter').</li>
<li>By participating in this promotion, you will be deemed to have accepted, and agree to be bound by, these terms and conditions and the <a rel="noopener noreferrer" target="_blank" href="https://www.sunbingo.co.uk/terms">Terms and Conditions</a> for sunbingo.co.uk.</li>
<li>Players must be resident in the United Kingdom, and must be aged 18 years or over. Proof of identity, address and age must be provided on request. If you do not provide this information, or we are not fully satisfied that what has been provided meets the requirements of applicable law, we may withhold and/or retain any and all bonuses until such time as this has been fulfilled.</li>
<li>If you have any issues, please contact our <a rel="noopener noreferrer" target="_blank" href="https://www.sunbingo.co.uk/contactus">Customer Services</a> team.</li>
<li>No responsibility is accepted for game plays or stakes lost, corrupted or delayed in transmission for any reason.</li>
<li>If an act, omission, event or circumstance occurs which is beyond the reasonable control of the Promoter and which prevents the Promoter from complying with these terms and conditions the Promoter will not be liable for any failure to perform or delay in performing its obligation.</li>
<li>Employees of the Playtech plc group, the News UK group or any other company associated or involved in the promotion are not eligible to enter this promotion.</li>
<li>The promotion is limited to one per registered account / person. If we find that you have used more than one account to participate, we reserve the right to withhold payment of any promotional amount or bonus earned on the duplicate account(s).</li>
<li>Your personal details will be kept in accordance with relevant data protection laws and our <a rel="noopener noreferrer" target="_blank" href="https://www.sunbingo.co.uk/privacy-policy">Privacy Policy</a>. We will use the personal details you supplied for the administration of this promotion.</li>
<li>These terms and conditions shall be exclusively governed by and construed in accordance with the laws of England. The entrant irrevocably submits to the exclusive jurisdiction of the courts of England and Wales.</li>
<li>Please play responsibly. For more information, visit our <a rel="noopener noreferrer" target="_blank" href="https://www.sunbingo.co.uk/play-responsibly">Responsible Gambling</a> page.</li>
</ol>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <!-- End Standard Terms -->

   <!-- Legal Logos -->
  <section class='legal-logos bg-white '>
    <div class='wrapper'>
      
      <div class="logo-grid grid grid-cols-2 md:grid-cols-5 gap-4">

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-alderney.webp" alt="Alderney Gambling Control Commission logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-begambleaware.webp" alt="BeGambleAware.org logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-gambling-commission.webp" alt="Gambling Commission logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-gamcare.webp" alt="GamCare logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-gamstop.webp" alt="GAMSTOP logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-gordon-moody.webp" alt="Gordon Moody logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-ibas.webp" alt="IBAS logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-odr.webp" alt="ODR Europe logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-take-time-to-think.webp" alt="Take Time To Think logo">
        </div>

        <div class="secure-logo">
            <img src="/library/offers/NEWLP/logo-playtech.webp" alt="Playtech logo">
        </div>
        
      </div>

    </div>
  </section>
  <!-- End Legal Logos-->

  <!-- Footer -->
  <footer class="pb-20 lg:pb-0 bg-sun-bingo-lighter-grey">
    <div class="wrapper">
      <div class="space-y-3 md:space-y-4">
        <img src="/library/offers/NEWLP/sun-bingo-logo.webp" class="w-48 h-auto sb-logo" alt="Sun Bingo Logo">
        <p class="font-semibold">Copyright 2025 © News Group Newspapers Limited.</p>
        <p class="">All Rights Reserved. Sun Bingo is operated by VF2011 Limited.</p>
        <p class="">VF2011 Ltd is licensed and regulated in Great Britain by the Gambling Commission under account number 45110 and the Alderney Gambling Control Commission (License Number: 136C1).</p>
        <p class="">You must be a resident in the UK or Republic of Ireland and aged 18 or over to register an account at Sun Vegas. Only one account per person is permitted.</p>
        <p class="">Sun Bingo supports Responsible Gambling. For more information, please visit the Gamcare website or the BeGambleAware website.</p>
      </div>
    </div>  
  </footer>
  <!-- End Footer -->


  <div class='fixed-join bg-sun-bingo-light-grey/80 backdrop-blur-md w-full p-4 md:p-5 lg:p-4 2xl:p-4 z-50 fixed inset-x-0 bottom-0 shadow-lg lg:hidden border-t border-sun-bingo-font/20'>
    <a rel="noreferrer" target="_blank" href='https://www.sunbingo.co.uk/register' class='button button-pulse button-primary w-full'>Join Now</a>
  </div>

      


  `;
}
