import Link from "./link";

export default function Footer() {
  return (
    <footer className="mt-16 mb-16">
      <h2 className="text-xl tracking-tighter">better on</h2>
      <ul className="font-sm flex mt-2 flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link href="https://github.com/cucumberpeel" displayName="github" />
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/amorygao/" displayName="linkedin" />
        </li>
        <li>
          <Link href="https://beliapp.co/app/amory" displayName="beli" />
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} by <a className="hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline" href="https://github.com/cucumberpeel" target="_blank" rel="noopener noreferrer">cucumberpeel</a>
      </p>
    </footer>
  )
}
