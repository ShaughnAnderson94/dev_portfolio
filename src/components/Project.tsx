import { project } from "../types/project";


export default function Project({projectData}:{projectData:project}){
//logic probably not required maybe for handling click or over if we want it to display additional information 
//might be nice to have an expanded view that shows up but maybe thats better handles in the era component

return(
    <div>
        <a href={projectData.link}>
<h3>
    {projectData.title}
</h3>
<img src={projectData.imageUrl} alt={projectData.altText} className="max-w-50"/>
<p>{projectData.description}</p>
</a>
    </div>
)



}