import * as React from 'react';

export function generateStaticParams() {
  return [{ id: 'demo' }];
}

export default function ProjectPage() {
  return (
    <div className="space-y-12 pb-24">
      <h1>Project Page</h1>
      <p>This page is under construction.</p>
    </div>
  );
} 