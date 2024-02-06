const { z } = require("zod");

const FormSchema = z.object({
  name: z.coerce.string().min(1).max(15),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),

  message: z.coerce
    .string({
      required_error: "Message is required",
    })
    .min(1)
    .max(200),
});

export default FormSchema;
