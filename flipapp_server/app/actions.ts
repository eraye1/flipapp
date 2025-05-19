'use server';

import { z } from 'zod';

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;
  
  try {
    // Validate the email
    const validatedFields = waitlistSchema.parse({ email });
    
    // TODO: Add your database logic here to store the email
    // For now, we'll just log it
    console.log('New waitlist signup:', validatedFields.email);
    
    return { success: true, message: 'Successfully joined the waitlist!' };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message };
    }
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
} 