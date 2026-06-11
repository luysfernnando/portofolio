"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { Container, Section } from '../../styles/components';
import { useLanguage } from '../../context/LanguageContext';

const EduLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const EduLeft = styled.div``;

const EduTitle = styled(motion.h2)`
  font-family: 'Newsreader', Georgia, serif;
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  font-weight: 650;
  line-height: 1.0;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0;

  @media (max-width: 860px) {
    text-align: center;
  }
`;

const EduTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const EduRow = styled.div`
  display: grid;
  grid-template-columns: 11rem 1fr;
  gap: 1rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
`;

const EduLabel = styled.span`
  font-family: 'JetBrains Mono', 'Cascadia Code', monospace;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 0.1rem;
`;

const EduValue = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.58, ease: 'easeOut' as const } },
};

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Section id="educacao" aria-labelledby="educacao-title">
      <Container>
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <EduLayout>
            <EduLeft>
              <EduTitle id="educacao-title">{t('education.title')}</EduTitle>
            </EduLeft>

            <EduTable>
              <EduRow>
                <EduLabel>{t('education.type')}</EduLabel>
                <EduValue>{t('education.degree')}</EduValue>
              </EduRow>
              <EduRow>
                <EduLabel>{t('education.institution_label')}</EduLabel>
                <EduValue>{t('education.institution')}</EduValue>
              </EduRow>
              <EduRow>
                <EduLabel>{t('education.period_label')}</EduLabel>
                <EduValue>{t('education.period')}</EduValue>
              </EduRow>
            </EduTable>
          </EduLayout>
        </motion.div>
      </Container>
    </Section>
  );
};
