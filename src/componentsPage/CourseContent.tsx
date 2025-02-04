"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Video, Download } from "lucide-react";

interface Resource {
  name: string;
  url: string;
}

interface Material {
  id: string;
  title: string;
  type: string;
  content: string;
  videoUrl: string;
  slides: string;
  additionalResources: Resource[];
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  instructions: string;
}

interface Course {
  id: string;
  code: string;
  name: string;
  description: string;
  materials: Material[];
  assignments: Assignment[];
}

export default function CourseContent({ course }: { course: Course }) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            {course.code}
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{course.name}</h1>
        <p className="text-muted-foreground">{course.description}</p>
      </div>

      <Tabs defaultValue="materials">
        <TabsList className="mb-6">
          <TabsTrigger value="materials">Learning Materials</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="materials">
          <div className="space-y-6">
            {course.materials.map((material) => (
              <Card key={material.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {material.type === "video" ? (
                      <Video className="w-5 h-5" />
                    ) : (
                      <FileText className="w-5 h-5" />
                    )}
                    {material.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {material.content}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <a
                        href={material.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video className="w-4 h-4 mr-2" /> Watch Lecture
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={material.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" /> Download Slides
                      </a>
                    </Button>
                  </div>
                  {material.additionalResources.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Additional Resources</h4>
                      <ul className="space-y-2">
                        {material.additionalResources.map((resource, index) => (
                          <li key={index}>
                            <a
                              href={resource.url}
                              className="text-primary hover:underline flex items-center gap-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText className="w-4 h-4" />
                              {resource.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments">
          <div className="space-y-6">
            {course.assignments.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{assignment.title}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                  <CardDescription>Points: {assignment.points}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {assignment.description}
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Instructions</h4>
                    <p className="text-sm text-muted-foreground">
                      {assignment.instructions}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
