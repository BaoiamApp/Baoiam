import react from 'react';
import { Link } from 'react-router-dom';

const blog_list = [
    {
        title: "Do consectetur",
        titleColor: "blue-500",
        imgSrc: "https://images.stockcake.com/public/1/e/2/1e293f13-b9c4-4686-a619-b0f15eb2bf92_large/public-speaking-engagement-stockcake.jpg",
        text: "Aliqua Irure Tempor Lorem Occaecat Volup",
        info: "Dec 22, 2022 • 10 mins read",
    },
    {
        title: "Consequat labore",
        titleColor: "green-500",
        imgSrc: "https://images.stockcake.com/public/0/2/3/0237c9b3-e99d-46bd-94e7-71321adb8a7b_large/vr-experience-session-stockcake.jpg",
        text: "Commodo Deserunt Ipsum Occaecat Qui",
        info: "Nov 20, 2022 • 10 mins read",
    },
    {
        title: "Laboris nulla",
        titleColor: "purple-500",
        imgSrc: "https://images.stockcake.com/public/5/b/1/5b1ea019-4bdf-4a6b-90c6-3a5a205d6642_large/coding-at-night-stockcake.jpg",
        text: "Deserunt Occaecat Qui Amet Tempor Dolore",
        info: "Nov 13, 2022 • 3 mins read",
    },
    {
        title: "Do consectetur",
        titleColor: "blue-500",
        imgSrc: "https://images.stockcake.com/public/e/f/f/eff84666-437b-4119-beb2-5f8bd2cdf873_large/exciting-science-experiment-stockcake.jpg",
        text: "Incididunt Sint Eiusmod Dolore Non Tempor Dolore",
        info: "Oct 17, 2022 • 5 mins read",
    },
    {
        title: "Consequat labore",
        titleColor: "green-500",
        imgSrc: "https://images.stockcake.com/public/5/4/b/54bd0d8a-3792-4034-b8e3-72c9cfeee380_large/crumpled-english-ball-stockcake.jpg",
        text: "Ullamco in Laborum do eu Fugiat ut Magna",
        info: "Oct 10, 2022 • 10 mins read",
    },
    {
        title: "Laboris nulla",
        titleColor: "purple-500",
        imgSrc: "https://images.stockcake.com/public/f/7/3/f7325e33-7285-48c6-9820-522c3e3be550_large/graduate-puzzle-piece-stockcake.jpg",
        text: "Amet Est Qui Pariatur Ipsum Magna ut Magna",
        info: "Sep 19, 2022 • 8 mins read",
    },
]

const Blog = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <div className="max-w-xll mx-8 py-8 dark:bg-black dark:text-white bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                    <img className="w-full h-80 object-cover" src="https://images.stockcake.com/public/c/e/6/ce6c56df-944e-4dab-9907-1a376fc99c33_large/celebratory-business-success-stockcake.jpg" alt="Blog Post Image" />
                    <div className="absolute inset-0 "></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-2xl font-bold text-white">Tempor Consectetur Est Elit</h2>
                        <p className="text-gray-300">Consequuntur ex co</p>
                        <p className="text-gray-300">Dec 24, 2022 • 5 min read</p>
                    </div>
                </div>
                <div className="p-6">
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl dark:bg-black dark:text-white mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center">Our Latest Highlights</h1>
                <h2 className="text-l  text-center mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blog_list.map((item, i) =>
                        <Link key={i} to="/Blog_detail">
                        <div className="bg-white dark:bg-black dark:text-white shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                            <img className="w-full h-48 object-cover" src={item.imgSrc} alt={`Blog Post ${i}`} />
                            <div className="p-6">
                                <span className={`text-sm text-${item.titleColor} font-semibold`}>{item.title}</span>
                                <h2 className="text-lg font-bold my-2">{item.text}</h2>
                                <p className="text-sm">{item.info}</p>
                            </div>
                        </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Blog;