import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { getZodiacSign } from "@/lib/zodiacData";
import { getRandomTarotCard } from "@/lib/tarotCards";

const formSchema = z.object({
  childName: z.string().min(2, "Name must be at least 2 characters"),
  birthDate: z.string().min(1, "Birth date is required"),
  birthTime: z.string().min(1, "Birth time is required for accurate moon calculations"),
  birthLocation: z.string().min(2, "Birth location is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function InputForm() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      birthDate: "",
      birthTime: "12:00",
      birthLocation: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      // Calculate zodiac sign
      const zodiacSign = getZodiacSign(data.birthDate);
      const tarotCard = getRandomTarotCard();
      
      // Store data in sessionStorage for use in other components
      const storyData = {
        ...data,
        zodiacSign,
        tarotCard,
        generatedAt: new Date().toISOString(),
      };
      
      sessionStorage.setItem('horoscopeData', JSON.stringify(storyData));
      
      // Navigate to storybook
      setTimeout(() => {
        setLocation('/storybook');
      }, 1000);
      
    } catch (error) {
      console.error('Error generating horoscope:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6" data-testid="section-input-form">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-60"></div>
      
      <div className="relative z-10 w-full max-w-lg">
        <Card className="bg-card-enhanced shadow-2xl" data-testid="card-input-form">
          <CardContent className="p-8">
            <h2 className="text-4xl font-magical text-center text-secondary mb-8 text-readable-light" data-testid="text-form-title">
              Tell Us About You
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-child-details">
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium" data-testid="label-child-name">
                        What's your name? ✨
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your magical name"
                          className="bg-input border-border focus:ring-ring text-foreground placeholder-muted-foreground"
                          data-testid="input-child-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage data-testid="error-child-name" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium" data-testid="label-birth-date">
                        When were you born? 🎂
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="bg-input border-border focus:ring-ring text-foreground"
                          data-testid="input-birth-date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage data-testid="error-birth-date" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="birthTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium" data-testid="label-birth-time">
                        What time were you born? 🕐 <span className="text-sm text-muted-foreground">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="bg-input border-border focus:ring-ring text-foreground"
                          data-testid="input-birth-time"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage data-testid="error-birth-time" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="birthLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium" data-testid="label-birth-location">
                        Where were you born? 🌍
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="City, Country"
                          className="bg-input border-border focus:ring-ring text-foreground placeholder-muted-foreground"
                          data-testid="input-birth-location"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage data-testid="error-birth-location" />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  data-testid="button-create-story"
                >
                  {isLoading ? (
                    <span data-testid="text-loading">🌟 Creating Your Magic... 🌟</span>
                  ) : (
                    <span data-testid="text-create">🌟 Create My Magical Story 🌟</span>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
