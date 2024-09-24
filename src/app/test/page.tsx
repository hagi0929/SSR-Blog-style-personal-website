import { getDatabase, getData, getPageData } from "@/api/notion"
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
// notion 테마 스타일링 (필수)
import 'react-notion-x/src/styles.css'

// 코드 하이라이트 스타일용 (선택)
import 'prismjs/themes/prism-tomorrow.css'

export default async function ArticlePage() {
    const db = await getData();

    console.log(db.results[1]);

    const notion = new NotionAPI({
        activeUser: process.env.NOTION_ACTIVE_USER,
        authToken: process.env.NOTION_TOKEN_V2
    })
    const recordMap = await notion.getPage(db.results[1].id);

    console.log("recordMap: ", recordMap);
    console.log("block: ", recordMap.block['b910db21-d291-4a05-a885-85153b2436c3'].value);

    return (
        <>
            <NotionRenderer recordMap={recordMap} />
            <div>
                success
            </div>
        </>
    );
}
