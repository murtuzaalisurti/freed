export enum FeedDataType {
    FEED="feed",
    FEED_ITEM="feedItem"
}

interface DateReturnType {
    publishDate: Date | string | null,
    lastBuildDate?: Date | string | null,
    lastUpdated?: Date | string | null
}

export const getDates = (data: Record<string, any>, type: FeedDataType): DateReturnType => {
    if (type === FeedDataType.FEED) {
        const publishDate = data.items[0].pubDate || data.items[0].isoDate || null
        const lastBuildDate = data.lastBuildDate || data.items[0].pubDate || data.items[0].isoDate || null
        return {
            publishDate,
            lastBuildDate,
            lastUpdated: data.items.length !== 0 ? publishDate : lastBuildDate
        }
    }
    if (type === FeedDataType.FEED_ITEM) {
        return {
            publishDate: data.pubDate || data.isoDate || null
        }
    }
    return {
        publishDate: null,
        lastBuildDate: null,
        lastUpdated: null
    }
}