import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
      <section>
        <div className="mb-8">
          <h1 className="font-semibold text-2xl mb-4 tracking-tighter">about</h1>
          <p className="mb-4">hi! i'm amory and i study computer science at nyu. i am also:</p>
          <ul className="list-disc list-inside">
            <li>@cucumberpeel on github</li>
            <li>president of @nyufigureskating</li>
            <li>a freelance photographer @photogaophy</li>
            <li>a skating/dance/running enthusiast @amorysplayground</li>
          </ul>
        </div>
        <div className="mb-8">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">education</h1>
          <ul className="list-disc list-inside">
            <li>degree: BS/MS, 4+1, dual degree, whatever you wanna call it</li>
            <li>major: Computer Science</li>
            <li>undergrad minors: Web Programming, Integrated Digital Media</li>
          </ul>
        </div>
        <div className="mb-8">
            <h1 className="font-semibold text-2xl mb-4 tracking-tighter">projects</h1>
            <BlogPosts />
        </div>
      </section>
      )
}