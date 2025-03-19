import React, { useState } from "react";
import { Calendar, Download, List, ListCheck, History as HistoryIcon, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format, subMonths } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { alignmentData, AlignmentData } from "@/data/alignmentData";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

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
  const [startDate, setStartDate] = useState<Date | undefined>(subMonths(new Date(), 6));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [showHistoryFields, setShowHistoryFields] = useState(false);
  const [showData, setShowData] = useState(false);
  const [filteredData, setFilteredData] = useState<AlignmentData[]>([]);

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setSelectedStatus(null);
    setShowHistoryFields(false);
    setShowData(false);
    setFilteredData([]);
  };

  const handleStatusSelect = (status: string) => {
    setSelectedStatus(status);
    
    if (status === "history" || status === "all") {
      setShowHistoryFields(true);
      setShowData(false);
    } else if (status === "active") {
      setShowHistoryFields(false);
      const activeData = alignmentData.filter(
        item => item.type === selectedType && item.status === 'active'
      );
      setFilteredData(activeData);
      setShowData(true);
    }
  };

  const handleSubmit = () => {
    if (!selectedType) return;

    let filtered = [];
    if (selectedStatus === "active") {
      filtered = alignmentData.filter(
        item => item.type === selectedType && item.status === 'active'
      );
    } else if (selectedStatus === "history" && startDate && endDate) {
      filtered = alignmentData.filter(item => 
        item.type === selectedType &&
        item.status === 'history' &&
        ((item.effectiveStartDate >= startDate && item.effectiveStartDate <= endDate) ||
         (item.effectiveEndDate && item.effectiveEndDate >= startDate && item.effectiveEndDate <= endDate) ||
         (item.effectiveStartDate <= startDate && 
          item.effectiveEndDate && item.effectiveEndDate >= endDate))
      );
    } else if (selectedStatus === "all" && startDate && endDate) {
      filtered = alignmentData.filter(item => 
        item.type === selectedType &&
        (item.status === 'active' ||
          ((item.effectiveStartDate >= startDate && item.effectiveStartDate <= endDate) ||
           (item.effectiveEndDate && item.effectiveEndDate >= startDate && item.effectiveEndDate <= endDate) ||
           (item.effectiveStartDate <= startDate && 
            item.effectiveEndDate && item.effectiveEndDate >= endDate)))
      );
    }
    
    setFilteredData(filtered);
    setShowData(true);
    setShowHistoryFields(false);
  };

  const handleDownload = () => {
    console.log("Downloading alignment data", filteredData);
  };

  const getDateHint = () => {
    let historyItems = alignmentData.filter(item => item.status === 'history' && selectedType && item.type === selectedType);
    if (historyItems.length === 0) return null;
    
    historyItems.sort((a, b) => a.effectiveStartDate.getTime() - b.effectiveStartDate.getTime());
    
    const earliestDate = format(historyItems[0].effectiveStartDate, "MMM yyyy");
    const latestDate = format(historyItems[historyItems.length - 1].effectiveStartDate, "MMM yyyy");
    
    return `Try dates between ${earliestDate} and ${latestDate}`;
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
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Historical Data Range</h3>
            
            {getDateHint() && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-sm text-muted-foreground cursor-help">
                    <Info className="h-4 w-4 mr-1" />
                    <span>Date Selection Hint</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{getDateHint()}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Effective Start Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
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
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Termination Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
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
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      )}

      {showData && filteredData.length > 0 && (
        <div className="border rounded-md">
          <div className="flex items-center justify-between p-4">
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
          
          <div className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alignment Name</TableHead>
                  <TableHead>Dealer Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Zone</TableHead>
                  <TableHead>District</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.alignmentName}</TableCell>
                    <TableCell>{item.dealerName}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{format(item.effectiveStartDate, "PP")}</TableCell>
                    <TableCell>
                      {item.effectiveEndDate ? format(item.effectiveEndDate, "PP") : "-"}
                    </TableCell>
                    <TableCell>{item.zone}</TableCell>
                    <TableCell>{item.district}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {showData && filteredData.length === 0 && (
        <div className="bg-muted p-4 rounded-md">
          <p className="text-muted-foreground text-center">
            No alignment data found for the selected criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default AlignmentMenu;
