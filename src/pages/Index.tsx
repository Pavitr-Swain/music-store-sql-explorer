
import { useState } from 'react';
import QueryEditor from '@/components/QueryEditor';
import ResultsTable from '@/components/ResultsTable';
import ExampleQueries from '@/components/ExampleQueries';

const Index = () => {
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRunQuery = async (query: string) => {
    try {
      // For demonstration, using mock data
      // TODO: Replace with actual database query when backend is connected
      const mockResults = [
        {
          genre: 'Rock',
          total_sales: 450,
          avg_price: 0.99
        },
        {
          genre: 'Jazz',
          total_sales: 325,
          avg_price: 1.29
        },
        {
          genre: 'Classical',
          total_sales: 275,
          avg_price: 1.49
        }
      ];
      
      setResults(mockResults);
      setError(null);
    } catch (err) {
      setError('Failed to execute query. Please try again.');
      setResults(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <div className="max-w-7xl mx-auto p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-transparent bg-clip-text">
              Music Store SQL Analysis
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore and analyze music store data through SQL queries. Write your own queries or use our example queries to gain insights into sales, customer behavior, and popular genres.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <QueryEditor onRunQuery={handleRunQuery} />
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Results</h2>
              <ResultsTable data={results} error={error} />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ExampleQueries onSelectQuery={(query) => {
              setCurrentQuery(query);
              handleRunQuery(query);
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
