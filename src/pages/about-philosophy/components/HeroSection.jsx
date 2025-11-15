import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} className="mr-2" />
              About Me & My Philosophy
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              The Human Behind
              <span className="block text-accent">The Code</span>
            </h1>

            <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl">
              I'm not just a frontend developer—I'm a digital craftsman who
              believes that great code tells a story, solves real problems, and
              creates meaningful connections between humans and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                variant="default"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("personal-story")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                iconName="ArrowDown"
                iconPosition="right"
                iconSize={20}
              >
                Discover My Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/collaboration-hub")}
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={20}
              >
                Let's Connect
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent mb-1">5+</div>
                <div className="text-sm text-text-secondary">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-text-secondary">
                  Projects Completed
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-text-secondary">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-80 h-80 mx-auto lg:w-full lg:h-full ">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-3xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/assets/images/image.jpg"
                    alt="Professional developer portrait"
                    className="w-full  h-full object-cover "
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Icon name="Code2" size={32} className="text-accent" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Icon name="Lightbulb" size={24} className="text-primary" />
              </div>

              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-success/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Icon name="Heart" size={20} className="text-success" />
              </div>

              <div className="absolute top-1/4 -right-8 w-14 h-14 bg-warning/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Icon name="Zap" size={22} className="text-warning" />
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="mt-12 bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="flex items-start space-x-4">
                <Icon
                  name="Quote"
                  size={24}
                  className="text-accent flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-text-primary font-medium italic mb-2">
                    "Every line of code is an opportunity to create something
                    meaningful. I don't just build websites—I craft digital
                    experiences that connect, inspire, and solve real problems."
                  </p>
                  <div className="text-sm text-text-secondary">
                    — My Development Philosophy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
