"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";

// ── Types ─────────────────────────────────────────────────────────────────────

type ServiceOption = { id: string; label: string; description: string };
type BudgetOption  = { id: string; label: string; range: string };
type FormState     = {
  name: string; email: string; company: string;
  services: string[]; budget: string; timeline: string; message: string;
};
type Status = "idle" | "loading" | "success";

// ── Rose Pink tokens ──────────────────────────────────────────────────────────
const C = {
  pageBg:       "#fdf4fb",
  altBg:        "#fdf0f8",
  cardBg:       "rgba(253,240,248,0.6)",
  inputBg:      "rgba(253,240,248,0.5)",
  inputBgFocus: "rgba(253,240,248,0.85)",
  border:       "#f0c0d8",
  borderFocus:  "#c490a8",
  accent:       "#993556",
  heading:      "#2a0a1a",
  body:         "#72243e",
  muted:        "#c490a8",
  btnBg:        "#993556",
  btnText:      "#ffffff",
  btnDisabled:  "#fbeaf0",
};

// ── Data ──────────────────────────────────────────────────────────────────────

const services: ServiceOption[] = [
  { id: "branding",  label: "branding & identity", description: "logo, visual system, guidelines" },
  { id: "web",       label: "web design & dev",    description: "sites, apps, landing pages" },
  { id: "strategy",  label: "digital strategy",    description: "positioning, ux, roadmap" },
  { id: "marketing", label: "growth & marketing",  description: "seo, ads, content" },
  { id: "motion",    label: "motion & video",       description: "animations, reels, intros" },
  { id: "other",     label: "something else",       description: "let's figure it out together" },
];

const budgets: BudgetOption[] = [
  { id: "starter",    label: "starter",    range: "£5k – £15k"   },
  { id: "growth",     label: "growth",     range: "£15k – £40k"  },
  { id: "scale",      label: "scale",      range: "£40k – £100k" },
  { id: "enterprise", label: "enterprise", range: "£100k+"        },
];

const timelines = [
  "asap (within 2 weeks)",
  "1 month",
  "2–3 months",
  "flexible / no rush",
];

const contactInfo = [
  { label: "email",         value: "hello@securify.co", href: "mailto:hello@securify.co" },
  { label: "based in",      value: "london, uk",         href: null },
  { label: "response time", value: "within 24hrs",       href: null },
];

// ── Divider ───────────────────────────────────────────────────────────────────

const Divider = () => (
  <div style={{ height: 1, background: C.border, opacity: 0.5 }} />
);

// ── Field label ───────────────────────────────────────────────────────────────

const FieldLabel = ({ text }: { text: string }) => (
  <p style={{ color: C.accent }} className="text-[10px] tracking-[0.2em] uppercase mb-3">
    {text}
  </p>
);

// ── Floating Input ────────────────────────────────────────────────────────────

function FloatingInput({
  label, id, type = "text", value, onChange, required = false,
}: {
  label: string; id: string; type?: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id} type={type} value={value} required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={label}
        autoComplete="off"
        style={{
          background: focused ? C.inputBgFocus : C.inputBg,
          border: `1px solid ${focused ? C.borderFocus : C.border}`,
          color: C.heading,
        }}
        className="w-full rounded-xl px-4 pt-6 pb-2.5 text-sm outline-none transition-all duration-200 placeholder-transparent"
      />
      <label
        htmlFor={id}
        style={{ color: C.muted }}
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
          raised ? "top-2 text-[10px] tracking-widest uppercase" : "top-4 text-sm"
        }`}
      >
        {label}{required && " *"}
      </label>
      <div
        style={{ background: C.accent }}
        className={`absolute bottom-0 left-4 right-4 h-px transition-transform duration-300 origin-left ${
          focused ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

// ── Floating Textarea ─────────────────────────────────────────────────────────

function FloatingTextarea({
  label, id, value, onChange,
}: {
  label: string; id: string; value: string; onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id} value={value} rows={5}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={label}
        style={{
          background: focused ? C.inputBgFocus : C.inputBg,
          border: `1px solid ${focused ? C.borderFocus : C.border}`,
          color: C.heading,
        }}
        className="w-full rounded-xl px-4 pt-6 pb-3 text-sm outline-none resize-none transition-all duration-200 placeholder-transparent"
      />
      <label
        htmlFor={id}
        style={{ color: C.muted }}
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
          raised ? "top-2 text-[10px] tracking-widest uppercase" : "top-4 text-sm"
        }`}
      >
        {label}
      </label>
      <div
        style={{ background: C.accent }}
        className={`absolute bottom-0 left-4 right-4 h-px transition-transform duration-300 origin-left ${
          focused ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

// ── Service Selector ──────────────────────────────────────────────────────────

function ServiceSelector({ selected, onChange }: {
  selected: string[]; onChange: (ids: string[]) => void;
}) {
  const toggle = (id: string) =>
    onChange(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {services.map((s) => {
        const active = selected.includes(s.id);
        return (
          <button
            key={s.id} type="button" onClick={() => toggle(s.id)}
            style={{
              background: active ? "rgba(153,53,86,0.07)" : C.inputBg,
              border: `1px solid ${active ? C.borderFocus : C.border}`,
            }}
            className="text-left rounded-xl p-3.5 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between gap-1 mb-1">
              <span style={{ color: active ? C.heading : C.body }} className="text-xs font-normal leading-snug">
                {s.label}
              </span>
              <div
                style={{
                  border: `1px solid ${active ? C.accent : C.border}`,
                  background: active ? "rgba(153,53,86,0.1)" : "transparent",
                }}
                className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200"
              >
                {active && <Check size={8} color={C.accent} />}
              </div>
            </div>
            <p style={{ color: C.muted }} className="text-[10px] leading-snug">{s.description}</p>
          </button>
        );
      })}
    </div>
  );
}

// ── Budget Selector ───────────────────────────────────────────────────────────

function BudgetSelector({ selected, onChange }: {
  selected: string; onChange: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {budgets.map((b) => {
        const active = selected === b.id;
        return (
          <button
            key={b.id} type="button" onClick={() => onChange(b.id)}
            style={{
              background: active ? "rgba(153,53,86,0.07)" : C.inputBg,
              border: `1px solid ${active ? C.borderFocus : C.border}`,
            }}
            className="text-left rounded-xl p-3.5 transition-all duration-200"
          >
            <div style={{ color: active ? C.heading : C.body }} className="text-xs mb-0.5">{b.label}</div>
            <div style={{ color: active ? C.accent : C.muted }} className="text-[10px]">{b.range}</div>
          </button>
        );
      })}
    </div>
  );
}

// ── Timeline Selector ─────────────────────────────────────────────────────────

function TimelineSelector({ selected, onChange }: {
  selected: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {timelines.map((t) => {
        const active = selected === t;
        return (
          <button
            key={t} type="button" onClick={() => onChange(t)}
            style={{
              background: active ? "rgba(153,53,86,0.07)" : C.inputBg,
              border: `1px solid ${active ? C.borderFocus : C.border}`,
              color: active ? C.accent : C.body,
            }}
            className="rounded-full px-4 py-2 text-xs transition-all duration-200"
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

// ── Success Screen ────────────────────────────────────────────────────────────

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-24 px-8"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ border: `1px solid ${C.border}`, background: "rgba(153,53,86,0.06)" }}
        className="w-16 h-16 rounded-full flex items-center justify-center mb-8"
      >
        <Check size={24} color={C.accent} />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        style={{ color: C.heading, letterSpacing: "-0.04em" }}
        className="text-4xl font-medium mb-4"
      >
        message sent.
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        style={{ color: C.body }}
        className="text-sm leading-relaxed max-w-xs"
      >
        we'll review your brief and get back to you within 24 hours with honest
        thoughts and a rough sense of fit.
      </motion.p>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", company: "",
    services: [], budget: "", timeline: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof FormState) => (val: string | string[]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const canSubmit = !!form.name && !!form.email;

  return (
    <>
      <Navbar />
      <section style={{ background: C.pageBg, minHeight: "100vh" }} className="w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div style={{ background: C.accent }} className="w-1.5 h-1.5 rounded-full animate-pulse" />
              <span style={{ color: C.accent }} className="text-[10px] tracking-[0.25em] uppercase">contact</span>
            </div>
            <h1
              style={{ color: C.heading, letterSpacing: "-0.04em", lineHeight: "0.88" }}
              className="text-5xl sm:text-6xl md:text-7xl font-medium mb-6"
            >
              let's build<br />
              <span style={{ color: C.muted }}>something</span><br />
              together.
            </h1>
            <p style={{ color: C.body }} className="text-sm leading-relaxed max-w-xs">
              fill in the brief below. the more detail you give us, the better our first
              response will be. no fluff, no sales calls — just honest conversation.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end gap-8">
            <div>
              {contactInfo.map((c, i) => (
                <div
                  key={i}
                  style={{ borderBottom: `1px solid ${C.border}` }}
                  className="flex items-center justify-between py-4"
                >
                  <span style={{ color: C.muted }} className="text-[10px] tracking-widest uppercase">{c.label}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{ color: C.body }}
                      className="text-sm flex items-center gap-1.5 group hover:opacity-70 transition-opacity duration-200"
                    >
                      {c.value}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span style={{ color: C.body }} className="text-sm">{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              style={{ background: C.altBg, border: `1px solid ${C.border}` }}
              className="flex items-center gap-3 rounded-2xl px-5 py-4"
            >
              <div className="relative flex-shrink-0">
                <div style={{ background: C.accent }} className="w-2 h-2 rounded-full opacity-70" />
                <div style={{ background: C.accent }} className="absolute inset-0 w-2 h-2 rounded-full opacity-25 animate-ping" />
              </div>
              <div>
                <p style={{ color: C.heading }} className="text-xs">currently accepting new projects</p>
                <p style={{ color: C.muted }} className="text-[10px] mt-0.5">next available slot: june 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Form card ── */}
        <div
          style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
          className="rounded-3xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <SuccessScreen key="success" />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-7 sm:p-10 space-y-10"
              >
                {/* 01 */}
                <div>
                  <FieldLabel text="01 — about you" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <FloatingInput id="name"    label="your name"          value={form.name}    onChange={set("name")    as (v: string) => void} required />
                    <FloatingInput id="email"   label="email address" type="email" value={form.email}   onChange={set("email")   as (v: string) => void} required />
                    <FloatingInput id="company" label="company / project"  value={form.company} onChange={set("company") as (v: string) => void} />
                  </div>
                </div>

                <Divider />

                {/* 02 */}
                <div>
                  <FieldLabel text="02 — what do you need?" />
                  <ServiceSelector selected={form.services} onChange={set("services") as (v: string[]) => void} />
                </div>

                <Divider />

                {/* 03 */}
                <div>
                  <FieldLabel text="03 — budget range" />
                  <BudgetSelector selected={form.budget} onChange={set("budget") as (v: string) => void} />
                </div>

                <Divider />

                {/* 04 */}
                <div>
                  <FieldLabel text="04 — when do you need it?" />
                  <TimelineSelector selected={form.timeline} onChange={set("timeline") as (v: string) => void} />
                </div>

                <Divider />

                {/* 05 */}
                <div>
                  <FieldLabel text="05 — tell us more" />
                  <FloatingTextarea
                    id="message"
                    label="describe your project, goals, or challenges — the more detail the better"
                    value={form.message}
                    onChange={set("message") as (v: string) => void}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <p style={{ color: C.muted }} className="text-[11px] leading-relaxed max-w-xs">
                    by submitting you agree that we'll use this info to respond to your enquiry. no spam, ever.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading" || !canSubmit}
                    style={
                      status === "loading"
                        ? { background: C.border, color: C.muted, cursor: "not-allowed" }
                        : canSubmit
                          ? { background: C.btnBg, color: C.btnText, cursor: "pointer" }
                          : { background: C.btnDisabled, color: C.muted, border: `1px solid ${C.border}`, cursor: "not-allowed" }
                    }
                    className="flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-normal transition-all duration-300 flex-shrink-0 hover:opacity-90"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={14} className="animate-spin" />sending...</>
                    ) : (
                      <>send brief<ArrowUpRight size={14} /></>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* ── Footer ── */}
        <div className="mt-8 flex items-center justify-between">
          <p style={{ color: C.muted }} className="text-[10px] tracking-widest">securify™ — est. 2018</p>
          <p style={{ color: C.muted }} className="text-[10px]">london, uk</p>
        </div>

      </div>
    </section>
    </>
  );
}
