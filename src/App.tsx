/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Globe, LayoutGrid, BookOpen, Users, Zap, Layers } from "lucide-react";

const copy = {
  en: {
    eyebrow: "Henrik Host — AI operating approach",
    title: "From deep AI practice to a practical operating model",
    subtitle:
      "A bilingual showcase web application that condenses Henrik's working philosophy, signature approach, future outlook, and practical recommendations for founders, leaders, startups, and SMBs that want leverage without becoming software companies.",
    primaryCta: "Leader playbook",
    secondaryCta: "See the model",
    tabs: {
      overview: { label: "Overview", icon: Globe },
      approach: { label: "Approach", icon: Layers },
      future: { label: "Going forward", icon: Zap },
      leaders: { label: "For leaders", icon: Users },
      teams: { label: "5 to 15x", icon: LayoutGrid },
      flashcards: { label: "50 takeaways", icon: BookOpen },
    },
    heroCardTitle: "The signature idea",
    heroCardBody:
      "AI is most useful when it becomes an intelligence layer around the company: memory, research, drafting, orchestration, and delivery support. The goal is not more tools. The goal is more capacity, better consistency, and faster learning.",
    heroPanelTitle: "What this application expresses",
    heroPanelItems: [
      "Henrik's signature way of thinking with AI",
      "A leader-friendly operating model for small teams",
      "A bilingual showcase for strategy, speaking, or client conversations",
    ],
    sections: {
      overview: {
        label: "Operating thesis",
        title: "AI is shifting from tool use to company memory plus orchestration",
        intro:
          "The most important pattern in Henrik's thinking is that AI should move from ad hoc prompting into a stable operating layer. That means structured context, reusable playbooks, voice-first capture, micro-apps, and humans acting as orchestrators rather than manual repeaters.",
        cards: [
          {
            title: "AI as applied intelligence",
            body: "AI is not magic. It is practical leverage: pattern recognition, synthesis, drafting, comparison, and structured reasoning in service of human judgment.",
          },
          {
            title: "Memory matters",
            body: "Context memory compounds value. Once prompts, decisions, examples, tone, workflows, and client patterns are captured, the business stops starting from zero.",
          },
          {
            title: "The company becomes faster",
            body: "The real shift is not one person working faster in a chat window. It is a team using shared playbooks and guided workflows to produce repeatable high-quality work.",
          },
        ],
      },
      approach: {
        label: "Henrik's signature approach",
        title: "Vision first. Journey second. System third.",
        intro:
          "Henrik tends to start from what the ideal experience should feel like, then reverse-engineers the journey, then builds the operating logic around that journey. He uses AI as a thinking partner early, an editor in the middle, and an orchestration layer once the pattern is proven.",
        flow: [
          {
            step: "01",
            title: "Start with the ideal outcome",
            body: "What does perfect look like for the guest, team, or client? Begin there instead of beginning with tools.",
          },
          {
            step: "02",
            title: "Map the journey",
            body: "Break the experience into moments, decisions, bottlenecks, and handoffs. Find where quality drops or time disappears.",
          },
          {
            step: "03",
            title: "Use AI in the right mode",
            body: "Thinking partner for ambiguity. Automation for repetition. Micro-apps for consistency. Agents for research and operational execution.",
          },
          {
            step: "04",
            title: "Turn insight into a playbook",
            body: "Capture prompts, context, examples, voice, decisions, and review rules so others can use the same intelligence without depending on one expert operator.",
          },
        ],
        principles: [
          "Think with AI before delegating to AI",
          "Focus on capabilities, not shiny tools",
          "Use voice-first capture, then structure the thinking",
          "Build around low-risk, high-value workflows first",
          "Move from chat to repeatable interfaces when consistency matters",
        ],
      },
      future: {
        label: "What happens next",
        title: "Small teams will operate like coordinated intelligence studios",
        intro:
          "Going forward, the strongest companies will not be the ones with the most AI subscriptions. They will be the ones that make context, workflows, and decision logic reusable. The organization becomes a system of orchestrators supported by agents, shared memory, and small purpose-built applications.",
        predictions: [
          {
            title: "Context becomes infrastructure",
            body: "Company knowledge, examples, previous decisions, and operating rules will be treated like an asset that powers daily work.",
          },
          {
            title: "Managers become orchestrators",
            body: "Leaders will spend less time producing first drafts and more time directing quality, context, and priorities across humans and AI systems.",
          },
          {
            title: "Agents absorb research work",
            body: "Competitive scanning, issue research, document comparison, and synthesis will increasingly be handled by agents under human supervision.",
          },
          {
            title: "Micro-apps replace prompt chaos",
            body: "When a workflow matters, teams will stop relying on ad hoc prompting and wrap the logic inside lightweight guided tools.",
          },
        ],
      },
      leaders: {
        label: "What leaders need",
        title: "Leverage AI without learning to code",
        intro:
          "Leaders who do not want to become technical still need an operating model. The path is not coding-first. It is judgment-first, workflow-first, and adoption-first. Use AI to structure work, accelerate decisions, and increase throughput with clear human review.",
        frameworkTitle: "The leader operating stack",
        framework: [
          {
            title: "1. One shared AI workspace",
            body: "Choose one primary environment for the team. Store prompts, examples, tone rules, decisions, and shared chats so learning compounds.",
          },
          {
            title: "2. Five core playbooks",
            body: "Document the repeatable jobs: research brief, proposal draft, meeting synthesis, client follow-up, and content repurposing. Keep them simple and reusable.",
          },
          {
            title: "3. A review ladder",
            body: "Define what AI can do alone, what needs a quick human check, and what always needs senior approval. This preserves speed without losing control.",
          },
          {
            title: "4. Two internal champions",
            body: "Pick a small number of curious operators who refine prompts, improve workflows, and help everyone else use them.",
          },
          {
            title: "5. One dashboard of value",
            body: "Track saved hours, response speed, proposal turnaround, consistency, and error reduction. If it does not create real value, stop doing it.",
          },
        ],
        calloutTitle: "What not to do",
        calloutBody:
          "Do not start by buying many tools. Do not ask every employee to invent their own prompting method. Do not automate high-risk decisions first. Standardize a few workflows and make them easy to use.",
      },
      teams: {
        label: "From 5 people to the output of 10–15",
        title: "A small team scales through playbooks, orchestration, and agent support",
        intro:
          "If you have five employees, the target is not to replace them. It is to let them work with the speed, range, and consistency of a much larger team. That happens when each person becomes an orchestrator supported by AI memory, research agents, and lightweight delivery systems.",
        columns: [
          {
            title: "What the core team becomes",
            items: [
              "An orchestrator of workflows instead of a manual repeater",
              "A reviewer of outputs instead of a producer of every first draft",
              "A decision-maker using research agents and structured synthesis",
              "A maintainer of quality and context across repeatable work",
            ],
          },
          {
            title: "What AI handles around them",
            items: [
              "Research sweeps and issue summaries",
              "Drafting and repurposing across formats",
              "Comparison of documents, options, and proposals",
              "Meeting capture, action extraction, and follow-up structure",
            ],
          },
        ],
        systemTitle: "A practical 30-60-90 model",
        system: [
          {
            phase: "30 days",
            body: "Train the team on one AI workspace, one prompting framework, and three repeatable playbooks. Start with low-risk workflows.",
          },
          {
            phase: "60 days",
            body: "Convert the highest-value workflows into templates, shared chats, or micro-apps. Add review rules and examples.",
          },
          {
            phase: "90 days",
            body: "Introduce agents for recurring research, internal knowledge access, and operating support. Track throughput and quality gains.",
          },
        ],
      },
      flashcards: {
        label: "Learning archive",
        title: "The 50 takeaways condensed into one operating map",
        intro:
          "These clusters translate the original 50 flashcards into a format leaders can absorb quickly and act on immediately.",
        clusters: [
          {
            title: "Mindset and control",
            body: "AI is a fast but inexperienced colleague. Use it for speed, synthesis, translation, comparison, and ideation, but keep humans in control where risk is high.",
          },
          {
            title: "Ecosystem and memory",
            body: "Use the right surface for the job, keep your documents connected, refresh context regularly, and think in capabilities rather than tools.",
          },
          {
            title: "Ways of working",
            body: "Move from thinking partner to workflow automation to micro-apps to portals as the need becomes more repeatable and more valuable.",
          },
          {
            title: "Real company use cases",
            body: "Translations, newsletters, registrations, proposals, reports, document comparison, market scanning, strategy mapping, and survey synthesis are all strong candidates.",
          },
          {
            title: "Habits and governance",
            body: "Small weekly routines, internal champions, clear usage principles, and regular value checks matter more than one-off training events.",
          },
        ],
      },
    },
    quotesTitle: "Signature statements",
    quotes: [
      "AI should become an intelligence layer around the company, not another disconnected tool.",
      "The real advantage comes from process, context, and reusable playbooks, not from access to the same models everyone else has.",
      "A small team scales when people act as orchestrators and AI handles research, drafting, and structured repetition.",
      "Move from loose prompting to guided workflows the moment consistency starts to matter.",
    ],
    footerTitle: "Designed as a showcase concept",
    footerBody:
      "This concept is intentionally built like an editorial operating brief: calm, structured, bilingual, and presentation-ready. It can evolve into a public-facing thought leadership page, an internal strategy tool, or a client-facing sales asset.",
  },
  no: {
    eyebrow: "Henrik Host — AI-operativ tilnærming",
    title: "Fra dyp AI-praksis til en praktisk operativ modell",
    subtitle:
      "En tospråklig showcase-applikasjon som kondenserer Henriks arbeidsfilosofi, signaturtilnærming, fremtidsblikk og konkrete anbefalinger for gründere, ledere, startups og SMB-er som vil ha kraft uten å bli programvareselskaper.",
    primaryCta: "Leder-playbook",
    secondaryCta: "Se modellen",
    tabs: {
      overview: { label: "Oversikt", icon: Globe },
      approach: { label: "Tilnærming", icon: Layers },
      future: { label: "Veien videre", icon: Zap },
      leaders: { label: "For ledere", icon: Users },
      teams: { label: "5 til 15x", icon: LayoutGrid },
      flashcards: { label: "50 læringer", icon: BookOpen },
    },
    heroCardTitle: "Kjerneideen",
    heroCardBody:
      "AI er mest nyttig når det blir et intelligenslag rundt selskapet: minne, research, utkast, orkestrering og leveransestøtte. Målet er ikke flere verktøy. Målet er mer kapasitet, bedre konsistens og raskere læring.",
    heroPanelTitle: "Hva denne applikasjonen uttrykker",
    heroPanelItems: [
      "Henriks signaturmåte å tenke med AI på",
      "En ledervennlig operativ modell for små team",
      "En tospråklig showcase for strategi, foredrag eller kundedialoger",
    ],
    sections: {
      overview: {
        label: "Operativ tese",
        title: "AI går fra verktøybruk til selskapsminne pluss orkestrering",
        intro:
          "Det viktigste mønsteret i Henriks tenkning er at AI må flyttes fra ad hoc prompting til et stabilt operativt lag. Det betyr strukturert kontekst, gjenbrukbare playbooks, voice-first innsamling, mikroapper og mennesker som orkestratorer i stedet for manuelle repetatører.",
        cards: [
          {
            title: "AI som anvendt intelligens",
            body: "AI er ikke magi. Det er praktisk leverage: mønstergjenkjenning, syntese, utkast, sammenligning og strukturert resonnering i tjeneste for menneskelig vurdering.",
          },
          {
            title: "Minne betyr noe",
            body: "Kontekstminne gir sammensatt verdi. Når prompts, beslutninger, eksempler, tone, arbeidsflyter og kundemønstre er fanget, slutter selskapet å starte fra null.",
          },
          {
            title: "Selskapet blir raskere",
            body: "Det virkelige skiftet er ikke én person som jobber raskere i et chatvindu. Det er et team som bruker delte playbooks og guidede arbeidsflyter til å levere repeterbar kvalitet.",
          },
        ],
      },
      approach: {
        label: "Henriks signaturtilnærming",
        title: "Visjon først. Reise deretter. System til slutt.",
        intro:
          "Henrik starter ofte med hvordan den ideelle opplevelsen skal føles, reverse-engineerer reisen og bygger så den operative logikken rundt den reisen. Han bruker AI som tenkepartner tidlig, redaktør i midten og orkestreringslag når mønsteret er bevist.",
        flow: [
          {
            step: "01",
            title: "Start med ideelt utfall",
            body: "Hvordan ser perfekt ut for gjesten, teamet eller kunden? Start der i stedet for å starte med verktøy.",
          },
          {
            step: "02",
            title: "Kartlegg reisen",
            body: "Bryt opplevelsen ned i øyeblikk, beslutninger, flaskehalser og overleveringer. Finn hvor kvalitet faller eller tid forsvinner.",
          },
          {
            step: "03",
            title: "Bruk AI i riktig modus",
            body: "Tenkepartner for tvetydighet. Automatisering for repetisjon. Mikroapper for konsistens. Agenter for research og operativ utførelse.",
          },
          {
            step: "04",
            title: "Gjør innsikt om til playbook",
            body: "Fang prompts, kontekst, eksempler, stemme, beslutninger og review-regler slik at andre kan bruke den samme intelligensen uten å være avhengig av én ekspert.",
          },
        ],
        principles: [
          "Tenk med AI før du delegerer til AI",
          "Fokuser på kapabiliteter, ikke blankpolerte verktøy",
          "Bruk voice-first innsamling og strukturer tenkningen etterpå",
          "Bygg først rundt lav risiko og høy verdi",
          "Gå fra chat til repeterbare grensesnitt når konsistens betyr noe",
        ],
      },
      future: {
        label: "Hva som skjer videre",
        title: "Små team vil operere som koordinerte intelligensstudioer",
        intro:
          "Fremover blir de sterkeste selskapene ikke de med flest AI-abonnementer. Det blir de som gjør kontekst, arbeidsflyter og beslutningslogikk gjenbrukbar. Organisasjonen blir et system av orkestratorer støttet av agenter, delt minne og små spesialiserte applikasjoner.",
        predictions: [
          {
            title: "Kontekst blir infrastruktur",
            body: "Selskapskunnskap, eksempler, tidligere beslutninger og operative regler behandles som en eiendel som driver hverdagsarbeidet.",
          },
          {
            title: "Ledere blir orkestratorer",
            body: "Ledere bruker mindre tid på førsteutkast og mer tid på å styre kvalitet, kontekst og prioriteringer på tvers av mennesker og AI-systemer.",
          },
          {
            title: "Agenter tar researcharbeid",
            body: "Konkurrentovervåkning, issues research, dokumentsammenligning og syntese håndteres i økende grad av agenter under menneskelig tilsyn.",
          },
          {
            title: "Mikroapper erstatter prompt-kaos",
            body: "Når en arbeidsflyt betyr noe, vil team slutte å stole på tilfeldig prompting og heller pakke logikken inn i lette, guidede verktøy.",
          },
        ],
      },
      leaders: {
        label: "Det ledere trenger",
        title: "Utnytt AI uten å lære å kode",
        intro:
          "Ledere som ikke vil bli tekniske trenger fortsatt en operativ modell. Veien er ikke kode-først. Den er vurdering-først, arbeidsflyt-først og adopsjon-først. Bruk AI til å strukturere arbeid, akselerere beslutninger og øke kapasitet med tydelig menneskelig kontroll.",
        frameworkTitle: "Lederens operasjonsstack",
        framework: [
          {
            title: "1. Ett delt AI-arbeidsrom",
            body: "Velg ett primært miljø for teamet. Lagre prompts, eksempler, tone-regler, beslutninger og delte chats slik at læringen akkumuleres.",
          },
          {
            title: "2. Fem kjerne-playbooks",
            body: "Dokumenter de repeterbare jobbene: research-brief, forslag/utkast, møtesyntese, kundeoppfølging og gjenbruk av innhold. Hold dem enkle og gjenbrukbare.",
          },
          {
            title: "3. En review-stige",
            body: "Definer hva AI kan gjøre alene, hva som trenger rask menneskelig sjekk og hva som alltid krever seniorgodkjenning. Da bevares farten uten å miste kontrollen.",
          },
          {
            title: "4. To interne drivere",
            body: "Velg et lite antall nysgjerrige operatører som forbedrer prompts, justerer arbeidsflyter og hjelper resten av organisasjonen å bruke dem.",
          },
          {
            title: "5. Ett verdi-dashboard",
            body: "Mål sparte timer, responshastighet, turnaround på forslag, konsistens og feilreduksjon. Hvis det ikke gir reell verdi, stopp.",
          },
        ],
        calloutTitle: "Hva du ikke bør gjøre",
        calloutBody:
          "Ikke start med å kjøpe mange verktøy. Ikke be hver medarbeider finne opp sin egen prompting-metode. Ikke automatiser høyrisikobeslutninger først. Standardiser noen få arbeidsflyter og gjør dem enkle å bruke.",
      },
      teams: {
        label: "Fra 5 personer til output som 10–15",
        title: "Et lite team skalerer med playbooks, orkestrering og agentstøtte",
        intro:
          "Hvis du har fem ansatte, er målet ikke å erstatte dem. Målet er å la dem jobbe med hastigheten, bredden og konsistensen til et langt større team. Det skjer når hver person blir en orkestrator støttet av AI-minne, research-agenter og lette leveransesystemer.",
        columns: [
          {
            title: "Hva kjerneteamet blir",
            items: [
              "En orkestrator av arbeidsflyter i stedet for en manuell repetatør",
              "En reviewer av output i stedet for produsent av hvert førsteutkast",
              "En beslutningstaker som bruker research-agenter og strukturert syntese",
              "En forvalter av kvalitet og kontekst i repeterbart arbeid",
            ],
          },
          {
            title: "Hva AI håndterer rundt dem",
            items: [
              "Research sweeps og issues-sammendrag",
              "Utkast og gjenbruk på tvers av formater",
              "Sammenligning av dokumenter, alternativer og forslag",
              "Møtefangst, action extraction og struktur på oppfølging",
            ],
          },
        ],
        systemTitle: "En praktisk 30-60-90-modell",
        system: [
          {
            phase: "30 dager",
            body: "Tren teamet på ett AI-arbeidsrom, ett prompting-rammeverk og tre repeterbare playbooks. Start med lavrisiko-arbeidsflyter.",
          },
          {
            phase: "60 dager",
            body: "Gjør arbeidsflytene med høyest verdi om til maler, delte chats eller mikroapper. Legg til review-regler og eksempler.",
          },
          {
            phase: "90 dager",
            body: "Introduser agenter for gjentakende research, tilgang til intern kunnskap og operativ støtte. Mål throughput og kvalitetsgevinst.",
          },
        ],
      },
      flashcards: {
        label: "Læringsarkiv",
        title: "De 50 læringene kondensert til ett operativt kart",
        intro:
          "Disse klyngene oversetter de opprinnelige 50 flashcards til et format ledere raskt kan ta inn og handle på.",
        clusters: [
          {
            title: "Mindset og kontroll",
            body: "AI er en rask men uerfaren kollega. Bruk den til fart, syntese, oversettelse, sammenligning og ideering, men behold mennesker i kontroll der risikoen er høy.",
          },
          {
            title: "Økosystem og minne",
            body: "Bruk riktig flate til riktig jobb, hold dokumentene koblet på, oppdater kontekst jevnlig og tenk i kapabiliteter fremfor verktøy.",
          },
          {
            title: "Måter å jobbe på",
            body: "Gå fra tenkepartner til arbeidsflytautomatisering til mikroapper til portaler i takt med at behovet blir mer repeterbart og mer verdifullt.",
          },
          {
            title: "Reelle selskapsbrukstilfeller",
            body: "Oversettelser, nyhetsbrev, registreringer, forslag, rapporter, dokumentsammenligning, markedsskanning, strategikart og survey-syntese er sterke kandidater.",
          },
          {
            title: "Vaner og governance",
            body: "Små ukentlige rutiner, interne drivere, tydelige bruksprinsipper og regelmessige verdimålinger betyr mer enn engangsworkshops.",
          },
        ],
      },
    },
    quotesTitle: "Signaturutsagn",
    quotes: [
      "AI bør bli et intelligenslag rundt selskapet, ikke enda et frakoblet verktøy.",
      "Det virkelige fortrinnet kommer fra prosess, kontekst og gjenbrukbare playbooks, ikke fra tilgang til de samme modellene som alle andre har.",
      "Et lite team skalerer når mennesker opptrer som orkestratorer og AI håndterer research, utkast og strukturert repetisjon.",
      "Gå fra løs prompting til guidede arbeidsflyter i det øyeblikket konsistens begynner å bety noe.",
    ],
    footerTitle: "Designet som et showcase-konsept",
    footerBody:
      "Dette konseptet er bevisst bygget som et redaksjonelt operativt brief: rolig, strukturert, tospråklig og klart for presentasjon. Det kan utvikles videre til en offentlig thought-leadership-side, et internt strategiverktøy eller et kundevendt salgsasset.",
  },
};

type SectionKey = keyof typeof copy.en.sections;
type LangKey = "en" | "no";

export default function App() {
  const [lang, setLang] = useState<LangKey>("en");
  const [section, setSection] = useState<SectionKey>("overview");

  const t = copy[lang];
  const current = t.sections[section];

  const TabButton = ({ id, label, Icon }: { id: SectionKey; label: string; Icon: React.ElementType }) => {
    const isActive = section === id;
    return (
      <button
        onClick={() => setSection(id)}
        className={`flex min-h-[44px] items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all duration-300 ease-out ${
          isActive
            ? "bg-deep-green text-background border-deep-green shadow-sm"
            : "bg-background text-foreground border-border hover:bg-card"
        }`}
        aria-pressed={isActive}
      >
        <Icon className={`h-4 w-4 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
        {label}
      </button>
    );
  };

  const SectionHeader = ({ label, title, intro }: { label: string; title: string; intro: string }) => (
    <div className="space-y-4 max-w-[52ch]">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <h2 className="text-4xl md:text-5xl font-display font-semibold leading-tight text-foreground">{title}</h2>
      <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>
    </div>
  );

  const SectionOverview = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-12"
    >
      <SectionHeader label={current.label} title={current.title} intro={current.intro} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {('cards' in current ? current.cards : []).map((card) => (
          <div key={card.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-3">{card.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const SectionApproach = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-12"
    >
      <SectionHeader label={current.label} title={current.title} intro={current.intro} />
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8">
        <div className="rounded-lg border border-border bg-background p-8">
          <div className="space-y-8">
            {('flow' in current ? current.flow : []).map((item, idx, arr) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-foreground">
                    {item.step}
                  </div>
                  {idx < arr.length - 1 && <div className="mt-4 h-full w-px bg-border" />}
                </div>
                <div className="pb-2">
                  <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-2">{item.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-deep-green p-8 text-background shadow-sm h-fit">
          <h3 className="text-2xl font-display font-semibold leading-tight mb-6 text-accent">Principles</h3>
          <div className="space-y-4">
            {('principles' in current ? current.principles : []).map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-base leading-relaxed text-background">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const SectionFuture = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-12"
    >
      <SectionHeader label={current.label} title={current.title} intro={current.intro} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {('predictions' in current ? current.predictions : []).map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-3">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const SectionLeaders = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-12"
    >
      <SectionHeader label={current.label} title={current.title} intro={current.intro} />
      <div className="rounded-xl bg-deep-green p-8 md:p-12 text-background shadow-sm">
        <h3 className="text-3xl font-display font-semibold leading-tight mb-8 text-accent">
          {'frameworkTitle' in current ? current.frameworkTitle : ''}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {('framework' in current ? current.framework : []).map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h4 className="text-xl font-display font-semibold leading-tight mb-3 text-background">{item.title}</h4>
              <p className="text-base leading-relaxed text-background/90">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-8 shadow-sm max-w-[52ch]">
        <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-3">
          {'calloutTitle' in current ? current.calloutTitle : ''}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {'calloutBody' in current ? current.calloutBody : ''}
        </p>
      </div>
    </motion.div>
  );

  const SectionTeams = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-12"
    >
      <SectionHeader label={current.label} title={current.title} intro={current.intro} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {('columns' in current ? current.columns : []).map((col) => (
          <div key={col.title} className="rounded-lg border border-border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-6">{col.title}</h3>
            <div className="space-y-4">
              {col.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-border bg-background p-8 shadow-sm">
        <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-6">
          {'systemTitle' in current ? current.systemTitle : ''}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {('system' in current ? current.system : []).map((item) => (
            <div key={item.phase} className="rounded-lg border border-border bg-card p-6">
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">{item.phase}</div>
              <p className="text-base leading-relaxed text-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const SectionFlashcards = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-12"
    >
      <SectionHeader label={current.label} title={current.title} intro={current.intro} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {('clusters' in current ? current.clusters : []).map((item) => (
          <div key={item.title} className="rounded-lg border border-border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-display font-semibold leading-tight text-foreground mb-4">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderSection = () => {
    switch (section) {
      case "overview": return <SectionOverview key="overview" />;
      case "approach": return <SectionApproach key="approach" />;
      case "future": return <SectionFuture key="future" />;
      case "leaders": return <SectionLeaders key="leaders" />;
      case "teams": return <SectionTeams key="teams" />;
      case "flashcards": return <SectionFlashcards key="flashcards" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        
        {/* Hero Section */}
        <header className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 mb-16">
          <div className="rounded-xl bg-deep-green p-8 md:p-12 text-background shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-8">
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  {t.eyebrow}
                </p>
                <div className="rounded-lg border border-white/10 bg-white/5 p-1 flex gap-1 shrink-0">
                  <button
                    onClick={() => setLang("en")}
                    className={`min-h-[36px] rounded-md px-3 text-sm font-medium transition-all duration-300 ease-out ${
                      lang === "en" ? "bg-accent text-foreground" : "text-background hover:bg-white/10"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang("no")}
                    className={`min-h-[36px] rounded-md px-3 text-sm font-medium transition-all duration-300 ease-out ${
                      lang === "no" ? "bg-accent text-foreground" : "text-background hover:bg-white/10"
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6 text-background">
                {t.title}
              </h1>
              <p className="text-xl leading-relaxed text-background/80 max-w-[52ch]">
                {t.subtitle}
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <button 
                onClick={() => setSection("leaders")} 
                className="min-h-[48px] rounded-lg bg-accent px-6 py-3 text-base font-medium text-foreground transition-opacity duration-300 ease-out hover:opacity-90"
              >
                {t.primaryCta}
              </button>
              <button 
                onClick={() => setSection("approach")} 
                className="min-h-[48px] rounded-lg border border-background bg-transparent px-6 py-3 text-base font-medium text-background transition-colors duration-300 ease-out hover:bg-white/5"
              >
                {t.secondaryCta}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-background p-8 shadow-sm flex-1">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">{t.heroCardTitle}</p>
              <p className="text-2xl font-display font-medium leading-relaxed text-foreground">
                {t.heroCardBody}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">{t.heroPanelTitle}</p>
              <div className="space-y-4">
                {t.heroPanelItems.map((item, idx) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-medium text-foreground">
                      {idx + 1}
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="mb-16 flex flex-wrap gap-3 border-b border-border pb-6" aria-label="Sections">
          {(Object.keys(t.tabs) as SectionKey[]).map((key) => (
            <TabButton 
              key={key} 
              id={key} 
              label={t.tabs[key].label} 
              Icon={t.tabs[key].icon} 
            />
          ))}
        </nav>

        {/* Main Content Area */}
        <main className="min-h-[60vh]">
          <AnimatePresence mode="wait">
            {renderSection()}
          </AnimatePresence>
        </main>

        {/* Footer / Quotes */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 border-t border-border pt-16">
          <div className="space-y-8">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{t.quotesTitle}</p>
            <div className="space-y-6">
              {t.quotes.map((quote) => (
                <blockquote key={quote} className="rounded-lg bg-card p-8 text-xl font-display font-medium leading-relaxed text-foreground border-l-4 border-accent">
                  "{quote}"
                </blockquote>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-deep-green p-8 md:p-12 text-background shadow-sm h-fit">
            <p className="text-sm font-medium uppercase tracking-wider text-accent mb-6">{t.footerTitle}</p>
            <p className="text-xl leading-relaxed text-background/90 mb-10 max-w-[40ch]">{t.footerBody}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Use case</div>
                <div className="text-base leading-relaxed text-background/80">Thought leadership page, founder narrative, keynote support, sales asset.</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-medium uppercase tracking-wider text-accent mb-3">Next evolution</div>
                <div className="text-base leading-relaxed text-background/80">Turn this into a richer app with timeline, flashcards browser, case studies, and downloadable leader kits.</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
