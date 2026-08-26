import type { Metadata } from "next";
import type { ReactNode } from "react";
import { COHORT, SITE } from "@/lib/copy";

export const metadata: Metadata = {
  title: "EOI specimen",
  description: "Implementation specimen for the Expression of Interest page.",
};

const TOKENS = [
  ["--bg", "#000000", "Page"],
  ["--bg-2", "#0b1020", "Alt bands"],
  ["--panel", "#111111", "Cards / inputs"],
  ["--fg", "#ffffff", "Text"],
  ["--muted", "#8a8a8a", "Secondary"],
  ["--line", "#222222", "Borders"],
  ["--mint", "#6ee7b7", "Primary CTA"],
  ["--mint-ink", "#04160f", "Text on mint"],
  ["--gold", "#c9a227", "Deadline only"],
  ["--warn", "#ff3b30", "Errors"],
] as const;

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      {hint ? <span className="mt-0.5 block text-xs text-muted">{hint}</span> : null}
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-1 block text-xs text-warn">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "h-11 w-full border border-line bg-panel px-3 text-sm text-fg outline-none placeholder:text-muted focus:border-mint";
const areaClass =
  "min-h-28 w-full border border-line bg-panel px-3 py-2 text-sm text-fg outline-none placeholder:text-muted focus:border-mint";

export default function SpecimenPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
      <p className="mono text-xs text-mint">SPECIMEN · FOR IMPLEMENTATION · NOT LIVE INTAKE</p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
        EOI page specimen
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
        Build <span className="text-fg">/apply/eoi</span> to this. Keep the
        existing site chrome (header lockup, footer, black/mint, 0 radius). Do
        not turn this into the 16-module assessment.
      </p>
      <p className="mono mt-3 text-xs text-gold">
        {COHORT.status.toUpperCase()} · CLOSE {COHORT.deadline.toUpperCase()} ·{" "}
        {COHORT.city.toUpperCase()}
      </p>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mono text-xs text-mint">00 · RULES</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold">Do</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>+ One scroll, four blocks: You · Direction · Commitment · Consent</li>
              <li>+ ~5 minutes. Free. No payment. Not a seat offer.</li>
              <li>+ Under 18 expands guardian name, email, phone</li>
              <li>+ Success screen with application reference</li>
              <li>+ Labels always visible — never placeholder-only</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Don’t</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>− 16-module quiz, scoring, or pass/fail</li>
              <li>− File upload, pitch deck, GitHub, company CIN</li>
              <li>− Soft pills, gradients, Typeform one-question screens</li>
              <li>− Payment / GST on this step</li>
              <li>− Promise admission, launch, or funding</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mono text-xs text-mint">01 · TOKENS</h2>
        <div className="mt-4 grid grid-cols-2 gap-px bg-line sm:grid-cols-5">
          {TOKENS.map(([name, hex, use]) => (
            <div key={name} className="bg-bg p-3">
              <div
                className="mb-2 h-8 border border-line"
                style={{ background: hex }}
              />
              <p className="mono text-[0.6rem] text-muted">{name}</p>
              <p className="mono text-[0.65rem]">{hex}</p>
              <p className="mt-1 text-xs text-muted">{use}</p>
            </div>
          ))}
        </div>
        <p className="mono mt-4 text-[0.65rem] text-muted">
          FONT SANS = GEIST · FONT MONO = GEIST MONO · RADIUS = 0 · MAX FORM WIDTH
          = 640PX
        </p>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mono text-xs text-mint">02 · TYPE</h2>
        <div className="mt-6 space-y-5">
          <div>
            <p className="mono text-[0.6rem] text-muted">EYEBROW</p>
            <p className="mono text-xs text-mint">COHORT 1 · KOCHI · APPLICATIONS OPEN</p>
          </div>
          <div>
            <p className="mono text-[0.6rem] text-muted">H1 · PAGE</p>
            <p className="text-3xl font-semibold tracking-tight md:text-5xl">
              Tell us who you are and what you want to test.
            </p>
          </div>
          <div>
            <p className="mono text-[0.6rem] text-muted">BODY</p>
            <p className="max-w-xl text-sm text-muted">
              Free Expression of Interest. About five minutes. No payment. This
              is not a completed application and does not guarantee a seat.
            </p>
          </div>
          <div>
            <p className="mono text-[0.6rem] text-muted">LOCKUP (ALREADY IN HEADER)</p>
            <p className="text-[0.58rem] font-medium tracking-[0.22em]">FOUNDER-BEING</p>
            <p className="text-[1.05rem] font-bold tracking-tight">Launchpad</p>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mono text-xs text-mint">03 · CONTROLS</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Field label="Default">
            <input className={inputClass} placeholder="Your name" readOnly />
          </Field>
          <Field label="Focus" hint="1px mint border. No glow.">
            <input
              className={`${inputClass} border-mint`}
              defaultValue="Ananya R."
              readOnly
            />
          </Field>
          <Field label="Error" error="Enter a valid email.">
            <input
              className={`${inputClass} border-warn`}
              defaultValue="not-an-email"
              readOnly
            />
          </Field>
          <Field label="Primary button">
            <button
              type="button"
              className="inline-flex h-12 items-center bg-mint px-6 text-sm font-bold text-[var(--mint-ink)]"
            >
              Submit expression of interest
            </button>
          </Field>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Free to submit", "No payment now", "Admission is not guaranteed"].map(
            (c) => (
              <span
                key={c}
                className="border border-line bg-panel px-2.5 py-1 text-xs text-muted"
              >
                {c}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mono text-xs text-mint">04 · PAGE LAYOUT · /APPLY/EOI</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Specimen form below is visual only. Wire to your backend. Sticky bar
          stays on the form page.
        </p>

        <div className="mt-8 max-w-xl border border-line bg-bg">
          <div className="border-b border-line px-5 py-6 md:px-6">
            <p className="mono text-xs text-mint">
              COHORT 1 · KOCHI · APPLICATIONS OPEN
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Tell us who you are and what you want to test.
            </h2>
            <p className="mt-2 text-sm text-muted">
              Free EOI. About five minutes. No payment. Not a seat offer.
            </p>
            <p className="mono mt-3 text-[0.65rem] text-gold">
              DEADLINE EXTENDED · CLOSE {COHORT.deadline.toUpperCase()}
            </p>
          </div>

          <div className="space-y-8 px-5 py-8 md:px-6">
            <fieldset className="space-y-4">
              <legend className="mono text-xs text-mint">01 · YOU</legend>
              <Field label="Full name">
                <input className={inputClass} name="name" autoComplete="name" />
              </Field>
              <Field label="Email">
                <input className={inputClass} name="email" type="email" />
              </Field>
              <Field label="Phone" hint="India mobile preferred">
                <input className={inputClass} name="phone" type="tel" />
              </Field>
              <Field label="City">
                <input className={inputClass} name="city" />
              </Field>
              <Field label="Age">
                <select className={inputClass} name="age" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Under 18</option>
                  <option>18–21</option>
                  <option>22–25</option>
                  <option>26+</option>
                </select>
              </Field>
              <p className="text-xs text-muted">
                If under 18, show guardian name, email, and phone here before
                submit is allowed.
              </p>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="mono text-xs text-mint">02 · DIRECTION</legend>
              <Field
                label="What do you want to test?"
                hint="A problem, idea, or proposed solution — not a polished pitch."
              >
                <input
                  className={inputClass}
                  name="direction"
                  placeholder="e.g. Home cooks who waste leftover vegetables"
                />
              </Field>
              <Field
                label="In a few sentences"
                hint="80–800 characters. Who has the problem, what you would try first."
              >
                <textarea className={areaClass} name="story" />
              </Field>
              <Field label="Where are you now?">
                <select className={inputClass} name="stage" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Idea only</option>
                  <option>Talking to people</option>
                  <option>Built something small</option>
                  <option>Already have users or sales</option>
                </select>
              </Field>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="mono text-xs text-mint">03 · COMMITMENT</legend>
              <Field label="Can you show up for 16 weeks in Kochi?">
                <select className={inputClass} name="commit" defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Yes</option>
                  <option>Mostly — I need to check one constraint</option>
                  <option>Not sure</option>
                </select>
              </Field>
              <Field label="Anything that might stop you?" hint="Optional">
                <textarea className={areaClass} name="blockers" />
              </Field>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="mono text-xs text-mint">04 · CONSENT</legend>
              <label className="flex gap-3 text-sm text-muted">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--mint)]" />
                I understand this EOI is free, is not a completed application,
                and does not guarantee admission.
              </label>
              <label className="flex gap-3 text-sm text-muted">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--mint)]" />
                The information I submit is true to the best of my knowledge.
              </label>
              <p className="text-xs text-muted">
                Questions:{" "}
                <a className="text-mint" href={`mailto:${SITE.supportEmail}`}>
                  {SITE.supportEmail}
                </a>
              </p>
            </fieldset>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-line bg-panel px-5 py-4 md:px-6">
            <p className="mono text-[0.65rem] text-muted">
              FREE · NO PAYMENT · NOT A SEAT
            </p>
            <button
              type="button"
              className="inline-flex h-11 items-center bg-mint px-5 text-sm font-bold text-[var(--mint-ink)]"
            >
              Submit EOI
            </button>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="mono text-xs text-mint">05 · SUCCESS</h2>
        <div className="mt-6 max-w-xl border border-line bg-panel p-6">
          <p className="mono text-xs text-mint">RECEIVED</p>
          <h2 className="mt-2 text-2xl font-semibold">EOI submitted.</h2>
          <p className="mt-2 text-sm text-muted">
            Quote this reference in any email to {SITE.supportEmail}.
          </p>
          <p className="mono mt-4 border border-line bg-bg px-3 py-2 text-sm">
            FBL-C1-00418
          </p>
          <ol className="mt-6 space-y-1 text-sm text-muted">
            <li>01 Programme team reviews</li>
            <li>02 If invited: Starter Kit + assessment (separate)</li>
            <li>03 Founder conversation</li>
            <li>04 Selection / waitlist / no</li>
          </ol>
        </div>
      </section>

      <p className="mono mt-12 text-[0.65rem] text-muted">
        SPECIMEN URL /specimen · IMPLEMENT /apply/eoi · ASSESSMENT IS A LATER
        GATED SURFACE
      </p>
    </div>
  );
}
