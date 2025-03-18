
import React from "react";
import AlignmentMenu from "@/components/AlignmentMenu";

const AlignmentPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Alignment Management</h1>
        <p className="text-muted-foreground">
          View and manage your dealership alignment data
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Alignment Tool</h2>
        <p className="text-muted-foreground mb-6">
          Select an alignment type and status to view or download alignment data.
        </p>
        
        <AlignmentMenu />
      </div>
    </div>
  );
};

export default AlignmentPage;
