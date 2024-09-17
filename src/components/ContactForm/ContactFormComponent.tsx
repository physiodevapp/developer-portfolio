import React, { forwardRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactForm, Field, SocialMedia, SubmitButton, TextArea, TextInput } from './ContactFormStyled';
import { BsSendFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormComponent = forwardRef<HTMLButtonElement>((props, ref) => {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, email, message } = data;

    const mailtoLink = `mailto:edu.gamboa.rodriguez@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;

    // Optionally reset the form after submission
    reset();
  };

  return (
    <ContactForm onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <Field>
        <label htmlFor="name">{!errors.name ? 'Name:' : <span>{errors.name.message}</span>}</label>
        <TextInput
          id="name"
          {...register("name", { required: "Name is required" })}
          type="text"
        />
      </Field>

      {/* Email Field */}
      <Field>
        <label htmlFor="email">{!errors.email ? 'Email:' : <span>{errors.email.message}</span>}</label>
        <TextInput
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
        />
      </Field>

      {/* Message Field */}
      <Field>
        <label htmlFor="message">{!errors.message ? 'Message:' : <span>{errors.message.message}</span>}</label>
        <TextArea
          id="message"
          rows={7}
          {...register("message", { required: "Message is required" })}
        />
      </Field>

      <SocialMedia>
        <li><FaGithub size={50} onClick={() => window.open("https://github.com/physiodevapp")}/></li>
        <li><FaLinkedin size={50} onClick={() => window.open("https://www.linkedin.com/in/edu-gamboa/")}/></li>
      </SocialMedia> 
      <SubmitButton ref={ref} type="submit" style={{width: "30%"}}><BsSendFill/>Email</SubmitButton>
    </ContactForm>
  );
})

