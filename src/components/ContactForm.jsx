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
          <div className="flex gap-5">
            <div className="border rounded-md overflow-hidden w-1/2">
              <label htmlFor="from_name" />
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="w-full"
              />
            </div>
            <div className="border rounded-md overflow-hidden w-1/2">
              <label htmlFor="user_email" />{' '}
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="border rounded-md overflow-hidden h-60 ">
            <textarea name="message" required className="w-full h-full" />
          </div>
          <div className="text-greyLight border">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
