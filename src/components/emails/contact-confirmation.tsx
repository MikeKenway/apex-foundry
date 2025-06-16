import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Img,
} from '@react-email/components';
import * as React from 'react';

interface ContactConfirmationProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactConfirmation = ({
  subject,
  message,
}: ContactConfirmationProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Got your message, Legend — I&rsquo;ll check it once this ranked
        game&rsquo;s over.
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Logo at top */}
          <Section style={styles.logoWrapper}>
            <Img
              src='https://apexfoundry.gg/images/logo-white.png'
              alt='Apex Foundry Logo'
              width='144'
              style={styles.logo}
            />
          </Section>

          {/* Confirmation message */}
          <Section style={styles.section}>
            <Heading style={styles.heading}>Hey Legend!</Heading>
            <Text style={styles.messageIntro}>
              Thanks for reaching out — your message just hot-dropped into my
              inbox. I&rsquo;ll take a look when I&rsquo;m done throwing my
              current round of ranked.
              <br />
              <br />
              In the meantime, here&rsquo;s what you sent:
            </Text>
          </Section>

          {/* Message details */}
          <Section style={styles.section}>
            <Field
              label='Subject'
              value={subject}
            />

            <Hr style={styles.hr} />

            <Text style={styles.label}>Message</Text>
            <div style={styles.messageBox}>
              <Text style={styles.message}>{message}</Text>
            </div>
          </Section>
          <Section style={styles.footer}>
            <Text style={styles.footerLabel}>Find us online</Text>
            <div style={styles.socialIcons}>
              <a
                href='https://twitter.com/apexfoundry'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Img
                  src='https://cdn.simpleicons.org/x/ffffff'
                  width='24'
                  height='24'
                  alt='Twitter'
                  style={styles.socialIcon}
                />
              </a>
              <a
                href='https://bsky.app/profile/apexfoundry.bsky.social'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Img
                  src='https://cdn.simpleicons.org/bluesky/ffffff'
                  width='24'
                  height='24'
                  alt='Bluesky'
                  style={styles.socialIcon}
                />
              </a>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Field layout component
const Field = ({ label, value }: { label: string; value: string }) => (
  <Text style={styles.label}>
    {label.toUpperCase()}
    <br />
    <span style={styles.value}>{value}</span>
  </Text>
);

const styles = {
  body: {
    backgroundColor: '#0a0a0a',
    padding: '40px 0',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  container: {
    backgroundColor: '#18181b',
    border: '1px solid #3f3f46',
    maxWidth: '600px',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '0',
    padding: '24px',
  },
  logoWrapper: {
    padding: '24px 0 0',
    textAlign: 'left' as const,
  },
  logo: {
    display: 'block',
    margin: 0, // removes auto-centering
  },
  section: {
    padding: '0',
  },
  heading: {
    fontSize: '20px',
    color: '#ffffff',
    marginBottom: '8px',
  },
  messageIntro: {
    fontSize: '14px',
    color: '#d4d4d8',
    lineHeight: '1.6',
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#d4d4d8',
    marginBottom: '4px',
    marginTop: '16px',
    letterSpacing: '0.5px',
  },
  value: {
    fontSize: '15px',
    color: '#e4e4e7',
    fontWeight: 'normal' as const,
  },
  messageBox: {
    backgroundColor: '#1f1f22',
    padding: '20px 24px',
    border: '1px solid #3f3f46',
    borderRadius: '0',
    marginTop: '8px',
  },
  message: {
    color: '#e4e4e7',
    fontSize: '16px',
    lineHeight: '1.75',
    letterSpacing: '0.25px',
    whiteSpace: 'pre-wrap',
    margin: 0,
  },
  hr: {
    borderColor: '#3f3f46',
    margin: '24px 0',
  },
  footer: {
    padding: '24px 0',
    textAlign: 'center' as const,
  },
  footerLabel: {
    fontSize: '12px',
    color: '#d4d4d8',
    marginBottom: '12px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  socialIcon: {
    opacity: 0.8,
  },
};

export default ContactConfirmation;
