import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = () => {
    sendEmail();
    console.log('success');
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = () => {
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
          <div className="md:flex gap-5 mb-">
            <div className=" md:w-1/2 md:h-1/2 mb-2">
              <label htmlFor="from_name">
                <p className="text-greyLight pb-2">Name</p>
              </label>
              <input
                onChange={handleNameChange}
                value={name}
                type="text"
                name="from_name"
                placeholder="Your Full Name"
                required
                className="w-full h-full rounded-lg p-3 bg-black hover:border-[1px] hover:border-accent border-transparent text-greyLight"
              />
            </div>
            <div className=" md:w-1/2 md:h-1/2 mb-2">
              <label htmlFor="user_email">
                <p className="text-greyLight pb-2">Email</p>
              </label>
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                name="user_email"
                placeholder="Your Email Address"
                required
                className="w-full h-full rounded-lg p-3 bg-black hover:border-[1px] hover:border-accent border-transparent text-greyLight"
              />
            </div>
          </div>

          <label htmlFor="message">
            <p className="text-greyLight pb-2">Message</p>
          </label>
          <div className="h-48 mb-5">
            <textarea
              onChange={handleMessageChange}
              value={message}
              placeholder="Your message here"
              name="message"
              required
              className="w-full h-full rounded-md p-3 bg-black hover:border-[1px] hover:border-accent border-transparent text-greyLight"
            />
          </div>

          <button
            className="rounded-lg w-full bg-accent text-greyLight py-1 slider"
            onClick={submitHandler}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
