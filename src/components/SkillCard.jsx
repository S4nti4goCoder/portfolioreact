// eslint-disable-next-line react/prop-types
const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#fce8d4] p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]">{icon}</div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-black font-medium">{skillName}</p>
            <p className="text-xs font-medium text-secondary">{progress} %</p>
          </div>

          <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
            <div
              className="bg-primary h-[5px] rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <p className="mt-2 text-xs leading-5 text-justify text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
