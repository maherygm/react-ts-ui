const Skeleton = () => {
  return (
    <div className="w-80 h-96 bg-zinc-700 rounded-lg p-4">
      <div className="h-full w-full bg-zinc-500 rounded-lg animate-pulse flex gap-4 flex-col p-4"></div>
    </div>
  );
};

export default Skeleton;
