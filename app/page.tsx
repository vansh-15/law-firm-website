const practices = [
  {
    number: "01",
    title: "Family & Matrimonial",
    description:
      "Thoughtful counsel for family disputes, matrimonial matters and sensitive personal proceedings.",
  },
  {
    number: "02",
    title: "Civil Litigation",
    description:
      "Strategic representation across civil disputes, claims, injunctions and related proceedings.",
  },
  {
    number: "03",
    title: "Criminal Law",
    description:
      "Focused legal representation and considered advice in criminal matters and proceedings.",
  },
  {
    number: "04",
    title: "Corporate & Company",
    description:
      "Legal support for businesses, companies, commercial arrangements and corporate matters.",
  },
  {
    number: "05",
    title: "Tax & Revenue",
    description:
      "Counsel across taxation, revenue matters, disputes and related legal proceedings.",
  },
  {
    number: "06",
    title: "Consumer & Labour",
    description:
      "Representation and advisory support in consumer disputes and employment-related matters.",
  },
];

const articles = [
  {
    category: "Legal Insight",
    date: "Coming Soon",
    title: "Understanding your legal position before taking action",
  },
  {
    category: "Civil Law",
    date: "Coming Soon",
    title: "What to consider when approaching a civil dispute",
  },
  {
    category: "Corporate",
    date: "Coming Soon",
    title: "Legal foundations for growing businesses",
  },
];

const clients = [
  "Kanpur Development Authority",
  "IDBI Insurance",
  "ICICI Prudential",
  "Reliance Life Insurance",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#2B2118]">

      {/* TOP NOTICE */}
      <div className="bg-[#2B2118] px-6 py-2.5 text-center text-[10px] uppercase tracking-[0.25em] text-[#EDE6DA]">
        Legal representation • Advisory • Litigation
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#2B2118]/10 bg-[#F5F1E8]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-10">

          {/* LOGO */}
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#A65D45] text-[#A65D45]">
              <span className="font-serif text-lg">B</span>
            </div>

            <div>
              <div className="font-serif text-[21px] leading-none tracking-tight">
                Bharat Law
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#68705B]">
                Chambers
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.18em] lg:flex">
            <a href="#about" className="transition hover:text-[#A65D45]">
              The Chambers
            </a>
            <a href="#expertise" className="transition hover:text-[#A65D45]">
              Expertise
            </a>
            <a href="#team" className="transition hover:text-[#A65D45]">
              Advocates
            </a>
            <a href="#insights" className="transition hover:text-[#A65D45]">
              Insights
            </a>
            <a
              href="#contact"
              className="border border-[#2B2118] px-5 py-3 transition hover:bg-[#2B2118] hover:text-[#F5F1E8]"
            >
              Contact
            </a>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden">
            <button className="border border-[#2B2118] px-4 py-2 text-[10px] uppercase tracking-[0.18em]">
              Menu
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="relative">
            <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#A65D45]">
              Bharat Law Chambers
            </p>

            <h1 className="max-w-[800px] font-serif text-[76px] leading-[0.88] tracking-[-0.045em] sm:text-[100px] lg:text-[128px]">
              Law
              <br />
              <span className="ml-[8%]">with</span>
              <br />
              <span className="text-[#A65D45]">purpose.</span>
            </h1>

            <div className="mt-12 grid max-w-[650px] grid-cols-[90px_1fr] gap-5 border-t border-[#2B2118]/20 pt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#68705B]">
                Counsel
              </span>

              <p className="max-w-[480px] text-[15px] leading-7 text-[#2B2118]/75">
                Professional legal counsel for individuals, families and
                businesses — grounded in preparation, judgment and integrity.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#expertise"
                className="bg-[#A65D45] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#2B2118]"
              >
                Explore Our Practice
              </a>

              <a
                href="#about"
                className="border border-[#2B2118]/30 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:border-[#2B2118] hover:bg-[#2B2118] hover:text-white"
              >
                Discover The Chambers
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative lg:pb-3">
            <div className="aspect-[4/5] overflow-hidden bg-[#D8C9B5]">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center border border-[#A65D45] font-serif text-3xl text-[#A65D45]">
                  B
                </div>

                <p className="text-[10px] uppercase tracking-[0.3em] text-[#2B2118]/60">
                  Chambers Photography
                </p>

                <p className="mt-2 font-serif text-2xl">
                  Image Placeholder
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden h-28 w-28 bg-[#68705B] p-5 text-[#F5F1E8] sm:block">
              <div className="font-serif text-3xl">BLC</div>
              <div className="mt-2 text-[8px] uppercase tracking-[0.18em]">
                Advocates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="bg-[#EDE6DA]">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A65D45]">
              01 — The Chambers
            </p>

            <div className="mt-8 h-px w-20 bg-[#A65D45]" />
          </div>

          <div>
            <h2 className="max-w-[850px] font-serif text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Good legal counsel begins with{" "}
              <span className="text-[#A65D45]">understanding.</span>
            </h2>

            <div className="mt-10 grid gap-8 text-[15px] leading-7 text-[#2B2118]/70 md:grid-cols-2">
              <p>
                Bharat Law Chambers is presented as a professional legal
                practice focused on thoughtful representation, practical
                advice and careful preparation.
              </p>

              <p>
                Our approach is built around understanding the matter,
                identifying the legal position and pursuing a considered
                course of action.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex border-b border-[#2B2118] pb-2 text-[10px] uppercase tracking-[0.22em]"
            >
              Learn more about the chambers →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A65D45]">
              02 — Areas of Practice
            </p>

            <h2 className="mt-5 max-w-[700px] font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Expertise that serves the matter.
            </h2>
          </div>

          <p className="max-w-[300px] text-sm leading-6 text-[#2B2118]/60">
            A considered range of legal services for individuals,
            families and businesses.
          </p>
        </div>

        <div className="mt-16 border-t border-[#2B2118]/20">
          {practices.map((practice) => (
            <a
              key={practice.number}
              href="#contact"
              className="group grid gap-5 border-b border-[#2B2118]/20 py-8 transition hover:bg-[#EDE6DA] md:grid-cols-[90px_1fr_1.2fr_40px] md:items-center md:px-5"
            >
              <span className="text-[11px] tracking-[0.15em] text-[#A65D45]">
                {practice.number}
              </span>

              <h3 className="font-serif text-3xl transition group-hover:text-[#A65D45]">
                {practice.title}
              </h3>

              <p className="max-w-[500px] text-sm leading-6 text-[#2B2118]/60">
                {practice.description}
              </p>

              <span className="text-xl transition group-hover:translate-x-2">
                →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-[#68705B] text-[#F5F1E8]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#EDE6DA]/70">
              Our Approach
            </p>

            <div>
              <p className="font-serif text-5xl leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-8xl">
                Preparation
                <br />
                creates <i>confidence.</i>
              </p>

              <p className="mt-10 max-w-[560px] text-sm leading-7 text-[#F5F1E8]/70">
                Every matter deserves careful attention. We focus on
                understanding the facts, preparing thoroughly and communicating
                clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-[#2B2118] text-[#F5F1E8]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D8C9B5]">
                03 — Advocates
              </p>

              <h2 className="mt-6 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">
                People behind
                <br />
                the practice.
              </h2>
            </div>

            <p className="max-w-[480px] self-end text-sm leading-7 text-[#F5F1E8]/60">
              Meet the advocates and legal professionals who bring experience,
              preparation and judgment to every matter.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-[#F5F1E8]/15 md:grid-cols-3">
            {[
              ["Senior Advocate", "Litigation & Advisory"],
              ["Managing Partner", "Corporate & Civil"],
              ["Legal Counsel", "Research & Advisory"],
            ].map(([role, speciality], index) => (
              <div
                key={role}
                className="bg-[#2B2118] p-5 transition hover:bg-[#35291f]"
              >
                <div className="aspect-[4/5] bg-[#D8C9B5]">
                  <div className="flex h-full items-end p-5">
                    <span className="font-serif text-5xl text-[#2B2118]/40">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="font-serif text-2xl">{role}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#D8C9B5]">
                    {speciality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b border-[#2B2118]/15">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A65D45]">
              04 — Selected Clients
            </p>

            <p className="text-xs text-[#2B2118]/50">
              Organisations represented / advised
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-[#2B2118]/15 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-[130px] items-center border-b border-r border-[#2B2118]/15 p-7"
              >
                <span className="font-serif text-xl leading-tight">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A65D45]">
              05 — Client Perspective
            </p>
          </div>

          <div>
            <div className="font-serif text-7xl leading-none text-[#A65D45]">
              “
            </div>

            <blockquote className="max-w-[900px] font-serif text-4xl leading-[1.12] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Placeholder testimonial — clear advice, careful preparation and
              professional representation.
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-[#D8C9B5]" />

              <div>
                <p className="text-sm">Rajiv Sharma</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#68705B]">
                  Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="bg-[#EDE6DA]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#A65D45]">
                06 — Insights
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">
                From the chambers.
              </h2>
            </div>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-4"
            >
              View all insights →
            </a>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {articles.map((article, index) => (
              <article key={article.title} className="group">

                <div className="aspect-[16/10] bg-[#D8C9B5]">
                  <div className="flex h-full items-end justify-between p-5">
                    <span className="font-serif text-5xl text-[#2B2118]/25">
                      0{index + 1}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#2B2118]/50">
                      Article
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex gap-4 text-[9px] uppercase tracking-[0.18em] text-[#A65D45]">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl leading-tight transition group-hover:text-[#A65D45]">
                    {article.title}
                  </h3>

                  <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em]">
                    Read article →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-[#A65D45] text-[#F5F1E8]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.5fr]">

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F5F1E8]/60">
                07 — Consultation
              </p>

              <h2 className="mt-7 max-w-[850px] font-serif text-6xl leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                Let&apos;s discuss
                <br />
                your matter.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-[350px] text-sm leading-7 text-[#F5F1E8]/75">
                Contact Bharat Law Chambers to discuss your legal requirement
                and understand the next steps.
              </p>

              <a
                href="#"
                className="mt-8 inline-flex w-fit border border-[#F5F1E8] px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition hover:bg-[#F5F1E8] hover:text-[#A65D45]"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2B2118] text-[#F5F1E8]">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-[#D8C9B5]/50 font-serif text-xl">
                  B
                </div>

                <div>
                  <div className="font-serif text-2xl">
                    Bharat Law Chambers
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#D8C9B5]/60">
                    Advocates & Legal Counsel
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-[400px] text-sm leading-7 text-[#F5F1E8]/50">
                Professional legal counsel and representation across
                individuals, families, businesses and organisations.
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#D8C9B5]">
                Offices
              </p>

              <div className="mt-5 space-y-2 text-sm text-[#F5F1E8]/60">
                <p>Kanpur</p>
                <p>Delhi</p>
                <p>Chandigarh</p>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#D8C9B5]">
                Contact
              </p>

              <div className="mt-5 space-y-2 text-sm text-[#F5F1E8]/60">
                <p>+91 XXXXX XXXXX</p>
                <p>contact@bharatlawchambers.com</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#F5F1E8]/10 pt-6 text-[9px] uppercase tracking-[0.18em] text-[#F5F1E8]/35 md:flex-row">
            <p>© 2026 Bharat Law Chambers. All rights reserved.</p>

            <div className="flex gap-6">
              <span>Disclaimer</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}