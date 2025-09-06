import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export interface BirthDetails {
  date: string;
  time: string;
  location: string;
  timezone: string;
}

interface BirthDetailsFormProps {
  onSubmit: (details: BirthDetails) => void;
  onBack: () => void;
}

const BirthDetailsForm: React.FC<BirthDetailsFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<BirthDetails>({
    date: "",
    time: "",
    location: "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  
  const [errors, setErrors] = useState<Partial<BirthDetails>>({});

  const validateForm = () => {
    const newErrors: Partial<BirthDetails> = {};
    
    if (!formData.date) {
      newErrors.date = "Please enter your birth date";
    }
    
    if (!formData.time) {
      newErrors.time = "Please enter your birth time";
    }
    
    if (!formData.location) {
      newErrors.location = "Please enter your birth location";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof BirthDetails, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-pink-900/30 to-blue-900/30 border-pink-300/20 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center space-x-3 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <span>Tell Us About Your Birth</span>
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </CardTitle>
            <p className="text-pink-200 mt-3">
              We need your birth details to create the most accurate star reading just for you!
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Birth Date */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="date" className="flex items-center space-x-2 text-pink-200 font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>Birth Date</span>
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="bg-purple-800/20 border-pink-300/30 text-pink-100 focus:border-yellow-300/60"
                />
                {errors.date && (
                  <p className="text-red-300 text-sm">{errors.date}</p>
                )}
              </motion.div>

              {/* Birth Time */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="time" className="flex items-center space-x-2 text-pink-200 font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Birth Time</span>
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="bg-purple-800/20 border-pink-300/30 text-pink-100 focus:border-yellow-300/60"
                />
                {errors.time && (
                  <p className="text-red-300 text-sm">{errors.time}</p>
                )}
                <p className="text-pink-300 text-xs">
                  Don't know your exact time? Ask your parents or check your birth certificate!
                </p>
              </motion.div>

              {/* Birth Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="location" className="flex items-center space-x-2 text-pink-200 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Birth Location</span>
                </Label>
                <Input
                  id="location"
                  type="text"
                  placeholder="City, Country (e.g., New York, USA)"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="bg-purple-800/20 border-pink-300/30 text-pink-100 placeholder-pink-300/50 focus:border-yellow-300/60"
                />
                {errors.location && (
                  <p className="text-red-300 text-sm">{errors.location}</p>
                )}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button
                  type="button"
                  onClick={onBack}
                  variant="outline"
                  className="bg-purple-900/50 border-purple-300/30 text-purple-200 hover:bg-purple-800/50"
                >
                  ← Back to Star Signs
                </Button>
                
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 text-white font-semibold flex-1"
                >
                  ✨ Create My Star Reading ✨
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default BirthDetailsForm;