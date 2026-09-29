import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6FAF8] text-[#112820] font-sans pb-0">
      
      {/* Top Ticker */}
      <div className="bg-[#03251A] text-emerald-200 text-sm py-2 px-4 flex justify-center items-center gap-2">
        <Badge className="bg-emerald-700/60 text-[10px]"><i className="fa-solid fa-leaf mr-1"></i> হালাল</Badge>
        <span className="font-bangla">সুদমুক্ত ও শরিয়াহ-সম্মত বিজনেস ইকোসিস্টেম</span>
      </div>

      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/images/logo.png" alt="Biniyog Club" className="h-8 sm:h-10" />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[15px] font-bold text-emerald-700">Home</a>
            <a href="#" className="text-[15px] font-bold text-slate-600 hover:text-emerald-700 transition">Projects</a>
            <a href="#" className="text-[15px] font-bold text-slate-600 hover:text-emerald-700 transition">How It Works</a>
            <a href="#" className="text-[15px] font-bold text-slate-600 hover:text-emerald-700 transition">Sectors</a>
            <a href="#" className="text-[15px] font-bold text-slate-600 hover:text-emerald-700 transition">About Us</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-emerald-700 border-emerald-700 font-bold hidden sm:inline-flex rounded-full px-6">Login</Button>
            <Button className="bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold rounded-full px-6">Start Investing</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
          <i className="fa-solid fa-leaf text-emerald-600"></i>
          <span>Interest-Free Business Ecosystem</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#063C2A] tracking-tight leading-tight mb-6 font-bangla">
          Connecting People to <br className="hidden sm:block" /> Business Opportunities
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-bangla">
          Invest in real, vetted businesses. Build a brighter, prosperous Bangladesh together with Halal and Shariah-compliant opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold px-8 w-full sm:w-auto h-14 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
            Explore Projects
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 font-bold px-8 w-full sm:w-auto h-14 text-lg rounded-full hover:bg-emerald-50 transition-all">
            How it Works
          </Button>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700 uppercase tracking-wider mb-1">
              <i className="fa-solid fa-circle text-[8px] text-emerald-500 animate-pulse"></i> <span>Live Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063C2A] font-bangla mt-1">Featured Projects</h2>
            <p className="text-slate-600 mt-2 font-bangla text-lg">Invest in real businesses and share the profits.</p>
          </div>
          <a href="#" className="text-emerald-700 font-bold hover:text-emerald-800 transition flex items-center gap-2 text-lg">
            View All <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Project Card 1 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="h-56 relative overflow-hidden">
              <img src="/assets/images/1.png" alt="Mariners Group" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <i className="fa-solid fa-ship"></i> Mariners Group
              </div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 backdrop-blur-md text-white font-bold border-emerald-600/30 px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse"></span> ACTIVE PROJECT
              </Badge>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A1930] font-bangla leading-tight mb-2">Mariners Group Expansion</h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 flex items-center gap-2 font-bangla mb-5">
                <i className="fa-solid fa-location-dot text-[#0F9E6C]"></i> Chittagong, Bangladesh
              </p>
              <div className="mb-6 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[14px] font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-[15px] font-bold text-[#0F9E6C]">21.3%</span>
                </div>
                <Progress value={21.3} className="h-2.5 bg-slate-200 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 text-sm">
                  <div>
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Raised</span>
                    <span className="font-extrabold text-[#0F9E6C] text-[15px]">৳ 10,657,567</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Target</span>
                    <span className="font-extrabold text-[#0A1930] text-[15px]">৳ 50,000,000</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-[14px] sm:text-[15px] text-slate-600 mt-auto pt-2">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 1,000,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">25%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2">
                <i className="fa-solid fa-handshake text-lg"></i> Become a Partner
              </Button>
            </CardFooter>
          </Card>

          {/* Project Card 2 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="h-56 relative overflow-hidden">
              <img src="/assets/images/2.png" alt="MarinoZZ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <i className="fa-solid fa-utensils"></i> MarinoZZ Group
              </div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 backdrop-blur-md text-white font-bold border-emerald-600/30 px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse"></span> ACTIVE PROJECT
              </Badge>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A1930] font-bangla leading-tight mb-2">MarinoZZ Restaurant Chain</h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 flex items-center gap-2 font-bangla mb-5">
                <i className="fa-solid fa-location-dot text-[#0F9E6C]"></i> Dhaka, Bangladesh
              </p>
              <div className="mb-6 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[14px] font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-[15px] font-bold text-[#0F9E6C]">45.0%</span>
                </div>
                <Progress value={45.0} className="h-2.5 bg-slate-200 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 text-sm">
                  <div>
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Raised</span>
                    <span className="font-extrabold text-[#0F9E6C] text-[15px]">৳ 9,000,000</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Target</span>
                    <span className="font-extrabold text-[#0A1930] text-[15px]">৳ 20,000,000</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-[14px] sm:text-[15px] text-slate-600 mt-auto pt-2">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 500,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">20%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2">
                <i className="fa-solid fa-handshake text-lg"></i> Become a Partner
              </Button>
            </CardFooter>
          </Card>

          {/* Project Card 3 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="h-56 relative overflow-hidden">
              <img src="/assets/images/3.png" alt="GrowUp Agro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <i className="fa-solid fa-seedling"></i> GrowUp Agro
              </div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 backdrop-blur-md text-white font-bold border-emerald-600/30 px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse"></span> ACTIVE PROJECT
              </Badge>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A1930] font-bangla leading-tight mb-2">GrowUp Agro Farm</h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 flex items-center gap-2 font-bangla mb-5">
                <i className="fa-solid fa-location-dot text-[#0F9E6C]"></i> Purbachal, Dhaka
              </p>
              <div className="mb-6 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[14px] font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-[15px] font-bold text-[#0F9E6C]">80.5%</span>
                </div>
                <Progress value={80.5} className="h-2.5 bg-slate-200 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 text-sm">
                  <div>
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Raised</span>
                    <span className="font-extrabold text-[#0F9E6C] text-[15px]">৳ 24,150,000</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Target</span>
                    <span className="font-extrabold text-[#0A1930] text-[15px]">৳ 30,000,000</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-[14px] sm:text-[15px] text-slate-600 mt-auto pt-2">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 200,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">20%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2">
                <i className="fa-solid fa-handshake text-lg"></i> Become a Partner
              </Button>
            </CardFooter>
          </Card>
          
          {/* Project Card 4 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            <div className="h-56 relative overflow-hidden">
              <img src="/assets/images/4.png" alt="MOHS Venice City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <i className="fa-solid fa-city"></i> Real Estate
              </div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 backdrop-blur-md text-white font-bold border-emerald-600/30 px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse"></span> ACTIVE PROJECT
              </Badge>
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#0A1930] font-bangla leading-tight mb-2">MOHS Venice City</h3>
              <p className="text-[14px] sm:text-[15px] text-slate-500 flex items-center gap-2 font-bangla mb-5">
                <i className="fa-solid fa-location-dot text-[#0F9E6C]"></i> Basila, Dhaka
              </p>
              <div className="mb-6 p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[14px] font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-[15px] font-bold text-[#0F9E6C]">15.5%</span>
                </div>
                <Progress value={15.5} className="h-2.5 bg-slate-200 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 text-sm">
                  <div>
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Raised</span>
                    <span className="font-extrabold text-[#0F9E6C] text-[15px]">৳ 15,500,000</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-400 text-xs uppercase font-bold mb-0.5">Target</span>
                    <span className="font-extrabold text-[#0A1930] text-[15px]">৳ 100,000,000</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-[14px] sm:text-[15px] text-slate-600 mt-auto pt-2">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 2,000,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">25%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2">
                <i className="fa-solid fa-handshake text-lg"></i> Become a Partner
              </Button>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="bg-gradient-to-r from-[#03251A] via-[#0A5C40] to-[#03251A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Growing Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-emerald-300 mb-2">5+</div>
              <div className="text-emerald-100/80 text-sm">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-300 mb-2">৳ 10Cr+</div>
              <div className="text-emerald-100/80 text-sm">Total Funded</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-300 mb-2">100%</div>
              <div className="text-emerald-100/80 text-sm">Shariah Compliant</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-300 mb-2">500+</div>
              <div className="text-emerald-100/80 text-sm">Happy Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#112820] text-slate-300 py-12 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Biniyog Club</h3>
            <p className="text-slate-400 text-sm">An interest-free business ecosystem connecting people, businesses & opportunities for a brighter Bangladesh.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition">Projects</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">How it Works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><i className="fa-solid fa-phone mr-2"></i> +880 1335 149030</li>
              <li><i className="fa-solid fa-envelope mr-2"></i> info@biniyogclub.com</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}
