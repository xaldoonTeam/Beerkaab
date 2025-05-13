import React from "react";
import { Tool } from "../data/mockData";
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
// import { zodResolver } from "@hookform/resolvers/zod";

const toolFormSchema = z.object({
  name: z.string().min(2, "Tool name must be at least 2 characters"),
  category: z.string().min(1, "Please enter a category"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Please enter a valid price",
  }),
  license: z.enum(["free", "premium", "enterprise"]),
  rating: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 5, {
    message: "Rating must be between 0 and 5",
  }),
});

type ToolFormValues = z.infer<typeof toolFormSchema>;

interface ToolFormProps {
  defaultValues?: Partial<Tool>;
  onSubmit: (values: ToolFormValues) => void;
}

const ToolForm: React.FC<ToolFormProps> = ({ 
  defaultValues = {}, 
  onSubmit 
}) => {
  const form = useForm<ToolFormValues>({
    // resolver: zodResolver(toolFormSchema),
    defaultValues: {
      name: defaultValues.name || "",
      category: defaultValues.category || "",
      price: defaultValues.price !== undefined ? String(defaultValues.price) : "",
      license: defaultValues.license || "free",
      rating: defaultValues.rating !== undefined ? String(defaultValues.rating) : "0",
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
              <FormLabel>Tool Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter tool name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Enter category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter price" 
                  type="number" 
                  min="0" 
                  step="0.01"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="license"
          render={({ field }) => (
            <FormItem>
              <FormLabel>License</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select license" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter rating (0-5)" 
                  type="number" 
                  min="0" 
                  max="5" 
                  step="0.1"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ToolForm;
