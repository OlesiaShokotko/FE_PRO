import s from "./ContactPage.module.css";

export default function ContactPage() {
    return (
      <div className={s.container}>
        <div className={s.content_wrapper}>
          <section className={s.left_wrapper}>
            <h2 className={s.footer_title}>Contact</h2>
            <a href="tel:+499999999999" style={{ textDecoration: "none" }}>
              <p className={s.contact}>+49 999 999 99 99</p>
            </a>
          </section>
          <section className={s.right_wrapper}>
            <h2 className={s.footer_title}>Address</h2>
            <address>
              <a
                href="https://maps.app.goo.gl/DAp1duneYsWqcEGf7"
                className={s.address_link}
              >
                Pariser Platz, 10117,
                <br /> Berlin, Deutschland
              </a>
            </address>
            <p className={s.work_time_title}>
              Also available in messengers:
              <br />
              <span>24 hours a day</span>
            </p>
          </section>
        </div>
      </div>
    );
}