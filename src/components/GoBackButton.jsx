import { Button } from '@/components/Button'

export function GoBackButton() {
  return (
    <div className="inline-block">
      <div className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2 text-center text-base font-semibold leading-5 tracking-tight text-white shadow-sm transition duration-300 ease-in-out hover:bg-orange-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-orange-600 lg:text-left">
        <button onClick={() => window.history.back()}>Go back</button>
      </div>
    </div>
  )
}
