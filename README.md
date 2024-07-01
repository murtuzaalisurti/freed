# rssed

a collection of dev rss feeds :)

> built with ❤️ by [Murtuzaali Surti](https://murtuzaalisurti.github.io) for fun.

## Local Development

- Clone the project — `git clone https://github.com/murtuzaalisurti/rssed.git`
- Install dependencies — `npm i`
- Run it — `npm run dev` — and access it on `localhost:3000`

## Contribute

- If you find any interesting developer focused blogs or resources, create an [issue](https://github.com/murtuzaalisurti/rssed/issues/new?assignees=&labels=&projects=&template=add-a-new-feed.md&title=%5BFEED%5D%3A+) for the new RSS feed that you want to add.
- You can add their RSS feeds in this project by following below steps *after cloning the project*:
  - Run `npm run add-feed`
  - Paste the feed url. You can also add multiple feed urls separated by a comma (,).
- Once reviewed, you can raise a PR and mention the required details.
- This project re-builds every day, so you might be able to see your feed addition soon.

> this project uses [@rbren](https://github.com/rbren/rss-parser)'s rss parser to parse the feeds.
