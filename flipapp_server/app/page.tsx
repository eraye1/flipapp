'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Gift, Users } from 'lucide-react';
import { joinWaitlist } from './actions';
import { useState } from 'react';
import { toast } from 'sonner';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      const result = await joinWaitlist(formData);
      if (result.success) {
        toast.success(result.message);
        // Reset the form
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
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Make every purchase a{' '}
            <span className="text-primary">viral moment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the waitlist for Flip Card and be among the first to experience the future of social shopping.
          </p>
          
          {/* Waitlist Counter */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5" />
            <span>Join 2,500+ people on the waitlist</span>
          </div>

          {/* Waitlist Form */}
          <Card className="max-w-md mx-auto mt-8">
            <CardHeader>
              <CardTitle>Get Early Access</CardTitle>
              <CardDescription>
                Enter your email to join the waitlist and get a chance to win exclusive rewards
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
                  />
                </div>
                <Button className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Gamification Section */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Gift className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flip to Win</CardTitle>
                <CardDescription>
                  Get a chance to win exclusive rewards with every flip
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Refer & Earn</CardTitle>
                <CardDescription>
                  Top the leaderboard by referring friends
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Gift className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Mystery Rewards</CardTitle>
                <CardDescription>
                  Could be free coffee or $500 - flip to find out!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 