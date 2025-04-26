
import { FC } from "react";

interface ProfileCardProps {
  name: string;
  image?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, image }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-8 w-8 bg-gray-200 rounded-full overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-300 text-gray-600">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default ProfileCard;
