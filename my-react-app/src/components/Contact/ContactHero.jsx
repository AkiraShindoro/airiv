import heroImg from "../../assets/contact/contact1.jpg";

function ContactHero() {
  return (
    <section className="contact-hero">
      <img src={heroImg} alt="Contact" className="img-fluid" />

      <div className="contact-overlay bottom-left">
        <h1 className="contact-title">
          LET’S START A CONVERSATION
        </h1>
      </div>
    </section>
  );
}

export default ContactHero;