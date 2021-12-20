import useDarkMode from "../hooks/useDarkMode";
import NextLink from "next/link";

interface HeaderProps {
  showBackToHome?: boolean;
}

const Header = ({ showBackToHome }: HeaderProps): JSX.Element => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="fixed flex items-center justify-between w-screen px-10 top-5">
      <div>
        {showBackToHome && (
          <NextLink href="/" passHref>
            <a className="text-[#1B1A28] dark:text-gray-50">← Back To Home</a>
          </NextLink>
        )}
      </div>
      {colorTheme === "light" ? (
        <svg
          onClick={() => setTheme("light")}
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 cursor-pointer text-gray-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ) : (
        <svg
          onClick={() => setTheme("dark")}
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 cursor-pointer text-[#1B1A28]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </div>
  );
};

export default Header;
