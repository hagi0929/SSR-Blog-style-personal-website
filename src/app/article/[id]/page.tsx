async function fetchArticleHTML(id: string): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/article/${id}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  return await response.json();
}

export default async function Article({params}: { params: { id: string } }) {
  const html = await fetchArticleHTML(params.id);

  return <div
    className="notion-render"
    style={{maxWidth: "800px", margin: "auto"}}
    dangerouslySetInnerHTML={{__html: html}}
  ></div>
    ;
}
