async function getData(boardid) {
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
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjYyNzI2MzAyNywiYWFpIjoxMSwidWlkIjoxMDA0NTQxOTgsImlhZCI6IjIwMjYtMDMtMDFUMTU6MDM6NTUuMDAwWiIsInBlciI6Im1lOndyaXRlIiwiYWN0aWQiOjM0MDIwMzUxLCJyZ24iOiJldWMxIn0.HwsUEMt9C0RGwc0Ipxe1btda2LkkBm5HOFtI-WH9Y3c",
      "API-Version": "2023-04",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  return data;
}

export async function GET() {
  const data = await getData(5092510086);
  const dataId = data.data.boards[0].items_page.items.map((item) => ({
    id: item.id,
  }));
  console.log(dataId);
  return Response.json(data);
}
