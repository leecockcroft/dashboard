import { BellIcon } from "@heroicons/react/24/outline";
export default function Header() {
  return (
    <header className="relative shrink-0 bg-gray-900 dark:before:pointer-events-none dark:before:absolute dark:before:inset-0 dark:before:border-b dark:before:border-white/10 dark:before:bg-black/10">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-auto"
        />
        <div className="flex items-center gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-white"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
