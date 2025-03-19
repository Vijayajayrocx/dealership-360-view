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
  }
];
