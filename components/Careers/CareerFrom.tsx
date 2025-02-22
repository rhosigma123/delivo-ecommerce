"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  linkedinProfile: z.string().url("Please enter a valid URL").optional(),
  portfolioWebsite: z.string().url("Please enter a valid URL").optional(),
  jobRole: z.string().min(1, "Please select a job role"),
  yearsExperience: z.string().min(1, "Please enter your years of experience"),
  currentEmployer: z.string().optional(),
  expectedSalary: z.string(),
  preferredLocation: z.string(),
  highestQualification: z.string(),
  relevantCertification: z.string().optional(),
  keySkills: z.string(),
  noticePeriod: z.string(),
  references: z.string(),
  whyJoinUs: z.string().min(50, "Please provide at least 50 characters"),
  resume: z.any().optional(),
  coverLetter: z.any().optional(),
});

export default function CareersForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      linkedinProfile: "",
      portfolioWebsite: "",
      jobRole: "",
      yearsExperience: "",
      currentEmployer: "",
      expectedSalary: "",
      preferredLocation: "",
      highestQualification: "",
      relevantCertification: "",
      keySkills: "",
      noticePeriod: "",
      references: "",
      whyJoinUs: "",
      resume: undefined,
      coverLetter: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto max-w-4xl p-6 bg-lightgray  border rounded-lg">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-bold text-primary">Career</h1>
        <p className="text-gray-600">
          Looking for a place where your ideas matter? At Brainmine, we give you
          the platform to innovate, learn, and excel in your career. Apply now
          and turn your ambitions into achievements!
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-xl text-primary  font-medium">
              Personal Information
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedinProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter LinkedIn URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Position & Experience */}
          <div className="space-y-4">
            <h2 className="text-xl text-primary font-medium">
              Position & Experience
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="jobRole"
                render={({ field }) => (
                  <FormItem className="w-full h-full ">
                    <FormLabel>Job Role Applying For*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          value="developer"
                          className="text-white bg-secondary "
                        >
                          Developer
                        </SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="yearsExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years of Experience*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter years of experience"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectedSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Salary</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Expected Salary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Job Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="onsite">Onsite</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-4">
            <h2 className="text-xl text-primary font-medium">
              Education & Skills
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="highestQualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highest Qualification*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select Qualification" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bachelors">
                          Bachelor&apos;s
                        </SelectItem>
                        <SelectItem value="masters">Master&apos;s</SelectItem>
                        <SelectItem value="phd">Ph.D.</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="keySkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Skills</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Press Enter to separate skills"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Resume & Cover Letter */}
          <div className="space-y-4">
            <h2 className="text-xl  text-primary font-medium">
              Resume & Cover Letter
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="resume"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Upload Resume</FormLabel>
                    <FormControl className="w-full flex items-center justify-start">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file);
                        }}
                        {...field}
                        className="py-[10px]"
                      />
                    </FormControl>
                    <p className="mt-1 text-sm text-gray-500">PDF/DOC</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file);
                        }}
                        {...field}
                           className="py-[10px]"
                      />
                    </FormControl>
                    <p className="mt-1 text-sm text-gray-500">PDF/DOC</p>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h2 className="text-xl  text-primary font-medium">
              Additional Information
            </h2>
            <FormField
              control={form.control}
              name="whyJoinUs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want to join us?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your feedback here..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Notice Period & References */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="noticePeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notice Period</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Notice Period" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="15days">15 Days</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="60days">60 Days</SelectItem>
                      <SelectItem value="90days">90 Days</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="references"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>References</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name and Contact" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary"
          >
            Submit Application
          </Button>
        </form>
      </Form>
    </div>
  );
}
