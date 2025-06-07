import { useEffect, useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjkwdzbq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#F5F5F5] dark:bg-[#1B2731]"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
        </RoughNotation>
      </div>

      <div className="mt-8 mb-20">
        <h3 className="font-medium text-lg mb-2 md:text-3xl text-center" ref={elementRef}>
          Let's build something amazing together!
        </h3>
        <p className="mb-8 mx-auto max-w-2xl md:mb-10 lg:leading-loose text-center">
          I'm actively seeking junior-level DevOps and Backend Developer opportunities in Europe. 
          Whether you have a question or want to discuss potential opportunities, I'll try my best to get back to you!
        </p>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Left Side - Quick Contact */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Quick Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:MostafaShirvani1999@gmail.com" 
                     className="text-teal-500 hover:text-teal-600 transition-colors break-all">
                    MostafaShirvani1999@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <a href="https://github.com/Soheil7799" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-teal-500 hover:text-teal-600 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Email Button */}
            <div className="text-center">
              <LinkButton href="mailto:MostafaShirvani1999@gmail.com">
                Send Email Directly
              </LinkButton>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Send a Message
            </h4>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 rounded">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded">
                Failed to send message. Please try again or email me directly.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter your email address
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                  placeholder="Job Opportunity / Question / Collaboration"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Enter your message here
                </label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           placeholder-gray-500 dark:placeholder-gray-400 resize-vertical transition-colors"
                  placeholder="Tell me about your project, opportunity, or question..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl
                           focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white 
                           dark:focus:ring-offset-gray-800 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed text-white' 
                    : 'bg-teal-500 hover:bg-teal-600 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;