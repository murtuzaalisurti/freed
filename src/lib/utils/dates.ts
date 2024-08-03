import { FeedDataType, type DateReturnType, type Feed, type FeedItem } from "./types"

export const getDates = (data: Feed | FeedItem, type: FeedDataType): DateReturnType => {
    if (type === FeedDataType.FEED) {
        const publishDate = data.items[0]?.pubDate || data.items[0]?.isoDate || null
        const lastBuildDate = data.lastBuildDate || data.items[0]?.pubDate || data.items[0]?.isoDate || null
        return {
            publishDate,
            lastBuildDate,
            lastUpdated: data.items.length !== 0 ? publishDate : lastBuildDate
        }
    }
    if (type === FeedDataType.FEED_ITEM) {
        return {
            publishDate: data?.pubDate || data?.isoDate || null
        }
    }
    return {
        publishDate: null,
        lastBuildDate: null,
        lastUpdated: null
    }
}