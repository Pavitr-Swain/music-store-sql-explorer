
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from './ui/button';

interface QueryEditorProps {
  onRunQuery: (query: string) => void;
}

const QueryEditor: React.FC<QueryEditorProps> = ({ onRunQuery }) => {
  const [query, setQuery] = useState('SELECT * FROM customers LIMIT 5;');

  const handleEditorChange = (value: string | undefined) => {
    if (value) setQuery(value);
  };

  return (
    <div className="rounded-lg bg-[#1A1F2C] p-4 w-full">
      <div className="h-[300px] mb-4">
        <Editor
          height="100%"
          defaultLanguage="sql"
          theme="vs-dark"
          value={query}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
          }}
        />
      </div>
      <Button 
        onClick={() => onRunQuery(query)}
        className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
      >
        Run Query
      </Button>
    </div>
  );
};

export default QueryEditor;
