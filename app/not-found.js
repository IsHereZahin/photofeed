"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <section className="min-h-[80vh] flex items-center justify-center dark:bg-neutral-900 px-6">
            <div className="max-w-xl text-center">
                <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-4">404</h1>

                <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
                    This page is not found!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition cursor-pointer"
                    >
                        Go Back
                    </button>

                    <Link
                        href="/"
                        className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition cursor-pointer"
                    >
                        Home Page
                    </Link>
                </div>
            </div>
        </section>
    );
}