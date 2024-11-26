export default function CurvedPath() {
    return (
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 300C0 134.315 134.315 0 300 0H900C1065.69 0 1200 134.315 1200 300C1200 465.685 1065.69 600 900 600H300C134.315 600 0 465.685 0 300Z"
                fill="url(#animatedGradient)"
            />
            <defs>
                <linearGradient id="animatedGradient" x1="0" y1="0" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700">
                        <animate
                            attributeName="stop-color"
                            values="#FFD700; #90EE90; #20B2AA; #1E90FF; #FFD700"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </stop>
                    <stop offset="100%" stopColor="#1E90FF">
                        <animate
                            attributeName="stop-color"
                            values="#1E90FF; #FFD700; #90EE90; #20B2AA; #1E90FF"
                            dur="20s"
                            repeatCount="indefinite"
                        />
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    )
}

