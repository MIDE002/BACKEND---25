// hallMatching.ts

// Define a mapping of hostel names to corresponding hall admin email domains
const hallAdminDomains: Record<string, string> = {
    samuelakandehall: '@samuelakandehall.babcock.edu.ng',
    topazhall: '@topazhall.babcock.edu.ng',
    winslowhall: '@winslow.babcock.edu.ng',
    welchhall: '@welchhall.babcock.edu.ng',
    nealwilsonhall: '@nealwilsonhall.babcock.edu.ng',
    gideonbethelhall: '@gideontrooperhall.babcock.edu.ng',
    bethelhall: '@bethelhall.babcock.edu.ng',
    emeraldhall: '@emeraldhall.babcock.edu.ng',
    gamalielhall: '@gamalielhall.babcock.edu.ng',
    crystalhall: '@crystalhall.babcock.edu.ng',
    justicedeborahhall: '@justicedeborahhall.babcock.edu.ng',
    feliciaadebisihall: '@feliciaadebisihall.babcock.edu.ng',
    nyberghall: '@nyberghall.babcock.edu.ng',
    ogdenhall: '@ogdenhall.babcock.edu.ng',
    queenestherhall: '@queenestherhall.babcock.edu.ng',
    platinumhall: '@platinumhall.babcock.edu.ng',
    diamondhall: '@diamondhall.babcock.edu.ng',
    whitehall: '@whitehall.babcock.edu.ng',
    havillahhall: '@havillahhall.babcock.edu.ng'
  };
  
  // Function to get the correct hall admin email domain
  export function getHallAdminEmailDomain(selectedHostel: string | null): string | null {
    if (!selectedHostel) return null;
    
    // Format hostel name to match key format (remove spaces, convert to lowercase)
    const formattedHostel: string = selectedHostel.replace(/\s+/g, '').toLowerCase();
    
    return hallAdminDomains[formattedHostel] || null;
  }
  
  // Define a type for student data
  interface StudentData {
    hostelName: string;
    email: string;
  }
  
  // Function to assign hall admin based on student data
  export function assignHallAdmin(studentData: StudentData): { studentEmail: string; studentHostel: string; assignedHallAdmin: string | null } {
    const { hostelName, email } = studentData;
    const hallAdminEmail: string | null = getHallAdminEmailDomain(hostelName);
  
    if (!hallAdminEmail) {
      console.error('No matching hall admin found for this hostel');
      return {
        studentEmail: email,
        studentHostel: hostelName,
        assignedHallAdmin: null
      };
    }
  
    return {
      studentEmail: email,
      studentHostel: hostelName,
      assignedHallAdmin: hallAdminEmail
    };
  }
  