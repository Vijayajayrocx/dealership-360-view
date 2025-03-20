
import React from "react";
import AlignmentMenu from "@/components/AlignmentMenu";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const AlignmentPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-2 text-foreground">Alignment Management</h1>
      <p className="text-muted-foreground">
        View and manage your dealership alignment data
      </p>
      
      <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-semibold text-card-foreground">Alignment Tool</h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center text-sm text-muted-foreground cursor-help">
                <InfoIcon className="h-4 w-4 mr-1" />
                <span>Date Selection Tip</span>
              </div>
            </TooltipTrigger>
            <TooltipContent side="left" className="max-w-sm bg-popover text-popover-foreground">
              <p>For history data, try dates between Jan 2023 and Feb 2025. The system will show alignments active during your selected date range.</p>
            </TooltipContent>
          </Tooltip>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Select an alignment type and status to view or download alignment data. For historical data, select a date range.
        </p>
        
        <AlignmentMenu />
      </div>
    </div>
  );
};

export default AlignmentPage;
