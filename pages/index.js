import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan Oakey - AI Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <img src="portfolio_image.png" alt="Jonathan Oakey's AI Portfolio" style={{width: '100%'}} />
        <h1>Jonathan Oakey</h1>
        <p>AI Specialist with a diverse range of expertise</p>
      </header>

      <nav>
        <a href="#about">About</a> |
        <a href="#projects">Projects</a> |
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h2><button className="collapsible">About Me</button></h2>
        <div className="content">
          <ul>
            {/* ... various details about Jonathan Oakey ... */}
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2><button className="collapsible">Projects</button></h2>
        <div className="content">
          <article>
            <h3>Data Mining and Analysis with Pandas</h3>
            <p>This project demonstrates the process of data mining and analysis using Pandas in Python.</p>
            <a href="https://github.com/reducesteps/Data_Mining_and_Analysis_with_Pandas" target="_blank">View on GitHub</a>
          </article>
        </div>
      </section>

      <section id="contact">
        <h2><button className="collapsible">Contact</button></h2>
        <div className="content">
          <form action="https://formspree.io/your-email-address" method="POST" className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="col-12">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" name="subject" required />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2023 Jonathan Oakey</p>
      </footer>
    </div>
  )
}