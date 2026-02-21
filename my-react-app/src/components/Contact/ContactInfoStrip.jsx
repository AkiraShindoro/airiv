function ContactInfoStrip() {
  return (
    <>
      <section className="info-strip">
        <div className="info-item">
          <strong>Phone</strong>
          <p>+1 (555) 123-4567</p>
        </div>

        <div className="info-item">
          <strong>Email</strong>
          <p>info@airivinfotech.com</p>
        </div>
      </section>

      <style>{`
        .info-strip {
          padding: 60px 80px;
          background: #0b2a5c;
          color: #ffffff;
          display: flex;
          justify-content: center;
          gap: 120px;
          text-align: center;
        }

        .info-item strong {
          display: block;
          font-size: 16px;
          margin-bottom: 10px;
          opacity: 0.8;
        }

        .info-item p {
          font-size: 20px;
          margin: 0;
        }

        @media (max-width: 768px) {
          .info-strip {
            flex-direction: column;
            gap: 30px;
            padding: 50px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default ContactInfoStrip;