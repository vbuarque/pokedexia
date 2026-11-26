type Props = {
  label: string;
  value: number;
  max?: number;
  barClassName?: string;
};

export function StatBar({
  label,
  value,
  max = 150,
  barClassName = "bg-indigo-600",
}: Props) {
  const percent = Math.min((value / max) * 100, 100);

  return (
    <div className="flex items-center gap-4">
      <span className="w-28 shrink-0 text-sm text-slate-500">{label}</span>
      <span className="2-8 shrink-0 text-right text-sm font-semibold">
        {label}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${barClassName}`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
