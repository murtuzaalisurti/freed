import fs from 'fs'
// @ts-ignore
import { v7 } from 'uuid';
import prompts, { type PromptObject } from 'prompts'
import { logger } from '../src/lib/logger.ts'
import { validateFeeds } from '../src/lib/api/fetchFeeds.ts'

const feedlist: { id: string, url: string }[] = JSON.parse(
    fs.readFileSync(new URL("../src/data/feedlist.json", import.meta.url)) as unknown as string
);

const updatedFeeds = (feeds: { id: string, url: string }[], urls: string[]) => {
    return [
        ...feeds,
        ...urls.map(url => ({ id: v7(), url }))
    ]
}

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

const { url } = await ask()

const updatedFeedList = updatedFeeds(feedlist, url)

validateFeeds(updatedFeedList)

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

logger.success(`Added feed "${url}"`)