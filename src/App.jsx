import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const projects = [
    {
        title: 'Nokia Homelab',
        description:
            'An Android-powered ARM homelab running Termux, Nginx, Node.js and self-hosted applications.',
        tech: ['Linux', 'Termux', 'Nginx', 'Node.js'],
    },
    {
        title: 'Clinical EDC Platform',
        description:
            'Full-stack electronic data capture platform for clinical research workflows.',
        tech: ['Laravel', 'Vue', 'MySQL'],
    },
    {
        title: 'Backend Experiments',
        description:
            'APIs and distributed-system experiments covering queues, caching and scalable backend architecture.',
        tech: ['Node.js', 'Redis', 'RabbitMQ'],
    },
]

function App() {
  const [count, setCount] = useState(0)

  const [serverStatus, setServerStatus] = useState(null)
const [statusError, setStatusError] = useState(false)

useEffect(() => {
    const loadStatus = async () => {
        try {
            const response = await fetch('/api/status')

            if (!response.ok) {
                throw new Error('Status request failed')
            }

            const data = await response.json()

            setServerStatus(data)
            setStatusError(false)
        } catch (error) {
            console.error(error)
            setStatusError(true)
        }
    }

    loadStatus()

    const interval = setInterval(loadStatus, 30000)

    return () => clearInterval(interval)
}, [])

  return (
    <main>
            <section className="hero">
                <p className="eyebrow">Bharat Bhushan</p>
                <p className="eyebrow">Software Developer · Homelab Enthusiast</p>

                <h1>
                    Building software,
                    <span> one server at a time.</span>
                </h1>

                <p className="intro">
                    Full-stack developer exploring backend engineering,
                    distributed systems and self-hosted infrastructure.
                </p>

                <div className="actions">
                    <a href="#projects">View Projects</a>
                    <a className="secondary" href="#homelab">
                        Homelab
                    </a>
                </div>
            </section>

            <section id="projects">
                <h2>Projects</h2>

                <div className="projects">
                    {projects.map((project) => (
                        <article key={project.title}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="tags">
                                {project.tech.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="homelab" className="homelab">
                <h2>Nokia Homelab</h2>

                <p>
                    This website is being served from a Nokia 7 Plus
                    running Android + Termux.
                </p>

                {statusError && (
                    <div className="status offline">
                        <span className="dot offline-dot"></span>
                        Server status unavailable
                    </div>
                )}

                {serverStatus && (
                    <>
                        <div className="status">
                            <span className="dot"></span>
                            Nokia server online
                        </div>

                        <div className="server-grid">

                            <div className="server-card">
                                <span>Device</span>
                                <strong>{serverStatus.server}</strong>
                            </div>

                            <div className="server-card">
                                <span>Memory</span>

                                <strong>
                                    {serverStatus.memory.usedMB} MB /
                                    {' '}
                                    {serverStatus.memory.totalMB} MB
                                </strong>
                            </div>

                            <div className="server-card">
                                <span>Memory Usage</span>

                                <strong>
                                    {serverStatus.memory.usedPercent}%
                                </strong>
                            </div>

                            <div className="server-card">
                                <span>API Uptime</span>

                                <strong>
                                    {Math.floor(
                                        serverStatus.uptime.apiSeconds / 60
                                    )} min
                                </strong>
                            </div>

                        </div>
                    </>
                )}

                {/* <div className="status">
                    <span className="dot"></span>
                    Server online
                </div> */}
            </section>
        </main>
    // <>
    //   <section id="center">
    //     <div className="hero">
    //       <img src={heroImg} className="base" width="170" height="179" alt="" />
    //       <img src={reactLogo} className="framework" alt="React logo" />
    //       <img src={viteLogo} className="vite" alt="Vite logo" />
    //     </div>
    //     <div>
    //       <h1>Get started</h1>
    //       <p>
    //         Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
    //       </p>
    //     </div>
    //     <button
    //       type="button"
    //       className="counter"
    //       onClick={() => setCount((count) => count + 1)}
    //     >
    //       Count is {count}
    //     </button>
    //   </section>

    //   <div className="ticks"></div>

    //   <section id="next-steps">
    //     <div id="docs">
    //       <svg className="icon" role="presentation" aria-hidden="true">
    //         <use href="/icons.svg#documentation-icon"></use>
    //       </svg>
    //       <h2>Documentation</h2>
    //       <p>Your questions, answered</p>
    //       <ul>
    //         <li>
    //           <a href="https://vite.dev/" target="_blank">
    //             <img className="logo" src={viteLogo} alt="" />
    //             Explore Vite
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://react.dev/" target="_blank">
    //             <img className="button-icon" src={reactLogo} alt="" />
    //             Learn more
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div id="social">
    //       <svg className="icon" role="presentation" aria-hidden="true">
    //         <use href="/icons.svg#social-icon"></use>
    //       </svg>
    //       <h2>Connect with us</h2>
    //       <p>Join the Vite community</p>
    //       <ul>
    //         <li>
    //           <a href="https://github.com/vitejs/vite" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#github-icon"></use>
    //             </svg>
    //             GitHub
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://chat.vite.dev/" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#discord-icon"></use>
    //             </svg>
    //             Discord
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://x.com/vite_js" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#x-icon"></use>
    //             </svg>
    //             X.com
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://bsky.app/profile/vite.dev" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#bluesky-icon"></use>
    //             </svg>
    //             Bluesky
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </section>

    //   <div className="ticks"></div>
    //   <section id="spacer"></section>
    // </>
  )
}

export default App
