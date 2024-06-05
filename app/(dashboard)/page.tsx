'use client'

import React from 'react';
import Hero from '../components/Hero';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user } = useUser();
  const router = useRouter()

  if (user) router.push('/user')
  else {

    return (
      <Hero />
    );
  }

}

