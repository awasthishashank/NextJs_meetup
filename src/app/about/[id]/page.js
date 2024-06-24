"use client"
import { useParams } from 'next/navigation';

// Hardcoded team member details
const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

export default function TeamMember() {
  const { id } = useParams();

  // Find the team member based on the id
  const member = details.find((member) => member.id === parseInt(id, 10));

  if (!member) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}
