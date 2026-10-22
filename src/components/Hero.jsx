import { site } from "../data/site.config";
import { CornerMandala, FallingPetals } from "./Florals";

export function Hero() {
  const { couple, displayDate, city, hero } = site;
  const backdrop = `${import.meta.env.BASE_URL}${hero.backdrop ?? "photos/1.jpeg"}`;

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-5 pb-28 pt-16 text-center"
    >
      <img
        src={backdrop}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_35%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
      />

      <FallingPetals />
      <CornerMandala className="pointer-events-none absolute left-0 top-0 w-36 max-w-[42vw] md:w-56" />
      <CornerMandala className="pointer-events-none absolute right-0 top-0 w-36 max-w-[42vw] origin-center scale-x-[-1] md:w-56" />
      <CornerMandala className="pointer-events-none absolute bottom-16 left-0 w-28 max-w-[36vw] origin-center scale-y-[-1] md:w-44" />
      <CornerMandala className="pointer-events-none absolute bottom-16 right-0 w-28 max-w-[36vw] origin-center scale-[-1] md:w-44" />

      <p className="relative font-display text-sm tracking-[0.28em] text-white/85 uppercase drop-shadow-md">
        {hero.kicker}
      </p>
      <h1 className="relative mt-4 max-w-full font-script text-5xl leading-tight text-white drop-shadow-lg sm:text-7xl md:text-8xl">
        <span className="block sm:inline">
          {couple.partnerA} <span className="text-gold">&</span>
        </span>{" "}
        <span className="block sm:inline">{couple.partnerB}</span>
      </h1>
      <p className="relative mt-6 font-display text-xl text-white drop-shadow-md md:text-2xl">
        {displayDate}
      </p>
      <p className="relative mt-1 font-display text-lg text-white/85 drop-shadow-md">
        {city}
      </p>
      <a
        href={hero.ctaHref}
        className="relative mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-page px-7 py-3 text-sm font-medium tracking-wide text-accent-deep shadow-md"
      >
        {hero.ctaLabel}
      </a>
    </section>
  );
}
