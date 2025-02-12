"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // process.env.EMAILJS_SERVICE_ID,  EmailJS Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData, // process.env.EMAILJS_TEMPLATE_ID, EmailJS Template ID
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID //process.env.EMAILJS_PUBLIC_ID // EmailJS Public Key
      );

      if (res.status === 200) {
        setSuccess("Mesaj başarıyla gönderildi!");
        toast.success("Mesaj başarıyla gönderildi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      }
    } catch (error) {
      setSuccess("Mesaj gönderilirken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto flex flex-col gap-2 "
    >
      <p className="font-semibold text-center">Bize Ulaşın</p>
      <p>
        İsim <span className="text-red-600">*</span>
      </p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-2 py-1 border border-gray-300  text-sm "
        required
      />
      <p>
        Telefon <span className="text-red-600">*</span>
      </p>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-2 py-1 border border-gray-300  text-sm "
        required
      />
      <p>
        Email <span className="text-red-600">*</span>
      </p>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-2 py-1 border border-gray-300  text-sm "
        required
      />
      <p>
        Mesaj <span className="text-red-600">*</span>
      </p>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-2 py-1 border border-gray-300  text-sm "
        required
      />
      <button
        type="submit"
        className=" max-w-40 bg-gray-800 text-white p-2 rounded disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
