import { TypedObject } from "@portabletext/types";

interface Project {
  title: string;
  _id: string;
  imageUrl: string;
  category: { title: string }[];
  short_description: Array<TypedObject>;
  link: string;
}

export default Project;
