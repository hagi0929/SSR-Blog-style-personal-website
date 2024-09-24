import { notion, getDatabase } from "@/api/notion"
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

export default async function ArticlePage() {
    const db_list = await getDatabase();

    // Fetch collection data
    // const collectionData = await notion.getCollectionData(collectionId, collectionViewId);

    // console.log(db_list);

    // console.log("collection ", db_list.collection['710d809d-29b0-42ed-8e7c-37e07c60060d'].value)
    // console.log("collectionView ", db_list.collection_view['34a4b7d9-0c14-4c33-8897-ac49bf5c707e'].value)
    // console.log("collectionQuery ", db_list.collection_query['710d809d-29b0-42ed-8e7c-37e07c60060d']['34a4b7d9-0c14-4c33-8897-ac49bf5c707e'])

    
    const db = await notion.getCollectionData('710d809d-29b0-42ed-8e7c-37e07c60060d', '34a4b7d9-0c14-4c33-8897-ac49bf5c707e');
    console.log("db ", db);
    console.log("reducer ", db.result.reducerResults.collection_group_results)
    console.log("blocks ", db.recordMap.collection)
    return (
        // <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
        <div>
            success
        </div>
    );
}
