import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitButton, TextArea, TextInput } from './ContactFormStyled';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormComponent = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div>
        <label htmlFor="name">Name:</label>
        <TextInput
          id="name"
          {...register("name", { required: "Name is required" })}
          type="text"
        />
        {errors.name && <p>* {errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email">Email:</label>
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
        {errors.email && <p>* {errors.email.message}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message">Message:</label>
        <TextArea
          id="message"
          rows={12}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p>* {errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <SubmitButton type="submit">Submit</SubmitButton>
    </form>
  );
}

