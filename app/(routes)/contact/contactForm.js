"use client";

import styles from "@/styles/contact.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormSchema from "./FormSchema";
import { showToast } from "@/lib/components/nextToastify";
import SyncLoader from "react-spinners/SyncLoader";
import { createContact } from "@/lib/actions/contacts/createContact";



const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: errors,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(FormSchema),
  });

  // Submit Handler
  async function formSubmit(formData) {
    if (!loading) {
      setLoading(true);
      // Action Call
      const res = await createContact(formData).then(data => {return JSON.parse(data)});
      setLoading(false);
      reset();
      res.success
        ? showToast(res.success)
        : showToast(res.success, res.message);
    }
  }

 

  return (
    <form className={styles.form} onSubmit={handleSubmit(formSubmit)} noValidate>
      <div className={styles.inputWraper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <p className={styles.error_text}>{errors.name?.message}</p>
      </div>
      <div className={styles.inputWraper}>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <p className={styles.error_text}>{errors.email?.message}</p>
      </div>
      <div className={styles.inputWraper}>
        <textarea
          className={styles.input}
          type="text"
          name="message"
          placeholder="Enter your message"
          {...register("message")}
        />
        <p className={styles.error_text}>{errors.message?.message}</p>
      </div>
      <button className={styles.submitBtn} type="submit">
        {loading ? <SyncLoader color="#fff" size={8} /> : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
