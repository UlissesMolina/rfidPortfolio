import PortfolioContent from "./portfolioContent";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col py-12 px-16 bg-white dark:bg-black sm:items-start">
        <PortfolioContent />
      </main>
    </div>
  );
}
