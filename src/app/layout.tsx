import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biniyog Club | Towards a Prosperous Bangladesh with Halal Investment",
  description: "An interest-free business ecosystem connecting people, businesses & opportunities for a brighter Bangladesh.",
  icons: {
    icon: "/assets/images/Biniyog Club Logo Icon PNG.png",
    shortcut: "/assets/images/Biniyog Club Logo Icon PNG.png",
    apple: "/assets/images/Biniyog Club Logo Icon PNG.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var lang = sessionStorage.getItem('biniyog_lang') || localStorage.getItem('biniyog_lang') || 'en';
            document.documentElement.lang = lang;
            if (lang === 'en') {
              var s = document.createElement('style');
              s.id = 'lang-flash-guard';
              s.textContent = 'body { visibility: hidden !important; opacity: 0 !important; }';
              document.head.appendChild(s);
              setTimeout(function() {
                var g = document.getElementById('lang-flash-guard');
                if (g) g.remove();
                if (document.body) {
                  document.body.style.visibility = 'visible';
                  document.body.style.opacity = '1';
                }
              }, 180);
            }
          } catch(e) {}
        ` }} />
        {/* Preconnect to Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* FontAwesome 6 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Custom Stylesheet */}
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Tailwind CSS CDN & Theme Config to perfectly match HTML design */}
        <script src="https://cdn.tailwindcss.com" async={false}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      ocean: {
                        50: '#F0FDF8',
                        100: '#E6F7F2',
                        200: '#C2EEDF',
                        300: '#8FE0C5',
                        400: '#4EC8A3',
                        500: '#00A86B',
                        600: '#0A8757',
                        700: '#0A5C40',
                        800: '#063C2A',
                        900: '#03251A',
                      }
                    },
                    fontFamily: {
                      sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'sans-serif'],
                      bangla: ['"Hind Siliguri"', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="pb-20 lg:pb-0 bg-[#F9FBFA] text-[#112820] antialiased selection:bg-emerald-200 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
