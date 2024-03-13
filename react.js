npx v0 add WLIBwXDWVUc
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="grid gap-6 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hi, I'm Jane Smith</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I build beautiful and responsive websites. Welcome to my corner of the internet.
          </p>
        </div>
        <div className="mx-auto grid gap-6 sm:max-w-4xl lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-2">
            <img
              alt="Profile"
              className="mx-auto rounded-full overflow-hidden object-cover object-center"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer. UI/UX Enthusiast.</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">About Me</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I am a frontend developer with a passion for creating beautiful and intuitive user interfaces. I love
                turning design mockups into pixel-perfect websites and crafting the perfect user experience. When I'm
                not coding, you can find me exploring the latest UI/UX trends or experimenting with new frontend
                frameworks.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Skills</h3>
              <ul className="grid gap-2 text-sm list-disc list-inside md:grid-cols-2 dark:text-gray-400">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>UI/UX Design</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent projects. Each one showcases my frontend skills and my attention to detail.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project One</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A beautiful and responsive website for a fictional coffee shop. Built with HTML, CSS, and a touch of
                  JavaScript.
                </p>
                <Link
                  className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project Two</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum</p>
                <Link
                  className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let's Work Together</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind? I'm available for freelance work and open to new opportunities. Let's create
                something amazing together.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-4 sm:grid-cols-2 lg:gap-10">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Me
              </Link>
              <form className="grid gap-2 text-sm">
                <div className="inline-block w-full max-w-[400px]">
                  <Input className="w-full" placeholder="Name" type="text" />
                </div>
                <div className="inline-block w-full max-w-[400px]">
                  <Input className="w-full" placeholder="Email" type="email" />
                </div>
                <Textarea className="min-h-[100px] lineHeight[relaxed]" placeholder="Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent projects. Each one showcases my frontend skills and my attention to detail.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project One</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A beautiful and responsive website for a fictional coffee shop. Built with HTML, CSS, and a touch of
                  JavaScript.
                </p>
                <Link
                  className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project Two</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum</p>
                <Link
                  className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
