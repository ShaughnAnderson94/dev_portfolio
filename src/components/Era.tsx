import { eras } from "../data/data";
import { era } from "../types/era";
import Project from "./Project";

export default function Era({eraData}:{eraData:era}){
// like stated in Porject maybe there is som data for oepning up a more detailed view in a side bar

return(
<div>
<h2>{eraData.name}</h2>
<p>{eraData.description}</p>
{eraData.projects.map((project)=>{
    return(    <Project projectData={project}/>
)
})}

</div>

)

}