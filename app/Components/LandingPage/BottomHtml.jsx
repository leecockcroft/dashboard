export default function BottomHtml() {

    return `  <script>
            window.addEventListener("scroll", function () {
                const header = document.querySelector("header");
                const fixedjoin = document.querySelector(".fixed-join");
                if (window.scrollY > 50) {
                    header.classList.add("header-scrolled");
                } else {
                    header.classList.remove("header-scrolled");
                }

                if (window.scrollY > 500) {
                    fixedjoin.classList.add("fixed-join-scrolled");
                } else {
                    fixedjoin.classList.remove("fixed-join-scrolled");
                }
            });
        </script>
        
<script defer="" type="text/javascript" id="_hseo_" data-seo-link="https://online.thesunvegas.co.uk/promoRedirect?key=ej0xMzc1MjA5MSZsPTEzNzUxOTA1JnA9OTA0Mw%3D%3D" src="/library/seo/seo.packed.js"></script>

<script async="" type="text/javascript" id="_hseo_" data-seo-link="https://online.thesunvegas.co.uk/promoRedirect?key=ej0xMzc1MjA5MSZsPTEzNzUxOTA1JnA9OTA0Mw%3D%3D" src="/library/seo/seo.packed.js"></script>    
<script src="scriptforall.js"></script>
</body>
</html>

    `














    
  return (
    <pre style={{ whiteSpace: "pre-wrap" }}> {bottomHtml} </pre>
  );
}