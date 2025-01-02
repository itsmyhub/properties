'use client';

import { useActionState } from 'react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};

export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  
//useFormState(action, initialState);
  const [state, formAction] = useFormState(action, initialState)
  //const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}