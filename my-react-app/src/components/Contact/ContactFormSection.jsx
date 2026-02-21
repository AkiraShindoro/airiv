function ContactFormSection() {
  return (
    <>
      <section style={styles.section} className="contact-section">
        <div style={styles.container}>
          <h2 style={styles.heading}>
            Connect With Airiv Infotech To Explore How Our
            Technology Services Can Support Your Business Goals.
          </h2>

          <form style={styles.form}>
            <div className="row">
              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
            </div>

            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Subject*" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="How can we help you?" rows="5"></textarea>

            <label className="checkboxRow">
              <input type="checkbox" />
              <span>
                I agree to the privacy policy and consent to being contacted.
              </span>
            </label>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      <style>{`
        .contact-section {
          padding: 140px 20px;
          background: #f4f6f9;
        }

        .row {
          display: flex;
          gap: 20px;
        }

        input, textarea {
          width: 100%;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid #ddd;
          font-size: 15px;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          border-color: #0b2a5c;
          box-shadow: 0 0 0 3px rgba(11,42,92,0.1);
        }

        textarea {
          resize: none;
        }

        .checkboxRow {
          display: flex;
          gap: 10px;
          font-size: 14px;
          align-items: center;
        }

        .submit-btn {
          margin-top: 15px;
          padding: 16px;
          background: #0b2a5c;
          color: #fff;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  section: {},

  container: {
    maxWidth: "720px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "60px",
    borderRadius: "24px",
    boxShadow: "0 30px 70px rgba(0,0,0,0.08)",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "50px",
    color: "#0b2a5c",
    lineHeight: "1.5",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};

export default ContactFormSection;