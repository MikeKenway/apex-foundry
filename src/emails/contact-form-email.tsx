import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]'>
            <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
              New Contact Form Submission
            </Heading>
            <Section className='mt-[32px]'>
              <Text className='text-black text-[14px] leading-[24px]'>
                <strong>Name:</strong> {name}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <strong>Email:</strong> {email}
              </Text>
              <Text className='text-black text-[14px] leading-[24px]'>
                <strong>Message:</strong>
              </Text>
              <Text className='text-black text-[14px] leading-[24px] whitespace-pre-wrap'>
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
