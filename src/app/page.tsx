import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6FAF8] text-[#112820] font-sans pb-20">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-emerald-800 tracking-tight">Biniyog Club</span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[15px] font-bold text-emerald-700">Home</a>
            <a href="#" className="text-[15px] font-bold text-slate-600 hover:text-emerald-700 transition">Projects</a>
            <a href="#" className="text-[15px] font-bold text-slate-600 hover:text-emerald-700 transition">How It Works</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-emerald-700 border-emerald-700 font-bold hidden sm:inline-flex">Login</Button>
            <Button className="bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold">Start Investing</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <Badge variant="outline" className="bg-emerald-100/50 text-emerald-800 border-emerald-300 font-bold px-4 py-1.5 mb-6">
          INTEREST-FREE BUSINESS ECOSYSTEM
        </Badge>
        <h1 className="text-4xl sm:text-6xl font-black text-[#063C2A] tracking-tight leading-tight mb-6">
          Connecting People to Business Opportunities
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Invest in real, vetted businesses. Build a brighter, prosperous Bangladesh together with Halal and Shariah-compliant opportunities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold px-8 w-full sm:w-auto h-14 text-lg">
            Explore Projects
          </Button>
          <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 font-bold px-8 w-full sm:w-auto h-14 text-lg">
            How it Works
          </Button>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063C2A]">Featured Projects</h2>
            <p className="text-slate-600 mt-2">Invest in real businesses and share the profits.</p>
          </div>
          <Button variant="ghost" className="text-emerald-700 font-bold hidden sm:inline-flex hover:bg-emerald-50">
            View All &rarr;
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Project Card 1 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-slate-200 relative">
              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-700 opacity-90 flex items-center justify-center text-white/50">Image</div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 text-white font-bold border-emerald-600/30">
                ACTIVE PROJECT
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-extrabold text-[#0A1930]">Mariners Group Expansion</CardTitle>
              <CardDescription className="text-emerald-700 font-medium">Chittagong, Bangladesh</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-5">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-sm font-bold text-[#0F9E6C]">21.3%</span>
                </div>
                <Progress value={21.3} className="h-2.5 bg-slate-100 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                  <div>
                    <span className="block text-slate-500 mb-0.5">Raised</span>
                    <span className="font-bold text-[#0F9E6C]">৳ 10,657,567</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-500 mb-0.5">Target</span>
                    <span className="font-bold text-[#0A1930]">৳ 50,000,000</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 1,000,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">25%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">Lifetime</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex flex-col gap-3">
              <Button variant="ghost" className="w-full text-emerald-700 font-bold hover:bg-emerald-50">
                View Investment Details &rarr;
              </Button>
              <Button className="w-full h-12 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-base rounded-xl">
                Become a Partner
              </Button>
            </CardFooter>
          </Card>

          {/* Project Card 2 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-90 flex items-center justify-center text-white/50">Image</div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 text-white font-bold border-emerald-600/30">
                ACTIVE PROJECT
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-extrabold text-[#0A1930]">MarinoZZ Restaurant Chain</CardTitle>
              <CardDescription className="text-emerald-700 font-medium">Dhaka, Bangladesh</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-5">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-sm font-bold text-[#0F9E6C]">45.0%</span>
                </div>
                <Progress value={45.0} className="h-2.5 bg-slate-100 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                  <div>
                    <span className="block text-slate-500 mb-0.5">Raised</span>
                    <span className="font-bold text-[#0F9E6C]">৳ 9,000,000</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-500 mb-0.5">Target</span>
                    <span className="font-bold text-[#0A1930]">৳ 20,000,000</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 500,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">30%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">5 Years</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex flex-col gap-3">
              <Button variant="ghost" className="w-full text-emerald-700 font-bold hover:bg-emerald-50">
                View Investment Details &rarr;
              </Button>
              <Button className="w-full h-12 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-base rounded-xl">
                Become a Partner
              </Button>
            </CardFooter>
          </Card>

          {/* Project Card 3 */}
          <Card className="rounded-3xl overflow-hidden border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-48 bg-slate-200 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-500 opacity-90 flex items-center justify-center text-white/50">Image</div>
              <Badge className="absolute top-4 right-4 bg-[#0A6C4D]/90 text-white font-bold border-emerald-600/30">
                ACTIVE PROJECT
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-extrabold text-[#0A1930]">GrowUp Agro</CardTitle>
              <CardDescription className="text-emerald-700 font-medium">Purbachal, Dhaka</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-5">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-[#0A1930]">Funding Progress</span>
                  <span className="text-sm font-bold text-[#0F9E6C]">80.5%</span>
                </div>
                <Progress value={80.5} className="h-2.5 bg-slate-100 [&>div]:bg-[#0F9E6C]" />
                <div className="flex justify-between items-center mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-sm">
                  <div>
                    <span className="block text-slate-500 mb-0.5">Raised</span>
                    <span className="font-bold text-[#0F9E6C]">৳ 24,150,000</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-slate-500 mb-0.5">Target</span>
                    <span className="font-bold text-[#0A1930]">৳ 30,000,000</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Share Value</span>
                  <span className="font-bold text-[#0A1930]">৳ 200,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Profit Share</span>
                  <span className="font-bold text-[#0A1930]">20%</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-50">
                  <span>Duration</span>
                  <span className="font-bold text-[#0A1930]">3 Years</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-2 flex flex-col gap-3">
              <Button variant="ghost" className="w-full text-emerald-700 font-bold hover:bg-emerald-50">
                View Investment Details &rarr;
              </Button>
              <Button className="w-full h-12 bg-[#0F9E6C] hover:bg-[#0C855A] text-white font-bold text-base rounded-xl">
                Become a Partner
              </Button>
            </CardFooter>
          </Card>

        </div>
      </section>

    </div>
  );
}
