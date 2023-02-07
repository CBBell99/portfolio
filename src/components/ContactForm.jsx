import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6xfq2pd',
        'template_l7a5jl3',
        form.current,
        'Let0wu0Sm5n14u5vk'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="mx-5">
      <h2 className="text-greyLight text-2xl text-center">ContactForm</h2>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label className="text-greyLight">Name</label>
            <input type="text" name="from_name" />
            <label className="text-greyLight">Email</label>
            <input type="email" name="user_email" />
            <label className="text-greyLight">Message</label>
            <textarea name="message" />
            <div className="text-greyLight border">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
