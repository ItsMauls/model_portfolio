'use client'

import { useActionState } from 'react'
import { login } from '../actions'

export default function AdminLoginPage() {
  const [error, formAction, pending] = useActionState(login, undefined)

  return (
    <main className="flex min-h-dvh items-center justify-center bg-neutral-950 px-6 text-white">
      <form action={formAction} className="w-full max-w-sm space-y-4">
        <h1 className="text-xl font-semibold">Admin sign-in</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
          className="w-full rounded border border-white/20 bg-transparent px-3 py-2 outline-none focus:border-white/50"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded bg-white px-3 py-2 text-sm font-medium text-neutral-900 disabled:opacity-60"
        >
          {pending ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </main>
  )
}
