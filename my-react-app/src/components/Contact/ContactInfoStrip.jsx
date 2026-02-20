function ContactInfoStrip() {
  return (
    <section style={styles.section}>
      <div>
        <strong>📞 Phone:</strong> +1 (555) 123-4567
      </div>
      <div>
        <strong>✉ Email:</strong> info@airivinfotech.com
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "30px 80px",
    background: "#0b2a5c",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default ContactInfoStrip;