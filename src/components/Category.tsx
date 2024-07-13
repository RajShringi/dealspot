import { getProductCategories } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function Category() {
  const categories = await getProductCategories();

  return (
    <div className="px-4 py-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="mb-6 flex flex-col gap-6">
        <h2 className="text-2xl">Shop by Category</h2>
        <div className="w-full h-[1px] bg-gray-200"></div>
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-stretch">
        {categories.map((category, index) => (
          <div
            key={category._id}
            className={`w-full lg:w-[30%] rounded-lg bg-white shadow-md flex flex-col gap-2 overflow-hidden transition-all ease-in-out hover:scale-125 hover:z-10`}
          >
            <div className="relative w-full h-[150px]">
              <Image
                src={category.Category_Image}
                alt={category.slug}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 items-start py-2 px-4">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <p className="text-sm text-pretty">{category.description}</p>
              <Link href={`/category/${category.slug}`}>
                <Button variant={"link"} className="p-0">
                  explore
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
