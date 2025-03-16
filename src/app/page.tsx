import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Centered Logo Section */}
      <div className="relative flex place-items-center justify-center w-full">
        <div className="relative">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/PortfolioFuture.svg"
            alt="PortfolioFuture Logo"
            width={320}  // Increased width for better visibility
            height={64}
            priority
          />
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/research"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Read{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Break down latest quant research papers with annotated insights and practical applications.
          </p>
        </a>

        <a
          href="/tools"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Master quantitative tools for alpha generation, risk analysis, portfolio construction, and more.
          </p>
        </a>

        <a
          href="/portfolios"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Track{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Follow latest portfolios holdings from top investors and institutions.
          </p>
        </a>

        <a
          href="/chat"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Simulate{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Collaborate with AI agents embodying legendary investors to simulate investment decisions.
          </p>
        </a>
      </div>
    </main>
  );
}