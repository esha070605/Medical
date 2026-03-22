export default function PatientDashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Good morning 👋</h1>
        <p className="text-gray-500 mt-1">Here is your health timeline</p>
      </header>
      
      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="font-semibold mb-2">Current Status</h2>
        <div className="text-sm text-gray-600">Your vitals are stable and you are progressing well today.</div>
      </div>
      
      {/* Timeline Placeholder */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg mt-8 mb-4">Recent Events</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4">
          <div className="text-2xl">💓</div>
          <div>
            <div className="font-medium">Heart rate normal — 78 bpm</div>
            <div className="text-sm text-gray-500 mt-1">10 mins ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}
