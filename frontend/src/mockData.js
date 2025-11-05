// --- This file has the "un-clubbed" 1-to-1 data ---

// 1. Mock data for the "Head of Student Activities"
export const headOfStudentActivities = {
  id: 100,
  name: 'Dr. Suranjana Gangopadhyay',
  department: 'Head of Student Activities (HSA)',
  committees: ['Oversees all student committees'], // This "committee" is a role
  photo: 'https://placehold.co/200x200/c70039/white?text=HSA'
};

// 2. Mock data for the "Live Announcements" (Unchanged)
export const mockAnnouncements = [
  { id: 1, date: 'Oct 30, 2025', title: 'Q4 Budget Submissions Now Open', snippet: 'All committee treasurers must submit their Q4 budget proposals by November 15th for faculty review.' },
  { id: 2, date: 'Oct 28, 2025', title: 'New Reimbursement Policy Update', snippet: 'Please note the new policy update: all food-related expenses now require pre-approval from your faculty advisor. No exceptions.' },
  { id: 3, date: 'Oct 25, 2025', title: 'Technovanza 2026 Portal is Live', snippet: 'Faculty advisors and treasurers for Technovanza can now log in to the portal to begin verifying sponsor income and logging initial expenses.' },
  { id: 4, date: 'Oct 22, 2025', title: 'Welcome to the Committee Coordinator', snippet: 'This new portal is now the official source for all committee financial tracking. Please report any bugs to the Digital VJTI team.'},
  { id: 5, date: 'Oct 20, 2025', title: 'Faculty Advisor Assignments Finalized', snippet: 'The 2025-2026 faculty advisor assignments have been finalized. Please review the new "Faculty Advisors" page for details.'}
];

// 3. Mock data for the "Faculty Advisors" page
// --- FIXED 1-to-1 DUMMY LIST (no "clubbing") ---
// Each professor is now a separate entry in the list.
export const mockFaculty = [
  {
    id: 1,
    name: 'Prof. S.S Rechavula',
    department: 'Computer Engineering',
    committees: ['Digital VJTI'], // One committee
    photo: 'https://placehold.co/200x200/0a1f49/white?text=SSR'
  },
  {
    id: 1.5, // Added new ID
    name: 'Prof. A. C. Mehta', // New prof
    department: 'Computer Engineering',
    committees: ['COC (Community of Coders)'], // One committee
    photo: 'https://placehold.co/200x200/0a1f49/white?text=ACM'
  },
  {
    id: 2,
    name: 'Prof. A. M. Kulkarni',
    department: 'Mechanical Engineering',
    committees: ['VJTI Racing'], // One committee
    photo: 'https://placehold.co/200x200/016fbe/white?text=AMK'
  },
  {
    id: 2.5, // Added new ID
    name: 'Prof. S. R. Patil', // New prof
    department: 'Mechanical Engineering',
    committees: ['SRA (Society of Robotics)'], // One committee
    photo: 'https://placehold.co/200x200/016fbe/white?text=SRP'
  },
  {
    id: 3,
    name: 'Prof. R. P. Singh',
    department: 'Civil Engineering',
    committees: ['Pratibimb'], // One committee
    photo: 'https://placehold.co/200x200/0a1f49/white?text=RPS'
  },
  {
    id: 3.5, // Added new ID
    name: 'Prof. V. A. Dixit', // New prof
    department: 'Civil Engineering',
    committees: ['Enthusia'], // One committee
    photo: 'https://placehold.co/200x200/0a1f49/white?text=VAD'
  },
  {
    id: 4,
    name: 'Prof. P. V. Shah',
    department: 'Electronics Engineering',
    committees: ['E-Cell'], // One committee
    photo: 'https://placehold.co/200x200/016fbe/white?text=PVS'
  },
  {
    id: 4.5, // Added new ID
    name: 'Prof. B. V. Joshi', // New prof
    department: 'Electronics Engineering',
    committees: ['Technovanza'], // One committee
    photo: 'https://placehold.co/200x200/016fbe/white?text=BVJ'
  },
  {
    id: 5,
    name: 'Prof. L. N. Gupta',
    department: 'Humanities',
    committees: ['Rangawardhan'], // One committee
    photo: 'https://placehold.co/200x200/0a1f49/white?text=LNG'
  },
  {
    id: 6,
    name: 'Prof. M. K. Rao',
    department: 'Administration',
    committees: ['Alumni Association'], // One committee
    photo: 'https://placehold.co/200x200/016fbe/white?text=MKR'
  },
  {
    id: 7,
    name: 'Prof. D. R. Sahu',
    department: 'Production Engineering',
    committees: ['Synergists'], // One committee
    photo: 'https://placehold.co/200x200/0a1f49/white?text=DRS'
  },
  {
    id: 8,
    name: 'Prof. V. A. Dixit',
    department: 'Civil Engineering',
    committees: ['Vishwa VJTI'], // One committee
    photo: 'https://placehold.co/200x200/016fbe/white?text=VAD'
  },
];