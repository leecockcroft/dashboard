export async function getMondayItems(boardid) {
  const query = `
query {
  boards(ids: 5092510086) {
    items_page(
      limit: 100
      query_params: {
        rules: [
          {
            column_id: "date"
            compare_value: ["EXACT", "2026-03-02"]
            operator: any_of
          }
        ]
      }
    ) {
      cursor
      items {
        id
        name
        creator {
          id
          name
          email
        }
        assets {
          id
          name
          public_url
        }
      }
    }
  }
}

  `;

  const response = await fetch("https://api.monday.com/v2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
      "API-Version": "2023-04",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  return data;
}
