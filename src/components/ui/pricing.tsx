'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { CheckCircleIcon, StarIcon, Info } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, type Transition } from 'framer-motion';

export interface Plan {
	name: string;
	info: string;
	price: number | string;
	priceSuffix?: string;
	badge?: string;
	highlighted?: boolean;
	features: {
		text: string;
		tooltip?: string;
	}[];
	btn: {
		text: string;
		href?: string;
		onClick?: () => void;
	};
}

export interface PricingCategoryGroup {
	id: string;
	label: string;
	badge?: string;
	subheading?: string;
	description?: string;
	plans: Plan[];
}

export interface PricingSectionProps extends React.ComponentProps<'div'> {
	categories: PricingCategoryGroup[];
	heading: string;
	description?: string;
	packageNote?: string;
}

export function PricingSection({
	categories,
	heading,
	description,
	packageNote,
	...props
}: PricingSectionProps) {
	const [activeCategoryId, setActiveCategoryId] = React.useState<string>(
		categories[0]?.id || 'short-form',
	);

	const activeCategory =
		categories.find((cat) => cat.id === activeCategoryId) || categories[0];

	return (
		<div
			className={cn(
				'flex w-full flex-col items-center justify-center space-y-8 p-4',
				props.className,
			)}
			{...props}
		>
			{/* Section Heading & Description */}
			<div className="mx-auto max-w-3xl space-y-3 text-center">
				<h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
					{heading}
				</h2>
				{description && (
					<p className="text-brand-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
						{description}
					</p>
				)}
			</div>

			{/* Category Toggle: Short-Form Videos vs Long-Form Videos */}
			<PricingCategoryToggle
				categories={categories.map((c) => ({ id: c.id, label: c.label }))}
				activeId={activeCategoryId}
				onSelect={setActiveCategoryId}
			/>

			{/* Active Category Subheading / Scope Notice */}
			{activeCategory?.subheading && (
				<motion.div
					key={activeCategory.id + '-subheading'}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className="max-w-2xl mx-auto text-center px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
				>
					<p className="text-xs sm:text-sm font-medium text-brand-glow">
						{activeCategory.subheading}
					</p>
					{activeCategory.description && (
						<p className="text-xs text-brand-text-secondary mt-1 font-light">
							{activeCategory.description}
						</p>
					)}
				</motion.div>
			)}

			{/* Cards Grid with Crossfade Animation */}
			<AnimatePresence mode="wait">
				<motion.div
					key={activeCategory.id}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -12 }}
					transition={{ duration: 0.35, ease: 'easeInOut' }}
					className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 items-stretch"
				>
					{activeCategory.plans.map((plan) => (
						<PricingCard plan={plan} key={plan.name} />
					))}
				</motion.div>
			</AnimatePresence>

			{/* Package Note Box */}
			{packageNote && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="max-w-4xl mx-auto w-full mt-6 p-6 rounded-2xl border border-white/10 bg-[#040D1A]/60 backdrop-blur-md flex items-start gap-4 text-left shadow-lg"
				>
					<div className="w-9 h-9 rounded-xl bg-brand-glow/10 border border-brand-glow/20 flex items-center justify-center text-brand-glow shrink-0 mt-0.5">
						<Info size={18} />
					</div>
					<div>
						<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-glow mb-1">
							Package Note & Scope Policy
						</h4>
						<p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed font-light">
							{packageNote}
						</p>
					</div>
				</motion.div>
			)}
		</div>
	);
}

export function PricingCategoryToggle({
	categories,
	activeId,
	onSelect,
	className,
}: {
	categories: { id: string; label: string }[];
	activeId: string;
	onSelect: (id: string) => void;
	className?: string;
}) {
	return (
		<div
			className={cn(
				'bg-white/5 backdrop-blur-xl border border-white/10 mx-auto flex w-fit rounded-full p-1.5 shadow-xl',
				className,
			)}
		>
			{categories.map((cat) => {
				const isSelected = activeId === cat.id;
				return (
					<button
						key={cat.id}
						onClick={() => onSelect(cat.id)}
						className="relative px-6 py-2.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
					>
						<span
							className={cn(
								'relative z-20 text-xs sm:text-sm tracking-wide transition-colors',
								isSelected ? 'text-[#031e41] font-bold' : 'text-white/70 hover:text-white',
							)}
						>
							{cat.label}
						</span>
						{isSelected && (
							<motion.span
								layoutId="pricing-category-indicator"
								transition={{ type: 'spring', stiffness: 450, damping: 32 }}
								className="absolute inset-0 z-10 rounded-full bg-brand-accent shadow-[0_0_20px_rgba(0,223,162,0.4)]"
							/>
						)}
					</button>
				);
			})}
		</div>
	);
}

export type PricingCardProps = React.ComponentProps<'div'> & {
	plan: Plan;
};

export function PricingCard({ plan, className, ...props }: PricingCardProps) {
	const formattedPrice =
		typeof plan.price === 'number'
			? `$${plan.price.toLocaleString()}`
			: plan.price;

	return (
		<div
			key={plan.name}
			className={cn(
				'relative flex w-full h-full flex-col rounded-3xl border border-white/10 bg-[#040D1A]/80 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-xl hover:border-brand-glow/40 hover:shadow-[0_0_40px_rgba(0,179,221,0.15)]',
				plan.highlighted &&
					'border-brand-accent/50 bg-[#040D1A]/95 shadow-[0_0_50px_rgba(0,223,162,0.2)]',
				className,
			)}
			{...props}
		>
			{plan.highlighted && (
				<BorderTrail
					style={{
						boxShadow:
							'0px 0px 40px 15px rgba(0, 223, 162, 0.4), 0 0 80px 30px rgba(0, 179, 221, 0.3)',
					}}
					size={100}
				/>
			)}

			{/* Card Header with strictly unified minimum height */}
			<div
				className={cn(
					'relative border-b border-white/10 p-6 sm:p-8 flex flex-col justify-between min-h-[190px]',
					plan.highlighted && 'bg-brand-accent/5',
				)}
			>
				{plan.badge && (
					<div className="absolute top-4 right-4 z-20 flex items-center gap-2">
						<span
							className={cn(
								'flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm',
								plan.highlighted
									? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
									: 'bg-brand-glow/20 text-brand-glow border border-brand-glow/30',
							)}
						>
							<StarIcon className="h-3 w-3 fill-current" />
							{plan.badge}
						</span>
					</div>
				)}

				<div>
					<div className="text-xl font-bold text-white tracking-wide">{plan.name}</div>
					<p className="text-brand-text-secondary text-sm font-light mt-1.5 leading-relaxed line-clamp-2">
						{plan.info}
					</p>
				</div>

				<h3 className="mt-4 flex items-baseline gap-1.5">
					<span className="text-4xl font-extrabold text-white tracking-tight">
						{formattedPrice}
					</span>
					{plan.priceSuffix && (
						<span className="text-brand-text-muted text-sm font-light">
							{plan.priceSuffix}
						</span>
					)}
				</h3>
			</div>

			{/* Feature List (stretches flex space) */}
			<div
				className={cn(
					'space-y-4 px-6 sm:px-8 py-6 text-sm text-slate-200 flex-1 flex flex-col justify-start',
					plan.highlighted && 'bg-brand-accent/[0.02]',
				)}
			>
				<TooltipProvider delayDuration={100}>
					{plan.features.map((feature, index) => (
						<div key={index} className="flex items-start gap-3">
							<CheckCircleIcon className="text-brand-accent h-4 w-4 shrink-0 mt-0.5" />
							{feature.tooltip ? (
								<Tooltip>
									<TooltipTrigger asChild>
										<p className="text-sm leading-relaxed cursor-pointer border-b border-dashed border-white/30 text-white hover:text-brand-glow transition-colors">
											{feature.text}
										</p>
									</TooltipTrigger>
									<TooltipContent side="top" align="center" className="max-w-[280px] text-center">
										<p>{feature.tooltip}</p>
									</TooltipContent>
								</Tooltip>
							) : (
								<p className="text-sm leading-relaxed text-slate-200">
									{feature.text}
								</p>
							)}
						</div>
					))}
				</TooltipProvider>
			</div>

			{/* Bottom Button Container (locked to bottom edge) */}
			<div
				className={cn(
					'mt-auto w-full border-t border-white/10 p-6 flex-none',
					plan.highlighted && 'bg-brand-accent/5',
				)}
			>
				{plan.btn.onClick ? (
					<Button
						type="button"
						onClick={plan.btn.onClick}
						className={cn(
							'w-full py-6 font-bold text-sm tracking-wide rounded-xl transition-all duration-300 cursor-pointer',
							plan.highlighted
								? 'bg-brand-accent text-[#031e41] hover:bg-brand-glow hover:text-white shadow-[0_0_25px_rgba(0,223,162,0.3)]'
								: 'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-brand-glow/40 hover:text-white',
						)}
					>
						{plan.btn.text}
					</Button>
				) : (
					<Button
						className={cn(
							'w-full py-6 font-bold text-sm tracking-wide rounded-xl transition-all duration-300',
							plan.highlighted
								? 'bg-brand-accent text-[#031e41] hover:bg-brand-glow hover:text-white shadow-[0_0_25px_rgba(0,223,162,0.3)]'
								: 'bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-brand-glow/40 hover:text-white',
						)}
						asChild
					>
						<Link href={plan.btn.href || '#'}>{plan.btn.text}</Link>
					</Button>
				)}
			</div>
		</div>
	);
}

export type BorderTrailProps = {
	className?: string;
	size?: number;
	transition?: Transition;
	delay?: number;
	onAnimationComplete?: () => void;
	style?: React.CSSProperties;
};

export function BorderTrail({
	className,
	size = 60,
	transition,
	delay,
	onAnimationComplete,
	style,
}: BorderTrailProps) {
	const BASE_TRANSITION: Transition = {
		repeat: Infinity,
		duration: 5,
		ease: 'linear',
	};

	return (
		<div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
			<motion.div
				className={cn(
					'absolute aspect-square bg-gradient-to-r from-brand-accent to-brand-glow',
					className,
				)}
				style={{
					width: size,
					offsetPath: `rect(0 auto auto 0 round ${size}px)`,
					...style,
				}}
				animate={{
					offsetDistance: ['0%', '100%'],
				}}
				transition={{
					...(transition ?? BASE_TRANSITION),
					delay: delay,
				}}
				onAnimationComplete={onAnimationComplete}
			/>
		</div>
	);
}
