function ContactFormSection() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-heading">
          Connect With Airiv Infotech To Explore How Our
          Technology Services Can Support Your Business Goals.
        </h2>

        <form className="contact-form">
          <div className="contact-row">
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
  );
}

export default ContactFormSection;
