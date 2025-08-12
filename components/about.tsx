import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Check, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-20 bg-white">
      <div className="my-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visuals */}
          <div className="relative">
            {/* Image Collage */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 mb-6">
                <AspectRatio
                  ratio={3 / 3}
                  className="rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/hero.jpg"
                    alt="Professional woman working on laptop with charts and graphs"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>

              {/* Overlapping Images */}
              <div className="absolute -top-4 -left-4 z-20">
                <AspectRatio
                  ratio={3 / 4}
                  className="w-32 rounded-xl overflow-hidden"
                >
                  <Image
                    src="/hero.jpg"
                    alt="Woman with glasses working intently"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="absolute -bottom-4 -right-4 z-20">
                <AspectRatio
                  ratio={3 / 4}
                  className="w-32 rounded-xl overflow-hidden"
                >
                  <Image
                    src="/hero.jpg"
                    alt="Man in light blue shirt working on laptop"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>

            {/* 24/7 Support Card */}
            <Card className="absolute -bottom-8 -left-8 z-30 bg-gradient-to-r from-blue-600 to-indigo-700 border-0 shadow-xl animate-float">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  24/7 Support
                </h3>
                <p className="text-white/90 text-sm">
                  Zitsol Technology & IT Solutions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Section Category */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-blue-600 font-medium">
                About Our Company
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="my-h1 text-gray-900">
              Discover Our Story Empowering Business Through Innovation
            </h2>

            {/* Description */}
            <p className="my-p">
              Zitsol is a pioneering force in the realm of technology and IT
              solutions, dedicated to revolutionising the way businesses thrive
              in the digital age. Our approach is rooted in collaboration,
              transparency, and a relentless pursuit of excellence. We believe
              in helping our clients stay ahead of the curve and embracing
              change to stay ahead of competition.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <p className="my-p">
                  Dramatically re-engineer value added IT system.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <p className="my-p">
                  Highlight any unique selling points or differentiators.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-600" />
                </div>
                <p className="my-p">
                  Incorporate visuals such as team photos shots.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 text-lg"
            >
              Discover More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
