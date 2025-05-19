'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Gift, Users, Star, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { joinWaitlist } from './actions';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      const result = await joinWaitlist(formData);
      if (result.success) {
        toast.success(result.message);
        (document.getElementById('waitlist-form') as HTMLFormElement)?.reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Turn your shopping into{' '}
              <span className="text-primary">social moments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Join the future of social shopping where every purchase becomes a chance to win, share, and earn rewards.
            </p>
          </motion.div>
          
          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>Join 2,500+ people on the waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">+ 2,496 others</span>
            </div>
          </div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="max-w-md mx-auto mt-8 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get Early Access</CardTitle>
                <CardDescription>
                  Join the waitlist today and get a chance to win exclusive rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form id="waitlist-form" action={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email" 
                      required 
                      disabled={isLoading}
                      className="h-12 text-lg"
                    />
                  </div>
                  <Button className="w-full h-12 text-lg" size="lg" disabled={isLoading}>
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8">Why Join Flip Card?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Flip to Win</CardTitle>
                  <CardDescription>
                    Every purchase is a chance to win amazing rewards
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Refer & Earn</CardTitle>
                  <CardDescription>
                    Build your network and earn rewards for every referral
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Social Shopping</CardTitle>
                  <CardDescription>
                    Share your purchases and discover new products with friends
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid gap-4 max-w-3xl mx-auto">
              {[
                {
                  question: "What is Flip Card?",
                  answer: "Flip Card is a social shopping platform that turns every purchase into an opportunity to win rewards and connect with friends."
                },
                {
                  question: "How does the waitlist work?",
                  answer: "Join our waitlist to get early access to Flip Card. We'll notify you when it's your turn to join the platform."
                },
                {
                  question: "What kind of rewards can I win?",
                  answer: "From free coffee to $500 cash prizes, every flip could reveal an exciting reward."
                }
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <CardDescription>{faq.answer}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20"
          >
            <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to join the future of social shopping?</CardTitle>
                <CardDescription>
                  Don't miss out on exclusive rewards and early access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full h-12 text-lg" size="lg">
                  Join Waitlist Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 