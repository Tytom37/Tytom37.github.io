import '../Main/Main.scss'

function Main() {
    return (
        <div className="mainContainer">
            <section id="skills">
                <h2>Skills</h2>
                <div className="skillGroup">
                    <h3>Tech stack</h3>
                    <p>HTML, CSS, JavaScript, TypeScript, React.js, Vue.js, Tailwind CSS, Bootstrap, Node.js, Laravel, Git/GitHub, VS Code, Java</p>
                </div>
                <div className="skillGroup">
                    <h3>AI & machine learning</h3>
                    <p>ChatGPT, Claude.ai, Higgsfield, Nano Banana</p>
                </div>
            </section>

            <section id="projects">
                <h2>Projects</h2>

                <article className="projectItem">
                    <h3>Online freight management for trucking services</h3>
                    <p className="projectMeta">Capstone project &middot; Laravel, PHP, JavaScript, MySQL, CSS</p>
                    <ul>
                        <li>Created a full-stack web application for managing freight services, including multi-role access for admin, manager, driver, and customer roles.</li>
                        <li>Centralized management of operations, documents, fleet, routes, and customers in a single platform for improved efficiency and productivity.</li>
                        <li>Implemented a web-based solution for trucking services using a Laravel backend and JavaScript frontend, eliminating the need for manual coordination.</li>
                    </ul>
                </article>

                <article className="projectItem">
                    <h3>eBook ordering system</h3>
                    <p className="projectMeta">Academic project &middot; Laravel, PHP</p>
                    <ul>
                        <li>Designed a web application with Laravel and PHP, including user registration, secure eBook browsing, one-click ordering, and file downloads.</li>
                        <li>Implemented an admin panel for managing user accounts, eBooks, and orders.</li>
                        <li>Implemented role-based user authentication for secure delivery of content.</li>
                    </ul>
                </article>

                <article className="projectItem">
                    <h3>ExpenseTracker</h3>
                    <p className="projectMeta">Academic project &middot; Vue.js</p>
                    <ul>
                        <li>Created a Vue.js expense tracking application where users can enter a form with name, category, and amount to create a list of categorized expenses.</li>
                        <li>Created reactive JavaScript logic to automatically calculate and display the running total based on the items entered.</li>
                    </ul>
                </article>
            </section>

            <section id="experience">
                <h2>Experience</h2>

                <article className="experienceItem">
                    <div className="experienceDate">Dec 2025 &mdash; Feb 2026</div>
                    <div>
                        <h3>AI prompt engineer &middot; Freelance, remote</h3>
                        <ul>
                            <li>Created original short-form video content using generative AI tools.</li>
                            <li>Developed concepts, scripts, and visual styles for AI-driven videos.</li>
                            <li>Produced, edited, and optimized content for social media platforms.</li>
                        </ul>
                    </div>
                </article>

                <article className="experienceItem">
                    <div className="experienceDate">Jan &mdash; Apr 2025</div>
                    <div>
                        <h3>Technical support (OJT) &middot; Alturas Group of Companies</h3>
                        <ul>
                            <li>Assisted with hardware troubleshooting and repair.</li>
                            <li>Performed routine network maintenance and monitoring.</li>
                            <li>Resolved user issues related to software, hardware, and connectivity.</li>
                            <li>Gained hands-on experience in diagnosing system problems.</li>
                            <li>Supported daily IT operations in a real-world work environment.</li>
                        </ul>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Main;