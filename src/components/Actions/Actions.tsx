import React from "react";
import SimpleActions from "@/components/SimpleActions";
import ActionsApplied from "@/components/AppliedActions";

const Actions: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <SimpleActions />
      <ActionsApplied />
    </div>
  );
};

export default Actions;
