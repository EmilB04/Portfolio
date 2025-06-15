import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'g7frot5y',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-10-01'
});
