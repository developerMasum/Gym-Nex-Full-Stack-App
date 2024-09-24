import prisma from "../../../shared/prisma";
const getSingleBlog = async (id: string) => {
  // console.log(data);

  const result = await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllBlogs = async () => {
  const result = await prisma.blog.findMany();
  return result;
};
const createBlog = async (data: any) => {
  const result = await prisma.blog.create({
    data,
  });
  return result;
};

export const BlogService = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
};
