import styles from './Text.module.css'
import { ReactNode } from 'react'

interface TextProps {
	id?: string | undefined
	/**
	 * Any elements, texts, or both. Usually children will handle icon and text
	 * combination.
	 */
	children: ReactNode
	/**
	 * Accepts string for additional styles for the text i.e spacing, colors, etc.
	 */
	className?: string
	/**
	 * html text tags
	 */
	HTMLElement?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
	/**
	 * Different styles of the text.
	 */
	variant?:
		| 'body'
		| 'hero'
		| 'intro'
		| 'largeTitle'
		| 'title'
		| 'title2'
		| 'thinTitle2'
		| 'title3'
		| 'headline'
		| 'subhead'
		| 'footnote'
		| 'caption'
	/**
	 * Text alignment like as center, by default it's left aligned
	 */
	alignment?: 'left' | 'center' | 'right'
}

function Text({
	children,
	className = '',
	HTMLElement = 'p',
	variant = 'body',
	alignment = 'left',
	...remainingProps
}: TextProps) {
	return (
		<HTMLElement
			{...remainingProps}
			className={[styles.Text, styles[variant], styles[alignment], className]
				.join(' ')
				.trim()}
		>
			{children}
		</HTMLElement>
	)
}

export default Text