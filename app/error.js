"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error("Global error caught:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center flex-col gap-4 text-center">
            <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>
            <p className="text-gray-600 dark:text-gray-400">
                {error?.message || "An unexpected error occurred."}
            </p>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition cursor-pointer"
            >
                Try Again
            </button>
        </div>
    );
}
