export enum FeedDataType {
    FEED="feed",
    FEED_ITEM="feedItem"
}

export interface DateReturnType {
    publishDate: Date | string | null,
    lastBuildDate?: Date | string | null,
    lastUpdated?: Date | string | null
}

export type Feed = Record<string, any>
export type FeedItem = Record<string, any>