import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch, Router } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/landing";
import InputForm from "@/pages/input-form";
import Storybook from "@/pages/storybook";
import TarotPage from "@/pages/tarot";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import Sidebar from "@/components/Sidebar";
import StarsBackground from "@/components/StarsBackground";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background text-foreground font-story overflow-x-hidden">
          <StarsBackground />
          <Sidebar />
          
          <div id="mainContent" className="transition-all duration-300">
            <Switch>
              <Route path="/" component={Landing} />
              <Route path="/input" component={InputForm} />
              <Route path="/storybook" component={Storybook} />
              <Route path="/tarot" component={TarotPage} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
          
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
