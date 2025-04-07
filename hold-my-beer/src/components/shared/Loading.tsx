import { LoadingProps } from "../../common/interface/Interface";

export const Loading: React.FC<LoadingProps> = ({
  loading = false,
  className
}) => {
  if (!loading) {
    return null;
  }
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-blue-600" />
    </div>
  );
};
