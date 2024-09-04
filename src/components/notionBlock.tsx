import React from 'react';

export interface notionBlockType {
    content: string;
    type: string;
}

export const notionBlockStyle = ({ content, type }: notionBlockType) => {
    switch (type) {
        case "heading_1":
            return (
                <h1 className="font-bold text-2xl">{content}</h1>
            );
        case "heading_2":
            return (
                <h2 className="font-bold text-xl">{content}</h2>
            );
        case "heading_3":
            return (
                <h3 className="font-bold text-lg">{content}</h3>
            );
        case "paragraph":
            return (
                <p className="text-base">{content}</p>
            );
        default:
            return (
                <p className="font-medium">{content}</p>
            );
    }
};

// Example data with multiple block types
const exampleData: notionBlockType[] = [
    {
        content: "This is heading 1",
        type: "heading_1",
    },
    {
        content: "This is heading 2",
        type: "heading_2",
    },
    {
        content: "This is heading 3",
        type: "heading_3",
    },
    {
        content: "This is a paragraph with some text.",
        type: "paragraph",
    },
    {
        content: "This is default styled text.",
        type: "unknown_type", // For testing default case
    },
];

// Component to render the blocks
const NotionRenderer: React.FC = () => {
    return (
        <div>
            {exampleData.map((block, index) => (
                <div key={index}>
                    {notionBlockStyle(block)}
                </div>
            ))}
        </div>
    );
};

export default NotionRenderer;
