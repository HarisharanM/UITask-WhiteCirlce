import { NextResponse } from "next/server";
import { prisma } from "@/lib/auth"; 
import { z } from "zod";

// Define a schema for validation
const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = bookingSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, description } = validation.data;

    // Save the data to the database
    const newBooking = await prisma.callBooking.create({
      data: {
        name,
        email,
        phone,
        description,
      },
    });

    return NextResponse.json({
      message: "Booking successful!",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}