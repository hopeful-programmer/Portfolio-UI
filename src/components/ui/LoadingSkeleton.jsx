export default function LoadingSkeleton() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        {/* Avatar */}
        <div className="skeleton-shimmer mb-2 h-32 w-32 rounded-full" />

        {/* Name */}
        <div className="skeleton-shimmer h-10 w-64 rounded-xl" />

        {/* Job title */}
        <div className="skeleton-shimmer h-5 w-48 rounded-lg" />

        {/* Summary */}
        <div className="mt-4 flex w-full flex-col gap-2">
          <div className="skeleton-shimmer h-4 w-full rounded" />
          <div className="skeleton-shimmer h-4 w-5/6 rounded" />
          <div className="skeleton-shimmer h-4 w-4/6 rounded" />
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <div className="skeleton-shimmer h-12 w-36 rounded-xl" />
          <div className="skeleton-shimmer h-12 w-36 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
