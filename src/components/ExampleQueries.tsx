
import React from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

interface ExampleQuery {
  title: string;
  description: string;
  query: string;
}

interface ExampleQueriesProps {
  onSelectQuery: (query: string) => void;
}

const EXAMPLE_QUERIES: ExampleQuery[] = [
  {
    title: "Top Customers",
    description: "Find customers who spent the most",
    query: `
SELECT 
  c.customer_id,
  c.first_name,
  c.last_name,
  SUM(i.total) as total_spend
FROM customer c
JOIN invoice i ON c.customer_id = i.customer_id
GROUP BY c.customer_id
ORDER BY total_spend DESC
LIMIT 5;`
  },
  {
    title: "Popular Genres",
    description: "Most popular music genres by sales",
    query: `
SELECT 
  g.name as genre,
  COUNT(il.quantity) as sales
FROM genre g
JOIN track t ON g.genre_id = t.genre_id
JOIN invoice_line il ON t.track_id = il.track_id
GROUP BY g.name
ORDER BY sales DESC;`
  },
  {
    title: "Sales by Country",
    description: "Total sales by customer country",
    query: `
SELECT 
  c.country,
  COUNT(i.invoice_id) as total_orders,
  SUM(i.total) as total_sales
FROM customer c
JOIN invoice i ON c.customer_id = i.customer_id
GROUP BY c.country
ORDER BY total_sales DESC;`
  }
];

const ExampleQueries: React.FC<ExampleQueriesProps> = ({ onSelectQuery }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Example Queries</h2>
      <div className="grid gap-4">
        {EXAMPLE_QUERIES.map((example, index) => (
          <Card key={index} className="bg-white/5 hover:bg-white/10 transition-colors">
            <CardHeader>
              <CardTitle>{example.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-4">{example.description}</p>
              <Button
                variant="secondary"
                onClick={() => onSelectQuery(example.query)}
                className="w-full"
              >
                Use Query
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExampleQueries;
