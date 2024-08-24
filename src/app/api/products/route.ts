
export async function GET() {
    const res = await fetch('https://fakerapi.it/api/v1/products?_quantity=100&_taxes=12&_categories_type=uuid')
    const data = await res.json()
    return Response.json(data)
}