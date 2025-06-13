'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const LeafletMap = dynamic(() => import('@/components/client/leafletMap'), { ssr: false });


export default function MapView(props: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <LeafletMap {...props} className={props.className} /> : null;
}