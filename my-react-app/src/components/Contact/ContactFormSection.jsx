function ContactFormSection() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Connect With Airiv Infotech To Explore How Our
        Technology Services Can Support Your Business Goals.
      </h2>

      <div style={styles.formWrapper}>
        <form style={styles.form}>
          <div style={styles.row}>
            <input type="text" placeholder="First Name*" style={styles.input} />
            <input type="text" placeholder="Last Name*"  style={styles.input}/>
          </div>

          <input type="email" placeholder="Email*" style={styles.input} />
          <input type="text" placeholder="Subject*" style={styles.input} />
          <input type="text" placeholder="Phone Number" style={styles.input} />

          <textarea placeholder="How can we help you?" rows="5" style={styles.input}></textarea>

          <div style={styles.checkboxRow}>
            <input type="checkbox" />
            <span>
              I agree to the privacy policy and consent to being contacted.
            </span>
          </div>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 80px",
    background: "#f4f6f9",
  },
  heading: {
    maxWidth: "700px",
    marginBottom: "40px",
    color: "#0b2a5c",
  },
  formWrapper: {
    maxWidth: "600px",
    background: "#ffffff",
    padding: "50px",
    borderRadius: "12px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  row: {
    display: "flex",
    gap: "15px",
  },
  input: {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "10px",   // 👈 THIS gives rounded corners
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
},
  textarea: {
  width: "100%",
  padding: "12px 15px",
  borderRadius: "10px",   // 👈 same here
  border: "1px solid #ccc",
  fontSize: "14px",
  resize: "none",
  outline: "none",
},
  checkboxRow: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    alignItems: "center",
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#0b2a5c",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default ContactFormSection;