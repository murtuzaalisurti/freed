import { FeedDataType, type Feed, type FeedItem } from "./types";
import { getDates } from "./dates";

export default function (data: Feed | FeedItem, feedType: FeedDataType) {
    if (feedType === FeedDataType.FEED) {
        data.sort((a: Feed, b: Feed) => {
            const { lastUpdated: lastUpdatedA } = getDates(a, FeedDataType.FEED)
            const { lastUpdated: lastUpdatedB } = getDates(b, FeedDataType.FEED)
            return (new Date(lastUpdatedB as string) as unknown as number) - (new Date(lastUpdatedA as string) as unknown as number);
        })
    }

    if (feedType === FeedDataType.FEED_ITEM) {
        data.items.sort((a: FeedItem, b: FeedItem) => {
            const { publishDate: publishDateOfA } = getDates(a, FeedDataType.FEED_ITEM)
            const { publishDate: publishDateOfB } = getDates(b, FeedDataType.FEED_ITEM)
            return (new Date(publishDateOfB as string) as unknown as number) - (new Date(publishDateOfA as string) as unknown as number);
        })
    }
}