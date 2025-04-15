import { era } from "../types/era";
import Project from "./Project";

export default function Era({eraData}:{eraData:era}){
// like stated in Porject maybe there is som data for oepning up a more detailed view in a side bar

  return (
    <section>
      <header>
        <h2>{eraData.name}</h2>
        <p>{eraData.description}</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {eraData.projects.map((project) => (
          <Project 
            projectData={project}
          />
        ))}
      </div>
    </section>
  );
}