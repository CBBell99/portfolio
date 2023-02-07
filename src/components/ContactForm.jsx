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
      <div className="p-5 bg-black bg-opacity-25 rounded-lg">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex gap-5 mb-5">
            <div className=" w-1/2">
              <label htmlFor="from_name" />
              <p className="text-greyLight pb-2">Name</p>
              <input
                type="text"
                name="from_name"
                placeholder="Your Full Name"
                required
                className="w-full rounded-lg p-2"
              />
            </div>
            <div className=" w-1/2">
              <p className="text-greyLight pb-2">Email</p>
              <label htmlFor="user_email" />{' '}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email Address"
                required
                className="w-full rounded-lg p-2"
              />
            </div>
          </div>
          <div className="h-48 ">
            <textarea
              name="message"
              required
              className="w-full h-full rounded-md"
            />
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
