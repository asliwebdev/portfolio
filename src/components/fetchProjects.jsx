import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: 'hta8ho37q8fa',
    environment: 'master',
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({content_type: 'portfolioProjects'})
            const projects = response.items.map(item => {
               const {title, demoUrl, codeUrl, image, overview, technologies} = item.fields;
               const id = item.sys.id;
               const img = image?.fields?.file?.url;
               return {title, demoUrl, codeUrl, id, overview, technologies, img};
        })
          setProjects(projects);
          setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return {loading, projects};
}