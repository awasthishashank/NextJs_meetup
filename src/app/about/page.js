'use client';

import Link from 'next/link';

// Hardcoded team member details
const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

export default function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        {details.map((member) => (
          <li key={member.id}>
            <Link href={`/about/${member.id}`}>
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
