'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import gmail from "@/app/icon/gmail.png";
import phone from "@/app/icon/call_6330591.png";
import location from "@/app/icon/placeholder_500744.png";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const email_id = "karan021104@gmail.com"
  const number = "+91 8384069091"
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      service: "",
      details: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    const phone = formData.phone.trim();

    if (!phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    if (!formData.details.trim()) {
      newErrors.details = "Project details are required";
      isValid = false;
    } else if (formData.details.length < 20) {
      newErrors.details = "Please provide more details";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSuccess("Inquiry sent successfully!");
      setTimeout(() => {
        setSuccess("");
      }, 5000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        details: "",
      });
    } catch (error) {
      setSuccess("Failed to send inquiry.");

      setTimeout(() => {
        setSuccess("");
      }, 5000);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-10 pb-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ready to transform your technology? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span>
                    <Image
                      src={gmail}
                      alt="Gmail"
                      width={48}
                      height={48}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </span>

                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-semibold">{email_id}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span>
                    <Image
                      src={phone}
                      alt="Gmail"
                      width={48}
                      height={48}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Phone</p>
                    <p className="font-semibold">{number}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span>
                    <Image
                      src={location}
                      alt="Gmail"
                      width={48}
                      height={48}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </span>
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-semibold">India</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border hover:border-primary/50 focus:border-primary transition-colors focus:outline-none text-foreground placeholder-muted"
                    placeholder="Your name"

                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-muted">
                    Service Needed
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => {
                      setFormData((prev) => ({
                        ...prev,
                        service: value ?? "",
                      }));

                      setErrors((prev) => ({
                        ...prev,
                        service: "",
                      }));
                    }}

                  >

                    <SelectTrigger
                      className="w-full px-4 py-6 rounded-lg bg-white/5 border border-border hover:border-primary/50 focus:border-primary transition-colors focus:outline-none text-foreground placeholder-muted"

                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>

                    <SelectContent

                      className="
    rounded-xl
    border
    border-border
    bg-background
    shadow-xl
  "
                    >
                      <SelectItem value="Infrastructure & Networking">
                        Infrastructure & Networking
                      </SelectItem>

                      <SelectItem value="Cloud & DevOps">
                        Cloud & DevOps
                      </SelectItem>

                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>

                      <SelectItem value="Enterprise Solutions">
                        Enterprise Solutions
                      </SelectItem>

                      <SelectItem value="Mobile Development">
                        Mobile Development
                      </SelectItem>

                      <SelectItem value="Maintenance & Support">
                        Maintenance & Support
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                <div>
                <label className="block text-sm font-semibold mb-2 text-muted">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border hover:border-primary/50 focus:border-primary transition-colors focus:outline-none text-foreground placeholder-muted"
                  placeholder="your@email.com"

                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-muted">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      setFormData((prev) => ({
                        ...prev,
                        phone: value,
                      }));

                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border hover:border-primary/50 focus:border-primary transition-colors focus:outline-none text-foreground placeholder-muted"
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>


              <div>
                <label className="block text-sm font-semibold mb-2 text-muted">
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border hover:border-primary/50 focus:border-primary transition-colors focus:outline-none text-foreground placeholder-muted resize-none"
                  placeholder="Tell us about your project, requirements, and goals..."
                />
                {errors.details && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.details}
                  </p>
                )}
              </div>
              {success && (
                <div
                  className={`rounded-lg p-3 text-sm ${success.includes("successfully")
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                >
                  {success}
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="
    w-full
    px-6
    py-3
    rounded-lg
    bg-black
    text-white
    font-semibold
    hover:bg-neutral-800
    transition-colors
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
