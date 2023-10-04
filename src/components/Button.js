import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center items-center rounded-full py-2 px-5 text-base font-semibold tracking-tight shadow-sm focus:outline-none leading-5 lg:text-left text-center',
  outline:
    'inline-flex justify-center items-center rounded-full border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none leading-5 py-2 px-5 lg:text-left text-center',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 transition duration-300 ease-in-out',
    orange:
      'bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-orange-600 transition duration-300 ease-in-out',
    white:
      'bg-white text-orange-600 hover:text-orange-700 focus-visible:text-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-orange-50 active:text-orange-900/80 disabled:opacity-40 disabled:hover:text-orange-600 transition duration-300 ease-in-out',
  },
  outline: {
    slate:
      'border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent transition duration-300 ease-in-out',
    orange:
      'border-orange-300 text-orange-600 hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:text-orange-600/70 disabled:opacity-40 disabled:hover:border-orange-300 disabled:hover:bg-transparent transition duration-300 ease-in-out',
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
      )}
      {...props}
    />
  )
}

export function ButtonLink({
  variant = 'solid',
  color = 'orange',
  href,
  className,
  ...props
}) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          baseStyles[variant],
          variantStyles[variant][color],
          className
        )}
        {...props}
      />
    </Link>
  )
}
