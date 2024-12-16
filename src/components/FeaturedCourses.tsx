"use client";
import { div, p } from "framer-motion/client";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-[#ec4848]">
            FEATURED COURSES
          </h2>
          <p className="text-5xl font-semibold">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="text-center items-center sm:p-6 flex flex-col flex-grow p-4">
                  <h3 className="underline underline-offset-4 text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</h3>
                  <p className="font-light mt-4 mb-2">{course.description}</p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="bg-white mt-4 mb-2 px-2 py-1 rounded-md text-lg text-[#3b1e1e] hover:bg-[#ec4848] hover:text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="bg-white px-4 py-3 rounded-md text-lg text-[#3b1e1e] hover:bg-[#ec4848] hover:text-white"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
