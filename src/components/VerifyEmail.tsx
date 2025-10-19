import {
  Html,
  Tailwind,
  pixelBasedPreset,
  Head,
  Font,
  Container,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Button,
  Img,
  Link,
  Hr,
  Body,
} from '@react-email/components'

interface VerifyEmailProps {
  userName?: string
  verifyUrl?: string
}

export default function VerifyEmail({ userName, verifyUrl }: VerifyEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily='Roboto'
          fallbackFontFamily='Verdana'
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle='normal'
        />
      </Head>
      <Tailwind
        config={{
          presets: [pixelBasedPreset], // ensures pixel-based sizing for email clients
          theme: {
            extend: {
              colors: {
                brandBlue: '#5E72E4',
                brandPurple: '#825EE4',
                brandYellow: '#FFD42A',
              },
            },
          },
        }}
      >
        <Body>
          <Container className='font-sans p-8 rounded-md border border-black'>
            <Container className='max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
              <Section className='flex justify-center bg-brandBlue py-6'>
                <Row align='center'>
                  <Column width='42px'>
                    <Img
                      src='https://i.postimg.cc/KYLV5SHH/zellige-1.png'
                      alt='LangRhythms Logo'
                      width={42}
                      height={42}
                    />
                  </Column>
                  <Column width='8px' />
                  <Column width='auto'>
                    <Heading className='text-white text-2xl font-semibold m-0'>
                      <span className='text-white'>Lang</span>
                      <span className='text-brandYellow'>Rhythms</span>
                    </Heading>
                  </Column>
                </Row>
              </Section>

              {/* Body */}
              <Section className='flex font-thin p-4'>
                <Text className='text-base mb-2'>Hi {userName},</Text>
                <Text className='text-lg text-gray-600 leading-relaxed'>
                  Welcome to LangRhythms!
                  <br />
                  Please confirm your email address to activate your account.
                </Text>

                <Section className='text-center my-6'>
                  <Button
                    href={verifyUrl}
                    className='bg-brandBlue text-white font-bold py-3 px-8 rounded-lg shadow-lg'
                  >
                    Verify Email
                  </Button>
                </Section>

                <Text className='text-xs text-gray-500 text-center'>
                  If you didn’t sign up for a LangRhythms account, you can
                  safely ignore this email.
                </Text>

                <Text className='text-base mt-8 text-gray-600'>
                  Happy learning!
                  <br />
                  <strong className='text-gray-600 font-medium'>
                    The LangRhythms Team
                  </strong>
                </Text>
              </Section>

              <Hr className='border-gray-200' />

              <Section className='flex justify-center bg-gray-100 p-4 text-center'>
                <Text className='text-s text-gray-500'>
                  Need help? Contact our support team:
                </Text>
                <Text className='text-s text-gray-500'>
                  <Link
                    href='mailto:support@langrhythms.com'
                    className='text-purple-600 no-underline'
                  >
                    support@langrhythms.com
                  </Link>{' '}
                  | phone: (212) 123-456789
                </Text>

                <Section className='mt-4'>
                  <Container className='flex justify-center'>
                    <Row align='center'>
                      <Column width='auto'>
                        <Link href='#'>
                          <Img
                            src='https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png'
                            alt='Facebook'
                            width={20}
                            height={20}
                            className='mr-2'
                          />
                        </Link>
                      </Column>

                      <Column width='auto'>
                        <Link href='#'>
                          <Img
                            src='https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg'
                            alt='Twitter'
                            width={20}
                            height={20}
                            className='mr-2'
                          />
                        </Link>
                      </Column>

                      <Column width='auto'>
                        <Link href='#'>
                          <Img
                            src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
                            alt='Instagram'
                            width={20}
                            height={20}
                            className='mr-2'
                          />
                        </Link>
                      </Column>
                    </Row>
                  </Container>
                </Section>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
