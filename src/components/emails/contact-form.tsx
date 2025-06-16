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
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>📨 New contact form message from {name}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Heading style={styles.title}>Contact Message</Heading>
            <Text style={styles.subtitle}>Apex Foundry Contact Form</Text>
          </Section>

          <Section style={styles.section}>
            <LabelValue
              label='Name'
              value={name}
            />
            <LabelValue
              label='Email'
              value={email}
              isLink
            />
            <LabelValue
              label='Subject'
              value={subject}
            />

            <Hr style={styles.hr} />

            <Text style={styles.subtitle}>Message</Text>
            <div style={styles.messageBox}>
              <Text style={styles.message}>{message}</Text>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const LabelValue = ({
  label,
  value,
  isLink = false,
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) => (
  <Text style={styles.label}>
    {label.toUpperCase()}
    <br />
    <span style={isLink ? styles.link : styles.value}>
      {isLink ? <a href={`mailto:${value}`}>{value}</a> : value}
    </span>
  </Text>
);

const styles = {
  body: {
    backgroundColor: '#0a0a0a',
    padding: '40px 0',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif',
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
  header: {
    padding: '24px 0 0', 
    textAlign: 'left' as const,
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#f43f1b',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  section: {
    padding: '0',
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
    fontWeight: 'normal' as const,
    color: '#e4e4e7',
  },
  link: {
    fontSize: '15px',
    color: '#60a5fa',
    textDecoration: 'underline',
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
};

export default ContactFormEmail;
