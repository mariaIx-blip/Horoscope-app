import { useState } from "react";
import Header from "@/components/Header";
import HoroscopeForm from "@/components/HoroscopeForm";
import HoroscopeResults from "@/components/HoroscopeResults";

export interface UserData {
  name: string;
  birthDate: string;
  birthTime: string;
  birthLocation: string;
}

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleFormSubmit = (data: UserData) => {
    setUserData(data);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setUserData(null);
  };

  return (
    <div className="celestial-bg min-h-screen text-foreground">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 pb-8">
        {!showResults ? (
          <HoroscopeForm onSubmit={handleFormSubmit} />
        ) : (
          <HoroscopeResults userData={userData!} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}
