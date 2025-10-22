"use client";

import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Code2, Palette, Package } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast DX",
    description:
      "Write forms in minutes, not hours. Intuitive API that feels natural to use.",
  },
  {
    icon: Shield,
    title: "Built-in Validation",
    description:
      "Automatic error handling and validation states. No manual error management needed.",
  },
  {
    icon: Code2,
    title: "TypeScript First",
    description:
      "Full type safety with excellent IntelliSense support out of the box.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Built on shadcn/ui. Style it your way with Tailwind CSS utilities.",
  },
  {
    icon: Package,
    title: "Zero Config",
    description:
      "Works seamlessly with your existing Inertia.js setup. Just import and use.",
  },
  {
    icon: Sparkles,
    title: "Accessible by Default",
    description:
      "WCAG compliant components with proper ARIA labels and keyboard navigation.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-medium ">
          Everything You Need, Nothing You Don&apos;t
        </h2>
        <h3 className="max-w-lg mt-2 leading-5 text-gray-500">
          Powerful features that make form development a breeze
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border p-5 space-y-1 hover:border-foreground/20 transition-colors"
            >
              <div className="p-2 rounded bg-muted w-fit">
                <feature.icon className="size-6" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
