<<<<<<< HEAD
import React, { useState, useRef } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> upstream/master
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
<<<<<<< HEAD
import { sendEmail } from "@/lib/sendEmail";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.querySelector("#name") as HTMLInputElement)?.value.trim();
    const email = (form.querySelector("#email") as HTMLInputElement)?.value.trim();
    const phone = (form.querySelector("#phone") as HTMLInputElement)?.value.trim();
    const message = (form.querySelector("#message") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }

    setIsLoading(true);
    try {
      await sendEmail({ name, email, phone, message, page: "Contact" });
      toast.success("Message sent! We'll get back to you soon.");
      form.reset();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setIsLoading(false);
    }
=======
import { X } from "lucide-react";

export default function ContactUs() {
  const [showNotification, setShowNotification] = useState(true);
  const [customToast, setCustomToast] = useState<string | null>(null);

  useEffect(() => {
    // Show notification when component mounts
    if (showNotification) {
      const id = toast.info(
        <div className="flex items-start justify-between w-full">
          <div className="text-foreground">Contact us form is inactive, kindly reach us at Apple Lab, B-120 for any queries</div>
          <button
            onClick={() => toast.dismiss(id)}
            className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            <X size={16} />
          </button>
        </div>,
        {
          duration: 5000,
          position: "bottom-right",
          className: "bg-background text-foreground border border-gray-200 dark:border-gray-700 shadow-lg",
          style: {
            fontSize: "1.1rem",
            padding: "1.25rem",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
          onDismiss: () => setShowNotification(false),
        }
      );

      // Convert the toast id to string if it's a number
      setCustomToast(id ? String(id) : null);
    }

    // Auto hide notification after 10 seconds
    const timer = setTimeout(() => {
      setShowNotification(false);
      if (customToast) {
        toast.dismiss(customToast);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info(
      <div className="flex items-start justify-between w-full">
        <div className="text-foreground">Contact us form is inactive, kindly reach us at Apple Lab, B-120 for any queries</div>
        <button
          onClick={() => toast.dismiss()}
          className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <X size={16} />
        </button>
      </div>,
      {
        position: "bottom-right",
        className: "bg-background text-foreground border border-gray-200 dark:border-gray-700 shadow-lg",
        style: {
          fontSize: "1.1rem",
          padding: "1.25rem",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        },
      }
    );
>>>>>>> upstream/master
  };

  return (
    <PageLayout showFooter>
      <main className="flex-grow pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center pt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to know more about our IEEE SOU SB? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col justify-center shadow-lg backdrop-blur-sm border border-white/20">
<<<<<<< HEAD
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
=======
              <form onSubmit={handleSubmit} className="space-y-6">
>>>>>>> upstream/master
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input id="name" placeholder="Your name" className="text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" className="text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" className="text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={4} className="text-foreground" />
                </div>

<<<<<<< HEAD
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending…" : "Send Message"}
                </Button>
=======
                <Button type="submit" className="w-full">Send Message</Button>
>>>>>>> upstream/master
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                  Silver Oak University, Nr. Bhavik Publications, Opp. Bhagwat Vidyapith, S.G.Highway,
                  Ahmedabad, Gujarat - 382481
                </p>

                <div className="mt-4 aspect-video w-full rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.78406741357975!2d72.53434092597261!3d23.090371607367445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833af6f39347%3A0xf1db9065daea7008!2sSilver%20Oak%20University!5e0!3m2!1sen!2sin!4v1744895318209!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Silver Oak University Map"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    <a href="#" className="hover:text-primary transition-colors text-foreground">
                      ieee.fbc@socet.edu.in<br />
                      ieee.sc@socet.edu.in<br />
                      ieee.tr@socet.edu.in
                    </a>
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">Phone:</span> <span className="text-foreground">+91 79660 46304</span>
                  </li>
                  <li className="text-muted-foreground">
<<<<<<< HEAD
                    <span className="font-medium text-foreground">Location:</span> <span className="text-foreground">EA-820,E-block 8<sup>th</sup>floor, Silver Oak University</span>
=======
                    <span className="font-medium text-foreground">Location:</span> <span className="text-foreground">Apple Lab, B-120, Silver Oak University</span>
>>>>>>> upstream/master
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}