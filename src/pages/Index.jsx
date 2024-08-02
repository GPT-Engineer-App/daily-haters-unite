import { useState } from 'react';
import { Clock, Coffee, Mic, MicOff, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Index = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-700">Welcome to the Church of Daily Haters</h1>
        <p className="text-xl text-gray-600">Where every day is a battle against unnecessary meetings</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <Clock className="mr-2 text-indigo-600" /> Our Sacred Tenets
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Thou shalt not extend a 15-minute meeting to 30 minutes</li>
            <li>Thou shalt come prepared or not come at all</li>
            <li>Thou shalt mute thyself when not speaking</li>
            <li>Thou shalt not repeat what has already been said</li>
            <li>Thou shalt respect the sanctity of lunch breaks</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <Users className="mr-2 text-indigo-600" /> Join Our Congregation
          </h2>
          <p className="text-lg mb-4">
            Are you tired of endless meetings that could have been emails? Do you find yourself
            zoning out during yet another status update? You're not alone! Join our growing
            community of Daily Haters and reclaim your productivity.
          </p>
          <Button 
            onClick={() => setShowAlert(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up for Salvation
          </Button>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <Coffee className="mr-2 text-indigo-600" /> Daily Testimonials
          </h2>
          <blockquote className="italic text-lg border-l-4 border-indigo-500 pl-4 py-2 mb-4">
            "I used to spend hours in daily meetings. Now, I actually have time to do my job!"
            <footer className="text-gray-600 mt-2">- Reformed Meeting Addict</footer>
          </blockquote>
          <blockquote className="italic text-lg border-l-4 border-indigo-500 pl-4 py-2">
            "I've regained 5 hours a week since joining the Church of Daily Haters. Praise be!"
            <footer className="text-gray-600 mt-2">- Productive Pete</footer>
          </blockquote>
        </section>
      </main>

      {showAlert && (
        <Alert className="mt-4 bg-indigo-100 border-indigo-300">
          <Mic className="h-4 w-4" />
          <AlertTitle>Holy Moly!</AlertTitle>
          <AlertDescription>
            You've taken the first step towards meeting salvation. We'll be in touch via carrier pigeon or smoke signal.
            (We believe emails are just meetings in disguise.)
          </AlertDescription>
          <Button 
            onClick={() => setShowAlert(false)}
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded text-sm"
          >
            <MicOff className="mr-1 h-4 w-4" />
            Silence Alert
          </Button>
        </Alert>
      )}
    </div>
  );
};

export default Index;
