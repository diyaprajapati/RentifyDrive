import React from 'react';
import { ChevronRight, Car, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CarRentalLanding = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b">
        <div className="text-2xl font-bold">Rentify Drive</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-600">Vehicles</a></li>
            <li><a href="#" className="hover:text-gray-600">Locations</a></li>
            <li><a href="#" className="hover:text-gray-600">About</a></li>
            <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Experience the Future of Car Rental</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Seamless. Effortless. Futuristic. Rent your next ride with just a few taps.</p>
        <Link href="/signup">
          <Button className="bg-black text-white hover:bg-gray-800">
            Book Now <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Car className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Latest Models</h3>
            <p>Access to the newest and most advanced vehicles in our fleet.</p>
          </div>
          <div className="text-center">
            <Shield className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
            <p>Drive with peace of mind knowing you're fully covered.</p>
          </div>
          <div className="text-center">
            <CreditCard className="mx-auto h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
            <p>Secure and quick payment options for a smooth experience.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who have embraced the new era of car rentals.</p>
        <Button className="bg-black text-white hover:bg-gray-800">
          Start Your Journey
        </Button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">&copy; 2024 Rentify Drive. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-600">Terms of Service</a>
            <a href="#" className="text-sm hover:text-gray-600">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CarRentalLanding;