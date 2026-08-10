/**
 * Autumn's three professional directions.
 * These are the site's primary positioning motif — reuse this list anywhere
 * specialties appear (hero, section labels, project filtering) so the wording
 * and order stay identical everywhere.
 */
export const specialties = [
  'Software Engineering',
  'Data + Analytics',
  'Marketing',
] as const

export type Specialty = (typeof specialties)[number]
