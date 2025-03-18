
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
  }
];
