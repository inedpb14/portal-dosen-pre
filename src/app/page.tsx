"use client";

import {
  ArrowRight,
  Award,
  Book,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  profileContent,
  experienceContent,
  researchContent,
  contactContent,
} from "@/app/data/dataHome";
import ImageCostume from "@/componentsPage/ImageCostume";



export default function Home() {


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 md:mb-6">
            <ImageCostume
              src={profileContent.photo}
              alt={profileContent.name}
              quality={100}
              priority={true}
              width={160}
              height={160}
              className={"w-full h-full object-cover"}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            {profileContent.name}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm md:text-base">{profileContent.title}</span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 md:mb-8 px-4">
            {profileContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/materials">
                <p className="text-black flex">
                  View Learning Materials{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </p>
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {experienceContent.map((item, index) => (
            <Card
              key={index}
              className={index === 2 ? "sm:col-span-2 md:col-span-1" : ""}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {item.icon === "Book" && (
                      <Book className="w-6 h-6 text-primary" />
                    )}
                    {item.icon === "Award" && (
                      <Award className="w-6 h-6 text-primary" />
                    )}
                    {item.icon === "GraduationCap" && (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Featured Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {researchContent.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <Button variant="link" asChild>
                    <Link href={item.link}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Get in Touch
          </h2>
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm md:text-base text-muted-foreground text-center max-w-xl px-4">
              {contactContent.message}
            </p>
            <Button asChild>
              <Link href={`mailto:${profileContent.contactEmail}`}>
                <Mail className="mr-2 w-4 h-4" /> Email Me
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
