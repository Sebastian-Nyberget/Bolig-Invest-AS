import AboutSection from "@/components/AboutSection";
import EmployeeCarousel from "@/components/EmployeeCarousel";
import { Separator } from "@/components/ui/separator";
import { client } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == 'employee'] {
  name,
  role,
  bio,
  "imageUrl": image.asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

const About = async () => {
  const data = await getData();

  return (
    <section className="my-16">
      <AboutSection />
      <div className="px-36">
        <h1 className="font-bold text-5xl">Ansatte</h1>
        <Separator className="my-8" />
       <EmployeeCarousel employees={data} />
      </div>
    </section>
  );
}
 
export default About;