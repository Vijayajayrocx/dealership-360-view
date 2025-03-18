
import React, { useState } from "react";
import { Calendar, Download, List, ListCheck, History as HistoryIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const alignmentTypes = [
  { id: "sales", label: "SALES ALIGNMENT" },
  { id: "salesOps", label: "Sales Ops Alignment" },
  { id: "service", label: "Service Alignment" },
  { id: "fordProElite", label: "Ford Pro Elite Alignment" },
  { id: "fordCredit", label: "Ford Credit Alignment" },
  { id: "fleet", label: "Fleet Alignment" },
];

const AlignmentMenu = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [showHistoryFields, setShowHistoryFields] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setSelectedStatus(null);
    setShowHistoryFields(false);
    setShowData(false);
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    
    // Fix the type error by ensuring we always set a boolean value
    if (status === "history") {
      setShowHistoryFields(true);
      setShowData(false);
    } else if (status === "all") {
      setShowHistoryFields(!showData);
      setShowData(false);
    } else if (status === "active") {
      setShowHistoryFields(false);
      setShowData(true);
    }
  };

  const handleSubmit = () => {
    if (selectedStatus === "history" || selectedStatus === "all") {
      if (startDate && endDate) {
        setShowData(true);
        setShowHistoryFields(false);
      }
    }
  };

  const handleDownload = () => {
    console.log("Downloading alignment data", {
      type: selectedType,
      status: selectedStatus,
      startDate,
      endDate,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedType ? alignmentTypes.find(t => t.id === selectedType)?.label : "Select Alignment Type"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Alignment Types</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {alignmentTypes.map((type) => (
              <DropdownMenuItem 
                key={type.id} 
                onClick={() => handleTypeSelect(type.id)}
              >
                {type.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {selectedType && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedStatus === "active" ? "Active" : 
                 selectedStatus === "history" ? "History" : 
                 selectedStatus === "all" ? "Select All" : 
                 "Select Status"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Alignment Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleStatusSelect("active")}>
                <ListCheck className="mr-2 h-4 w-4" />
                Active
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusSelect("history")}>
                <HistoryIcon className="mr-2 h-4 w-4" />
                History
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleStatusSelect("all")}>
                <List className="mr-2 h-4 w-4" />
                Select All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {showHistoryFields && (
        <div className="flex flex-col space-y-4 p-4 border rounded-md">
          <h3 className="text-lg font-medium">Historical Data Range</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Effective Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="startDate"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">Termination Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="endDate"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-full">Submit</Button>
        </div>
      )}

      {showData && (
        <div className="border rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">
              {selectedType && alignmentTypes.find(t => t.id === selectedType)?.label} - 
              {selectedStatus === "active" ? " Active" : 
               selectedStatus === "history" ? " Historical" : 
               " All"} Data
            </h3>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          
          <div className="bg-muted p-4 rounded-md">
            <p className="text-muted-foreground text-center">
              {selectedStatus === "active" ? "Active alignment data will appear here" :
               selectedStatus === "history" ? `Historical alignment data from ${startDate && format(startDate, "PPP")} to ${endDate && format(endDate, "PPP")} will appear here` :
               "All alignment data will appear here"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlignmentMenu;
