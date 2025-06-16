import { Html, Body, Container, Text, Heading } from '@react-email/components';

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({ name, email, message }: Props) {
  return (
    <Html>
      <Body style={{ backgroundColor: '#f3f3f3', padding: '20px' }}>
        <Container style={{ backgroundColor: '#fff', padding: '20px' }}>
          <Heading>New Contact Message</Heading>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong>
            <br />
            {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
