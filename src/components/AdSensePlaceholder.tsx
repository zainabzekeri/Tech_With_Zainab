import { AlertCircle } from 'lucide-react';

interface AdSensePlaceholderProps {
  slot: 'header' | 'sidebar' | 'infeed';
}

export default function AdSensePlaceholder({ slot }: AdSensePlaceholderProps) {
  const getSlotDetails = () => {
    switch (slot) {
      case 'header':
        return {
          dimensions: "728 x 90 (Leaderboard) / 320 x 100 (Mobile)",
          sizeClass: "w-full min-h-[90px] max-w-4xl mx-auto py-3",
          bg: "bg-amber-50/50 border-amber-200/60"
        };
      case 'sidebar':
        return {
          dimensions: "300 x 250 (Medium Rectangle) / 300 x 600 (Half Page)",
          sizeClass: "w-full min-h-[250px] aspect-square lg:aspect-[3/5] md:w-[300px]",
          bg: "bg-sky-50/40 border-sky-100/60"
        };
      case 'infeed':
        return {
          dimensions: "Native Responsive Content block (Match feed styling)",
          sizeClass: "w-full py-4 px-6 min-h-[120px] rounded-2xl",
          bg: "bg-slate-50/60 border-slate-100/60"
        };
    }
  };

  const { dimensions, sizeClass, bg } = getSlotDetails();

  return (
    <div 
      id={`adsense-${slot}-placeholder`}
      className={`mx-auto flex flex-col items-center justify-center p-4 border rounded-xl border-dashed transition-all hover:border-brand-light/30 text-center ${bg} ${sizeClass}`}
    >
      <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[9px] uppercase tracking-wider mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        Google AdSense Placeholder
      </div>
      <p className="text-slate-500 text-xs font-semibold select-none">
        {slot === 'header' ? 'Top Brand Banner Area' : slot === 'sidebar' ? 'Sidebar Ad Block' : 'In-Feed Article Advertisement'}
      </p>
      <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 font-mono">
        <AlertCircle className="w-3 h-3 text-slate-300" />
        <span>Target: {dimensions}</span>
      </div>
    </div>
  );
}
