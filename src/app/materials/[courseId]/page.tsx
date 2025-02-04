import { classMaterial } from "./data";
import CourseContent from "@/componentsPage/CourseContent";

// ✅ Pastikan params diberikan dalam bentuk Promise
interface PageProps {
  params: Promise<{ courseId: string }>;
}

// ✅ Perbaiki format generateStaticParams
export function generateStaticParams(): { params: { courseId: string } }[] {
  return classMaterial.flatMap((program) =>
    program.years.flatMap((year) =>
      year.courses.map((course) => ({
        params: { courseId: course.id.toString() },
      }))
    )
  );
}

// ✅ Perbaiki fungsi utama agar params dalam bentuk Promise
export default async function CourseMaterials({ params }: PageProps) {
  const { courseId } = await params; // Tunggu params sebelum digunakan
  const decodedCourseId = decodeURIComponent(courseId);

  const course = classMaterial
    .flatMap((program) => program.years)
    .flatMap((year) => year.courses)
    .find((course) => course.id === decodedCourseId);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="text-muted-foreground">
          The requested course could not be found.
        </p>
      </div>
    );
  }

  return <CourseContent course={course} />;
}
