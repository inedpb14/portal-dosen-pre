"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState("");

  const publications = [
    {
      title: "Deep Learning Applications in Medical Imaging Analysis",
      journal: "Nature Machine Intelligence",
      year: 2023,
      tags: ["Deep Learning", "Healthcare", "AI"],
      abstract:
        "A comprehensive study on the application of deep learning algorithms in medical image analysis, focusing on early disease detection and diagnosis.",
      doi: "10.1038/xyz123",
    },
    {
      title: "Quantum Computing: A New Approach to Optimization Problems",
      journal: "IEEE Quantum Computing",
      year: 2023,
      tags: ["Quantum Computing", "Optimization", "Algorithms"],
      abstract:
        "This paper presents novel quantum algorithms for solving complex optimization problems, demonstrating significant speedup over classical approaches.",
      doi: "10.1109/abc456",
    },
    {
      title: "Machine Learning in Natural Language Processing",
      journal: "ACM Computing Surveys",
      year: 2022,
      tags: ["Machine Learning", "NLP", "AI"],
      abstract:
        "A survey of recent advances in applying machine learning techniques to natural language processing tasks.",
      doi: "10.1145/def789",
    },
    {
      title: "Ethical Considerations in AI Development",
      journal: "AI Ethics Journal",
      year: 2022,
      tags: ["AI Ethics", "Artificial Intelligence", "Society"],
      abstract:
        "An exploration of ethical challenges and considerations in the development and deployment of AI systems.",
      doi: "10.1007/ghi012",
    },
  ];

  const filteredPublications = publications.filter((pub) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      pub.title.toLowerCase().includes(searchLower) ||
      pub.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
        Publications
      </h1>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by title or category..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        Found {filteredPublications.length} publication
        {filteredPublications.length !== 1 ? "s" : ""}
      </p>

      {/* Publications list */}
      <div className="space-y-4 md:space-y-6">
        {filteredPublications.map((pub, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">{pub.title}</CardTitle>
              <CardDescription className="text-sm md:text-base">
                {pub.journal} • {pub.year}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {pub.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                {pub.abstract}
              </p>
              <p className="text-xs md:text-sm">
                DOI:{" "}
                <a
                  href={`https://doi.org/${pub.doi}`}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.doi}
                </a>
              </p>
            </CardContent>
          </Card>
        ))}

        {/* No results message */}
        {filteredPublications.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No publications found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
