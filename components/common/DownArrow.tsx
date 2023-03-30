import Link from "next/link";

type Props = {
  id: string;
};

export const DownArrow = ({ id }: Props) => {
  return (
    <Link href={`#${id}`}>
      <a className=" mt-10 flex justify-center item-center" data-scroll>
        <div className="animate-bounce hover:animate-none bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center hover:bg-slate-100">
          <svg
            className="w-6 h-6 text-violet-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </a>
    </Link>
  );
};
