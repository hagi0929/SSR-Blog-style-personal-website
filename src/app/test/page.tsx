import { notion, getData } from "@/api/notion"
// notion 테마 스타일링 (필수)
import 'react-notion-x/src/styles.css'

import NotionPage from "@/components/NotionPage"

export default async function ArticlePage() {
    const db = await getData();

    const recordMap = await notion.getPage(db.results[0].id);

    return (
        <>
            <NotionPage 
                recordMap={recordMap}
            />
        </>
    );
}
