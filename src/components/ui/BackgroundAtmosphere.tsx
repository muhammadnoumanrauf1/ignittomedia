"use client";

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-brand-bg overflow-hidden">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Static Pure CSS Ambient Glow Orbs */}
      <div className="absolute top-[-15%] left-[20%] w-[60vw] h-[50vh] bg-gradient-to-b from-[#00DFA2]/10 via-[#00b3dd]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[10%] w-[50vw] h-[50vh] bg-gradient-to-t from-[#006b75]/15 via-[#031e41]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
