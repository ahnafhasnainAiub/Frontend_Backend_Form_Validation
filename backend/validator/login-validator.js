const { z } = require("zod");

// Create an Object Schema
const signinSchema = z.object({
  
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(12, { message: "Email must be at least 12 characters long" })
    .max(30, { message: "Email must be no more than 30 characters long" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(4, { message: "Password must be at least 4 characters long" })
    .max(120, { message: "Password must be no more than 120 characters long" }),
});

module.exports = signinSchema;
