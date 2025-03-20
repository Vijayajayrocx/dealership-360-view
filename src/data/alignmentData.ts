import { format, subDays, addDays } from "date-fns";

export interface AlignmentData {
  id: string;
  alignmentName: string;
  dealerName: string;
  location: string;
  effectiveStartDate: Date;
  effectiveEndDate?: Date;
  zone: string;
  district: string;
  status: 'active' | 'history';
  type: string;
}

export const alignmentData: AlignmentData[] = [
  {
    id: "1",
    alignmentName: "Q1 Sales Alignment",
    dealerName: "Krishna Motors",
    location: "Chennai",
    effectiveStartDate: subDays(new Date(), 30),
    zone: "South",
    district: "Chennai Central",
    status: 'active',
    type: 'sales'
  },
  {
    id: "2",
    alignmentName: "Service Territory Update",
    dealerName: "Lakshmi Ford",
    location: "Bangalore",
    effectiveStartDate: subDays(new Date(), 90),
    effectiveEndDate: subDays(new Date(), 30),
    zone: "South",
    district: "Bangalore Urban",
    status: 'history',
    type: 'service'
  },
  {
    id: "3",
    alignmentName: "Elite Customer Program",
    dealerName: "Premier Ford",
    location: "Mumbai",
    effectiveStartDate: subDays(new Date(), 60),
    zone: "West",
    district: "Mumbai Suburban",
    status: 'active',
    type: 'fordProElite'
  },
  {
    id: "4",
    alignmentName: "Credit Assessment Update",
    dealerName: "GS Ford",
    location: "Delhi",
    effectiveStartDate: subDays(new Date(), 120),
    effectiveEndDate: subDays(new Date(), 45),
    zone: "North",
    district: "Delhi NCR",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "5",
    alignmentName: "Fleet Solutions Program",
    dealerName: "Sai Ford",
    location: "Hyderabad",
    effectiveStartDate: subDays(new Date(), 15),
    zone: "South",
    district: "Hyderabad Central",
    status: 'active',
    type: 'fleet'
  },
  {
    id: "6",
    alignmentName: "Sales Ops Territory Update",
    dealerName: "Ganga Ford",
    location: "Kolkata",
    effectiveStartDate: subDays(new Date(), 150),
    effectiveEndDate: subDays(new Date(), 60),
    zone: "East",
    district: "Kolkata Metro",
    status: 'history',
    type: 'salesOps'
  },
  
  {
    id: "7",
    alignmentName: "Q2 Sales Territory Revision",
    dealerName: "Maruti Ford",
    location: "Pune",
    effectiveStartDate: subDays(new Date(), 20),
    zone: "West",
    district: "Pune City",
    status: 'active',
    type: 'sales'
  },
  {
    id: "8",
    alignmentName: "Regional Sales Restructuring",
    dealerName: "Tata Motors",
    location: "Ahmedabad",
    effectiveStartDate: subDays(new Date(), 180),
    effectiveEndDate: subDays(new Date(), 90),
    zone: "West",
    district: "Ahmedabad Urban",
    status: 'history',
    type: 'sales'
  },
  {
    id: "9",
    alignmentName: "Festive Sales Campaign",
    dealerName: "Mahindra Ford",
    location: "Jaipur",
    effectiveStartDate: subDays(new Date(), 45),
    zone: "North",
    district: "Jaipur City",
    status: 'active',
    type: 'sales'
  },
  
  {
    id: "10",
    alignmentName: "Digital Transformation Initiative",
    dealerName: "Reliance Ford",
    location: "Surat",
    effectiveStartDate: subDays(new Date(), 25),
    zone: "West",
    district: "Surat Urban",
    status: 'active',
    type: 'salesOps'
  },
  {
    id: "11",
    alignmentName: "Operations Excellence Program",
    dealerName: "Bajaj Auto",
    location: "Nagpur",
    effectiveStartDate: subDays(new Date(), 200),
    effectiveEndDate: subDays(new Date(), 100),
    zone: "Central",
    district: "Nagpur Metro",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "12",
    alignmentName: "Sales Process Optimization",
    dealerName: "Hero Ford",
    location: "Lucknow",
    effectiveStartDate: subDays(new Date(), 35),
    zone: "North",
    district: "Lucknow Urban",
    status: 'active',
    type: 'salesOps'
  },
  
  {
    id: "13",
    alignmentName: "Premium Service Initiative",
    dealerName: "TVS Ford",
    location: "Coimbatore",
    effectiveStartDate: subDays(new Date(), 40),
    zone: "South",
    district: "Coimbatore Urban",
    status: 'active',
    type: 'service'
  },
  {
    id: "14",
    alignmentName: "ServiceNow Implementation",
    dealerName: "Royal Ford",
    location: "Bhopal",
    effectiveStartDate: subDays(new Date(), 120),
    effectiveEndDate: subDays(new Date(), 60),
    zone: "Central",
    district: "Bhopal City",
    status: 'history',
    type: 'service'
  },
  {
    id: "15",
    alignmentName: "Quick Service Lanes Rollout",
    dealerName: "Ashok Ford",
    location: "Vadodara",
    effectiveStartDate: subDays(new Date(), 50),
    zone: "West",
    district: "Vadodara Urban",
    status: 'active',
    type: 'service'
  },
  
  {
    id: "16",
    alignmentName: "Elite Business Customer Program",
    dealerName: "Hindustan Motors",
    location: "Indore",
    effectiveStartDate: subDays(new Date(), 55),
    zone: "Central",
    district: "Indore City",
    status: 'active',
    type: 'fordProElite'
  },
  {
    id: "17",
    alignmentName: "Corporate Fleet Management",
    dealerName: "Eicher Motors",
    location: "Chandigarh",
    effectiveStartDate: subDays(new Date(), 150),
    effectiveEndDate: subDays(new Date(), 75),
    zone: "North",
    district: "Chandigarh UT",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "18",
    alignmentName: "Enterprise Solutions Alignment",
    dealerName: "Force Motors",
    location: "Raipur",
    effectiveStartDate: subDays(new Date(), 70),
    zone: "Central",
    district: "Raipur Metro",
    status: 'active',
    type: 'fordProElite'
  },
  
  {
    id: "19",
    alignmentName: "Flexible Financing Options",
    dealerName: "Hyundai Ford",
    location: "Visakhapatnam",
    effectiveStartDate: subDays(new Date(), 65),
    zone: "East",
    district: "Vizag Urban",
    status: 'active',
    type: 'fordCredit'
  },
  {
    id: "20",
    alignmentName: "Zero Interest Campaign",
    dealerName: "Toyota Ford",
    location: "Patna",
    effectiveStartDate: subDays(new Date(), 180),
    effectiveEndDate: subDays(new Date(), 90),
    zone: "East",
    district: "Patna City",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "21",
    alignmentName: "Commercial Financing Solutions",
    dealerName: "Kia Motors",
    location: "Guwahati",
    effectiveStartDate: subDays(new Date(), 80),
    zone: "Northeast",
    district: "Guwahati Urban",
    status: 'active',
    type: 'fordCredit'
  },
  
  {
    id: "22",
    alignmentName: "Government Fleet Program",
    dealerName: "MG Motors",
    location: "Thiruvananthapuram",
    effectiveStartDate: subDays(new Date(), 75),
    zone: "South",
    district: "Trivandrum City",
    status: 'active',
    type: 'fleet'
  },
  {
    id: "23",
    alignmentName: "Commercial Vehicle Solutions",
    dealerName: "Skoda Ford",
    location: "Ranchi",
    effectiveStartDate: subDays(new Date(), 210),
    effectiveEndDate: subDays(new Date(), 120),
    zone: "East",
    district: "Ranchi Urban",
    status: 'history',
    type: 'fleet'
  },
  {
    id: "24",
    alignmentName: "Ride-Sharing Fleet Partnership",
    dealerName: "Nissan Ford",
    location: "Bhubaneswar",
    effectiveStartDate: subDays(new Date(), 85),
    zone: "East",
    district: "Bhubaneswar City",
    status: 'active',
    type: 'fleet'
  },
  
  // Additional Historical Sales Alignment Data
  {
    id: "25",
    alignmentName: "Q4 2022 Sales Realignment",
    dealerName: "Chandra Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2022, 9, 15), // Oct 15, 2022
    effectiveEndDate: new Date(2023, 0, 10), // Jan 10, 2023
    zone: "West",
    district: "Mumbai Central",
    status: 'history',
    type: 'sales'
  },
  {
    id: "26",
    alignmentName: "Northern Territory Sales Update",
    dealerName: "Himalayan Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2023, 1, 5), // Feb 5, 2023
    effectiveEndDate: new Date(2023, 3, 20), // Apr 20, 2023
    zone: "North",
    district: "Delhi South",
    status: 'history',
    type: 'sales'
  },
  {
    id: "27",
    alignmentName: "Eastern Sales Network Restructure",
    dealerName: "Bengal Ford",
    location: "Kolkata",
    effectiveStartDate: new Date(2023, 3, 1), // Apr 1, 2023
    effectiveEndDate: new Date(2023, 5, 15), // Jun 15, 2023
    zone: "East",
    district: "Kolkata Central",
    status: 'history',
    type: 'sales'
  },
  {
    id: "28",
    alignmentName: "Southern Territory Reformation",
    dealerName: "Chennai Motors",
    location: "Chennai",
    effectiveStartDate: new Date(2023, 5, 10), // Jun 10, 2023
    effectiveEndDate: new Date(2023, 7, 25), // Aug 25, 2023
    zone: "South",
    district: "Chennai North",
    status: 'history',
    type: 'sales'
  },
  {
    id: "29",
    alignmentName: "Western Coastal Sales Initiative",
    dealerName: "Konkan Ford",
    location: "Goa",
    effectiveStartDate: new Date(2023, 7, 1), // Aug 1, 2023
    effectiveEndDate: new Date(2023, 9, 15), // Oct 15, 2023
    zone: "West",
    district: "Coastal Region",
    status: 'history',
    type: 'sales'
  },
  {
    id: "30",
    alignmentName: "Metropolitan Sales Restructure",
    dealerName: "Urban Motors",
    location: "Bangalore",
    effectiveStartDate: new Date(2023, 9, 1), // Oct 1, 2023
    effectiveEndDate: new Date(2023, 11, 1), // Dec 1, 2023
    zone: "South",
    district: "Bangalore Urban",
    status: 'history',
    type: 'sales'
  },
  {
    id: "31",
    alignmentName: "Q1 2023 Sales Territory Update",
    dealerName: "New Delhi Ford",
    location: "Delhi",
    effectiveStartDate: new Date(2023, 0, 5), // Jan 5, 2023
    effectiveEndDate: new Date(2023, 2, 25), // Mar 25, 2023
    zone: "North",
    district: "Delhi East",
    status: 'history',
    type: 'sales'
  },
  {
    id: "32",
    alignmentName: "Central India Sales Redistribution",
    dealerName: "Madhya Motors",
    location: "Indore",
    effectiveStartDate: new Date(2023, 2, 10), // Mar 10, 2023
    effectiveEndDate: new Date(2023, 4, 30), // May 30, 2023
    zone: "Central",
    district: "Indore Region",
    status: 'history',
    type: 'sales'
  },
  {
    id: "33",
    alignmentName: "Tier 2 Cities Sales Focus",
    dealerName: "Emerging Ford",
    location: "Jaipur",
    effectiveStartDate: new Date(2023, 4, 15), // May 15, 2023
    effectiveEndDate: new Date(2023, 6, 25), // Jul 25, 2023
    zone: "North",
    district: "Jaipur Urban",
    status: 'history',
    type: 'sales'
  },
  {
    id: "34",
    alignmentName: "Rural Market Expansion",
    dealerName: "Grameen Ford",
    location: "Lucknow",
    effectiveStartDate: new Date(2023, 6, 1), // Jul 1, 2023
    effectiveEndDate: new Date(2023, 8, 20), // Sep 20, 2023
    zone: "North",
    district: "UP Central",
    status: 'history',
    type: 'sales'
  },
  {
    id: "35",
    alignmentName: "Festive Season Sales Alignment",
    dealerName: "Celebration Motors",
    location: "Ahmedabad",
    effectiveStartDate: new Date(2023, 8, 5), // Sep 5, 2023
    effectiveEndDate: new Date(2023, 10, 10), // Nov 10, 2023
    zone: "West",
    district: "Gujarat Metro",
    status: 'history',
    type: 'sales'
  },
  {
    id: "36",
    alignmentName: "Year-end Sales Territory Revision",
    dealerName: "Horizon Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2023, 10, 1), // Nov 1, 2023
    effectiveEndDate: new Date(2024, 0, 15), // Jan 15, 2024
    zone: "South",
    district: "Hyderabad Region",
    status: 'history',
    type: 'sales'
  },
  
  // Additional Historical Sales Ops Alignment Data
  {
    id: "37",
    alignmentName: "Sales Ops Process Optimization",
    dealerName: "Process Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2022, 10, 1), // Nov 1, 2022
    effectiveEndDate: new Date(2023, 0, 31), // Jan 31, 2023
    zone: "West",
    district: "Mumbai Suburban",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "38",
    alignmentName: "Sales Operations Digital Transformation",
    dealerName: "Digital Motors",
    location: "Bangalore",
    effectiveStartDate: new Date(2023, 0, 15), // Jan 15, 2023
    effectiveEndDate: new Date(2023, 3, 10), // Apr 10, 2023
    zone: "South",
    district: "Tech Hub",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "39",
    alignmentName: "Q2 Sales Ops Restructuring",
    dealerName: "Systematic Ford",
    location: "Chennai",
    effectiveStartDate: new Date(2023, 3, 1), // Apr 1, 2023
    effectiveEndDate: new Date(2023, 5, 30), // Jun 30, 2023
    zone: "South",
    district: "Chennai IT Corridor",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "40",
    alignmentName: "Sales Operations Efficiency Drive",
    dealerName: "Efficient Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2023, 5, 15), // Jun 15, 2023
    effectiveEndDate: new Date(2023, 8, 15), // Sep 15, 2023
    zone: "North",
    district: "Delhi NCR",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "41",
    alignmentName: "Sales Analytics Implementation",
    dealerName: "Insight Ford",
    location: "Pune",
    effectiveStartDate: new Date(2023, 2, 1), // Mar 1, 2023
    effectiveEndDate: new Date(2023, 4, 30), // May 30, 2023
    zone: "West",
    district: "Pune IT Park",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "42",
    alignmentName: "Sales Operations Central Alignment",
    dealerName: "Central Ford",
    location: "Nagpur",
    effectiveStartDate: new Date(2023, 4, 10), // May 10, 2023
    effectiveEndDate: new Date(2023, 6, 25), // Jul 25, 2023
    zone: "Central",
    district: "Nagpur Region",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "43",
    alignmentName: "Eastern Sales Ops Reorganization",
    dealerName: "Eastern Systems",
    location: "Kolkata",
    effectiveStartDate: new Date(2023, 6, 5), // Jul 5, 2023
    effectiveEndDate: new Date(2023, 8, 25), // Sep 25, 2023
    zone: "East",
    district: "Kolkata Business District",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "44",
    alignmentName: "National Sales Ops Integration",
    dealerName: "Integrated Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2023, 8, 1), // Sep 1, 2023
    effectiveEndDate: new Date(2023, 10, 30), // Nov 30, 2023
    zone: "South",
    district: "Hyderabad Central",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "45",
    alignmentName: "Sales Opportunity Tracking System",
    dealerName: "Opportunity Motors",
    location: "Chandigarh",
    effectiveStartDate: new Date(2023, 1, 15), // Feb 15, 2023
    effectiveEndDate: new Date(2023, 3, 30), // Apr 30, 2023
    zone: "North",
    district: "Chandigarh Region",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "46",
    alignmentName: "Pipeline Management Restructure",
    dealerName: "Pipeline Ford",
    location: "Ahmedabad",
    effectiveStartDate: new Date(2023, 7, 10), // Aug 10, 2023
    effectiveEndDate: new Date(2023, 9, 30), // Oct 30, 2023
    zone: "West",
    district: "Gujarat Business Hub",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "47",
    alignmentName: "Year-end Sales Ops Optimization",
    dealerName: "Optimize Motors",
    location: "Jaipur",
    effectiveStartDate: new Date(2023, 10, 15), // Nov 15, 2023
    effectiveEndDate: new Date(2024, 0, 31), // Jan 31, 2024
    zone: "North",
    district: "Jaipur Region",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "48",
    alignmentName: "Sales Operations Reporting Revamp",
    dealerName: "Report Ford",
    location: "Lucknow",
    effectiveStartDate: new Date(2023, 9, 1), // Oct 1, 2023
    effectiveEndDate: new Date(2023, 11, 31), // Dec 31, 2023
    zone: "North",
    district: "UP Central",
    status: 'history',
    type: 'salesOps'
  },
  
  // Additional Historical Service Alignment Data
  {
    id: "49",
    alignmentName: "Service Network Optimization",
    dealerName: "Quick Service Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2022, 11, 1), // Dec 1, 2022
    effectiveEndDate: new Date(2023, 1, 28), // Feb 28, 2023
    zone: "West",
    district: "Mumbai Service District",
    status: 'history',
    type: 'service'
  },
  {
    id: "50",
    alignmentName: "Express Service Implementation",
    dealerName: "Express Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2023, 0, 10), // Jan 10, 2023
    effectiveEndDate: new Date(2023, 2, 31), // Mar 31, 2023
    zone: "North",
    district: "Delhi Service Zone",
    status: 'history',
    type: 'service'
  },
  {
    id: "51",
    alignmentName: "Service Quality Enhancement",
    dealerName: "Quality Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2023, 2, 1), // Mar 1, 2023
    effectiveEndDate: new Date(2023, 4, 31), // May 31, 2023
    zone: "South",
    district: "Bangalore Service Hub",
    status: 'history',
    type: 'service'
  },
  {
    id: "52",
    alignmentName: "Preventive Maintenance Program",
    dealerName: "Preventive Motors",
    location: "Chennai",
    effectiveStartDate: new Date(2023, 4, 15), // May 15, 2023
    effectiveEndDate: new Date(2023, 7, 15), // Aug 15, 2023
    zone: "South",
    district: "Chennai Service Zone",
    status: 'history',
    type: 'service'
  },
  {
    id: "53",
    alignmentName: "Western Region Service Restructure",
    dealerName: "Western Service Ford",
    location: "Pune",
    effectiveStartDate: new Date(2023, 1, 1), // Feb 1, 2023
    effectiveEndDate: new Date(2023, 3, 30), // Apr 30, 2023
    zone: "West",
    district: "Pune Service District",
    status: 'history',
    type: 'service'
  },
  {
    id: "54",
    alignmentName: "Eastern Service Network Expansion",
    dealerName: "Eastern Service Motors",
    location: "Kolkata",
    effectiveStartDate: new Date(2023, 3, 10), // Apr 10, 2023
    effectiveEndDate: new Date(2023, 6, 15), // Jul 15, 2023
    zone: "East",
    district: "Kolkata Service Zone",
    status: 'history',
    type: 'service'
  },
  {
    id: "55",
    alignmentName: "Service Center Consolidation",
    dealerName: "Consolidated Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2023, 6, 1), // Jul 1, 2023
    effectiveEndDate: new Date(2023, 8, 30), // Sep 30, 2023
    zone: "South",
    district: "Hyderabad Service District",
    status: 'history',
    type: 'service'
  },
  {
    id: "56",
    alignmentName: "Northern Service Hub Alignment",
    dealerName: "Northern Service",
    location: "Chandigarh",
    effectiveStartDate: new Date(2023, 8, 15), // Sep 15, 2023
    effectiveEndDate: new Date(2023, 11, 15), // Dec 15, 2023
    zone: "North",
    district: "Chandigarh Service Zone",
    status: 'history',
    type: 'service'
  },
  {
    id: "57",
    alignmentName: "Service Technician Allocation",
    dealerName: "Skilled Ford",
    location: "Jaipur",
    effectiveStartDate: new Date(2023, 5, 1), // Jun 1, 2023
    effectiveEndDate: new Date(2023, 7, 31), // Aug 31, 2023
    zone: "North",
    district: "Jaipur Service Region",
    status: 'history',
    type: 'service'
  },
  {
    id: "58",
    alignmentName: "Service Parts Logistics Optimization",
    dealerName: "Parts Ford",
    location: "Ahmedabad",
    effectiveStartDate: new Date(2023, 7, 10), // Aug 10, 2023
    effectiveEndDate: new Date(2023, 10, 10), // Nov 10, 2023
    zone: "West",
    district: "Gujarat Service Network",
    status: 'history',
    type: 'service'
  },
  {
    id: "59",
    alignmentName: "Customer Service Experience Improvement",
    dealerName: "Experience Motors",
    location: "Lucknow",
    effectiveStartDate: new Date(2023, 9, 1), // Oct 1, 2023
    effectiveEndDate: new Date(2023, 11, 31), // Dec 31, 2023
    zone: "North",
    district: "UP Service Zone",
    status: 'history',
    type: 'service'
  },
  {
    id: "60",
    alignmentName: "Year-end Service Network Evaluation",
    dealerName: "Evaluate Ford",
    location: "Bhopal",
    effectiveStartDate: new Date(2023, 10, 15), // Nov 15, 2023
    effectiveEndDate: new Date(2024, 0, 31), // Jan 31, 2024
    zone: "Central",
    district: "MP Service Region",
    status: 'history',
    type: 'service'
  },
  
  // Additional Historical Ford Pro Elite Alignment Data
  {
    id: "61",
    alignmentName: "Elite Business Solutions Rollout",
    dealerName: "Business Elite Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2022, 11, 15), // Dec 15, 2022
    effectiveEndDate: new Date(2023, 2, 15), // Mar 15, 2023
    zone: "West",
    district: "Mumbai Corporate",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "62",
    alignmentName: "Corporate Customer Program Update",
    dealerName: "Corporate Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2023, 1, 1), // Feb 1, 2023
    effectiveEndDate: new Date(2023, 3, 30), // Apr 30, 2023
    zone: "North",
    district: "Delhi Business District",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "63",
    alignmentName: "Premium Client Territory Revision",
    dealerName: "Premium Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2023, 3, 15), // Apr 15, 2023
    effectiveEndDate: new Date(2023, 6, 15), // Jul 15, 2023
    zone: "South",
    district: "Bangalore Tech Park",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "64",
    alignmentName: "Elite Customer Experience Enhancement",
    dealerName: "Experience Elite",
    location: "Chennai",
    effectiveStartDate: new Date(2023, 6, 1), // Jul 1, 2023
    effectiveEndDate: new Date(2023, 8, 30), // Sep 30, 2023
    zone: "South",
    district: "Chennai Business Hub",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "65",
    alignmentName: "Western Business Solutions Network",
    dealerName: "Western Elite Ford",
    location: "Pune",
    effectiveStartDate: new Date(2023, 2, 10), // Mar 10, 2023
    effectiveEndDate: new Date(2023, 5, 10), // Jun 10, 2023
    zone: "West",
    district: "Pune Corporate Park",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "66",
    alignmentName: "Eastern Elite Client Services",
    dealerName: "Eastern Elite Motors",
    location: "Kolkata",
    effectiveStartDate: new Date(2023, 4, 15), // May 15, 2023
    effectiveEndDate: new Date(2023, 7, 15), // Aug 15, 2023
    zone: "East",
    district: "Kolkata Business Zone",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "67",
    alignmentName: "Premium Fleet Management Solutions",
    dealerName: "Premium Fleet Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2023, 7, 1), // Aug 1, 2023
    effectiveEndDate: new Date(2023, 9, 30), // Oct 30, 2023
    zone: "South",
    district: "Hyderabad Hi-Tech City",
    status: 'history',
    type: 'fordProElite'
  },
  
  // Ford Credit Historical Data (2024-2025)
  {
    id: "68",
    alignmentName: "Q1 2024 Credit Strategy",
    dealerName: "Finance Motors",
    location: "Mumbai",
    effectiveStartDate: new Date(2024, 0, 15), // Jan 15, 2024
    effectiveEndDate: new Date(2024, 3, 15), // Apr 15, 2024
    zone: "West",
    district: "Mumbai Financial District",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "69",
    alignmentName: "Spring Finance Campaign",
    dealerName: "Springtime Ford",
    location: "Delhi",
    effectiveStartDate: new Date(2024, 2, 1), // Mar 1, 2024
    effectiveEndDate: new Date(2024, 4, 30), // May 30, 2024
    zone: "North",
    district: "Delhi Credit Zone",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "70",
    alignmentName: "Affordable Financing Initiative",
    dealerName: "Accessible Motors",
    location: "Chennai",
    effectiveStartDate: new Date(2024, 4, 15), // May 15, 2024
    effectiveEndDate: new Date(2024, 7, 15), // Aug 15, 2024
    zone: "South",
    district: "Chennai Finance Hub",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "71",
    alignmentName: "Credit Risk Assessment Revamp",
    dealerName: "Prudent Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2024, 6, 1), // Jul 1, 2024
    effectiveEndDate: new Date(2024, 9, 1), // Oct 1, 2024
    zone: "South",
    district: "Bangalore Finance District",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "72",
    alignmentName: "Festive Season Finance Options",
    dealerName: "Festival Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2024, 8, 15), // Sep 15, 2024
    effectiveEndDate: new Date(2024, 11, 15), // Dec 15, 2024
    zone: "South",
    district: "Hyderabad Credit Zone",
    status: 'history',
    type: 'fordCredit'
  },
  {
    id: "73",
    alignmentName: "Year-end Credit Promotion",
    dealerName: "Yearend Motors",
    location: "Kolkata",
    effectiveStartDate: new Date(2024, 10, 1), // Nov 1, 2024
    effectiveEndDate: new Date(2025, 0, 31), // Jan 31, 2025
    zone: "East",
    district: "Kolkata Finance District",
    status: 'history',
    type: 'fordCredit'
  },
  
  // Fleet Historical Data (2024-2025)
  {
    id: "74",
    alignmentName: "Corporate Fleet Program 2024",
    dealerName: "Corporate Fleet Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2024, 0, 10), // Jan 10, 2024
    effectiveEndDate: new Date(2024, 3, 10), // Apr 10, 2024
    zone: "West",
    district: "Mumbai Corporate Park",
    status: 'history',
    type: 'fleet'
  },
  {
    id: "75",
    alignmentName: "Government Fleet Partnership",
    dealerName: "Government Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2024, 2, 15), // Mar 15, 2024
    effectiveEndDate: new Date(2024, 5, 15), // Jun 15, 2024
    zone: "North",
    district: "Delhi Administrative Zone",
    status: 'history',
    type: 'fleet'
  },
  {
    id: "76",
    alignmentName: "Logistics Fleet Solutions",
    dealerName: "Logistics Ford",
    location: "Chennai",
    effectiveStartDate: new Date(2024, 4, 1), // May 1, 2024
    effectiveEndDate: new Date(2024, 7, 1), // Aug 1, 2024
    zone: "South",
    district: "Chennai Port Zone",
    status: 'history',
    type: 'fleet'
  },
  {
    id: "77",
    alignmentName: "Technology Sector Fleet Program",
    dealerName: "Tech Fleet Motors",
    location: "Bangalore",
    effectiveStartDate: new Date(2024, 6, 15), // Jul 15, 2024
    effectiveEndDate: new Date(2024, 9, 15), // Oct 15, 2024
    zone: "South",
    district: "Bangalore Tech Park",
    status: 'history',
    type: 'fleet'
  },
  {
    id: "78",
    alignmentName: "Healthcare Fleet Initiative",
    dealerName: "Healthcare Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2024, 8, 1), // Sep 1, 2024
    effectiveEndDate: new Date(2024, 11, 1), // Dec 1, 2024
    zone: "South",
    district: "Hyderabad Medical Hub",
    status: 'history',
    type: 'fleet'
  },
  {
    id: "79",
    alignmentName: "Urban Mobility Fleet Solutions",
    dealerName: "Urban Fleet Motors",
    location: "Pune",
    effectiveStartDate: new Date(2024, 10, 15), // Nov 15, 2024
    effectiveEndDate: new Date(2025, 1, 15), // Feb 15, 2025
    zone: "West",
    district: "Pune Urban Zone",
    status: 'history',
    type: 'fleet'
  },
  
  // Sales Historical Data (2024-2025)
  {
    id: "80",
    alignmentName: "Q1 2024 Sales Strategy",
    dealerName: "Strategy Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2024, 0, 5), // Jan 5, 2024
    effectiveEndDate: new Date(2024, 2, 31), // Mar 31, 2024
    zone: "West",
    district: "Mumbai Sales Territory",
    status: 'history',
    type: 'sales'
  },
  {
    id: "81",
    alignmentName: "Northern Sales Expansion",
    dealerName: "Expansion Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2024, 2, 1), // Mar 1, 2024
    effectiveEndDate: new Date(2024, 4, 30), // May 30, 2024
    zone: "North",
    district: "Delhi NCR Sales",
    status: 'history',
    type: 'sales'
  },
  {
    id: "82",
    alignmentName: "Summer Sales Campaign",
    dealerName: "Summer Ford",
    location: "Chennai",
    effectiveStartDate: new Date(2024, 4, 15), // May 15, 2024
    effectiveEndDate: new Date(2024, 6, 30), // Jul 30, 2024
    zone: "South",
    district: "Chennai Metro Sales",
    status: 'history',
    type: 'sales'
  },
  {
    id: "83",
    alignmentName: "Monsoon Special Sales Drive",
    dealerName: "Monsoon Motors",
    location: "Kolkata",
    effectiveStartDate: new Date(2024, 6, 1), // Jul 1, 2024
    effectiveEndDate: new Date(2024, 8, 30), // Sep 30, 2024
    zone: "East",
    district: "Kolkata Sales Territory",
    status: 'history',
    type: 'sales'
  },
  {
    id: "84",
    alignmentName: "Festive Sales Bonanza",
    dealerName: "Festive Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2024, 8, 15), // Sep 15, 2024
    effectiveEndDate: new Date(2024, 10, 15), // Nov 15, 2024
    zone: "South",
    district: "Bangalore Urban Sales",
    status: 'history',
    type: 'sales'
  },
  {
    id: "85",
    alignmentName: "Winter Sales Strategy",
    dealerName: "Winter Motors",
    location: "Hyderabad",
    effectiveStartDate: new Date(2024, 10, 1), // Nov 1, 2024
    effectiveEndDate: new Date(2025, 0, 31), // Jan 31, 2025
    zone: "South",
    district: "Hyderabad Sales Zone",
    status: 'history',
    type: 'sales'
  },
  
  // Sales Ops Historical Data (2024-2025)
  {
    id: "86",
    alignmentName: "2024 Sales Ops Optimization",
    dealerName: "Optimal Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2024, 0, 15), // Jan 15, 2024
    effectiveEndDate: new Date(2024, 3, 15), // Apr 15, 2024
    zone: "West",
    district: "Mumbai Operations",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "87",
    alignmentName: "Digital Sales Process Implementation",
    dealerName: "Digital Process Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2024, 2, 1), // Mar 1, 2024
    effectiveEndDate: new Date(2024, 4, 30), // May 30, 2024
    zone: "South",
    district: "Bangalore Digital Hub",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "88",
    alignmentName: "Sales Analytics Enhancement",
    dealerName: "Analytics Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2024, 4, 15), // May 15, 2024
    effectiveEndDate: new Date(2024, 7, 15), // Aug 15, 2024
    zone: "North",
    district: "Delhi Business Intelligence",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "89",
    alignmentName: "CRM System Integration",
    dealerName: "Integrated Ford",
    location: "Chennai",
    effectiveStartDate: new Date(2024, 6, 1), // Jul 1, 2024
    effectiveEndDate: new Date(2024, 9, 1), // Oct 1, 2024
    zone: "South",
    district: "Chennai IT Zone",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "90",
    alignmentName: "Lead Management Optimization",
    dealerName: "Lead Motors",
    location: "Hyderabad",
    effectiveStartDate: new Date(2024, 8, 15), // Sep 15, 2024
    effectiveEndDate: new Date(2024, 11, 15), // Dec 15, 2024
    zone: "South",
    district: "Hyderabad Sales Ops",
    status: 'history',
    type: 'salesOps'
  },
  {
    id: "91",
    alignmentName: "Sales Forecasting System Upgrade",
    dealerName: "Forecast Ford",
    location: "Pune",
    effectiveStartDate: new Date(2024, 10, 1), // Nov 1, 2024
    effectiveEndDate: new Date(2025, 1, 1), // Feb 1, 2025
    zone: "West",
    district: "Pune Business Center",
    status: 'history',
    type: 'salesOps'
  },
  
  // Service Historical Data (2024-2025)
  {
    id: "92",
    alignmentName: "2024 Service Network Expansion",
    dealerName: "Network Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2024, 0, 10), // Jan 10, 2024
    effectiveEndDate: new Date(2024, 3, 10), // Apr 10, 2024
    zone: "West",
    district: "Mumbai Service Network",
    status: 'history',
    type: 'service'
  },
  {
    id: "93",
    alignmentName: "Quick Service Enhancement",
    dealerName: "Quick Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2024, 2, 15), // Mar 15, 2024
    effectiveEndDate: new Date(2024, 5, 15), // Jun 15, 2024
    zone: "North",
    district: "Delhi Service Express",
    status: 'history',
    type: 'service'
  },
  {
    id: "94",
    alignmentName: "Service Digitalization Project",
    dealerName: "Digital Service Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2024, 4, 1), // May 1, 2024
    effectiveEndDate: new Date(2024, 7, 1), // Aug 1, 2024
    zone: "South",
    district: "Bangalore Tech Service",
    status: 'history',
    type: 'service'
  },
  {
    id: "95",
    alignmentName: "Preventive Maintenance Campaign",
    dealerName: "Preventive Ford",
    location: "Chennai",
    effectiveStartDate: new Date(2024, 6, 15), // Jul 15, 2024
    effectiveEndDate: new Date(2024, 9, 15), // Oct 15, 2024
    zone: "South",
    district: "Chennai Service Hub",
    status: 'history',
    type: 'service'
  },
  {
    id: "96",
    alignmentName: "Service Parts Logistics Revamp",
    dealerName: "Parts Logistics Motors",
    location: "Hyderabad",
    effectiveStartDate: new Date(2024, 8, 1), // Sep 1, 2024
    effectiveEndDate: new Date(2024, 11, 1), // Dec 1, 2024
    zone: "South",
    district: "Hyderabad Parts Center",
    status: 'history',
    type: 'service'
  },
  {
    id: "97",
    alignmentName: "Winter Service Readiness",
    dealerName: "Winter Service Ford",
    location: "Kolkata",
    effectiveStartDate: new Date(2024, 10, 15), // Nov 15, 2024
    effectiveEndDate: new Date(2025, 1, 15), // Feb 15, 2025
    zone: "East",
    district: "Kolkata Service District",
    status: 'history',
    type: 'service'
  },
  
  // Ford Pro Elite Historical Data (2024-2025)
  {
    id: "98",
    alignmentName: "2024 Elite Business Solutions",
    dealerName: "Elite Business Ford",
    location: "Mumbai",
    effectiveStartDate: new Date(2024, 0, 5), // Jan 5, 2024
    effectiveEndDate: new Date(2024, 3, 5), // Apr 5, 2024
    zone: "West",
    district: "Mumbai Elite Business",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "99",
    alignmentName: "Corporate Elite Program Upgrade",
    dealerName: "Corporate Elite Motors",
    location: "Delhi",
    effectiveStartDate: new Date(2024, 2, 1), // Mar 1, 2024
    effectiveEndDate: new Date(2024, 5, 1), // Jun 1, 2024
    zone: "North",
    district: "Delhi Corporate Hub",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "100",
    alignmentName: "Premium Business Fleet Solutions",
    dealerName: "Premium Business Ford",
    location: "Bangalore",
    effectiveStartDate: new Date(2024, 4, 15), // May 15, 2024
    effectiveEndDate: new Date(2024, 7, 15), // Aug 15, 2024
    zone: "South",
    district: "Bangalore Business Park",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "101",
    alignmentName: "Elite Customer Experience Revolution",
    dealerName: "Experience Elite Motors",
    location: "Chennai",
    effectiveStartDate: new Date(2024, 6, 1), // Jul 1, 2024
    effectiveEndDate: new Date(2024, 9, 1), // Oct 1, 2024
    zone: "South",
    district: "Chennai Elite Zone",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "102",
    alignmentName: "Enterprise Solutions Package",
    dealerName: "Enterprise Ford",
    location: "Hyderabad",
    effectiveStartDate: new Date(2024, 8, 15), // Sep 15, 2024
    effectiveEndDate: new Date(2024, 11, 15), // Dec 15, 2024
    zone: "South",
    district: "Hyderabad Enterprise Hub",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "103",
    alignmentName: "Strategic Business Partnership",
    dealerName: "Strategic Motors",
    location: "Pune",
    effectiveStartDate: new Date(2024, 10, 1), // Nov 1, 2024
    effectiveEndDate: new Date(2025, 1, 1), // Feb 1, 2025
    zone: "West",
    district: "Pune Strategic District",
    status: 'history',
    type: 'fordProElite'
  },
  {
    id: "104",
    alignmentName: "Elite Business Innovation Program",
    dealerName: "Innovation Ford",
    location: "Kolkata",
    effectiveStartDate: new Date(2024, 11, 15), // Dec 15, 2024
    effectiveEndDate: new Date(2025, 1, 28), // Feb 28, 2025
    zone: "East",
    district: "Kolkata Innovation Hub",
    status: 'history',
    type: 'fordProElite'
  }
];
