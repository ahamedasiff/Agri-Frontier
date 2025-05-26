import React from "react";
import { TeamMember as TeamMemberType } from "../types";

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center">
      {/* Image with consistent aspect ratio and padding */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full max-h-48 object-contain rounded-t-lg"
      />
      <div className="p-6 w-full text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          {member.name}
        </h3>
        <p className="text-green-700 font-semibold mb-3">{member.role}</p>
        {member.department && (
          <p className="text-gray-700 text-sm mb-1">{member.department}</p>
        )}
        {member.institution && (
          <p className="text-gray-500 text-xs italic">{member.institution}</p>
        )}
        {member.email && (
          <p className="text-blue-600 text-sm mt-2 break-words">
            {member.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
