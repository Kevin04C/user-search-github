export const SkeletonUser = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-avatar loading-skeleton"></div>
      <div className="skeleton-info">
        <div className="skeleton-line-1 loading-skeleton"></div>
        <div className="skeleton-line-2 loading-skeleton"></div>
        <div className="skeleton-body loading-skeleton"></div>
      </div>
    </div>
  );
};
