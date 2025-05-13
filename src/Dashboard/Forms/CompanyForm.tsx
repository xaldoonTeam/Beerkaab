import React from "react";
import { Company } from "../data/mockData";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const companyFormSchema = z.object({
  name: z.string().min(2, "Company name must be at least 2 characters"),
  industry: z.string().min(1, "Please enter an industry"),
  employees: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid number of employees",
  }),
  location: z.string().min(1, "Please enter a location"),
  status: z.enum(["active", "inactive"]),
});

type CompanyFormValues = z.infer<typeof companyFormSchema>;

interface CompanyFormProps {
  defaultValues?: Partial<Company>;
  onSubmit: (values: CompanyFormValues) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ 
  defaultValues = {}, 
  onSubmit 
}) => {
  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: {
      name: defaultValues.name || "",
      industry: defaultValues.industry || "",
      employees: defaultValues.employees ? String(defaultValues.employees) : "",
      location: defaultValues.location || "",
      status: defaultValues.status || "active",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <FormControl>
                <Input placeholder="Enter industry" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Employees</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter number of employees" 
                  type="number" 
                  min="1"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default CompanyForm;
