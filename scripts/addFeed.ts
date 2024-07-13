import fs from 'fs'
import { v7 } from 'uuid';
import prompts, { type PromptObject } from 'prompts'
import { logger } from '../src/lib/logger.ts'
import { validateFeeds } from '../src/lib/api/fetchFeeds.ts'

interface Feed {
    id: string
    url: string
}

const readFeedList = () => {
    const feedlist: Feed[] = JSON.parse(
        fs.readFileSync(new URL("../src/data/feedlist.json", import.meta.url)) as unknown as string
    );
    return feedlist;
}

const writeUpdatedFeedList = (updatedFeedList: Feed[]) => {
    fs.writeFileSync(
        "./src/data/feedlist.json",
        JSON.stringify(
            updatedFeedList,
            null,
            2
        ),
        {
            encoding: 'utf8'
        }
    )
}

const updatedFeeds = (feeds: Feed[], urls: string[]) =>
    feeds.concat(urls.map(url => ({ id: v7(), url })));

async function ask() {
    const askPrompts: PromptObject<string>[] = [
        {
            type: "list",
            name: "url",
            message: "Feed URL(s): ",
            initial: '',
            separator: ','
        }
    ]
    const onCancel = () => { throw Error("Cancelled..") }
    return await prompts(askPrompts, { onCancel })
}

const feedlist = readFeedList()
const { url } = await ask()
const updatedFeedList = updatedFeeds(feedlist, url)

validateFeeds(updatedFeedList)
writeUpdatedFeedList(updatedFeedList)

logger.success(`Added feed(s): \n\t- ${url.join("\n\t- ")}`)
