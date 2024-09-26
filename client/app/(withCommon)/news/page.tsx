"use client";
import BlogBanner from "./Components/Header";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Common/Loading";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";

const NewsPage = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});

  if (isLoading) {
    return <Loading />;
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <p>No blogs available.</p>
      </div>
    );
  }

  return (
    <div>
      <BlogBanner />
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-6 p-4">
        {blogs?.map((blog: any) => (
          <Link key={blog.id} href={`/news/${blog.id}`} className="w-full">
            <div
              className="bg-[#0A0A17] border border-gray-700 rounded-lg flex items-center p-4 hover:shadow-lg transition-shadow duration-300"
              style={{ width: "1500px", height: "200px" }}
            >
              {/* Image Section */}
              <div className="w-1/3 h-full">
                <Image
                  src={blog.blogImg}
                  alt={blog.mainTitle}
                  width={180}
                  height={180}
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>

              {/* Content Section */}
              <div className="w-2/3 px-4 text-white h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold uppercase">
                  {blog.mainTitle}
                </h3>
                <p className="text-gray-400 mt-2">{blog.firstDescription}</p>
              </div>

              {/* Button Section */}
              <div className="w-1/6 h-full flex items-center">
                <button className="relative px-6 py-2 border border-gray-500 text-white uppercase font-bold flex items-center justify-between group transition-all duration-500 overflow-hidden">
                  <span className="relative z-10">Read More</span>
                  <ChevronRight className="relative z-10 ml-2 transition-transform duration-500 group-hover:translate-x-3" />
                  <div className="absolute inset-0 bg-orange-500 w-[10%] group-hover:w-full transition-all duration-500 z-0"></div>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
