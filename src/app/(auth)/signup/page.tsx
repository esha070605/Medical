import { GlassCard } from "@/components/ui/glass-card"
import Link from "next/link"

export default function SignupPage() {
  return (
    <GlassCard className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-slate-400">Join MediPulse today</p>
      </div>
      <form className="space-y-4 text-white">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" placeholder="Dr. John Doe" className="w-full bg-slate-900 border-white/10 border rounded-md px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" placeholder="doctor@medipulse.com" className="w-full bg-slate-900 border-white/10 border rounded-md px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" placeholder="••••••••" className="w-full bg-slate-900 border-white/10 border rounded-md px-3 py-2 text-white" />
        </div>
        <button className="w-full bg-cyan-400 text-slate-900 font-bold py-2 rounded-md hover:bg-cyan-500 transition-colors mt-4">
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-slate-400">
        Already have an account? <Link href="/login" className="text-cyan-400 hover:underline">Sign in</Link>
      </div>
    </GlassCard>
  )
}
