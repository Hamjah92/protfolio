const sanity = {
        abouts: "*[_type == 'abouts']",
        brands: "*[_type == 'brands']",
        contacts: "*[_type == 'contact']",
        workExperience: "*[_type == 'workExperience'] | order(_createdAt desc)",
        experiences: "*[_type == 'experiences']",
        skills: "*[_type == 'skills']",
        testimonials: "*[_type == 'testimonials']",
        works: "*[_type == 'works'] | order(_createdAt asc)",
    },
    api = {
        abouts: "/api/abouts",
        skills: "/api/skills",
        works: "/api/works",
        workExperience: "/api/workExperience",
    },
    query = {sanity, api}


export default query
