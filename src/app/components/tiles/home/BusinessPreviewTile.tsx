import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function BusinessPreviewTile() {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#e6f4ea] via-[#f0fdf4] to-[#dcfce7] dark:bg-gradient-to-br dark:from-[#0d1117] dark:to-[#0f1f18] dark:ring-2 dark:ring-gray-700 transition-all duration-300">
            {/* Decorative background gradients */}
            <div className="absolute -top-20 -right-16 w-[48%] aspect-square bg-emerald-300/30 rounded-full dark:bg-emerald-900/20 blur-xl pointer-events-none" />
            <div className="absolute -bottom-24 left-[10%] w-[38%] h-[72%] bg-teal-200/40 rounded-[50%] dark:bg-teal-950/30 blur-xl pointer-events-none" />

            {/* School Pill Badge */}
            <div className="absolute top-4 left-5 z-30 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-white/80 dark:bg-[#111821]/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Stratford Academy (SMR)</span>
                </div>
            </div>

            {/* Angled Mockup Card displaying the actual Stratford Academy site */}
            <div className="absolute top-[18%] left-[17%] w-[70%] aspect-[16/9] -rotate-[28deg] rounded-[1.8rem] bg-white dark:bg-zinc-900 shadow-[0_24px_48px_rgba(15,23,42,0.22)] ring-1 ring-black/10 dark:ring-white/10 overflow-hidden">
                <Image
                    src="/projects/stratford-school.png"
                    alt="Stratford Academy Bagli website preview"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                />
            </div>

            {/* Bottom Action Links (Live Demo + GitHub + View Details) */}
            <div className="absolute bottom-0 left-0 m-4 z-30 flex items-center gap-2">
                {/* Live Link Button */}
                <a
                    href="https://stratford-school.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Stratford Academy Website"
                    className="group/live inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white ring-2 ring-emerald-500/30 hover:ring-emerald-500 dark:ring-emerald-500/40 dark:hover:ring-emerald-400 transition-all duration-300 shadow-[0_8px_18px_rgba(0,0,0,0.1)] text-xs font-semibold"
                    onPointerDown={(event) => event.stopPropagation()}
                    onMouseDown={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                >
                    <FiExternalLink className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 group-hover/live:scale-110 transition-transform" />
                    <span className="font-decorative">Live Site</span>
                </a>

                {/* GitHub Code Link */}
                <a
                    href="https://github.com/Akki120781/smr-"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View SMR Code on GitHub"
                    className="group/git flex justify-center items-center w-10 h-10 rounded-full bg-white dark:bg-[#0d1117] text-gray-800 dark:text-white ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition-all duration-300 shadow-[0_8px_18px_rgba(0,0,0,0.1)]"
                    title="View Source on GitHub"
                    onPointerDown={(event) => event.stopPropagation()}
                    onMouseDown={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                >
                    <FiGithub className="h-4 w-4 group-hover/git:scale-110 transition-transform" />
                </a>

                {/* Projects Page Arrow */}
                <Link
                    href="/projects"
                    aria-label="Go to projects page"
                    className="group/arrow flex justify-center items-center w-10 h-10 rounded-full bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700 hover:bg-white dark:hover:bg-[#111821] transition-all duration-300 shadow-sm"
                    title="All Projects"
                    onPointerDown={(event) => event.stopPropagation()}
                    onMouseDown={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                >
                    <svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18.256 18.256">
                        <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
                            <path
                                id="Path_10"
                                data-name="Path 10"
                                d="M14.581,7.05,7.05,14.581"
                                transform="translate(-7.05 -7.012)"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                            <path
                                id="Path_11"
                                data-name="Path 11"
                                d="M10,7l5.287.037.038,5.287"
                                transform="translate(-7.756 -7)"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </g>
                        <path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}