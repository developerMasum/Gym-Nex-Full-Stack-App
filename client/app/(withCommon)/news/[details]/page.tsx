"use client";
import Loading from "@/components/Common/Loading";
import { Separator } from "@/components/ui/separator";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC } from "react";

const BlogDetail: FC = () => {
  const details = usePathname();
  const id = details.split("/").pop();
  const { data: blogData, isLoading } = useGetSingleBlogQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  // Fallbacks in case the data is undefined

  return (
    <div className="container mx-auto px-4 lg:px-0 py-12 mt-20">
      {/* Main Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-200">
        {blogData.mainTitle}
      </h1>

      {/* Author Info */}
      <div className="flex justify-center space-x-4 text-gray-500 mb-6">
        <div className="flex items-center space-x-2">
          <Image
            src={blogData.authorImg}
            alt={`${blogData.authorName}'s Avatar`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>{blogData.authorName}</span>
        </div>
        <span>•</span>
        <div className="flex items-center">
          <span>{blogData.time}</span>
        </div>
        <span>•</span>
        <div className="flex items-center">
          <span>{blogData.createdAt}</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[400px] relative mb-8">
        <Image
          src={blogData.blogImg}
          alt="Blog Post"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none mx-auto text-gray-200">
        {/* Subtitle */}
        <h2 className="text-2xl font-semibold mb-6">{blogData.secondTitle}</h2>
        {/* Paragraph */}
        <p>{blogData.firstDescription}</p>

        {/* Quote Block */}
        <div className="bg-gray-500 border-l-4 border-gray-500 p-4 italic text-gray-200 my-8">
          <blockquote>{blogData.quote}</blockquote>
        </div>

        {/* Additional Content */}
        <p>{blogData.secondDescription}</p>
      </div>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Tags */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-2">
          {blogData.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <a href="#" className="text-gray-500 hover:text-gray-200">
            <Facebook /> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-200">
            <Twitter /> {/* Twitter Icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-200">
            <Instagram /> {/* Instagram Icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
