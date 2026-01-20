import { useState } from "react";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch ('http://localhost:3000/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send message');
    }

    const data = await response.json();
    console.log('Server response:', data);

    alert('Sended successfully! I will get back to you soon.');
    setForm({ name: '', email: '' }); // reset form
  } 
  catch (error) {
    console.error('Submission Error:', error);
    alert('Failed to send message. Please try again later.');
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center px-6 py-16 bg-white dark:bg-black text-gray-800 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          {/* Form Section */}
          <div className="xl:col-span-5 flex justify-center">
            <div
              className="w-full bg-gray-900 shadow-lg rounded-2xl p-10 transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    className="w-full p-3 rounded-lg border border-gray-600 bg-[#334155] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                    className="w-full p-3 rounded-lg border border-gray-600 bg-[#334155] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="w-full p-3 rounded-lg border border-gray-600 bg-[#334155] text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 
                             text-white font-medium py-3 rounded-lg 
                             transition-colors duration-200"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Image / Decorative Section */}
          <div className="xl:col-span-7 rounded-3xl overflow-hidden">
            <div
              className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-200 rounded-3xl transition-colors duration-300"
            >
              <p className="text-xl font-semibold px-4 text-center">
                Let’s build something amazing together ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
