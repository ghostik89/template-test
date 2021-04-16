export type RequestStatusType = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}