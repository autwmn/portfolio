
export const specialties = [
  'Software Engineering',
  'Data + Analytics',
  'Marketing',
] as const

export type Specialty = (typeof specialties)[number]
