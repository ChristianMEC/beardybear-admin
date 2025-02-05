import React from 'react';
import { Link } from 'react-router-dom';
import BarbersTable from './BarbersTable';
import { PageHeader } from '../common/PageHeader';
import { PageHeading } from '../common/PageHeading';

export default function BarbersPage() {
  return (
    <div>
      <PageHeader>
        <PageHeading>Barbers</PageHeading>
        <Link to="barbers/new">New Barber</Link>
      </PageHeader>
      <BarbersTable></BarbersTable>
    </div>
  );
}
