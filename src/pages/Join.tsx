<<<<<<< HEAD
import React, { useState, useRef } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> upstream/master
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
<<<<<<< HEAD
import { sendEmail } from "@/lib/sendEmail";

export default function Join() {
  const [isLoading, setIsLoading] = useState(false);
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.querySelector("#name") as HTMLInputElement)?.value.trim();
    const email = (form.querySelector("#email") as HTMLInputElement)?.value.trim();
    const phone = (form.querySelector("#phone") as HTMLInputElement)?.value.trim();
    const enrollment = (form.querySelector("#enrollment") as HTMLInputElement)?.value.trim();
    const college = (form.querySelector("#college") as HTMLInputElement)?.value.trim();
    const reason = (form.querySelector("#reason") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }

    setIsLoading(true);
    try {
      await sendEmail({
        name,
        email,
        phone,
        page: "Join",
        fields: {
          "Enrollment Number": enrollment,
          College: college,
          Department: department,
          Semester: semester,
          "Academic Year": academicYear,
          "Reason to Join": reason,
        },
      });
      toast.success("Application submitted! We'll contact you soon.");
      form.reset();
      setDepartment("");
      setSemester("");
      setAcademicYear("");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Failed to submit application.");
    } finally {
      setIsLoading(false);
    }
=======
import { X } from "lucide-react";

export default function Join() {
  const [showNotification, setShowNotification] = useState(true);
  const [customToast, setCustomToast] = useState<string | null>(null);

  useEffect(() => {
    if (showNotification) {
      const id = toast.info(
        <div className="flex items-start justify-between w-full">
          <div className="text-foreground">
            Join IEEE form is inactive, kindly reach us at Apple Lab, B-120 for any queries
          </div>
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
          className:
            "bg-background text-foreground border border-gray-200 dark:border-gray-700 shadow-lg",
          style: {
            fontSize: "1.1rem",
            padding: "1.25rem",
          },
          onDismiss: () => setShowNotification(false),
        }
      );
      setCustomToast(id ? String(id) : null);
    }

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
        <div className="text-foreground">
          Join IEEE form is inactive, kindly reach us at Apple Lab, B-120 for any queries
        </div>
        <button
          onClick={() => toast.dismiss()}
          className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <X size={16} />
        </button>
      </div>,
      {
        position: "bottom-right",
        className:
          "bg-background text-foreground border border-gray-200 dark:border-gray-700 shadow-lg",
        style: {
          fontSize: "1.1rem",
          padding: "1.25rem",
        },
      }
    );
>>>>>>> upstream/master
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join IEEE SOU SB</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to cutting-edge information, networking opportunities, career enhancement, and other exclusive member benefits.
            </p>
          </div>

          <div className="rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900 transition-colors">
<<<<<<< HEAD
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
=======
            <form onSubmit={handleSubmit} className="space-y-6">
>>>>>>> upstream/master
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enrollment">Enrollment Number</Label>
                  <Input id="enrollment" placeholder="Your enrollment number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="college">College</Label>
                  <Input id="college" placeholder="SOCET or ASOIT" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
<<<<<<< HEAD
                  <Select value={department} onValueChange={setDepartment}>
=======
                  <Select>
>>>>>>> upstream/master
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
<<<<<<< HEAD
                      <SelectItem value="Computer Engineering">Computer Engineering</SelectItem>
                      <SelectItem value="Information Technology">Information Technology</SelectItem>
                      <SelectItem value="Electronics & Communication">Electronics &amp; Communication</SelectItem>
                      <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
=======
                      <SelectItem value="ce">Computer Engineering</SelectItem>
                      <SelectItem value="it">Information Technology</SelectItem>
                      <SelectItem value="ec">Electronics & Communication</SelectItem>
                      <SelectItem value="ee">Electrical Engineering</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
>>>>>>> upstream/master
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
<<<<<<< HEAD
                  <Select value={semester} onValueChange={setSemester}>
=======
                  <Select>
>>>>>>> upstream/master
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
<<<<<<< HEAD
                        <SelectItem key={sem} value={`Semester ${sem}`}>
=======
                        <SelectItem key={sem} value={sem.toString()}>
>>>>>>> upstream/master
                          Semester {sem}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Academic Year</Label>
<<<<<<< HEAD
                  <Select value={academicYear} onValueChange={setAcademicYear}>
=======
                  <Select>
>>>>>>> upstream/master
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
<<<<<<< HEAD
                      <SelectItem value="First Year">First Year</SelectItem>
                      <SelectItem value="Second Year">Second Year</SelectItem>
                      <SelectItem value="Third Year">Third Year</SelectItem>
                      <SelectItem value="Fourth Year">Fourth Year</SelectItem>
=======
                      <SelectItem value="1">First Year</SelectItem>
                      <SelectItem value="2">Second Year</SelectItem>
                      <SelectItem value="3">Third Year</SelectItem>
                      <SelectItem value="4">Fourth Year</SelectItem>
>>>>>>> upstream/master
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Why do you want to join IEEE?</Label>
                <Textarea
                  id="reason"
                  placeholder="Tell us why you're interested in joining IEEE SOU SB"
                  rows={4}
                />
              </div>

<<<<<<< HEAD
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Submitting…" : "Submit Application"}
=======
              <Button type="submit" className="w-full">
                Submit Application
>>>>>>> upstream/master
              </Button>
            </form>
          </div>
        </div>
      </main>

    </div>
  );
}
