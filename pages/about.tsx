import Link from 'next/link'
import projectsData from '../data/projectsData'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col divide-y divide-border">
        <div className="space-y-6">
          <div className="flex flex-col">
            <h1 className="text-4xl mt-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-l-2 md:px-6 md:text-6xl md:leading-14">
              About Me
            </h1>
          </div>

          <div className="flex flex-col">
            <p className="mb-4 text-2xl font-bold leading-normal md:text-2xl mt-2">
              Hello👋, &nbsp; I&apos;m Ujjwal.
            </p>
            <p className="mb-8 text-xl">
              I&apos;m a pre-final year computer science undergrad at Netaji
              Subhas Institute of Technology,&nbsp; New Delhi.&nbsp; I write
              about web development,&nbsp; machine learning,&nbsp; and other
              things that I find interesting.
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl mt-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-l-2 md:px-6 md:text-6xl md:leading-14 mb-10">
              My Projects
            </h1>
            <div className="grid gap-2 grid-cols-2 grid-rows-3">
              {projectsData.map((project, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-5 border rounded-lg hover:bg-gray dark:hover:bg-postColor hover:border-dashed"
                >
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold leading-normal md:text-2xl mt-2">
                      {project.title}
                    </h2>
                    <p className="text-xl font-thin">{project.description}</p>

                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row mt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-600 hover:text-gray-900 ml-2"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl mt-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-l-2 md:px-6 md:text-6xl md:leading-14">
              My Credentials
            </h1>
          </div>

          <div className="flex flex-col">
            <div className="table w-full ">
                <div className="table-row-group w-full p-10">
                  <div className="table-row w-full">
                    <div className="table-cell p-2">LinkedIn</div>
                    <div className="table-cell p-2 text-blue">
                      <a href="https://www.linkedin.com/in/ujjwalkadam" target="_blank" rel="noopener noreferrer">
                      Ujjwal Kadam</a>
                      </div>
                  </div>
                  <div className="table-row">
                        <div className="table-cell p-2 ">Github</div>
                        <div className="table-cell p-2 text-blue">
                          <a href="https://github.com/ujjwal404" target="_blank" rel="noopener noreferrer">
                          ujjwal404
                          </a>
                          </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell p-2 ">Email</div>
                    <div className="table-cell p-2 text-blue">
                       <a href="mailto:ujjwalkadam68@gmai.com" target="_blank" rel="noopener noreferrer">
                      ujjwalkadam68@gmail.com
                      </a>
                      </div>
                  </div>
                </div>
                <div className="table-row">
                    <div className="table-cell p-2 ">Resume</div>
                    <div className="table-cell p-2 text-blue">
                       <a href="https://drive.google.com/file/d/1ZFWb-yyyA0hwQMDg38v4sR_3vWxoqwq_/view?usp=sharing">
                      Drive Link
                      </a>
                    </div>
                </div>
            
              <div className="table-row">
                  <div className="table-cell p-2 ">Leetcode Profile</div>
                  <div className="table-cell p-2 text-blue">
                      <a href="https://leetcode.com/ujjwal41/" target="_blank" rel="noopener noreferrer">
                    ujjwal41
                    </a>
                  </div>
              </div>  
              </div>
          </div>


          {/* <Link href={'/'}>
              <a>
                <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue px-4 py-2 text-sm font-medium leading-5 dark:text-white shadow transition-colors duration-150 hover:bg-blue focus:outline-none dark:hover:bg-blue">
                  Back to homepage
                </button>
              </a>
            </Link> */}
        </div>
      </div>
    </div>
  )
}

export default About
