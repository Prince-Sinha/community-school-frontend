import { memo } from "react";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = memo(({ authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <div className="m-2 p-2 border-b-2 border-slate-200">
            <div>
                <div className="flex w-full">
                    <div className="px-1 flex flex-col">
                        <Avatar name={"P"} />
                    </div>
                    <div className="px-1 font-semibold text-slate-900"> {authorName} </div>
                    <div className="px-1 font-normal text-md text-slate-500"> {publishedDate} </div>
                </div>
                <div className="text-2xl font-bold">
                    {title}
                </div>
                <div className="text-lg font-normal text-slate-600">
                    {content.length > 100 ? `${content.slice(0, 99)}...` : content}
                </div>
                <div>
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
            </div>
        </div>
    )
});

function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-xs text-gray-600 dark:text-gray-200">
                {name[0]}
            </span>
        </div>
    )
}