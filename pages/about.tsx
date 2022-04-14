import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col divide-y divide-border">
        <div className="space-y-6">

          <div className="flex flex-col">
            <h1 className="text-6xl mt-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-l-2 md:px-6 md:text-8xl md:leading-14">
              About Me
            </h1>
          </div>
          
          <div className="flex flex-col">
            <p className="mb-4 text-2xl font-bold leading-normal md:text-2xl mt-2">
              Hello👋, &nbsp; I&apos;m Ujjwal.
            </p>
            <p className="mb-8 text-xl">
              I&apos;m a pre-final year computer science undergrad at Netaji Subhas Institute of Technology,&nbsp; New Delhi.&nbsp;
              I write about web development,&nbsp; machine learning,&nbsp; and other things that I find interesting.
            </p>
            <Link href={'/'}>
              <a>
              <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue px-4 py-2 text-sm font-medium leading-5 dark:text-white shadow transition-colors duration-150 hover:bg-blue focus:outline-none dark:hover:bg-blue">
                Back to homepage
              </button>
              </a>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;