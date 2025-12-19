export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/heroSection.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1
          className="text-3xl sm:text-5xl tracking-widest uppercase mb-4"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          LALLA HOUSE
        </h1>

        <p className="text-sm sm:text-base tracking-widest text-[#beaf7b] mb-8">
          Moroccan Caftans · Timeless Elegance
        </p>

        <a
          href="/catalogue"
          className="px-8 py-3 border border-[#beaf7b] text-[#beaf7b] uppercase tracking-widest text-xs hover:bg-[#beaf7b] hover:text-black transition-all"
        >
          Discover Collection
        </a>
      </div>
    </section>
  );
}
