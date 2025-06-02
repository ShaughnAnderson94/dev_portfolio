import { project } from "../types/project";

export default function Project({ projectData }: { projectData: project }) {
  //logic probably not required maybe for handling click or over if we want it to display additional information
  //might be nice to have an expanded view that shows up but maybe thats better handles in the era component

  return (
    <div className=" w-3/5">
      <a href={projectData.link} className="block">
        <h3 className="mb-2 font-semibold text-lg">{projectData.title}</h3>
        <div className="relative group aspect-[3/2] w-full overflow-hidden">
          <img
            src={projectData.imageUrl}
            alt={projectData.altText}
            className=" w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70 opacity-0 hover-enabled:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center">{projectData.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
