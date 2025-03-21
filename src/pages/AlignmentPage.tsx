
import React, { useState } from "react";
import AlignmentMenu from "@/components/AlignmentMenu";
import { InfoIcon, AlertCircleIcon, CalendarIcon, DownloadIcon, History as HistoryIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ColorfulCard, CardContent, CardHeader, CardTitle } from "@/components/ui/colorful-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { format, subMonths } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { alignmentData } from "@/data/alignmentData";

const AlignmentPage = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(subMonths(new Date(), 6));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [historyData, setHistoryData] = useState<typeof alignmentData>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleHistorySearch = () => {
    if (!startDate || !endDate) return;
    
    const filtered = alignmentData.filter(item => 
      item.status === 'history' &&
      ((item.effectiveStartDate >= startDate && item.effectiveStartDate <= endDate) ||
       (item.effectiveEndDate && item.effectiveEndDate >= startDate && item.effectiveEndDate <= endDate) ||
       (item.effectiveStartDate <= startDate && 
        item.effectiveEndDate && item.effectiveEndDate >= endDate))
    );
    
    setHistoryData(filtered);
    setHasSearched(true);
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-ds-primary-50 to-ds-primary-100 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-2 text-ds-primary-800">Alignment Management</h1>
        <p className="text-ds-primary-600">
          View and manage your dealership alignment data
        </p>
      </div>
      
      <Tabs defaultValue="tool">
        <TabsList variant="pills" className="mb-6">
          <TabsTrigger value="tool" color="primary">Alignment Tool</TabsTrigger>
          <TabsTrigger value="history" color="primary">History</TabsTrigger>
          <TabsTrigger value="help" color="primary">Help & FAQs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tool">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ColorfulCard variant="primary" className="col-span-2" hoverable>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-ds-primary-800 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ds-primary"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  Alignment Tool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-ds-secondary-600 mb-6">
                  Select an alignment type and status to view or download alignment data. For historical data, select a date range.
                </p>
                <Alert variant="info" className="mb-6">
                  <AlertCircleIcon className="h-4 w-4" />
                  <AlertTitle>Alignment Data Updated</AlertTitle>
                  <AlertDescription>
                    The alignment data was last updated on March 15, 2023. Please check back regularly for updates.
                  </AlertDescription>
                </Alert>
                <AlignmentMenu />
              </CardContent>
            </ColorfulCard>
            
            <div className="space-y-6">
              <ColorfulCard variant="warning" hoverable>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-ds-warning-800">Date Selection Tip</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-ds-warning-700">
                    For history data, try dates between Jan 2023 and Feb 2025. The system will show alignments active during your selected date range.
                  </p>
                </CardContent>
              </ColorfulCard>
              
              <ColorfulCard variant="success" hoverable>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-ds-success-800">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-ds-secondary-600">Total Alignments:</span>
                    <span className="font-semibold text-ds-success-700">124</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ds-secondary-600">Active:</span>
                    <span className="font-semibold text-ds-success-700">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ds-secondary-600">Pending Review:</span>
                    <span className="font-semibold text-ds-warning-700">12</span>
                  </div>
                </CardContent>
              </ColorfulCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <ColorfulCard variant="secondary" hoverable>
            <CardHeader>
              <CardTitle className="text-ds-secondary-800">Alignment History</CardTitle>
              <p className="text-muted-foreground mt-2">
                View historical alignment data and track changes over time.
              </p>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4 mb-6 bg-white bg-opacity-50">
                <h3 className="text-lg font-medium mb-4 text-ds-secondary-800">Select Date Range</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ds-secondary-700">Start Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ds-secondary-700">End Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="primary" onClick={handleHistorySearch}>
                    <HistoryIcon className="mr-2 h-4 w-4" />
                    Search History
                  </Button>
                </div>
              </div>
              
              {hasSearched && (
                <div className="border rounded-md">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-lg font-medium text-ds-secondary-800">
                      Historical Alignment Data
                    </h3>
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  
                  {historyData.length > 0 ? (
                    <div className="p-4 overflow-x-auto">
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
                          {historyData.map((item) => (
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
                  ) : (
                    <div className="p-8 text-center text-muted-foreground">
                      <p>No historical alignment data found for the selected date range</p>
                      <p className="text-sm mt-2">Try adjusting your date range or check the data in the Alignment Tool</p>
                    </div>
                  )}
                </div>
              )}
              
              {!hasSearched && (
                <div className="p-8 text-center text-muted-foreground">
                  <HistoryIcon className="mx-auto h-12 w-12 mb-4 text-ds-secondary-300" />
                  <p>Select a date range to view historical alignment data</p>
                </div>
              )}
            </CardContent>
          </ColorfulCard>
        </TabsContent>
        
        <TabsContent value="help">
          <ColorfulCard variant="gradient-blue" hoverable>
            <CardHeader>
              <CardTitle className="text-ds-primary-800">Help & FAQs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-ds-primary-100">
                  <h3 className="font-semibold text-ds-primary-800 mb-2">What is an alignment?</h3>
                  <p className="text-ds-secondary-600">
                    Alignments are agreements between dealerships and Ford Motor Company that outline sales targets, inventory requirements, and promotional activities.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-ds-primary-100">
                  <h3 className="font-semibold text-ds-primary-800 mb-2">How do I download alignment data?</h3>
                  <p className="text-ds-secondary-600">
                    After selecting your filters in the Alignment Tool, click the "Download" button to export the data as a CSV file.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-ds-primary-100">
                  <h3 className="font-semibold text-ds-primary-800 mb-2">Why can't I see historical data?</h3>
                  <p className="text-ds-secondary-600">
                    Historical data is available for completed alignments only. Make sure you've selected the correct date range in the History tab. Typically, alignments have a lifecycle of 12 months.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-ds-primary-100">
                  <h3 className="font-semibold text-ds-primary-800 mb-2">How often is alignment data updated?</h3>
                  <p className="text-ds-secondary-600">
                    Alignment data is typically updated on a monthly basis, with new alignments being added at the beginning of each month.
                  </p>
                </div>
              </div>
            </CardContent>
          </ColorfulCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlignmentPage;
