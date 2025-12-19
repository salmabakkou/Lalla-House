export default function CraftSection() {
  return (
    <section className="bg-[#0C0C0C] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">
        
        <div className="md:w-1/2 text-center md:text-left">
          <h2
            className="text-sm uppercase tracking-widest text-[#beaf7b] mb-6"
            style={{ fontFamily: "'Bodoni Moda', serif" }}
          >
            Moroccan Craftsmanship
          </h2>

          <p className="text-sm leading-relaxed text-white/80 max-w-md mb-4">
            Each caftan is born from centuries of Moroccan savoir-faire,
            where hand embroidery, noble fabrics and refined finishes
            come together in perfect harmony.
          </p>

          <p className="text-sm leading-relaxed text-white/70 max-w-md mb-4">
            Our artisans work patiently on every detail, transforming
            traditional techniques into contemporary elegance,
            while preserving the soul of Moroccan heritage.
          </p>

          <p className="text-sm leading-relaxed text-white/60 max-w-md">
            This dedication to craftsmanship gives life to timeless
            pieces designed to be worn, admired and passed on.
          </p>
        </div>

        <div className="md:w-1/2">
          <div className="w-full h-[340px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
            <img
              src="/craft.jpg"
              alt="Moroccan Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
