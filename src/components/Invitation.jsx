import { site } from "../data/site.config";
import { MarigoldGarland } from "./Florals";

export function Invitation() {
  const { invitation, couple } = site;
  const signOffLines = Array.isArray(invitation.signOff)
    ? invitation.signOff
    : [invitation.signOff];

  return (
    <section id="invitation" className="scroll-mt-6 px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <MarigoldGarland className="mx-auto mb-10 w-full max-w-lg" />
        <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">
          {invitation.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
          {invitation.heading}
        </h2>
        {invitation.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mt-5 text-base leading-7 text-muted">
            {paragraph}
          </p>
        ))}
        <div className="mt-8 font-display text-base leading-7 text-ink md:text-lg">
          {signOffLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-4 max-w-full font-script text-5xl leading-tight text-accent-deep sm:text-6xl md:text-7xl">
          <span className="block sm:inline">
            {couple.partnerA} <span className="text-gold">&</span>
          </span>{" "}
          <span className="block sm:inline">{couple.partnerB}</span>
        </p>
      </div>
    </section>
  );
}
