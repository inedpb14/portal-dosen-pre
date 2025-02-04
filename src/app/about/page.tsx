"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCostume from "@/componentsPage/ImageCostume";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profileContent, achievements, career } from "../data/dataHome";
import Link from "next/link";

export default function About() {
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <ImageCostume
            src={profileContent.photo}
            alt={profileContent.name}
            quality={100}
            priority={true}
            width={160}
            height={160}
            className={"w-48 h-48 rounded-full mx-auto mb-6 object-cover"}
          />
          <h1 className="text-4xl font-bold mb-4">{profileContent.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {profileContent.description}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://twitter.com"
              className="p-2 rounded-full hover:bg-secondary"
              target="_blank"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-2 rounded-full hover:bg-secondary"
              target="_blank"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com"
              className="p-2 rounded-full hover:bg-secondary"
              target="_blank"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:james.wilson@stanford.edu"
              className="p-2 rounded-full hover:bg-secondary"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I am a Professor of Computer Science at Stanford University,
                specializing in artificial intelligence and machine learning.
                With over 15 years of experience in academia, I ve dedicated my
                career to advancing the field of computer science through
                research, teaching, and mentorship.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Career Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {career.map((position, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary pl-4 pb-4"
                  >
                    <h3 className="font-semibold">{position.role}</h3>
                    <p className="text-muted-foreground">
                      {position.institution} • {position.period}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements & Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}