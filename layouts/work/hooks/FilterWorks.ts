import { useEffect, useState } from 'react';
import { useAnimation } from "framer-motion";


const animateCardVariants = {
    static: { y: 0, opacity: 1 },
    inMotion: {
        y: 100, opacity: 0,
        transition: {
            duration: 0.3, delayChildren: 0.3
        }
    },
}

// const {info: {work: {tabs}}} = data

const FilterWorks = (works: SanityDoc.Works[]) => {
    const [activeFilter, setActiveFilter] = useState<string>('project')
    const [filterWork, setFilterWork] = useState<SanityDoc.Works[]>([])

    const controls = useAnimation()

    useEffect(() => {
        setFilterWork(works)
    }, [works]);

    const handleSetActiveFilter = (filterOn: string) => setActiveFilter(filterOn)

    const handleSetWork = (works: SanityDoc.Works[]) => setFilterWork(works)

    const handleSetVideo = (works: SanityDoc.Works[]) => setFilterWork(works)



    const handleWorkFilter = async (filterOn: string) => {
        handleSetActiveFilter(filterOn)
        await controls.start(animateCardVariants.inMotion)
        console.log(filterOn);

        setTimeout(() => {
            controls.start(animateCardVariants.static)
            filterOn == 'Project' ? handleSetWork(works) : handleSetVideo(works)
        }, 500)
    }

    return {
        activeFilter,
        filterWork,
        handleSetActiveFilter,
        handleWorkFilter,
        animateCardVariants,
        controls
    }
}

export default FilterWorks;