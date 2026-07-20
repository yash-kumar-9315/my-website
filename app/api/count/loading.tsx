// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-4xl px-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mx-auto" />
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 mx-auto" />
        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
    </div>
  );
}