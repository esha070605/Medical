export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F7FF] text-[#1A2340]">
      {/* Patient Top Nav */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm">
        <div className="font-bold text-[#0061FF] text-xl">MediPulse</div>
        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
      </header>
      
      <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-3xl mx-auto w-full pb-24 md:pb-8">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full h-16 bg-white border-t border-gray-200 md:hidden flex justify-around items-center px-4 pb-safe z-10">
        <div className="flex flex-col items-center text-[#0061FF]">
          <span className="text-xs font-semibold mt-1">Timeline</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs font-medium mt-1">Vitals</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs font-medium mt-1">Meds</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs font-medium mt-1">Labs</span>
        </div>
      </nav>
    </div>
  )
}
