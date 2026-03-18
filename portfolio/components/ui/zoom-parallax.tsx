// @ts-nocheck
'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 2.8]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 3.4]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 4.2]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 4.8]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[220vh] lg:h-[240vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform ${index === 1 ? '[&>div]:!-top-[24vh] [&>div]:!left-[6vw] [&>div]:!h-[28vh] [&>div]:!w-[32vw]' : ''} ${index === 2 ? '[&>div]:!-top-[8vh] [&>div]:!-left-[20vw] [&>div]:!h-[38vh] [&>div]:!w-[22vw]' : ''} ${index === 3 ? '[&>div]:!left-[24vw] [&>div]:!h-[24vh] [&>div]:!w-[24vw]' : ''} ${index === 4 ? '[&>div]:!top-[24vh] [&>div]:!left-[6vw] [&>div]:!h-[24vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[24vh] [&>div]:!-left-[18vw] [&>div]:!h-[22vh] [&>div]:!w-[28vw]' : ''} ${index === 6 ? '[&>div]:!top-[20vh] [&>div]:!left-[22vw] [&>div]:!h-[14vh] [&>div]:!w-[14vw]' : ''} `}
						>
							<div className="relative h-[24vh] w-[24vw] will-change-transform">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover [transform:translateZ(0)]"
									decoding="async"
									draggable={false}
									loading={index < 2 ? 'eager' : 'lazy'}
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
