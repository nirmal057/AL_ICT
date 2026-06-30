
"use client";

import Image from 'next/image';

const options = [
    { id: 1, src: "https://firebasestorage.googleapis.com/v0/b/firebase-studio-app-pro-p2.appspot.com/o/asset-mirror%2F09a96e95-947b-402a-9e1e-f3e1b7b75f3a?alt=media&token=e530b355-132d-4589-9bd1-0b5c92c5d013", alt: "Option 1: Correct nested list" },
    { id: 2, src: "https://firebasestorage.googleapis.com/v0/b/firebase-studio-app-pro-p2.appspot.com/o/asset-mirror%2F4a8a3a2a-b73f-4e0d-b4b1-8b2c6b45a67f?alt=media&token=547c87c9-4676-4d2d-8698-433b5c65ac22", alt: "Option 2: Incorrect nesting" },
    { id: 3, src: "https://firebasestorage.googleapis.com/v0/b/firebase-studio-app-pro-p2.appspot.com/o/asset-mirror%2F7159781b-5e69-4e0a-86c4-8d96b341f53e?alt=media&token=2621743a-7140-41ff-80c1-3d6118d0c159", alt: "Option 3: Incorrect nesting" },
    { id: 4, src: "https://firebasestorage.googleapis.com/v0/b/firebase-studio-app-pro-p2.appspot.com/o/asset-mirror%2F50e8284e-f8d2-432a-a82d-8a60c042d3d9?alt=media&token=e2540d9c-1c5c-4d3a-b778-084a4a15a812", alt: "Option 4: Incorrect nesting" },
    { id: 5, src: "https://firebasestorage.googleapis.com/v0/b/firebase-studio-app-pro-p2.appspot.com/o/asset-mirror%2Ff58b456e-826a-4d7a-8f4b-0149e6f3b0e9?alt=media&token=1801267b-12d8-4b71-9231-150640d21a22", alt: "Option 5: Incorrect nesting" },
]

export const ListRendering2011P1Q38 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 not-prose">
        {options.map(option => (
            <div key={option.id} className="border rounded-lg p-2 flex flex-col items-center">
                <span className="font-bold text-lg mb-2">({option.id})</span>
                <Image src={option.src} alt={option.alt} width={200} height={150} className="object-contain" />
            </div>
        ))}
    </div>
);
