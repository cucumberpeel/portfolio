import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
      <section>
        <div className="mb-8">
          <h1 className="font-semibold text-2xl mb-4 tracking-tighter">about</h1>
          <p className="mb-4">hi! i'm amory and i study computer science at nyu. i am also:</p>
          <ul className="list-disc list-inside">
            <li>president of <a className="hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline" href="https://instagram.com/nyufigureskating" target="_blank" rel="noopener noreferrer">@nyufigureskating</a></li>
            <li>a freelance photographer <a className="hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline" href="https://instagram.com/photogaophy" target="_blank" rel="noopener noreferrer">@photogaophy</a></li>
            <li>a skating/dance/running enthusiast <a className="hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline" href="https://instagram.com/amorysplayground" target="_blank" rel="noopener noreferrer">@amorysplayground</a></li>
          </ul>
        </div>
        <div className="mb-8">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">education</h1>
          <ul className="list-disc list-inside">
            <li>degrees: MS Computer Science, BS Computer Science</li>
            <li>minors: Web Programming, Integrated Digital Media</li>
          </ul>
        </div>
        <div className="mb-8">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">projects</h1>
            <BlogPosts />
        </div>
      </section>
      )
}