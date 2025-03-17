
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

// Sample data - in a real app, this would come from an API
const initialContacts = [
  { id: 1, name: "John Smith", email: "john.smith@example.com", phone: "555-1234", company: "Acme Motors" },
  { id: 2, name: "Jane Doe", email: "jane.doe@example.com", phone: "555-5678", company: "XYZ Autos" },
  { id: 3, name: "John Smith", email: "johnsmith@gmail.com", phone: "555-9012", company: "Acme Motors" },
  { id: 4, name: "Alice Johnson", email: "alice@example.com", phone: "555-3456", company: "City Cars" },
  { id: 5, name: "Bob Williams", email: "bob@example.com", phone: "555-7890", company: "Town Motors" },
  { id: 6, name: "J. Smith", email: "john.smith@example.com", phone: "555-1234", company: "Acme Inc." },
];

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
}

const ContactBook = () => {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [mergeDialogOpen, setMergeDialogOpen] = useState(false);
  const [mergedContact, setMergedContact] = useState<Contact | null>(null);
  const { toast } = useToast();

  const findPotentialDuplicates = () => {
    // Simple duplicate detection by name similarity
    const nameMap = new Map<string, Contact[]>();
    
    contacts.forEach(contact => {
      // Normalize name for comparison
      const normalizedName = contact.name.toLowerCase().replace(/\s+/g, '');
      if (!nameMap.has(normalizedName)) {
        nameMap.set(normalizedName, []);
      }
      nameMap.get(normalizedName)?.push(contact);
    });

    const duplicates: Contact[][] = [];
    nameMap.forEach(group => {
      if (group.length > 1) {
        duplicates.push(group);
      }
    });
    
    // Return the first duplicate group if it exists
    return duplicates.length > 0 ? duplicates[0] : [];
  };

  const handleFindDuplicates = () => {
    const duplicates = findPotentialDuplicates();
    if (duplicates.length > 0) {
      setSelectedContacts(duplicates);
      setMergeDialogOpen(true);
    } else {
      toast({
        title: "No duplicates found",
        description: "We couldn't find any potential duplicate contacts.",
      });
    }
  };

  const handleMergeContacts = () => {
    if (selectedContacts.length < 2 || !mergedContact) return;

    // Create a new contacts array without the selected duplicates and with the new merged contact
    const newContacts = contacts.filter(c => !selectedContacts.some(sc => sc.id === c.id));
    newContacts.push(mergedContact);
    
    setContacts(newContacts);
    setMergeDialogOpen(false);
    setSelectedContacts([]);
    setMergedContact(null);

    toast({
      title: "Contacts merged",
      description: `Successfully merged ${selectedContacts.length} contacts.`,
    });
  };

  const handleCreateMergedContact = () => {
    if (selectedContacts.length < 2) return;
    
    // Take the data from the first contact as a base
    const base = { ...selectedContacts[0] };
    
    // Generate a new ID (in a real app, the server would do this)
    const newId = Math.max(...contacts.map(c => c.id)) + 1;
    
    setMergedContact({
      ...base,
      id: newId
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Book</h1>
      
      <div className="flex justify-between items-center mb-4">
        <Button onClick={handleFindDuplicates} variant="default">
          Find Duplicate Contacts
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Company</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={mergeDialogOpen} onOpenChange={setMergeDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Merge Duplicate Contacts</DialogTitle>
            <DialogDescription>
              We found potential duplicate contacts. Select which data to keep in the merged contact.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Select</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Company</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="text-center">
                      <Checkbox
                        checked={mergedContact?.id === contact.id}
                        onCheckedChange={() => setMergedContact(contact)}
                      />
                    </TableCell>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setMergeDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleCreateMergedContact}
              disabled={selectedContacts.length < 2}
              variant="secondary"
            >
              Preview Merge
            </Button>
            <Button 
              onClick={handleMergeContacts}
              disabled={!mergedContact}
            >
              Merge Contacts
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactBook;
