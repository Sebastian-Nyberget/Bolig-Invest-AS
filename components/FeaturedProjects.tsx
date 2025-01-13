import { client } from "@/lib/sanity";
import Project from "@/types/Project";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...2] {
    title,
    _id,
    link,
    short_description,
    category[]->{
      title
    },
    "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const FeaturedProjects = async () => {
  const data: Project[] = await getData();
  return (
    <main className="w-full mx-auto px-36">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Prosjekter</h1>
      <Separator className="my-4" />
      <div className=" py-4 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <Link href={item.link} key={item._id} className="group block" target="_blank">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
              <Image 
                src={item.imageUrl} 
                alt="Image Description" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg hover:underline">
                {item.title}
              </h2>
              <div className="mt-1 text-muted-foreground line-clamp-3">
                <PortableText value={item.short_description} />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.category.map((tagItem, index) => (
                  <span 
                    className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                    key={index}
                  >
                    {tagItem.title}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full flex items-center justify-center my-12">
        <Button asChild size="lg">
          <Link href="/prosjekter">
            Se mer
          </Link>
        </Button>
      </div>
    </main>
  );
}
 
export default FeaturedProjects;