import * as z from "zod";

export const addressSchema = z.object({
  streetAddress: z.string().min(3, "Street address is required"),
  unitApt: z.string().min(1, "Unit/Apt is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().regex(/^\d{5}$/, "Zip code must be 5 digits"),
});

export const purchasePriceSchema = z.object({
  price: z.string().min(1, "Purchase price is required"),
});

export const downPaymentAmountSchema = z.object({
  price: z.string().min(1, "Downpayment amount is required"),
});
