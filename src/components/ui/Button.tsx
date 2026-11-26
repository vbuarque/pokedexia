import type { ComponentProps } from "react";

const VARIANTS = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
};

type Props = ComponentProps<"button"> & {
  variant?: keyof typeof VARIANTS;
};

export function Button({ variant = 'primary', className = '', ...props}:Props) {
  return (
    <button
      type="button"
      className={`inline-flex h-11 items-center justify-content rounded-xl px-5 text-sm font-semibold transition-colors disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  )
}