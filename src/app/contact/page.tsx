'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { PrimaryButton } from '@/components/PrimaryButton';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const subjects = [
  'Questions about Apex Foundry',
  'Report a Bug',
  'Feature Request',
  'General Comments',
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedContactSubject, setSelectedContactSubject] = useState(
    subjects[0]
  );
  const [formSubmissionStatus, setFormSubmissionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted!', data);
    setIsSubmitting(true);
    setFormSubmissionStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setFormSubmissionStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      reset();
      setSelectedContactSubject(subjects[0]);
    } catch (error) {
      setFormSubmissionStatus({
        type: 'error',
        message:
          error instanceof Error ? error.message : 'Failed to send message',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubjectSelect = (subject: string) => {
    setSelectedContactSubject(subject);
    setValue('subject', subject);
    setIsDropdownOpen(false);
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-2xl'>
      <div className='bg-zinc-900 p-8 border border-zinc-800'>
        <h1 className='text-2xl font-bold mb-6'>Contact Us</h1>

        {formSubmissionStatus.type && (
          <div
            className={`p-4 mb-6 ${
              formSubmissionStatus.type === 'success'
                ? 'bg-green-900/50 text-green-400 border border-green-800'
                : 'bg-red-900/50 text-red-400 border border-red-800'
            }`}
          >
            {formSubmissionStatus.message}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-zinc-400 mb-1'
            >
              Name
            </label>
            <input
              id='name'
              type='text'
              {...register('name', { required: 'Name is required' })}
              className='w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-zinc-600 focus:outline-none'
              placeholder='Your name'
            />
            {errors.name && (
              <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-zinc-400 mb-1'
            >
              Email
            </label>
            <input
              id='email'
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className='w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-zinc-600 focus:outline-none'
              placeholder='your.email@example.com'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-zinc-400 mb-1'
            >
              Subject
            </label>
            <div className='relative'>
              <button
                type='button'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 text-left focus:border-zinc-600 focus:outline-none flex justify-between items-center'
              >
                <span
                  className={
                    selectedContactSubject ? 'text-zinc-100' : 'text-zinc-500'
                  }
                >
                  {selectedContactSubject || 'Select a subject'}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              <input
                type='hidden'
                value={selectedContactSubject}
                {...register('subject', { required: 'Subject is required' })}
              />
              {isDropdownOpen && (
                <div className='absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700'>
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      type='button'
                      onClick={() => handleContactSubjectSelect(subject)}
                      className='w-full px-4 py-2 text-left text-zinc-100 hover:bg-zinc-700 focus:outline-none'
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.subject && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-zinc-400 mb-1'
            >
              Message
            </label>
            <textarea
              id='message'
              rows={6}
              {...register('message', { required: 'Message is required' })}
              className='w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:border-zinc-600 focus:outline-none'
              placeholder='Your message here...'
            />
            {errors.message && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.message.message}
              </p>
            )}
          </div>

          <PrimaryButton
            variant='button'
            type='submit'
            disabled={isSubmitting}
            className='w-full'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}
