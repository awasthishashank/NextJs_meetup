
'use client';

import { useParams } from 'next/navigation';

const MyDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Details for {id}</h1>
    </div>
  );
};

export default MyDetails;
