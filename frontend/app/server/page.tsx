
// Server Component
export default async function ServerPage() {
  const response = await fetch('http://localhost:8080/server-test', {
    // Enable for production when needed
    // next: { revalidate: 10 } // Cache for 10 seconds
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const data = await response.json();
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Backend Server Response</h1>
      <div>
        <p className="text-lg mb-2">Message from server:</p>
        <div className="bg-green-100 p-4 rounded">{data.message}</div>
        <pre className="bg-gray-100 p-4 rounded overflow-auto mt-4">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
}
