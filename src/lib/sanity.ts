import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'jegl25bs',
  dataset: 'production',
  apiVersion: '2025-08-02',
  useCdn: false,
})