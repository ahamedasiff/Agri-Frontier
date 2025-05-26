import { TeamMember } from '../types';
// Import local images
import FazlaPP from '../assets/FazlaPP.jpg';
import MufeelPP from '../assets/MufeelPP.jpg';
import AsiffPP from '../assets/AsiffPP.jpg';
import AathifPP from '../assets/Aathifpp.jpg';



export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ms. Hansi De Silva",
    role: "Supervisor",
    department: "Faculty of Computing | Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    image: "https://static.sliit.lk/profile/hansid-1604665189.jpg",
    isSupervisor: true,
    email: "hansi.d@sliit.lk"
  },
  {
    id: 2,
    name: "Dr. Lakmini Abeywardhana",
    role: "Co-Supervisor",
    department: "Faculty of Computing | Computer Science",
    institution: "Sri Lanka Institute of Information Technology",
    image: "https://static.sliit.lk/profile/lakminid-1627632446.jpg",
    isSupervisor: true,
    email: "lakmini.d@sliit.lk"
  },
  
    {
    id: 3,
    name: "M.T.M Aathif",
    role: "Team Leader",
    department: "Faculty of Computing | Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    image: AathifPP,
    email: "it21154812@my.sliit.lk"
  },
  {
    id: 4,
    name: "Y.N.A Asiff",
    role: "Team Member",
    department: "Faculty of Computing | Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    image: AsiffPP,
    isSupervisor: false,
    email: "it21154980@my.sliit.lk"
  },
  {
    id: 5,
    name: "M.I.M. Mufeel",
    role: "Team Member",
    department: "Faculty of Computing | Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    image: MufeelPP,
    isSupervisor: false,
    email: "it21159480@my.sliit.lk"
  },
  {
    id: 6,
    name: "H.N.F Fazla",
    role: "Team Member",
    department: "Faculty of Computing | Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    image: FazlaPP,
    isSupervisor: false,
    email: "it21194726@my.sliit.lk"
  }
];