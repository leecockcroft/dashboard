import TodoState from "./Todo/TodoState";
import LandingPageState from "./LandingPage/landingPageState";
import Header from "./Header";
export default function DashboardUi() {
  return (
    <>
      <div className="flex min-h-full flex-col">
        <Header />
        <nav>
          <a href="/landing-page" className="text-blue-500 hover:underline">
            Go to landing page
          </a>

          <a href="/promotions" className="text-blue-500 hover:underline">
            Promotions{" "}
          </a>
        </nav>

        <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
          <TodoState />
          <div className="flex-1 xl:flex">
            <div className="border-b border-gray-200 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:shrink-0 xl:border-r xl:border-b-0 xl:pl-6 dark:border-white/10"></div>

            <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
              {/* Main area */}
            </div>
          </div>

          <div className="shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-t-0 lg:border-l lg:pr-8 xl:pr-6 dark:border-white/10"></div>
        </div>
      </div>
    </>
  );
}
