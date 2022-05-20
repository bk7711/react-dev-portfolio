import React from "react";

function Main() {
  return (
    <main>
      <section className="left" id="home">
        <article className="card linksLeft links" href="#experience">
          <a href="#experience">
            <img
              className="card-img"
              src="assets/images/boardroom.jpg"
              alt="work on desk"
            />
          </a>
          <div className="title">
            <p>Experience</p>
          </div>
        </article>
        <article className="card linksLeft links" href="#education">
          <a href="#education">
            <img
              className="card-img"
              src="assets/images/floatingBook.jpg"
              alt="library with a floating book"
            />
          </a>
          <div className="title">
            <p>Education</p>
          </div>
        </article>
      </section>
      <section className="middle">
        <article>
          <h2>The Creative Eye Behind Blossoming Works</h2>
          <p>
            Carolyn Blackwell is a driven professional who incorporates her
            skills to be a successful problem solver.
            <br />
            She began her career as a classroom educator where she instructed
            students from all grade level bands and developed a passion and
            proficiency in teaching secondary Mathematics. As a high school Math
            teacher Carolyn received her Single Subject Credential with a
            concentration in Mathematics and continued on to a Master of
            Education with a focus on teaching Mathematics.
            <br />
            Upon leaving the classroom, Carolyns journey in education continued
            at Houghton Mifflin Harcourt where began as a California Content
            Specialist and later progressed to a National STEM Content
            Specialist. She then continued her career at HMH as a Professional
            Services Manager, using her knowledge and experience to support
            teachers and administrators in providing high quality instruction.
            <br />
            Although her career has been centered around education, she has
            always had a passion for technology and found ways to incorporate it
            in every aspect of her career. Now Carolyn pursues a career in
            technology as a Web Developer and aspires to use her previous
            experience to build unique tools to support everyday life and
            revolutionize education.
          </p>
        </article>
      </section>

      <section className="right" id="right">
        <article className="card linksRight links" href="#portfolio">
          <a href="#portfolio">
            <img
              className="card-img"
              src="./assets/images/coding.jpg"
              alt="Sign on chair"
            />
          </a>
          <div className="title">
            <p>Portfolio</p>
          </div>
        </article>
        <article className="card linksRight links" href="#contact">
          <a href="#contact">
            <img
              className="card-img"
              src="assets/images/wooddesk.jpg"
              alt="paint set"
            />
          </a>
          <div className="title">
            <p>Contact</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
