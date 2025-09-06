import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import type { UserData } from "@/pages/home";

interface HoroscopeFormProps {
  onSubmit: (data: UserData) => void;
}

export default function HoroscopeForm({ onSubmit }: HoroscopeFormProps) {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.birthDate && formData.birthLocation) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm card-glow">
      <CardContent className="p-6">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-accent">
          <i className="fas fa-moon mr-2"></i>
          Enter Your Birth Details
        </h2>
        
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full form-input bg-input border-border text-foreground"
              placeholder="Enter your full name"
              data-testid="input-name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="birthDate" className="block text-sm font-medium mb-2 text-foreground">
              Date of Birth
            </Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleChange("birthDate", e.target.value)}
              className="w-full form-input bg-input border-border text-foreground"
              data-testid="input-birth-date"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="birthTime" className="block text-sm font-medium mb-2 text-foreground">
              Birth Time (Optional)
            </Label>
            <Input
              id="birthTime"
              type="time"
              value={formData.birthTime}
              onChange={(e) => handleChange("birthTime", e.target.value)}
              className="w-full form-input bg-input border-border text-foreground"
              data-testid="input-birth-time"
            />
          </div>
          
          <div>
            <Label htmlFor="birthLocation" className="block text-sm font-medium mb-2 text-foreground">
              Birth Location
            </Label>
            <Input
              id="birthLocation"
              type="text"
              value={formData.birthLocation}
              onChange={(e) => handleChange("birthLocation", e.target.value)}
              className="w-full form-input bg-input border-border text-foreground"
              placeholder="City, Country"
              data-testid="input-birth-location"
              required
            />
          </div>
          
          <div className="md:col-span-2 text-center">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold"
              data-testid="button-submit"
            >
              <i className="fas fa-sparkles mr-2"></i>
              Reveal My Celestial Insights
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
