import {BiGitMerge, } from 'react-icons/bi';
import {BsClipboardDataFill, BsIntersect, } from 'react-icons/bs';
import {CgWebsite, } from 'react-icons/cg';
import {ImMobile, } from 'react-icons/im';
import {TbBrandNodejs, } from 'react-icons/tb';

const services = [
    {
        id: 1,
        name: 'WEB APPLICATION',
        description: "I'm dedicated to bringing dynamic web solutions to life. I excel at crafting user-friendly web interfaces that enhance user experiences.",
        image: <CgWebsite size={100} />,
    },
    {
        id: 2,
        name: 'DATA ANALYTICS',
        description: 'I am also highly proficient in the analysis, collection and manipulation of data from the internet to suit any needs',
        image: <BsIntersect size={100} /> ,
    },
    {
        id: 3,
        name: 'DATA SCRAPING',
        description: "I'm adept at extracting valuable insights from complex datasets, and presenting them in a clear and actionable manner to drive informed decisions.",
        image: <BsClipboardDataFill size={100} />,
    },
    {
        id: 4,
        name: 'MOBILE DESIGN',
        description: 'I bring innovative app concepts to life. I have a knack for creating user-friendly mobile interfaces that engage and delight users.',
        image: <ImMobile size={100} />,
    },
    {
        id: 5,
        name: 'NPM & NODE.JS',
        description: "I craft efficient, scalable applications, leverage a rich ecosystem of packages, and optimize performance. delivering innovative solutions and streamlined development workflows for your projects.",
        image: <TbBrandNodejs size={100} />,
    },
    {
        id: 6,
        name: 'VERSION CONTROL',
        description: "With Git, I ensure collaborative and organized development, keep codebases error-free. My expertise in branching, merging, and resolving conflicts helps maintain code integrity, ensuring your projects run smoothly and efficiently.",
        image: <BiGitMerge size={100} />,
    },
]
export default services;