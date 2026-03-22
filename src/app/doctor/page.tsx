export default function DoctorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Ward Overview</h1>
          <p className="text-muted-foreground mt-1">Real-time status of all your assigned patients.</p>
        </div>
      </div>
      {/* Patient Grid Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Patient Cards will go here */}
      </div>
    </div>
  )
}
