// This file will hold all our mock data for announcements and faculty.

// 1. Mock data for the "Live Announcements"
export const mockAnnouncements = [
  { 
    id: 1, 
    date: 'Oct 30, 2025', 
    title: 'Q4 Budget Submissions Now Open', 
    snippet: 'All committee treasurers must submit their Q4 budget proposals by November 15th for faculty review.' 
  },
  { 
    id: 2, 
    date: 'Oct 28, 2025', 
    title: 'New Reimbursement Policy Update', 
    snippet: 'Please note the new policy update: all food-related expenses now require pre-approval from your faculty advisor. No exceptions.' 
  },
  { 
    id: 3, 
    date: 'Oct 25, 2025', 
    title: 'Technovanza 2026 Portal is Live', 
    snippet: 'Faculty advisors and treasurers for Technovanza can now log in to the portal to begin verifying sponsor income and logging initial expenses.' 
  },
  {
    id: 4, 
    date: 'Oct 22, 2025', 
    title: 'Welcome to the Committee Coordinator', 
    snippet: 'This new portal is now the official source for all committee financial tracking. Please report any bugs to the Digital VJTI team.'
  },
  {
    id: 5, 
    date: 'Oct 20, 2025', 
    title: 'Faculty Advisor Assignments Finalized', 
    snippet: 'The 2025-2026 faculty advisor assignments have been finalized. Please review the new "Faculty Advisors" page for details.'
  }
];

// 2. Mock data for the "Faculty Advisors" page
export const mockFaculty = [
  {
    id: 1,
    name: 'Prof. S.S rechula',
    department: 'Computer Engineering',
    committees: ['Digital'],
    photo: 'https://placehold.co/200x200/0a1f49/white?text=SRJ'
  },
  {
    id: 2,
    name: 'Prof. A. M. Kulkarni',
    department: 'Mechanical Engineering',
    committees: ['VJTI Racing', 'SRA (Society of Robotics)'],
    photo: 'https://placehold.co/200x200/016fbe/white?text=AMK'
  },
  {
    id: 3,
    name: 'Prof. R. P. Singh',
    department: 'Civil Engineering',
    committees: ['Pratibimb', 'Enthusia'],
    photo: 'https://placehold.co/200x200/0a1f49/white?text=RPS'
  },
  {
    id: 4,
    name: 'Prof. P. V. Shah',
    department: 'Electronics Engineering',
    committees: ['E-Cell', 'Digital VJTI'],
    photo: 'https://placehold.co/200x200/016fbe/white?text=PVS'
  },
  {
    id: 5,
    name: 'Prof. L. N. Gupta',
    department: 'Humanities',
    committees: ['Rangawardhan', 'Debate Society'],
    photo: 'https://placehold.co/200x200/0a1f49/white?text=LNG'
  },
  {
    id: 6,
    name: 'Prof. M. K. Rao',
    department: 'Administration',
    committees: ['Alumni Association'],
    photo: 'https://placehold.co/200x200/016fbe/white?text=MKR'
  },
 
];