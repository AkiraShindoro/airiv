function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.left}>
        <h2 style={styles.title}>Get in Touch</h2>
        <p style={styles.text}>
          Let’s discuss how Airiv Infotech can support your next digital
          initiative.
        </p>
      </div>

      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Company" />
        <button type="submit">Contact Us</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "48px",
    padding: "64px",
    background: "#f1f3f6",
  },
  left: {
    maxWidth: "420px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#444",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    maxWidth: "360px",
  },
};

export default Contact;
