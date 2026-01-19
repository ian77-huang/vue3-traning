import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

/**
 * @description tailwind-variants is a utility for creating Tailwind CSS variants.
 * It allows you to define variants for your components and generate the corresponding class names.
 * @example classNames?: SlotsToClasses<'button'>;
 */
export type SlotsToClasses<S extends string> = {
  [key in S]?: ClassValue
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export { cva }
