'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

/**
 * Helper function to create client-only components
 * This prevents hydration errors by ensuring the component only renders client-side
 */
export function createClientOnlyComponent<T>(importFunc: () => Promise<{ default: ComponentType<T> }>) {
  return dynamic(importFunc, {
    ssr: false,
    loading: () => <div className="animate-pulse bg-zinc-800 rounded-lg h-[120px]"></div>
  });
}

/**
 * Utility HOC (Higher Order Component) that ensures a component is only rendered client-side
 * Use this for components that rely on browser APIs
 */
export function withClientOnly<P extends object>(Component: ComponentType<P>) {
  const ClientOnlyComponent = ({ ...props }: P) => {
    return <Component {...props} />;
  };
  
  // Return a dynamically loaded component with SSR disabled
  return dynamic(() => Promise.resolve(ClientOnlyComponent), {
    ssr: false
  });
} 