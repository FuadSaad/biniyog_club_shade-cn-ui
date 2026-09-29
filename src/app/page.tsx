import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6FAF8] text-[#112820] font-sans pb-20">
      
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
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
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-regular fa-clock text-xs"></i></div>
                    <span>Duration</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]"><i className="fa-regular fa-calendar-check text-xs"></i></div>
                    <span>Maturity Date</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">01-04-2027</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-solid fa-coins text-xs"></i></div>
                    <span>Share Value</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">৳ 1,000,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-solid fa-percent text-xs"></i></div>
                    <span>Profit Share</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">25%</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <a href="#" className="w-full text-center text-[15px] font-bold text-[#0F9E6C] hover:text-[#0A1930] transition flex items-center justify-center gap-1.5 group">
                View Investment Details <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
              </a>
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
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
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-regular fa-clock text-xs"></i></div>
                    <span>Duration</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]"><i className="fa-regular fa-calendar-check text-xs"></i></div>
                    <span>Maturity Date</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">01-04-2027</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-solid fa-coins text-xs"></i></div>
                    <span>Share Value</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">৳ 500,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-solid fa-percent text-xs"></i></div>
                    <span>Profit Share</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">20%</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <a href="#" className="w-full text-center text-[15px] font-bold text-[#0F9E6C] hover:text-[#0A1930] transition flex items-center justify-center gap-1.5 group">
                View Investment Details <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
              </a>
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
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
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-regular fa-clock text-xs"></i></div>
                    <span>Duration</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]"><i className="fa-regular fa-calendar-check text-xs"></i></div>
                    <span>Maturity Date</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">01-04-2027</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-solid fa-coins text-xs"></i></div>
                    <span>Share Value</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">৳ 200,000</span>
                </div>
                <div className="flex justify-between pb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#EAF5F1] flex items-center justify-center text-[#0F9E6C]"><i className="fa-solid fa-percent text-xs"></i></div>
                    <span>Profit Share</span>
                  </div>
                  <span className="font-bold text-[#0A1930]">20%</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="p-6 pt-0 flex flex-col gap-3">
              <a href="#" className="w-full text-center text-[15px] font-bold text-[#0F9E6C] hover:text-[#0A1930] transition flex items-center justify-center gap-1.5 group">
                View Investment Details <i className="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
              </a>
              <Button className="w-full h-14 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-[16px] rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
                <i className="fa-solid fa-handshake text-lg"></i> Become a Partner
              </Button>
            </CardFooter>
          </Card>

        </div>
      </section>

    </div>
  );
}
