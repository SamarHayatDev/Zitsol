import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, ArrowRight, Users, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 my-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div> */}
              <span className="text-base font-bold text-gray-800">
                Zitsol Technology & IT Solutions
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="my-h1 text-gray-900">
                Transform Your Business With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                  Next Generation
                </span>
              </h1>
              <h2 className="my-h1 text-blue-600">IT Solutions</h2>
            </div>

            {/* Description */}
            <p className="my-p max-w-lg">
              Welcome to Zitsol where we specialize in delivering tailored
              technology and IT solutions designed to propel your business
              forward. From streamlining operations to driving growth through
              smart, data-driven digital marketing strategies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo Video
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="w-8 h-8 border-2 border-white">
                      <AvatarImage src={`/api/placeholder/32/32?text=${i}`} />
                      <AvatarFallback className="bg-gray-200 text-xs">
                        U{i}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  12,000+ satisfied clients
                </span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Experience Badge */}
            <Card className="absolute p-0 -top-4 -left-4 z-20 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-float">
              <CardContent className="px-6 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br rounded-full from-blue-600 to-indigo-700  flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100  text-blue-800 hover:bg-blue-100"
                    >
                      +8 Years Experience
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Image */}
            <div className="relative">
              <AspectRatio
                ratio={16 / 12}
                className="rounded-3xl overflow-hidden"
              >
                <Image
                  src="/hero.jpg"
                  alt="Professional IT team working in modern office environment"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-700/10"></div>
              </AspectRatio>
            </div>

            {/* Testimonial Card */}
            <Card className="absolute p-0 overflow-hidden -bottom-6 -right-6 z-20 bg-white/80 backdrop-blur-sm border-0 shadow-xl animate-float-reverse">
              <CardContent className="px-6 py-3 ">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Avatar key={i} className="w-6 h-6 border border-white">
                          <AvatarImage
                            src={`/api/placeholder/24/24?text=${i}`}
                          />
                          <AvatarFallback className="bg-gray-200 text-xs text-gray-600">
                            C{i}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      12k+
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>12,000+ people</strong> already joined Zitsol
                    technology & IT solutions. Get started today!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
