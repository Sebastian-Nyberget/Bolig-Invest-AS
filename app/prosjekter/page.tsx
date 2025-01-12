import { Separator } from "@/components/ui/separator";
import { client } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'project'] {
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

const Projects = async () => {
  const data = await getData();

  return (
    <main className="max-w-7xl w-full px-4 md:px-8 mx-auto">
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
    </main>
  );
}
 
export default Projects;