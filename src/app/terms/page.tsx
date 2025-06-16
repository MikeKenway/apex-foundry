export default function TermsOfServicePage() {
  return (
    <main className='container mx-auto px-4 py-8 max-w-3xl'>
      <div className='bg-zinc-900 p-8 border border-zinc-800'>
        <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>

        <div className='prose prose-invert max-w-none'>
          <p className='text-lg mb-6'>
            This is an open source web-app run by a random community member. I'm
            learning as I go, and I appreciate your patience and feedback.
          </p>

          <div className='space-y-6'>
            <section>
              <h2 className='text-xl font-semibold mb-3'>About This Site</h2>
              <p>
                I'm learning to code and how to run a community site for the
                first time. This means:
              </p>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>I will make mistakes</li>
                <li>Things might break occasionally</li>
                <li>I'm constantly learning and improving</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-semibold mb-3'>
                Feedback & Corrections
              </h2>
              <p>
                Your feedback is valuable! If you notice any issues or have
                suggestions:
              </p>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>Please send feedback through the contact form</li>
                <li>I'll address everything as I have time</li>
                <li>Your patience and understanding are appreciated</li>
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-semibold mb-3'>Usage</h2>
              <p>
                Feel free to use the site and technology however you please. The
                entire tech stack is available on GitHub for anyone to use,
                modify, or learn from.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
